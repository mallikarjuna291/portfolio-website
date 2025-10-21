const Resume = () => {
  const highlights = [
    'Software Engineer at Syscloud Technologies with 3+ years of experience',
    'Expert in React, Node.js, PostgreSQL, and AWS cloud technologies',
    'Proven track record: 95% on-time delivery for 15+ production projects',
    'Built systems that reduced customer onboarding time by 60% and manual effort by 30-40%',
    'Strong expertise in CI/CD practices, AI tool integration, and Agile methodologies',
    'Migrated build systems achieving 58% faster build times and improved development speed'
  ]

  const timeline = [
    {
      year: 'Aug 2022 - Present',
      title: 'Software Engineer',
      company: 'Syscloud Technologies',
      achievements: [
        'Collaborated with designers, product managers, and QA to deliver quality solutions',
        'Leveraged AI tools (ChatGPT Agent Mode, Claude MCP) to automate testing and accelerate validation',
        'Built Partner Portal reducing customer onboarding time by 60%',
        'Developed Renewal Portal automating renewals and sales quotes, cutting manual work by 30-40%',
        'Migrated MSP Portal from Webpack to Vite, reducing build times by 58%',
        'Successfully delivered 15+ React, PostgreSQL, and AWS Lambda projects with 95% on-time completion'
      ]
    },
    {
      year: 'Sep 2021 - Jul 2022',
      title: 'Software Engineer Intern',
      company: 'Syscloud Technologies',
      achievements: [
        'Engineered JSON-driven React UI framework, reducing duplicate code by 40%',
        'Built modular components, reducing feature development time by 25%',
        'Managed internal web app used by 50+ developers for Canary/UAT releases',
        'Implemented CI/CD pipelines with AWS CodeCommit and Amplify'
      ]
    },
    {
      year: '2018 - 2022',
      title: 'B.Tech Computer Science and Engineering',
      company: 'Lovely Professional University',
      achievements: [
        'Graduated with 8.0 CGPA demonstrating strong academic performance',
        'Specialized in algorithms, data structures, and software engineering principles',
        'Completed multiple projects using React, Node.js, and modern web technologies',
        'Participated in coding competitions and technical workshops'
      ]
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-6">
              📄 Professional Profile
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent">
                My Resume
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my professional journey, skills, and achievements. 
              Download the full resume or explore the highlights below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/MallikarjunaCV.pdf" 
                download="MallikarjunaCV.pdf"
                className="group btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </a>
              <a href="/contact" className="btn-secondary">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Highlights</h2>
            <div className="card p-8">
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Timeline */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Experience</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">{item.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 font-medium">
                      {item.year}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Interested in my background?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Let's discuss how my skills and experience can contribute to your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Get in Touch
                </a>
                <a 
                  href="/MallikarjunaCV.pdf" 
                  download="MallikarjunaCV.pdf"
                  className="btn-secondary"
                >
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume