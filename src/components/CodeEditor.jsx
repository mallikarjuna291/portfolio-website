import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const CodeEditor = ({ children }) => {
  const [terminalLines, setTerminalLines] = useState([])
  const [showCursor, setShowCursor] = useState(true)
  const location = useLocation()

  const getTerminalData = (path) => {
    const fileName = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)
    
    switch(path) {
      case '/':
        return {
          command: `cat ~/portfolio/${fileName}.md`,
          output: [
            '# Lanka Mallikarjuna - Software Engineer',
            '',
            'Company: Syscloud Technologies',
            'Experience: 3+ years',
            'Remote: Available Worldwide',
            '',
            '## Core Technologies',
            '- Frontend: React, TypeScript, Material UI',
            '- Backend: Node.js, PostgreSQL, AWS Lambda',
            '- Tools: Git, Docker, CI/CD, Vite',
            '- AI: ChatGPT, Claude MCP',
            '',
            '## Performance Metrics',
            'Onboarding Improvement: 60%',
            'Build Time Reduction: 58%',
            'Delivery Rate: 95%',
            'Code Reduction: 40%',
            '',
            '## Contact',
            'Email: lankamallikarjuna108@gmail.com',
            'LinkedIn: linkedin.com/in/lankamallikarjuna',
            'GitHub: github.com/mallikarjuna291'
          ]
        }
      
      case '/about':
        return {
          command: `cat ~/portfolio/About.md`,
          output: [
            '# Professional Profile',
            '',
            'Name: Lanka Mallikarjuna',
            'Role: Software Engineer',
            'Company: Syscloud Technologies',
            'Duration: 2021 - Present',
            'Remote: Available Worldwide',
            'Education: B.Tech CSE - 8.0 CGPA',
            '',
            '## Expertise Areas',
            '✓ React Application Development',
            '✓ Performance Optimization',
            '✓ Build Tool Migration (Webpack → Vite)',
            '✓ UI Framework Development',
            '✓ AWS Cloud Solutions',
            '✓ PostgreSQL Database Design',
            '',
            '## Current Focus',
            '- Partner Portal Development',
            '- MSP Renewal System',
            '- React UI Framework',
            '- DevOps Portal Integration'
          ]
        }

      case '/projects':
        return {
          command: `ls -la ~/projects/syscloud/`,
          output: [
            'total 8',
            'drwxr-xr-x  5 lanka  staff   160 Oct 20 2023 .',
            'drwxr-xr-x  3 lanka  staff    96 Oct 20 2023 ..',
            '',
            '## Active Projects',
            '',
            'Partner Portal/',
            '  Impact: 60% onboarding time reduction',
            '  Tech: React, AWS Lambda, PostgreSQL',
            '  Status: Production',
            '  Users: 200+ partners',
            '',
            'MSP Renewal Portal/',
            '  Impact: 35% manual work reduction',
            '  Tech: React, TypeScript, Node.js',
            '  Status: Production',
            '  Automation: 95%',
            '',
            'React UI Framework/',
            '  Impact: 40% code duplication reduction',
            '  Tech: React, JSON Schema, Webpack→Vite',
            '  Status: Production',
            '  Build Time: 58% faster',
            '',
            'DevOps Portal/',
            '  Impact: Streamlined deployment process',
            '  Tech: React, Docker, CI/CD',
            '  Status: Development'
          ]
        }

      case '/resume':
        return {
          command: `cat ~/resume/experience.txt`,
          output: [
            '# Work Experience',
            '',
            '## Syscloud Technologies (2021 - Present)',
            'Position: Software Engineer',
            '',
            '### Key Achievements:',
            '',
            '• Led Partner Portal development',
            '  - 60% reduction in onboarding time',
            '  - Serving 200+ partners globally',
            '',
            '• Migrated build system from Webpack to Vite',
            '  - 58% faster build times',
            '  - Improved developer experience',
            '',
            '• Delivered 15+ projects with 95% on-time rate',
            '  - Consistent delivery excellence',
            '  - Strong project management skills',
            '',
            '• Created React UI Framework',
            '  - 40% reduction in code duplication',
            '  - Standardized component library',
            '',
            '## Education',
            'B.Tech Computer Science Engineering',
            'CGPA: 8.0/10',
            '',
            '## Skills',
            'Languages: JavaScript, TypeScript, Python',
            'Frontend: React, HTML5, CSS3, Material UI',
            'Backend: Node.js, Express, PostgreSQL',
            'Cloud: AWS Lambda, S3, EC2',
            'Tools: Git, Docker, CI/CD, Vite',
            '',
            '📄 DOWNLOAD RESUME:',
            '┌─────────────────────────────────────────────┐',
            '│  💾 Download Full Resume (PDF)             │',
            '│  File: MallikarjunaCV.pdf                  │',
            '│  Size: Professional Format                 │',
            '│  URL: /MallikarjunaCV.pdf                  │',
            '└─────────────────────────────────────────────┘',
            '',
            'Type "download resume" to get the PDF file'
          ]
        }

      case '/contact':
        return {
          command: `cat ~/contact/info.txt`,
          output: [
            '# Contact Information',
            '',
            '┌─────────────────────────────────────────────┐',
            '│  🚀 Lanka Mallikarjuna - Ready to Connect  │',
            '│  Software Engineer @ Syscloud Technologies │',
            '└─────────────────────────────────────────────┘',
            '',
            '📧 DIRECT CONTACT:',
            '   📨 Email: lankamallikarjuna108@gmail.com',
            '   ⏰ Response time: < 24 hours',
            '   🔗 Click: mailto:lankamallikarjuna108@gmail.com',
            '',
            '🌐 PROFESSIONAL NETWORKS:',
            '   💼 LinkedIn: linkedin.com/in/lankamallikarjuna',
            '   🔗 Message: https://linkedin.com/in/lankamallikarjuna',
            '   💻 GitHub: github.com/mallikarjuna291',
            '   🔗 View: https://github.com/mallikarjuna291',
            '   📄 Resume: Available for download',
            '',
            '📍 AVAILABILITY:',
            '   🌍 Remote: Available worldwide',
            '   ✈️  Relocation: Open to opportunities',
            '   📅 Status: Actively seeking new challenges',
            '   ⏰ Response: Within 24 hours',
            '',
            '🎯 WHAT I\'M LOOKING FOR:',
            '   • Full-stack development roles',
            '   • Performance optimization projects',
            '   • React/Node.js focused positions',
            '   • Tech leadership opportunities',
            '   • Innovative startup environments',
            '',
            '💡 EXPERTISE AREAS:',
            '   🔧 React ecosystem & modern frameworks',
            '   ⚡ Build optimization (Webpack → Vite)',
            '   ☁️  AWS cloud architecture',
            '   🤖 AI-assisted development workflows',
            '   📊 Performance monitoring & analytics',
            '',
            '🤝 LET\'S COLLABORATE:',
            '   Ready to discuss how I can contribute to',
            '   your team\'s success and drive technical',
            '   excellence in your next project!',
            '',
            '📞 Schedule a call or send me a message - ',
            '    I\'d love to hear from you!'
          ]
        }

      default:
        return {
          command: `cat ~/portfolio/${fileName}.md`,
          output: [
            `# ${fileName} Page`,
            '',
            'Content loading...',
            '',
            'This section is under development.',
            'Please check back soon!'
          ]
        }
    }
  }

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Terminal typing effect
  useEffect(() => {
    const terminalData = getTerminalData(location.pathname)
    setTerminalLines([])
    
    let i = 0
    const timer = setInterval(() => {
      if (i === 0) {
        setTerminalLines([terminalData.command])
      } else if (i <= terminalData.output.length) {
        setTerminalLines([
          terminalData.command,
          '',
          ...terminalData.output.slice(0, i)
        ])
      }
      
      if (i > terminalData.output.length) {
        clearInterval(timer)
      }
      i++
    }, 50)
    
    return () => clearInterval(timer)
  }, [location.pathname])

  return (
    <div className="h-full bg-white dark:bg-black text-gray-800 dark:text-green-400 font-mono overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-700 dark:text-gray-300 text-sm ml-3">Terminal - Lanka's Portfolio</span>
      </div>

      {/* Terminal Content */}
      <div className="p-6 h-full overflow-auto">
        {/* System Info Header */}
        <div className="mb-4 text-gray-600 dark:text-gray-500">
          <div>Lanka's Portfolio System v1.0</div>
          <div>Copyright (c) 2023 Lanka Mallikarjuna. All rights reserved.</div>
          <div className="mt-2">───────────────────────────────────────────────────────</div>
        </div>

        {/* Terminal Output */}
        <div className="space-y-1 text-sm">
          {terminalLines.map((line, index) => (
            <div key={index} className={`${
              line && line.startsWith('lanka@portfolio:~$') ? 'text-blue-600 dark:text-blue-400' :
              line && line.startsWith('cat ') ? 'text-blue-600 dark:text-blue-400' :
              line && line.startsWith('ls ') ? 'text-blue-600 dark:text-blue-400' :
              line && line.startsWith('#') ? 'text-orange-600 dark:text-yellow-400 font-bold' :
              line && line.startsWith('##') ? 'text-cyan-600 dark:text-cyan-400 font-semibold' :
              line && line.startsWith('###') ? 'text-green-600 dark:text-green-400' :
              line && line.startsWith('•') ? 'text-green-600 dark:text-green-400' :
              line && line.startsWith('✓') ? 'text-green-600 dark:text-green-400' :
              line && line.startsWith('┌') ? 'text-purple-600 dark:text-purple-400' :
              line && line.startsWith('│') ? 'text-purple-600 dark:text-purple-400' :
              line && line.startsWith('└') ? 'text-purple-600 dark:text-purple-400' :
              line && line.includes('drwxr-xr-x') ? 'text-blue-600 dark:text-blue-400' :
              line && line.includes(':') && line.includes('%') ? 'text-orange-600 dark:text-yellow-400' :
              'text-gray-700 dark:text-gray-300'
            }`}>
              {line || ''}
              {index === terminalLines.length - 1 && showCursor && (
                <span className="animate-pulse">█</span>
              )}
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 p-2 text-xs">
          <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <span>🟢 Online</span>
              <span>Session: {Math.floor(Date.now() / 1000)}s</span>
              <span>Path: ~/{location.pathname === '/' ? 'home' : location.pathname.slice(1)}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>User: lanka</span>
              <span>Shell: bash</span>
              <span>Encoding: UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor