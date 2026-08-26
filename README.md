# FicusSoft Interactive Website

Complete source for the FicusSoft product-engineering website.

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal, normally `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Main files

- `app/PremiumExperience.tsx` — content, sections, and interactive behavior
- `app/globals.css` — complete responsive visual system
- `app/layout.tsx` — metadata and favicon configuration
- `app/page.tsx` — page entry point and preserved classic experience
- `public/favicon.png` — FicusSoft browser icon
- `.openai/hosting.json` — existing Sites project connection

## Updating content

Most homepage content is stored in arrays near the top of `app/PremiumExperience.tsx`, including services, client names, case studies, industries, technologies, articles, and testimonial placeholders.

Replace all text marked as illustrative, placeholder, or approval-required before using it as a final public company claim.

## Quality checks

```bash
npm run lint
npm run build
```
