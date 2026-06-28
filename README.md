# Nguyen Vo Hiep - Backend Developer Portfolio

Personal developer portfolio showcasing backend engineering skills, projects, and experiences. Built with a focus on clean, editorial "Quiet Luxury" design and high performance.

🔗 **Live Website:** [https://nvhiep1811.github.io/](https://nvhiep1811.github.io/)

## Technology Stack

- **Framework:** Next.js (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

- `src/data/`: Centralized content source of truth (Profile, Skills, Projects, Education).
- `src/components/`: Reusable modular UI components and sections.
- `docs/`: Design specifications, update guides, and CV summaries.
- `public/`: Static assets including the downloadable CV.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Validation & Code Quality

Before pushing code or deploying, run the built-in validation script to ensure content constraints, types, and build integrity:

```bash
npm run check
```

This will concurrently run:
1. Content rule validation (`validate:content`)
2. ESLint (`lint`)
3. TypeScript check (`typecheck`)
4. Next.js Static Export build (`build`)

## Deployment

This portfolio is strictly configured as a static site and deployed automatically to GitHub Pages.

When changes are pushed to the `main` branch, the `.github/workflows/deploy-pages.yml` workflow triggers automatically. It builds the `out/` directory and publishes it. No external hosting services (like Vercel or Netlify) are required.

## Updating Content

If you need to update the CV or portfolio information, please refer to the [UPDATE_GUIDE.md](./docs/UPDATE_GUIDE.md) for strict guidelines on maintaining the single-source-of-truth architecture.
