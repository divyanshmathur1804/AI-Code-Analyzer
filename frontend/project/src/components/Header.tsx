import './Header.css'

interface HeaderProps {
  onAnalyze: () => void
  onClear: () => void
  isAnalyzing: boolean
}

export default function Header({ onAnalyze, onClear, isAnalyzing }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="24" height="24" rx="4" stroke="#715A5A" strokeWidth="2"/>
            <path d="M12 16L15 19L20 13" stroke="#715A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="title">AI Code Debugger</h1>
      </div>

      <div className="header-actions">
        <button onClick={onClear} className="btn-secondary" disabled={isAnalyzing}>
          Clear Results
        </button>
        <button onClick={onAnalyze} className="btn-primary" disabled={isAnalyzing}>
          {isAnalyzing ? (
            <>
              <span className="spinner"></span>
              Analyzing...
            </>
          ) : (
            'Analyze Code'
          )}
        </button>
      </div>
    </header>
  )
}
