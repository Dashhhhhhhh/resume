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

This project is configured for deployment using GitHub Pages with the "Deploy from branch" option. The build output is automatically placed in the `/docs` directory.

### Setup GitHub Pages

1. Ensure your main branch is set as the GitHub Pages source
2. Run the build command:
```bash
npm run build
```
3. This will create/update the `docs/` directory with your production build
4. Commit and push the changes to your main branch:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Your site will be available at `https://your-username.github.io/repository-name/`

### Manual Deployment

You can also manually trigger deployment by:
1. Running `npm run build`
2. Committing the updated `docs/` directory
3. Pushing to your main branch

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

docs/                # Production build output (GitHub Pages)
├── index.html
├── assets/
└── vite.svg

.github/
└── workflows/
    └── deploy.yml   # GitHub Actions deployment workflow
```

## Customization

- Edit `src/App.tsx` to modify the main content
- Update `tailwind.config.js` to customize Tailwind configuration
- Modify the GitHub Actions workflow in `.github/workflows/deploy.yml` if needed