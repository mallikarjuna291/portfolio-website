import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [isCompiling, setIsCompiling] = useState(true)
  const [codeLines, setCodeLines] = useState([])
  
  const titles = [
    "Software Engineer",
    "Full Stack Developer", 
    "React Specialist",
    "AWS Solutions Architect"
  ]

  const codeAnimation = [
    "const lanka = new SoftwareEngineer({",
    "  name: 'Lanka Mallikarjuna',",
    "  company: 'Syscloud Technologies',",
    "  experience: '3+ years',",
    "  skills: ['React', 'Node.js', 'AWS', 'PostgreSQL'],",
    "  achievements: {",
    "    onboardingImprovement: '60%',",
    "    buildTimeReduction: '58%',",
    "    deliveryRate: '95%',",
    "    codeReduction: '40%'",
    "  }",
    "});",
    "",
    "// Compiling portfolio...",
    "// ✓ All tests passed",
    "// ✓ Performance optimized", 
    "// ✓ Ready for deployment!"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  useEffect(() => {
    let lineIndex = 0
    const timer = setInterval(() => {
      if (lineIndex < codeAnimation.length) {
        setCodeLines(prev => [...prev, codeAnimation[lineIndex]])
        lineIndex++
      } else {
        setIsCompiling(false)
        clearInterval(timer)
      }
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Code Animation Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 bg-gray-900 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm max-w-md shadow-2xl border border-gray-700">
          {codeLines.map((line, index) => (
            <div 
              key={index} 
              className={`transition-all duration-300 ${
                line && line.startsWith('//') ? 'text-green-400' : 'text-gray-300'
              } ${line && line.includes('✓') ? 'text-green-400' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {line}
            </div>
          ))}
          {isCompiling && (
            <div className="flex items-center gap-2 mt-2 text-yellow-400">
              <div className="animate-spin w-3 h-3 border border-yellow-400 border-t-transparent rounded-full"></div>
              <span>Compiling...</span>
            </div>
          )}
        </div>
      </div>

      <div className="container-max relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* IDE-style Header */}
            <div className="inline-block bg-gray-900 text-green-400 px-6 py-2 rounded-lg font-mono text-sm mb-8 shadow-lg border border-gray-700">
              <span className="text-blue-400">$</span> whoami
              <div className="text-gray-300 mt-1">Loading Lanka Mallikarjuna...</div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white mb-4">
                Software Engineer
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Lanka Mallikarjuna
              </span>
            </h1>

            {/* Dynamic Role */}
            <div className="mb-8 h-12 flex items-center justify-center">
              <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700">
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {titles[currentTitle]}
                  </span>
                  <span className="animate-pulse ml-2">|</span>
                </span>
              </div>
            </div>

            {/* Company Badge */}
            <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-700 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 dark:text-blue-300 font-medium">
                Currently @ Syscloud Technologies
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Building resilient solutions with <strong>React</strong>, <strong>Node.js</strong>, and <strong>AWS</strong>. 
              Passionate about performance optimization and creating scalable applications that make a real impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/projects" 
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>🚀</span>
                <span>Explore My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <a 
                href="/MallikarjunaCV.pdf" 
                download="MallikarjunaCV.pdf"
                className="group inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Real-time Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Onboarding Boost</div>
                <div className="text-xs text-gray-500 mt-1">Partner Portal Impact</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">58%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Build Time Cut</div>
                <div className="text-xs text-gray-500 mt-1">Webpack → Vite Migration</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Delivery Rate</div>
                <div className="text-xs text-gray-500 mt-1">15+ Projects On-time</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Code Reduction</div>
                <div className="text-xs text-gray-500 mt-1">UI Framework Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Terminal Hint */}
      <div className="fixed bottom-6 left-6 bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm shadow-xl border border-gray-700 opacity-75 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">$</span>
          <span>Press Ctrl+` for terminal</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero