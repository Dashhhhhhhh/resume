# Dash Dunmire - Resume

A modern React + TypeScript resume website built with Vite, TailwindCSS, and deployed to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dashhhhhhhh/dashdunmire.git
cd dashdunmire
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (manual deployment)

### Tech Stack

- **React 19** - Latest React with hooks and concurrent features
- **TypeScript** - Strict type checking with no implicit any
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **ESLint** - Code linting with TypeScript support
- **GitHub Pages** - Free hosting and deployment

### Project Structure

```
src/
├── App.tsx          # Main app component
├── main.tsx         # App entry point
├── index.css        # Global styles with Tailwind layers
├── assets/          # Static assets
└── vite-env.d.ts    # Vite type definitions
```

### Configuration

- **Path Alias**: `@/` maps to `./src/` for cleaner imports
- **Strict TypeScript**: No implicit any, strict null checks, no unused locals
- **GitHub Pages Base Path**: Configured for `/dashdunmire/` deployment path

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. Push your changes to the `main` branch
2. Go to your repository's **Settings** > **Pages**
3. Set the source to **GitHub Actions**
4. The workflow will build and deploy automatically

### Manual Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

This will build the project and publish the `dist` folder to the `gh-pages` branch.

## 📝 Development Guidelines

### Code Style
- Use TypeScript with strict mode enabled
- Follow ESLint rules (no unused variables, proper typing)
- Use TailwindCSS classes for styling
- Use the `@/` path alias for imports

### File Structure
- Keep components in `src/components/`
- Keep utilities in `src/utils/`
- Keep types in `src/types/`
- Keep assets in `src/assets/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
