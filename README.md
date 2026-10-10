# Animated Portfolio — React.js

A simple, fully animated personal portfolio built with **only React.js** and
pure CSS animations (no animation libraries, no UI frameworks).

## ✨ Features

- **Animated hero** — typewriter role effect, floating avatar with a spinning
  conic-gradient ring, orbiting tech badges and drifting gradient orbs.
- **Scroll-reveal animations** — every section fades/slides in using a custom
  `useReveal` hook built on `IntersectionObserver` (no libraries).
- **Animated skill bars** that fill when scrolled into view, plus a shimmer effect.
- **Project cards** with image zoom, lift and glow on hover.
- **Scroll progress bar** at the top of the page.
- **Active-section navbar** that highlights the link for the section in view,
  with a glassmorphism blur on scroll and a mobile hamburger menu.
- **Interactive contact form** with animated focus states and a success note.
- **Fully responsive** and respects `prefers-reduced-motion`.

## 🧩 Tech

| Layer      | Choice                          |
| ---------- | ------------------------------- |
| Library    | React 18 (function components + hooks) |
| Build tool | Vite                            |
| Styling    | Pure CSS (custom properties + keyframes) |
| Animation  | CSS `@keyframes` / transitions + `IntersectionObserver` |

> Strictly React.js for the app logic — no Framer Motion, GSAP, Tailwind, etc.

## 📁 Structure

```
src/
├── App.jsx                 # Layout + scroll progress bar
├── main.jsx                # React entry point
├── index.css               # Design tokens, keyframes, all styles
├── data.js                 # Editable content (projects, skills, links)
├── hooks/
│   └── useReveal.js        # useReveal, useTypewriter, useScrollProgress, ...
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── Reveal.jsx          # Reusable scroll-reveal wrapper
```

## 🚀 Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## 🎨 Customizing

All content lives in `src/data.js` — edit your name, roles, stats, skills,
tech stack and projects in one place. Colors and spacing are controlled by CSS
custom properties at the top of `src/index.css`.
