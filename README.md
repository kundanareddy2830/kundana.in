# Kundana Reddy Tamma — Portfolio

A dark-mode developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.
The hero features a custom animated node-graph (canvas) instead of a stock gradient —
a nod to the graph-based systems (GNNs, knowledge graphs, quantum circuits) in the projects themselves.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to sanity-check the production build locally
```

This outputs a `dist/` folder ready to deploy anywhere static.

## Before you deploy — 2 things to do

1. **Add your resume PDF.** Drop a file named `resume.pdf` into the `public/` folder.
   The nav bar's "Resume" button links to `/resume.pdf`.
2. **Swap the LinkedIn URL if needed.** Currently set to
   `https://linkedin.com/in/kundanareddytamma` in `Hero.jsx` and `Contact.jsx` — update if yours differs.

## Deploy (fastest: Vercel)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → "Add New Project" → import the repo.
3. Vercel auto-detects Vite — just click **Deploy**. Done in ~60 seconds.

**Netlify** works the same way: drag-and-drop the `dist/` folder after `npm run build`
onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo.

## Structure

```
src/
  components/
    NetworkCanvas.jsx   → animated hero background (canvas, no external libs)
    Nav.jsx              → sticky nav with mobile menu
    Hero.jsx              → name, tagline, CTA
    Projects.jsx           → the 4 featured projects
    About.jsx                → bio + skills
    Experience.jsx            → internships + certifications
    Contact.jsx                 → closing CTA + footer
  App.jsx                        → section order — reorder here if you want
  index.css                       → Tailwind + global styles
```

## Customizing

- **Colors / fonts:** all design tokens live in `tailwind.config.js` under `theme.extend`.
- **Section order:** edit `App.jsx`.
- **Project content:** edit the `projects` array at the top of `Projects.jsx`.
- **Reduced motion:** the hero animation and page transitions already respect
  `prefers-reduced-motion` — no extra work needed.
