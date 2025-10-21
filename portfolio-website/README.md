# Portfolio Website

A clean, modern, and responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features dark mode support, smooth navigation, and a professional design perfect for showcasing your projects and skills.

## ✨ Features

- **Modern Design**: Clean, minimal, and professional layout
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation
- **SEO Friendly**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Subtle animations (minimal usage)

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── MallikarjunaCV.pdf    # Your resume file
│   └── index.html
├── src/
│   ├── components/           # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── DarkModeToggle.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── context/
│   │   └── ThemeContext.jsx # Dark mode context
│   ├── data/
│   │   └── projects.js      # Project data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have this as a git repository
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your portfolio

## ⚙️ Customization

### 1. Personal Information

**Update Hero Section** (`src/components/Hero.jsx`):
- Change "Your Name" to your actual name
- Update the title (e.g., "Frontend Developer")
- Modify the bio description
- Update the profile image placeholder

**Update About Page** (`src/pages/About.jsx`):
- Replace the bio content with your story
- Update skills arrays with your technologies
- Modify the experience timeline

**Update Contact Information**:
- `src/components/Footer.jsx` - Update social links
- `src/pages/Contact.jsx` - Update contact information
- `src/components/ContactForm.jsx` - Update email address

### 2. Projects

Edit `src/data/projects.js` to add your projects:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    summary: 'Brief description',
    description: 'Detailed description',
    image: '/path-to-image.jpg',
    technologies: ['React', 'Node.js', 'etc'],
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/you/project',
    // ... more fields
  }
]
```

### 3. Resume

- Replace `public/MallikarjunaCV.pdf` with your resume
- Update resume highlights in `src/pages/Resume.jsx`

### 4. Styling

**Colors**: Modify `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Update these color values
    500: '#3b82f6',  // Main brand color
    600: '#2563eb',  // Hover states
    // ... etc
  }
}
```

**Fonts**: Update the font in `tailwind.config.js` and `index.html`

## 🌐 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [Netlify](https://app.netlify.com)
   - Or connect your Git repository for automatic deployments

3. **Configure redirects** (for SPA routing)
   Create `public/_redirects` file:
   ```
   /*    /index.html   200
   ```

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Design Principles

- **Minimal**: Clean design with focus on content
- **Professional**: Suitable for job applications and client work
- **Accessible**: WCAG 2.1 compliant with proper semantics
- **Performance**: Optimized images, lazy loading, and efficient code
- **Mobile-First**: Responsive design that works on all devices

## 🔧 Customization Tips

1. **Images**: Add your project images to the `public` folder
2. **Icons**: The project uses Heroicons (included via SVG)
3. **Animations**: Keep them minimal - only hover effects and dark mode transitions
4. **SEO**: Update meta tags in `index.html` and add structured data
5. **Analytics**: Add Google Analytics or your preferred tracking solution

## 📞 Support

If you need help customizing this portfolio:

1. Check the comments in the code files
2. Refer to [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Check [React documentation](https://react.dev/)
4. Look at [Vite documentation](https://vitejs.dev/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to showcase your work?** Update the content, add your projects, and deploy your new portfolio!