# Widmison Francois — Personal Portfolio

Production-ready **Next.js static export** for [widmisonfrancois.com](https://widmisonfrancois.com), designed for **GitHub Pages**.

**Positioning:** *Build the Platform. Engineer the Attention.* — Full-stack web engineering first, with a proven 1M+ AI growth engine for Royol Technology.

## Quick start

```bash
npm install
npm run dev      # local development
npm run build    # static export → ./out
npm start        # serve ./out (via npx serve)
```

## Deploy (GitHub Pages)

1. Push this repo to GitHub and enable **Settings → Pages → Source: GitHub Actions**.
2. Ensure the custom domain / `public/CNAME` is `widmisonfrancois.com`.
3. Push to `main` — `.github/workflows/deploy.yml` runs `npm ci && npm run build` and deploys `./out`.

Required static files already included:

- `public/CNAME` → `widmisonfrancois.com`
- `public/.nojekyll` → empty (serves `/_next` assets)
- `public/llms.txt` → AI citation profile
- `app/robots.ts` + `app/sitemap.ts` → `force-static` for `https://widmisonfrancois.com`

## Drop-in images

| Asset | Path |
| --- | --- |
| Headshot | `public/images/widmison-francois.jpg` |
| Open Graph cover (1200×630) | `public/images/og-cover.jpg` |
| Optional project screenshots | `public/images/projects/*.jpg` |

Replace the placeholder files with final photography. Keep filenames the same so metadata, JSON-LD, and README links stay valid.

## Update metrics (followers & copy)

All bio details, case studies, timeline, services, and social counts live in one typed file:

```ts
// lib/site-config.ts
socials: [
  { id: 'tiktok', followers: 650000, followersDisplay: '650K+', ... },
  { id: 'facebook', followers: 258000, ... },
  { id: 'youtube', followers: 93000, ... },
  { id: 'instagram', followers: 16000, ... },
],
totalAudience: { value: 1017000, display: '1,017,000+', ... },
```

1. Edit `followers` / `followersDisplay` / `totalAudience` in `lib/site-config.ts`.
2. Rebuild (`npm run build`) — hero pills, AI Growth scoreboard, and JSON-LD `interactionStatistic` all read from this config.
3. Optionally set `formspreeEndpoint` or `web3formsAccessKey` in the same file for AJAX contact submit (otherwise the form falls back to `mailto:` + clipboard).

## Stack

- Next.js App Router + TypeScript (`output: 'export'`, `images.unoptimized`)
- Tailwind CSS · Framer Motion · Lucide React
- Dark executive studio aesthetic (obsidian / cyan / gold)

## Contact form keys

In `lib/site-config.ts`:

```ts
formspreeEndpoint: '',      // e.g. https://formspree.io/f/xxxxx
web3formsAccessKey: '',     // Web3Forms access key
```

Leave empty to keep the GitHub Pages–safe mailto + clipboard fallback.
