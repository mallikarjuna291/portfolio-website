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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  // Auto-hide metrics on mobile, but keep sidebar functionality
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMetrics(true) // Keep metrics enabled for mobile drawer
        setIsMobileMenuOpen(false) // Close mobile menu on resize
      } else {
        setShowMetrics(true) // Show on desktop
        setIsMobileMenuOpen(false) // Reset mobile menu state
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!bootComplete) {
    return (
      <div className="min-h-screen bg-gray-900 text-green-400 font-mono flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-md">
          <div className="text-xl md:text-2xl mb-8">🚀 Lanka's Development Environment</div>
          <div className="space-y-2 text-xs md:text-sm">
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
          <div className="mt-8 text-xs text-gray-500 hidden md:block">
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

      {/* Mobile Menu Toggle Button - Always visible on mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed bottom-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white p-4 rounded-full shadow-lg transition-all"
        aria-label="Toggle mobile menu"
        style={{ touchAction: 'manipulation' }}
      >
        {isMobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        )}
      </button>

      {/* Main IDE Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Performance Metrics Sidebar - Desktop & Mobile Drawer */}
        <div
          className={`
            fixed md:relative inset-y-0 left-0 z-40
            w-80 md:w-80
            border-r border-gray-700 bg-gray-900
            p-4 overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            ${showMetrics ? 'md:translate-x-0' : 'md:hidden'}
            top-14 md:top-auto
          `}
        >
          <PerformanceMetrics />

          {/* Quick Actions */}
          <div className="mt-6 space-y-2">
            <div className="text-xs text-gray-400 font-mono mb-3">QUICK ACTIONS</div>
            <button
              onClick={() => {
                setIsTerminalOpen(true)
                setIsMobileMenuOpen(false)
              }}
              className="w-full text-left px-3 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
            >
              <span className="text-green-400">$</span> Open Terminal
            </button>
            <button
              onClick={() => {
                setIsFileExplorerOpen(true)
                setIsMobileMenuOpen(false)
              }}
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
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-14"
            onClick={() => setIsMobileMenuOpen(false)}
            onTouchEnd={() => setIsMobileMenuOpen(false)}
            style={{ touchAction: 'manipulation' }}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-auto">
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

      {/* Hidden shortcuts hint - Desktop only */}
      <div className="hidden md:block fixed bottom-4 right-4 text-xs text-gray-500 font-mono bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 opacity-50 hover:opacity-100 transition-opacity">
        Ctrl+` Terminal • Ctrl+B Files • Ctrl+J Metrics
      </div>
    </div>
  )
}

export default App