# Bannerlord Web Application Frontend

A modern, interactive web frontend for the Bannerlord Web Application, featuring an immersive 3D interface built with React and Three.js. The application provides an innovative way to interact with Bannerlord content through a sophisticated 3D environment.

## 🚀 Technologies & Architecture

### Core Technologies

- **React 18**
  - Utilizes modern React features for efficient UI rendering
  - Component-based architecture for maintainable code
  - Functional components with hooks for state management
  - Suspense for better loading states

- **Three.js & React Three Fiber**
  - Interactive 3D scene with GLB model loading
  - Custom camera controls and animations
  - Post-processing effects with EffectComposer
  - Selection and Outline effects for interactive 3D elements
  - Smooth animations using maath easing functions
  - Responsive 3D rendering with media queries

- **Vite**
  - Lightning-fast development server with HMR
  - Optimized production builds
  - Modern ESM-based development
  - Efficient asset handling and bundling

- **TailwindCSS**
  - Utility-first approach for rapid styling
  - Custom configuration for project-specific design system
  - Responsive design utilities
  - Zero runtime CSS-in-JS overhead

### Key Features

1. **3D Interactive Interface**
   - Custom 3D model loading and manipulation
   - Interactive elements with hover effects
   - Smooth camera animations
   - Responsive 3D scene adaptation

2. **Performance Optimizations**
   - Suspense for code splitting
   - Lazy loading of 3D models
   - Optimized asset delivery
   - Efficient state management

3. **Modern Development Tools**
   - ESLint for code quality
   - Modern JavaScript features (ES6+)
   - Hot Module Replacement
   - Developer-friendly error handling

## 📦 Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager
- Modern web browser with WebGL support

## 🛠️ Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd SVCIWeb
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🔧 Available Scripts

- **Development server:**
  ```bash
  npm run dev
  ```
  Starts the development server with:
  - Hot Module Replacement
  - Error overlay
  - Fast refresh
  - Source maps

- **Build for production:**
  ```bash
  npm run build
  ```
  Creates an optimized production build with:
  - Code splitting
  - Asset optimization
  - Minification
  - Tree shaking

- **Preview production build:**
  ```bash
  npm run preview
  ```
  Locally preview production build

- **Lint code:**
  ```bash
  npm run lint
  ```
  ESLint configuration includes:
  - React-specific rules
  - Modern JavaScript best practices
  - Three.js specific linting

## 📁 Project Structure

```
frontend/
├── public/
│   └── models/         # 3D model assets
├── src/
│   ├── components/     # Reusable React components
│   ├── sections/       # Main page sections
│   │   ├── Hero.jsx   # 3D interactive hero section
│   │   └── Navbar.jsx # Navigation component
│   ├── constants/     # Configuration and constants
│   └── App.jsx        # Main application component
├── index.html         # Entry point
├── vite.config.js     # Build configuration
├── tailwind.config.js # Styling configuration
└── eslint.config.js   # Linting rules
```

## 🔨 Development Best Practices

1. **Component Organization**
   - Functional components with hooks
   - Clear separation of concerns
   - Reusable 3D components
   - Proper state management

2. **Performance Considerations**
   - Optimize 3D model sizes
   - Use proper texture compression
   - Implement proper loading states
   - Monitor render performance

3. **Code Style**
   - Follow ESLint configuration
   - Use TypeScript-like PropTypes
   - Document complex 3D interactions
   - Maintain consistent naming conventions

## 🌐 Environment Setup

### Development
- Vite dev server with HMR
- Local environment variables
- WebGL debugging tools
- React Developer Tools

### Production
- Nginx server configuration
- Optimized static assets
- Proper caching headers
- Compression enabled

## 🤝 Contributing

1. Follow the existing code style
2. Test 3D interactions thoroughly
3. Optimize assets before committing
4. Document complex features
5. Create detailed pull requests

## 📝 License

MIT License
