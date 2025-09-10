# React + Tailwind CSS GitHub Pages Site

A basic GitHub Pages site built with React and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/dashdunmire.git
cd dashdunmire
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment to GitHub Pages

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions"
4. Push your changes to the `main` branch

The site will be automatically deployed and available at `https://your-username.github.io/dashdunmire/`

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **GitHub Actions** - CI/CD for automated deployment

## Project Structure

```
src/
├── App.tsx          # Main React component
├── main.tsx         # Application entry point
├── index.css        # Tailwind CSS imports
└── assets/          # Static assets

.github/
└── workflows/
    └── deploy.yml   # GitHub Actions deployment workflow
```

## Customization

- Edit `src/App.tsx` to modify the main content
- Update `tailwind.config.js` to customize Tailwind configuration
- Modify the GitHub Actions workflow in `.github/workflows/deploy.yml` if needed