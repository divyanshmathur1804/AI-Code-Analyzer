import { type ChangeEvent } from 'react'
import './CodeEditor.css'

interface CodeEditorProps {
  code: string
  onChange: (code: string) => void
}

export default function CodeEditor({ code, onChange }: CodeEditorProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  const lineNumbers = code.split('\n').map((_, i) => i + 1).join('\n')

  return (
    <div className="code-editor-container">
      <div className="editor-header">
        <div className="editor-title">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 4L2 8L5 12M11 4L14 8L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Code Editor
        </div>
        <div className="editor-info">
          <span>{code.split('\n').length} lines</span>
        </div>
      </div>

      <div className="editor-content">
        <div className="line-numbers">
          <pre>{lineNumbers}</pre>
        </div>
        <textarea
          className="code-input"
          value={code}
          onChange={handleChange}
          spellCheck={false}
          placeholder="Write your code here..."
        />
      </div>
    </div>
  )
}
