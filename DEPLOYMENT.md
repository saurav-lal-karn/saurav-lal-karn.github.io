# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages automatically.

## Setup Instructions

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your code to the `main` branch

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
   - The site will be deployed automatically when you push to the main branch

3. **Repository Name Configuration**
   - Your site will be available at `https://yourusername.github.io`
   - The configuration is set up for root-level hosting (no subdirectory)

## Manual Deployment

If you want to deploy manually:

```bash
npm run build
```

The built files will be in the `out` directory, which you can then upload to GitHub Pages.

## Important Notes

- The site is configured for static export (no server-side features)
- Images are unoptimized for static hosting
- The site is configured for root-level hosting (username.github.io)
- A `.nojekyll` file is included to prevent Jekyll processing

## Troubleshooting

- If images don't load, check that the paths are correctly configured for root-level hosting
- Make sure your repository is set up for GitHub Pages at the root level
- The GitHub Actions workflow will automatically build and deploy on every push to main 