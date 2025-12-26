import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './DebuggerPanel.css';

interface DebugResult {
    type: 'error' | 'warning' | 'suggestion' | 'success'
    message: string
    line?: number
}

interface DebuggerPanelProps {
    results: DebugResult[]
    isAnalyzing: boolean
}

export default function DebuggerPanel({ results, isAnalyzing }: DebuggerPanelProps) {
    const getIcon = (type: DebugResult['type']) => {
        switch (type) {
            case 'error':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 4V8M8 11V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                )
            case 'warning':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2L14 13H2L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M8 6V9M8 11V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                )
            case 'success':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )
            case 'suggestion':
                return (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                )
        }
    }

    return (
        <div className="debugger-panel">
            <div className="panel-header">
                <div className="panel-title">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2L3 14M13 2L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    AI Analysis Report
                </div>
                <div className="panel-info">
                    {results.length > 0 && `${results.length} ${results.length === 1 ? 'finding' : 'findings'}`}
                </div>
            </div>

            <div className="panel-content">
                {isAnalyzing ? (
                    <div className="analysis-loading">
                        <div className="loading-spinner"></div>
                        <p>Scanning code architecture...</p>
                    </div>
                ) : results.length === 0 ? (
                    <div className="empty-state">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                            <path d="M24 14V24L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
                        </svg>
                        <p>Enter code and click "Analyze" to generate report</p>
                    </div>
                ) : (
                    <div className="results-list">
                        {results.map((result, index) => (
                            <div key={index} className={`result-item ${result.type}`}>
                                <div className="result-header">
                                    <div className="result-icon">{getIcon(result.type)}</div>
                                    <span className="result-label">{result.type.toUpperCase()}</span>
                                </div>
                                <div className="result-content">
                                    <div className="result-message">
                                        <ReactMarkdown
                                            components={{
                                                code({ node, inline, className, children, ...props }: any) {
                                                    const match = /language-(\w+)/.exec(className || '');
                                                    return !inline && match ? (
                                                        <SyntaxHighlighter
                                                            style={atomDark}
                                                            language={match[1]}
                                                            PreTag="div"
                                                            className="syntax-wrapper"
                                                            {...props}
                                                        >
                                                            {String(children).replace(/\n$/, '')}
                                                        </SyntaxHighlighter>
                                                    ) : (
                                                        <code className={className} {...props}>
                                                            {children}
                                                        </code>
                                                    );
                                                }
                                            }}
                                        >
                                            {result.message}
                                        </ReactMarkdown>
                                    </div>
                                    {result.line && <div className="result-line">Impacted: Line {result.line}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}