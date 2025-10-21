import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const IDEHeader = ({ onTerminalOpen, onFileExplorerOpen, onMetricsToggle }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [cpuUsage, setCpuUsage] = useState(0)
  const [buildStatus, setBuildStatus] = useState('ready')
  const location = useLocation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setCpuUsage(Math.random() * 30 + 20) // 20-50% CPU usage
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getFileName = (path) => {
    switch(path) {
      case '/': return 'Home.jsx'
      case '/about': return 'About.jsx'
      case '/projects': return 'Projects.jsx'
      case '/resume': return 'Resume.jsx'
      case '/contact': return 'Contact.jsx'
      default: return 'NotFound.jsx'
    }
  }

  const tabs = [
    { path: '/', name: 'Home.jsx', icon: '🏠' },
    { path: '/about', name: 'About.jsx', icon: '👨‍💻' },
    { path: '/projects', name: 'Projects.jsx', icon: '🚀' },
    { path: '/resume', name: 'Resume.jsx', icon: '📄' },
    { path: '/contact', name: 'Contact.jsx', icon: '📧' }
  ]

  return (
    <div className="bg-gray-800 border-b border-gray-700">
      {/* Menu Bar */}
      <div className="bg-gray-900 px-4 py-1 border-b border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span 
                className="hover:text-white cursor-pointer" 
                onClick={onFileExplorerOpen}
                title="Open File Explorer"
              >
                File
              </span>
              <span className="hover:text-white cursor-pointer opacity-50" title="Coming Soon">Edit</span>
              <span 
                className="hover:text-white cursor-pointer" 
                onClick={onMetricsToggle}
                title="Toggle Sidebar View"
              >
                View
              </span>
              <span 
                className="hover:text-white cursor-pointer" 
                onClick={onTerminalOpen}
                title="Open Terminal"
              >
                Terminal
              </span>
              <span 
                className="hover:text-white cursor-pointer" 
                onClick={() => {
                  alert('🚀 Lanka\'s Portfolio IDE\n\nKeyboard Shortcuts:\n• Ctrl+` - Open Terminal\n• Ctrl+B - File Explorer\n• Ctrl+J - Toggle Metrics\n\nTerminal Commands:\n• help - Show all commands\n• email - Contact Lanka\n• linkedin - View profile\n• download resume - Get PDF')
                }}
                title="Show Help"
              >
                Help
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Lanka's Portfolio IDE</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={onFileExplorerOpen}
              className="p-2 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
              title="File Explorer (Ctrl+B)"
            >
              📁
            </button>
            <button 
              onClick={onTerminalOpen}
              className="p-2 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
              title="Terminal (Ctrl+`)"
            >
              💻
            </button>
            <button 
              onClick={onMetricsToggle}
              className="p-2 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
              title="Performance (Ctrl+J)"
            >
              📊
            </button>
            <div className="h-6 w-px bg-gray-600 mx-2"></div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>CPU: {cpuUsage.toFixed(1)}%</span>
            <span>Build: {buildStatus}</span>
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 px-4">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map(tab => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors ${
                location.pathname === tab.path
                  ? 'border-blue-500 text-blue-400 bg-gray-700'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
              {location.pathname === tab.path && (
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-900 px-4 py-1 border-b border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>📂 /portfolio/{getFileName(location.pathname)}</span>
            <span>🔧 Ready</span>
          </div>
          <div className="flex items-center gap-4">
            <span>React 18.2.0</span>
            <span>Vite 4.4.0</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IDEHeader