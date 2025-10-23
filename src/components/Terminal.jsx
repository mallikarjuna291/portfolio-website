import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Terminal = ({ isVisible, onClose }) => {
  const [history, setHistory] = useState([
    'Lanka\'s Portfolio Terminal v1.0',
    'Type "help" for available commands.',
    ''
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef()
  const terminalRef = useRef()
  const navigate = useNavigate()

  const commands = {
    help: () => [
      'Available commands:',
      '  help              - Show this help message',
      '  about             - View Lanka\'s profile information',
      '  skills            - Display technical expertise',
      '  projects          - Browse project portfolio',
      '  experience        - Show work history at Syscloud',
      '  performance       - View real-time metrics',
      '  contact           - Get contact information',
      '  email             - Open email client to contact Lanka',
      '  linkedin          - Open LinkedIn profile',
      '  download resume   - Download Lanka\'s resume (PDF)',
      '  cd <page>         - Navigate to different pages',
      '  clear             - Clear terminal screen',
      '  exit              - Close terminal',
      ''
    ],
    
    about: () => [
      '🧑‍💻 Lanka Mallikarjuna - Software Engineer',
      '',
      '🏢 Company: Syscloud Technologies',
      '🌍 Remote: Available Worldwide',
      '⏱️  Experience: 3+ years',
      '🎓 Education: B.Tech CSE - 8.0 CGPA',
      '',
      '💡 Specializes in React development, performance optimization,',
      '   and modern build tools (Webpack → Vite migration expert)',
      ''
    ],

    skills: () => [
      '🛠️ Technical Skills:',
      '',
      'Frontend:',
      '  • React (Expert) - 3+ years',
      '  • TypeScript (Advanced)',
      '  • Material UI (Advanced)',
      '  • HTML/CSS (Expert)',
      '',
      'Backend:',
      '  • Node.js (Advanced)',
      '  • PostgreSQL (Advanced)',
      '  • AWS Lambda (Intermediate)',
      '',
      'Tools & DevOps:',
      '  • Git (Expert)',
      '  • Docker (Intermediate)',
      '  • CI/CD (Advanced)',
      '  • Vite (Expert) - Led migration from Webpack',
      '',
      'AI Tools:',
      '  • ChatGPT (Advanced)',
      '  • Claude MCP (Intermediate)',
      ''
    ],

    projects: () => {
      navigate('/projects')
      return [
        '🚀 Navigating to projects page...',
        '',
        'Key Projects at Syscloud:',
        '',
        '1. Partner Portal',
        '   Impact: 60% onboarding time reduction',
        '   Tech: React, AWS Lambda, PostgreSQL',
        '',
        '2. MSP Renewal Portal',
        '   Impact: 35% manual work reduction',
        '   Tech: React, TypeScript, Node.js',
        '',
        '3. React UI Framework',
        '   Impact: 40% code duplication reduction',
        '   Tech: React, JSON Schema, Webpack→Vite',
        ''
      ]
    },

    experience: () => [
      '💼 Work Experience:',
      '',
      '🏢 Syscloud Technologies (2021 - Present)',
      '   Role: Software Engineer',
      '',
      '   Key Achievements:',
      '   ✅ Led Partner Portal development (60% onboarding boost)',
      '   ✅ Migrated builds from Webpack to Vite (58% faster)',
      '   ✅ Delivered 15+ projects with 95% on-time rate',
      '   ✅ Reduced code duplication by 40% with UI framework',
      '',
      '   Technologies: React, TypeScript, Node.js, PostgreSQL,',
      '                 AWS Lambda, Material UI, Git, CI/CD',
      ''
    ],

    performance: () => [
      '📊 Real-time Performance Metrics:',
      '',
      '🚀 Lanka\'s Production Impact:',
      '   • Onboarding Improvement: 60%',
      '   • Build Time Reduction: 58%',
      '   • Delivery Rate: 95%',
      '   • Code Reduction: 40%',
      '',
      '⚡ Current System Status:',
      '   • Load Time: ~1.2s',
      '   • Memory Usage: ~45MB',
      '   • Bundle Size: ~234KB',
      '   • Frame Rate: 60 FPS',
      '',
      '🔧 Build Optimizations:',
      '   • Webpack → Vite Migration: Complete',
      '   • Tree Shaking: Active',
      '   • Hot Module Replacement: Enabled',
      ''
    ],

    contact: () => [
      '📧 Contact Information:',
      '',
      '📨 Email: lankamallikarjuna108@gmail.com',
      '💼 LinkedIn: linkedin.com/in/lankamallikarjuna',
      '💻 GitHub: github.com/mallikarjuna291',
      '🌍 Remote: Available Worldwide',
      '',
      '🔖 Status: Open to new opportunities',
      '💡 Interests: Performance optimization, modern frameworks,',
      '             cloud architecture, AI-assisted development',
      ''
    ],

    cd: (args) => {
      const page = args[0]
      const routes = {
        'home': '/',
        'about': '/about',
        'projects': '/projects',
        'resume': '/resume',
        'contact': '/contact'
      }
      
      if (routes[page]) {
        navigate(routes[page])
        return [`📂 Navigated to /${page}`, '']
      } else {
        return [`❌ Error: Directory '${page}' not found`, 'Available: home, about, projects, resume, contact', '']
      }
    },

    clear: () => {
      setHistory(['Lanka\'s Portfolio Terminal v1.0', 'Type "help" for available commands.', ''])
      return []
    },

    download: (args) => {
      const item = args.join(' ')
      if (item === 'resume') {
        // Trigger download
        const link = document.createElement('a')
        link.href = '/MallikarjunaCV.pdf'
        link.download = 'MallikarjunaCV.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        return [
          '📄 Downloading resume...',
          '',
          '✅ Download started: MallikarjunaCV.pdf',
          '📁 File saved to your Downloads folder',
          '📊 Lanka Mallikarjuna\'s Professional Resume',
          '',
          'Contains:',
          '• Full work experience at Syscloud Technologies',
          '• Technical skills and certifications',
          '• Project achievements and impact metrics',
          '• Contact information and references',
          ''
        ]
      } else {
        return ['❌ Available downloads: resume', 'Usage: download resume', '']
      }
    },

    email: () => {
      window.open('mailto:lankamallikarjuna108@gmail.com?subject=Opportunity Discussion&body=Hi Lanka,%0D%0A%0D%0AI found your portfolio and would like to discuss...', '_self')
      return [
        '📧 Opening email client...',
        '',
        '✅ Email draft created to: lankamallikarjuna108@gmail.com',
        '📝 Subject: Opportunity Discussion',
        '⏰ Expected response time: < 24 hours',
        '',
        'If email client didn\'t open, copy this address:',
        'lankamallikarjuna108@gmail.com',
        ''
      ]
    },

    linkedin: () => {
      window.open('https://linkedin.com/in/lankamallikarjuna', '_blank')
      return [
        '💼 Opening LinkedIn profile...',
        '',
        '✅ Redirecting to: linkedin.com/in/lankamallikarjuna',
        '📨 Use LinkedIn messaging for quick contact',
        '🔗 Profile includes professional background',
        '🤝 Connect for networking opportunities',
        ''
      ]
    },

    exit: () => {
      onClose()
      return ['👋 Terminal closed. Press Ctrl+` to reopen.']
    }
  }

  const executeCommand = (input) => {
    const trimmedInput = input.trim()
    if (!trimmedInput) return

    setHistory(prev => [...prev, `$ ${trimmedInput}`])
    
    const [command, ...args] = trimmedInput.split(' ')
    const cmd = commands[command.toLowerCase()]
    
    if (cmd) {
      const output = cmd(args)
      if (output.length > 0) {
        setHistory(prev => [...prev, ...output])
      }
    } else {
      setHistory(prev => [...prev, `❌ Command not found: ${command}`, 'Type "help" for available commands.', ''])
    }

    setCommandHistory(prev => [trimmedInput, ...prev.slice(0, 49)]) // Keep last 50 commands
    setCurrentInput('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex] || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex] || '')
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Simple auto-complete for commands
      const availableCommands = Object.keys(commands)
      const matches = availableCommands.filter(cmd => cmd.startsWith(currentInput.toLowerCase()))
      if (matches.length === 1) {
        setCurrentInput(matches[0])
      }
    }
  }

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isVisible])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 dark:bg-black dark:bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg w-full max-w-4xl h-96 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="bg-gray-200 dark:bg-gray-800 px-4 py-2 border-b border-gray-300 dark:border-gray-700 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClose}></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-sm ml-3">Terminal</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm"
          >
            ✕
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="flex-1 p-4 font-mono text-sm text-gray-800 dark:text-green-400 overflow-y-auto bg-white dark:bg-black"
        >
          <div className="space-y-1">
            {history.map((line, index) => (
              <div key={index} className={
                line.startsWith('$') ? 'text-blue-600 dark:text-blue-400' :
                line.startsWith('❌') ? 'text-red-600 dark:text-red-400' :
                line.startsWith('✅') ? 'text-green-600 dark:text-green-400' :
                line.includes('📊') || line.includes('🚀') || line.includes('💼') ? 'text-orange-600 dark:text-yellow-400' :
                'text-gray-700 dark:text-green-300'
              }>
                {line}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-gray-800 dark:text-green-400 outline-none ml-1 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Type a command..."
              />
              <div className="w-2 h-4 bg-gray-800 dark:bg-green-400 animate-pulse ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal