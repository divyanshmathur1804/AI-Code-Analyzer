import { useState } from 'react'
import Header from './components/Header'
import CodeEditor from './components/CodeEditor'
import DebuggerPanel from './components/DebuggerPanel'
import './App.css'

function App() {
  const [code, setCode] = useState('')

  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [debugResults, setDebugResults] = useState<Array<{
    type: 'error' | 'warning' | 'suggestion' | 'success'
    message: string
    line?: number
  }>>([])

  const handleAnalyze = async () => {
    if (!code.trim()) return; // Don't analyze if the editor is empty

    setIsAnalyzing(true);
    setDebugResults([]); // Clear previous results to show the loading state clearly

    try {
      const response = await fetch('http://localhost:8080/api/debugger/fix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
          error: "User-initiated manual analysis"
        }),
      });

      if (!response.ok) throw new Error('Backend failed to respond');

      const aiFixText = await response.text();

      // We add the AI response as a 'suggestion' type to your results array
      setDebugResults([{
        type: 'suggestion',
        message: aiFixText
      }]);

    } catch (error) {
      setDebugResults([{
        type: 'error',
        message: 'Connection Error: Please ensure your Spring Boot backend is running on port 8080.'
      }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleClear = () => {
    setDebugResults([])
  }

  return (
    <div className="app">
      <Header onAnalyze={handleAnalyze} onClear={handleClear} isAnalyzing={isAnalyzing} />
      <div className="main-content">
        <CodeEditor code={code} onChange={setCode} />
        <DebuggerPanel results={debugResults} isAnalyzing={isAnalyzing} />
      </div>
    </div>
  )
}

export default App
