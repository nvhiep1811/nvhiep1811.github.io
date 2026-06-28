<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant documentation in `node_modules/next/dist/docs/`.

Treat the documentation installed with the current Next.js version as the source of truth.

<!-- END:nextjs-agent-rules -->

# Portfolio Repository Instructions

## Project

This repository contains the personal developer portfolio of **Nguyen Vo Hiep**,
a Software Engineering student pursuing Backend Developer internship,
entry-level Backend Developer, and Junior Software Engineer opportunities.

The website must be a fully static Next.js application deployed through
GitHub Pages.

## Required Reading

Before planning, modifying, or generating code, read:

1. `AGENTS.md`
2. `docs/PORTFOLIO_SPEC.md`
3. `docs/CV_SUMMARY.md`
4. `public/CV_NguyenVoHiep_BackendDeveloper.pdf`
5. `docs/UPDATE_GUIDE.md` when updating content from a new CV
6. Existing source code, configuration files, and GitHub Actions workflows
   relevant to the task

`docs/PORTFOLIO_SPEC.md` defines product, design, engineering, accessibility,
performance, and deployment requirements.

`docs/CV_SUMMARY.md` and the latest CV define the portfolio content.

## Source-of-Truth Priority

When information conflicts, use this order:

1. The user's latest explicit instruction
2. A newly attached CV supplied with the current task
3. `public/CV_NguyenVoHiep_BackendDeveloper.pdf`
4. Confirmed repository evidence for technical implementation details
5. Runtime content in `src/data/`
6. `docs/CV_SUMMARY.md`
7. Example or seed content in `docs/PORTFOLIO_SPEC.md`

The product specification must not override a newer CV for personal
information, dates, skills, certifications, project responsibilities, or links.

## Official Personal Information

Use this email everywhere:

```text
nguyenvohiep.29122004@gmail.com
```

Use this email link:

```text
mailto:nguyenvohiep.29122004@gmail.com
```

Do not use the previous university email address.

GitHub:

```text
https://github.com/nvhiep1811
```

LinkedIn:

```text
https://www.linkedin.com/in/ng-vo-hiep
```

Location:

```text
Ho Chi Minh City, Vietnam
```

## Accuracy Rules

* Do not invent professional employment history.
* Do not invent certifications, awards, metrics, user counts, performance
  improvements, or business impact.
* Do not claim unsupported technologies.
* Do not add Kubernetes or GraphQL unless the user explicitly confirms
  meaningful hands-on experience.
* Do not classify the main project as a complete microservices system when
  service-based architecture is more accurate.
* Distinguish implemented experience from topics currently being learned.
* Use conservative wording when information cannot be verified.
* Preserve dates and responsibilities from the latest source of truth.
* Do not expose secrets, credentials, tokens, internal URLs, or private
  infrastructure details.

## Required Technology

Use:

* Next.js App Router
* TypeScript with strict mode
* Tailwind CSS
* Framer Motion
* Lucide React
* ESLint
* Static export
* GitHub Actions
* GitHub Pages

Do not introduce a runtime server.

Do not use:

* API routes
* Server Actions
* Middleware
* NextAuth or server-based authentication
* Dynamic SSR
* Server-side databases
* Runtime-only environment dependencies
* Features incompatible with `output: "export"`

Use client components only when interaction genuinely requires them.

## GitHub Pages Requirements

The preferred repository is:

```text
nvhiep1811.github.io
```

The preferred production URL is:

```text
https://nvhiep1811.github.io/
```

The implementation should also remain compatible with project-site
repositories such as:

```text
https://nvhiep1811.github.io/portfolio/
```

The production build must generate:

```text
out/
```

Ensure these work after deployment:

* CSS and JavaScript assets
* Internal navigation and anchor links
* Images and local assets
* CV download
* Favicon
* Sitemap and robots files
* GitHub, LinkedIn, email, and repository links
* Direct loading of all statically generated routes

Create:

```text
public/.nojekyll
```

Verify that it is copied to:

```text
out/.nojekyll
```

## CV File

The downloadable CV must be stored at:

```text
public/CV_NguyenVoHiep_BackendDeveloper.pdf
```

