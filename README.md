# Personal Portfolio Site

A minimal, responsive personal portfolio website built with HTML and Tailwind CSS. Designed for easy hosting on GitHub Pages.

## 🚀 Features

- **Static Site**: No build process required - just static HTML/CSS files
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Loading**: Optimized for performance with CDN-hosted Tailwind
- **GitHub Pages Ready**: Deploy directly from your repository
- **Custom Fonts**: Inter font from Google Fonts for modern typography

## 📁 Project Structure

```
personal-site/
├── index.html          # Main portfolio page
├── styles.css          # Custom styles and font imports
├── .gitignore          # Git ignore patterns
└── README.md           # This file
```

## 🛠️ Local Development

### Prerequisites

No special setup required! Just a web browser and text editor.

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/personal-site.git
   cd personal-site
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server (optional):
     ```bash
     # Using Python (if installed)
     python -m http.server 8000

     # Using Node.js (if installed)
     npx serve .

     # Then visit http://localhost:8000
     ```

## 🚀 GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Create a new repository on GitHub:**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it `yourusername.github.io` (for user/organization site)
   - Or name it `personal-site` (for project site)
   - **Important:** Make sure the repository name matches your setup choice

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/yourusername/repository-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/" (root) folder
   - Click "Save"

4. **Your site will be live at:**
   - For user/org site: `https://yourusername.github.io`
   - For project site: `https://yourusername.github.io/personal-site`

### Manual Deployment

If automatic deployment doesn't work:

1. Go to repository Settings → Pages
2. Set source to "main" branch, root folder
3. The site will build and deploy automatically
4. Check the "Actions" tab for build status

## 🎨 Customization

### Content Updates

1. **Personal Information:**
   - Update name, tagline, and contact info in `index.html`
   - Modify the hero section content

2. **Experience & Projects:**
   - Edit the experience and projects sections
   - Update links to your actual projects/repositories

3. **Styling:**
   - Modify Tailwind classes in `index.html` for different colors/sizes
   - Add custom styles in `styles.css`

### Color Scheme

The current design uses:
- **Primary:** Blue (`blue-600`, `blue-700`)
- **Background:** Light gray (`gray-50`)
- **Text:** Dark gray (`gray-900`, `gray-700`)

To change colors, replace the Tailwind color classes:
- `bg-blue-600` → `bg-green-600` (for green theme)
- `text-gray-900` → `text-slate-900` (for different gray shade)

### Adding Sections

To add new sections:

1. Add the HTML structure in `index.html`
2. Update the navigation links in the header
3. Style with Tailwind utility classes

### Fonts

Currently using Inter font. To change fonts:

1. Update the Google Fonts import in `styles.css`
2. Change the `font-family` declaration

## 📱 Responsive Design

The site is fully responsive and works on:
- **Desktop:** Full layout with side-by-side elements
- **Tablet:** Adjusted spacing and grid layouts
- **Mobile:** Stacked layout with touch-friendly sizing

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Inter Font**: Modern, readable typography
- **GitHub Pages**: Free static site hosting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

---

**Built with ❤️ using HTML & Tailwind CSS**
