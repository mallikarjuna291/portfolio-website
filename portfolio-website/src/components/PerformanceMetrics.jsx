import { useState, useEffect } from 'react'

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    fps: 60,
    requests: 0,
    uptime: 0,
    buildTime: 0,
    hotReloads: 0,
    optimization: 0
  })

  const [isLive, setIsLive] = useState(true)
  const [buildOptimizing, setBuildOptimizing] = useState(false)

  useEffect(() => {
    // Simulate real-time metrics
    const interval = setInterval(() => {
      if (isLive) {
        setMetrics(prev => ({
          loadTime: Math.random() * 0.5 + 1.2, // 1.2-1.7s
          memoryUsage: Math.random() * 10 + 45, // 45-55MB
          bundleSize: 234 + Math.random() * 10, // 234-244KB
          fps: 58 + Math.random() * 4, // 58-62 FPS
          requests: prev.requests + Math.floor(Math.random() * 3),
          uptime: prev.uptime + 1,
          buildTime: 150 + Math.random() * 50, // Webpack baseline
          hotReloads: prev.hotReloads + (Math.random() > 0.7 ? 1 : 0),
          optimization: Math.min(100, prev.optimization + Math.random() * 2)
        }))
      }
    }, 1000)

    // Simulate periodic build optimization (Lanka's Vite migration impact)
    const optimizationInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setBuildOptimizing(true)
        setTimeout(() => {
          setMetrics(prev => ({
            ...prev,
            buildTime: prev.buildTime * 0.42, // 58% reduction (Lanka's actual achievement)
            bundleSize: prev.bundleSize * 0.92 // Slight optimization
          }))
          setBuildOptimizing(false)
        }, 2000)
      }
    }, 10000)

    return () => {
      clearInterval(interval)
      clearInterval(optimizationInterval)
    }
  }, [isLive])

  const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}h ${minutes}m ${secs}s`
  }

  const getPerformanceColor = (value, thresholds) => {
    if (value <= thresholds.excellent) return 'text-green-400'
    if (value <= thresholds.good) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-4">
      {/* Creative Contact Section */}
      <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 p-4 rounded-lg border border-green-500/30">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-green-400">📱</span>
          <h3 className="text-green-400 font-bold text-sm">CONNECT WITH LANKA</h3>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto"></div>
        </div>
        
        <div className="space-y-3 text-xs">
          <div className="bg-gray-800/50 p-3 rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">STATUS</span>
              <span className="text-green-400">🟢 Available for Opportunities</span>
            </div>
            <div className="text-green-300">Open to full-time roles & collaborations</div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <a 
              href="mailto:lankamallikarjuna108@gmail.com"
              className="bg-red-800/30 hover:bg-red-800/50 p-2 rounded text-center transition-colors border border-red-600/30"
            >
              <div className="text-red-400">📧</div>
              <div className="text-red-300 text-xs">Email</div>
            </a>
            <a 
              href="https://linkedin.com/in/lankamallikarjuna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800/30 hover:bg-blue-800/50 p-2 rounded text-center transition-colors border border-blue-600/30"
            >
              <div className="text-blue-400">💼</div>
              <div className="text-blue-300 text-xs">LinkedIn</div>
            </a>
            <a 
              href="https://github.com/mallikarjuna291"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-800/30 hover:bg-purple-800/50 p-2 rounded text-center transition-colors border border-purple-600/30"
            >
              <div className="text-purple-400">💻</div>
              <div className="text-purple-300 text-xs">GitHub</div>
            </a>
            <a 
              href="/MallikarjunaCV.pdf"
              download="MallikarjunaCV.pdf"
              className="bg-yellow-800/30 hover:bg-yellow-800/50 p-2 rounded text-center transition-colors border border-yellow-600/30"
            >
              <div className="text-yellow-400">📄</div>
              <div className="text-yellow-300 text-xs">Resume</div>
            </a>
          </div>
          
        </div>
      </div>

      {/* Lanka's Impact Metrics */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 rounded-lg border border-blue-500/30">
        <div className="text-blue-300 text-xs mb-3 flex items-center gap-2">
          <span>🏆</span>
          <span className="font-semibold">LANKA'S PRODUCTION IMPACT</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-green-400">60%</div>
            <div className="text-xs text-gray-300">Onboarding Boost</div>
            <div className="text-xs text-gray-500">Partner Portal</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-blue-400">58%</div>
            <div className="text-xs text-gray-300">Build Time Cut</div>
            <div className="text-xs text-gray-500">Webpack→Vite</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-purple-400">95%</div>
            <div className="text-xs text-gray-300">Delivery Rate</div>
            <div className="text-xs text-gray-500">15+ Projects</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded text-center">
            <div className="text-2xl font-bold text-orange-400">40%</div>
            <div className="text-xs text-gray-300">Code Reduction</div>
            <div className="text-xs text-gray-500">UI Framework</div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-gray-800 p-3 rounded-lg border border-gray-600 text-xs font-mono">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400">SYSTEM STATUS</span>
          <span className="text-green-400">ALL SYSTEMS OPERATIONAL</span>
        </div>
        <div className="space-y-1 text-gray-500">
          <div className="flex justify-between">
            <span>Uptime</span>
            <span className="text-green-400">{formatUptime(metrics.uptime)}</span>
          </div>
          <div className="flex justify-between">
            <span>Requests Served</span>
            <span className="text-cyan-400">{metrics.requests}</span>
          </div>
          <div className="flex justify-between">
            <span>Performance Score</span>
            <span className="text-yellow-400">98/100</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceMetrics