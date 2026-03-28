# Notion Blog - Next.js

A simple, responsive blog that displays study materials from Notion.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Place markdown files in `public/content/` directory:
   - `public/content/index.md` - Main index
   - `public/content/category-name/` - Category directories
   - `public/content/category-name/_index.md` - Category index
   - `public/content/category-name/post-slug.md` - Individual posts

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Start production server:
   ```bash
   npm start
   ```

## Deploy to Vercel

1. Push this repository to GitHub
2. Import repository in Vercel
3. Vercel will automatically detect Next.js and deploy

The `next.config.js` is configured for static export, so it will work perfectly with Vercel.
