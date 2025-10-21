export const projects = [
  {
    id: 1,
    title: 'Syscloud Partner Portal',
    summary: 'Streamlined customer onboarding platform reducing setup time by 60%',
    description: 'A comprehensive partner portal designed for Syscloud Technologies to enhance customer onboarding experience. Features secure authentication, automated workflows, and real-time progress tracking. Built with React, Material UI, and AWS services for maximum reliability and performance.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Material UI', 'AWS Lambda', 'AWS Cognito', 'PostgreSQL', 'Node.js'],
    liveUrl: 'https://partners.syscloud.com',
    githubUrl: 'https://github.com/mallikarjuna291/partner-portal',
    role: 'Software Engineer & Frontend Lead',
    category: 'Enterprise',
    status: 'Live',
    keyFeatures: [
      'Secure onboarding links generated via AWS Lambda',
      'Real-time progress tracking and notifications',
      'Automated document verification workflows',
      'Multi-step form validation with instant feedback',
      'Role-based access control and permissions',
      'Integration with existing CRM systems',
      'Mobile-responsive design for all devices',
      'Advanced analytics and reporting dashboard'
    ],
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    metrics: {
      efficiency: '60%',
      uptime: '99.9%',
      satisfaction: '4.9/5'
    }
  },
  {
    id: 2,
    title: 'MSP Renewal Portal',
    summary: 'Automated renewal and sales quoting system reducing manual work by 30-40%',
    description: 'An intelligent renewal management platform that automates the entire renewal process from quote generation to approval workflows. Built to handle complex pricing models and streamline sales operations for managed service providers.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Node.js', 'AWS Lambda', 'Material UI'],
    liveUrl: 'https://renewals.syscloud.com',
    githubUrl: 'https://github.com/mallikarjuna291/msp-renewal-portal',
    role: 'Software Engineer & Backend Developer',
    category: 'SaaS',
    status: 'Live',
    keyFeatures: [
      'Automated renewal quote generation',
      'Multi-tier approval workflow system',
      'Dynamic pricing calculation engine',
      'Integration with billing and CRM systems',
      'Real-time renewal status tracking',
      'Bulk renewal processing capabilities',
      'Custom reporting and analytics',
      'Email notifications and reminders'
    ],
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    metrics: {
      efficiency: '35%',
      processing: '3x faster',
      accuracy: '99.8%'
    }
  },
  {
    id: 3,
    title: 'React UI Framework',
    summary: 'JSON-driven component framework reducing duplicate code by 40%',
    description: 'A revolutionary React UI framework that enables dynamic component generation through JSON configuration. This modular approach significantly reduced development time and code duplication across multiple Syscloud applications.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'JavaScript', 'Webpack', 'JSON Schema', 'Material UI', 'Jest'],
    liveUrl: 'https://ui-framework.syscloud.com',
    githubUrl: 'https://github.com/mallikarjuna291/react-ui-framework',
    role: 'Frontend Architect & Lead Developer',
    category: 'Framework',
    status: 'Live',
    keyFeatures: [
      'JSON-driven component configuration',
      'Dynamic form generation and validation',
      'Reusable component library with 50+ components',
      'Theme customization and branding support',
      'Built-in accessibility features (WCAG compliant)',
      'Comprehensive testing suite with 95% coverage',
      'Documentation portal with live examples',
      'Version control and migration tools'
    ],
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    metrics: {
      reduction: '40%',
      components: '50+',
      coverage: '95%'
    }
  },
  {
    id: 4,
    title: 'Developer Operations Portal',
    summary: 'Internal web application serving 50+ developers for release management',
    description: 'A comprehensive internal tool built for Syscloud development teams to manage Canary/UAT releases, feature toggles, and operational reporting. Streamlined deployment processes and enhanced team collaboration.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'AWS CodeCommit', 'AWS Amplify', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://devops.syscloud.com',
    githubUrl: 'https://github.com/mallikarjuna291/devops-portal',
    role: 'Full-stack Developer & DevOps Engineer',
    category: 'DevOps',
    status: 'Live',
    keyFeatures: [
      'Canary and UAT release management',
      'Feature toggle control dashboard',
      'Real-time deployment monitoring',
      'Automated rollback mechanisms',
      'Team collaboration and communication tools',
      'Performance metrics and reporting',
      'CI/CD pipeline integration',
      'User role and permission management'
    ],
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    metrics: {
      users: '50+',
      deployments: '100%',
      efficiency: '58%'
    }
  }
]