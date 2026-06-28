# John Paul Pancho — Portfolio Site

Production-ready React + Vite portfolio / landing page for **John Paul Pancho**, Senior Virtual Assistant & Revenue Operations Specialist.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 |
| Bundler | Vite 5 |
| Styling | Plain CSS custom properties (no CSS-in-JS) |
| Fonts | Google Fonts — Bebas Neue, Cormorant Garamond, DM Sans |
| Booking | Calendly inline widget |
| Hosting | Netlify (zero-config via `netlify.toml`) |

## Project Structure

```
john-paul-pancho-portfolio/
├── public/
│   └── images/
│       ├── hero.jpg          ← professional headshot
│       ├── laptop1.png
│       ├── laptop2.png
│       └── laptop3.png
├── src/
│   ├── components/
│   │   ├── ParticleCanvas.jsx   ← canvas particle network bg
│   │   ├── NavBar.jsx
│   │   ├── Hero.jsx
│   │   ├── StatsBar.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   ├── Process.jsx
│   │   ├── ToolsMarquee.jsx     ← infinite scroll marquee
│   │   ├── PhotoShowcase.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Booking.jsx          ← Calendly embed
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useScrollReveal.js   ← IntersectionObserver reveal
│   │   ├── useParallax.js       ← mouse parallax
│   │   └── useCountUp.js        ← animated stat counters
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── netlify.toml
└── .gitignore
```

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Deploy to Netlify

### Option A — Netlify UI (drag & drop)

1. Run `npm run build` locally
2. Drag the generated `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop)

### Option B — GitHub → Netlify CI/CD (recommended)

1. Push this repo to GitHub
2. In Netlify: **New site → Import from Git → pick your repo**
3. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy** — done!

Every `git push` will trigger a new deploy automatically.

## Customisation

### Update content
All copy lives inside each component file — no external CMS needed.

### Change images
Replace files in `public/images/` and the names will be served at `/images/<filename>`.

### Calendly link
Open `src/components/Booking.jsx` and change the `data-url` on the widget div.

### Colours / fonts
All design tokens are CSS custom properties in `src/index.css` under `:root`.

---

Built with care for John Paul Pancho · 2026
