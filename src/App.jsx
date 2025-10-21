import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import IDEHeader from './components/IDEHeader'
import CodeEditor from './components/CodeEditor'
import Terminal from './components/Terminal'
import FileExplorer from './components/FileExplorer'
import PerformanceMetrics from './components/PerformanceMetrics'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(false)
  const [showMetrics, setShowMetrics] = useState(true)
  const [bootComplete, setBootComplete] = useState(false)

  // Quick boot sequence
  useEffect(() => {
    const bootTimer = setTimeout(() => setBootComplete(true), 1000)
    return () => clearTimeout(bootTimer)
  }, [])

  const handleKeyboard = (e) => {
    // Keyboard shortcuts for IDE experience
    if (e.ctrlKey || e.metaKey) {
      switch(e.key) {
        case '`':
          e.preventDefault()
          setIsTerminalOpen(true)
          break
        case 'b':
          e.preventDefault()
          setIsFileExplorerOpen(true)
          break
        case 'j':
          e.preventDefault()
          setShowMetrics(!showMetrics)
          break
        default:
          break
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)
    return () => document.removeEventListener('keydown', handleKeyboard)
  }, [showMetrics])

  if (!bootComplete) {
    return (
      <div className="min-h-screen bg-gray-900 text-green-400 font-mono flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-2xl mb-8">🚀 Lanka's Development Environment</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3 justify-center">
              <div className="animate-spin w-4 h-4 border border-green-400 border-t-transparent rounded-full"></div>
              <span>Loading portfolio modules...</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="animate-pulse w-4 h-4 bg-green-400 rounded-full"></div>
              <span>Initializing React environment...</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="animate-bounce w-4 h-4 bg-blue-400 rounded-full"></div>
              <span>Connecting to Syscloud systems...</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <span>Ready! Starting portfolio...</span>
            </div>
          </div>
          <div className="mt-8 text-xs text-gray-500">
            Press Ctrl+` for terminal, Ctrl+B for file explorer, Ctrl+J for metrics
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans">
      {/* IDE Header */}
      <IDEHeader 
        onTerminalOpen={() => setIsTerminalOpen(true)}
        onFileExplorerOpen={() => setIsFileExplorerOpen(true)}
        onMetricsToggle={() => setShowMetrics(!showMetrics)}
      />

      {/* Main IDE Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Performance Metrics Sidebar */}
        {showMetrics && (
          <div className="w-80 border-r border-gray-700 p-4 overflow-y-auto">
            <PerformanceMetrics />
            
            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <div className="text-xs text-gray-400 font-mono mb-3">QUICK ACTIONS</div>
              <button 
                onClick={() => setIsTerminalOpen(true)}
                className="w-full text-left px-3 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
              >
                <span className="text-green-400">$</span> Open Terminal
              </button>
              <button 
                onClick={() => setIsFileExplorerOpen(true)}
                className="w-full text-left px-3 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
              >
                <span className="text-blue-400">📁</span> Browse Files
              </button>
              <a 
                href="/MallikarjunaCV.pdf" 
                download="MallikarjunaCV.pdf"
                className="w-full text-left px-3 py-2 text-sm bg-gradient-to-r from-purple-800 to-blue-800 hover:from-purple-700 hover:to-blue-700 rounded border border-purple-600 transition-colors block"
              >
                <span className="text-yellow-400">📄</span> Download Resume
              </a>
            </div>

            {/* AI Assistant Panel */}
            <div className="mt-6 bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-purple-400">🤖</span>
                <span className="text-sm font-semibold">AI Assistant</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto"></div>
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <div>💡 "Lanka excels at performance optimization"</div>
                <div>🚀 "58% build time improvement with Vite migration"</div>
                <div>⚡ "95% on-time delivery rate"</div>
              </div>
              <button 
                onClick={() => setIsTerminalOpen(true)}
                className="w-full mt-3 px-2 py-1 text-xs bg-purple-700 hover:bg-purple-600 rounded transition-colors"
              >
                Ask AI about Lanka
              </button>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <CodeEditor>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CodeEditor>
        </div>
      </div>

      {/* Interactive Overlays */}
      <Terminal 
        isVisible={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
      
      <FileExplorer 
        isVisible={isFileExplorerOpen} 
        onClose={() => setIsFileExplorerOpen(false)} 
      />

      {/* Hidden shortcuts hint */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 font-mono bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 opacity-50 hover:opacity-100 transition-opacity">
        Ctrl+` Terminal • Ctrl+B Files • Ctrl+J Metrics
      </div>
    </div>
  )
}

export default App