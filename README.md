# Portfolio Website

A simple personal portfolio site built with React (JSX) and plain CSS — no Tailwind, no component libraries.

## Structure

- `src/App.jsx` — all page content and sections (Hero, About, Internships, Projects, Skills, Awards, Contact)
- `src/App.css` — all styling for the page
- `src/index.css` — base resets (fonts, margins, links)
- `src/main.jsx` — React entry point

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder you can deploy anywhere (Netlify, Vercel, GitHub Pages, etc).

## Customize

Edit the arrays at the top of `src/App.jsx` (`INTERNSHIPS`, `PROJECTS`, `SKILLS`, `AWARDS`) to update your own info, and swap out the name/email/links throughout.