Do not modify or regenerate the PDF unless explicitly requested.

Use a base-path-aware URL for the CV link.

## Content Architecture

Runtime portfolio content must be stored in centralized, typed files under:

```text
src/data/
```

Recommended files:

```text
src/data/
├── profile.ts
├── skills.ts
├── projects.ts
├── education.ts
├── learning.ts
└── navigation.ts
```

Do not scatter personal information, project data, skill lists, or social links
across components.

Components should render typed data instead of duplicating content.

## Updating from a New CV

When a new CV is supplied:

1. Read the new CV.
2. Compare it with the existing CV, `src/data/`, and `docs/CV_SUMMARY.md`.
3. Report the fields that changed.
4. Update the relevant files in `src/data/`.
5. Update `docs/CV_SUMMARY.md`.
6. Replace `public/CV_NguyenVoHiep_BackendDeveloper.pdf`.
7. Keep the existing visual design unless new content requires a layout change.
8. Do not hard-code updated content inside components.
9. Run the full validation command.
10. Report unresolved conflicts or unsupported claims.

## Design Guidelines

The visual direction must be:

* Professional
* Editorial
* Minimal
* Responsive
* Accessible
* Credible for a Backend Developer portfolio

Use:

* Warm light background
* Near-black text
* One restrained accent color
* Strong whitespace
* Clear typography and hierarchy
* Subtle borders and shadows
* Real technical diagrams or project visuals

Avoid:

* Excessive gradients or glassmorphism
* Neon or gaming-style interfaces
* Generic stock developer photos
* Technology-logo walls
* Skill percentage bars
* Excessive decorative animation

## Animation

Use subtle:

* Fade
* Slight upward reveal
* Staggered card entrance
* Small hover movement
* Link underline transitions

Support reduced motion.

Do not use:

* Bounce
* Typewriter effects
* Rotating icons
* Continuous floating objects
* Heavy parallax
* Long page transitions
* Attention-seeking looping animation

## Accessibility

Ensure:

* Semantic HTML
* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible mobile navigation
* Proper contrast
* Reduced-motion support
* Descriptive accessible names
* Sufficient touch targets
* No clickable `div` elements
* No icon-only information without labels

## Code Quality

* Use TypeScript strict mode.
* Avoid unnecessary `any`.
* Keep components focused.
* Minimize duplication.
* Use clear naming.
* Separate content from presentation.
* Do not disable linting rules without justification.
* Do not leave placeholder text or broken links.
* Do not add dependencies without a clear purpose.
* Preserve correct existing work and configuration.

## Required Package Scripts

Ensure `package.json` provides:

```json
{
  "scripts": {
    "dev": "next dev",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "validate:content": "node scripts/validate-content.mjs",
    "build": "next build",
    "check": "npm run validate:content && npm run lint && npm run typecheck && npm run build"
  }
}
```

The validation script should check at minimum:

* The official Gmail address is present.
* The old university email is absent.
* `gmai.com` is absent.
* The CV PDF exists.
* `public/.nojekyll` exists.
* Required external links use HTTPS.
* Project IDs are unique.
* Required project fields are present.
* Referenced local assets exist.
* Placeholder content is absent.
* Unsupported claims are not introduced.

## Required Validation

Before considering a task complete, run:

```bash
npm run check
```

Fix all:

* Content validation errors
* ESLint errors
* TypeScript errors
* Build errors
* Broken local paths
* Broken asset paths

Confirm that:

* `out/` is generated.
* `out/.nojekyll` exists.
* The application requires no runtime server.
* GitHub Pages deployment is configured.
* The CV link works.
* The email is exactly `nguyenvohiep.29122004@gmail.com`.
* The previous university email is absent.
* Mobile layouts do not overflow.
* Light and dark themes work.
* Reduced-motion behavior works.
* No unsupported claims were added.

## Final Response Requirements

After completing a task, report:

1. What was created or changed
2. Important files created or modified
3. Content synchronized from the CV
4. Validation commands executed
5. Content validation, lint, type-check, and build results
6. Whether `out/` and `out/.nojekyll` were generated
7. Any assumptions or unresolved issues
8. Remaining GitHub Pages deployment steps