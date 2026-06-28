# Portfolio Product and Engineering Specification

## 1. Purpose

Build a complete, production-ready personal developer portfolio for
**Nguyen Vo Hiep**.

The portfolio is intended for:

* Backend Developer internships
* Entry-level Backend Developer roles
* Junior Software Engineer roles
* Java and Spring Boot opportunities
* Cloud and distributed-system-focused opportunities

The website must communicate credible project experience in backend
development, security, databases, messaging, testing, cloud deployment, and
supporting web and mobile development.

Use `docs/CV_SUMMARY.md`, the latest CV PDF, and `src/data/` for exact personal
and project content.

## 2. Product Principles

The portfolio must be:

* Professional
* Clear
* Technically credible
* Responsive
* Accessible
* SEO-friendly
* Maintainable
* Easy to update after a CV revision
* Deployable as a fully static GitHub Pages website

Do not create a generic developer template.

Do not invent experience, certifications, metrics, achievements, or
technologies.

## 3. Required Stack

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

Only introduce additional dependencies when they provide clear value.

## 4. Static Export Constraints

The application must work with:

```bash
npm install
npm run dev
npm run check
```

The production build must generate:

```text
out/
```

Use static-export-compatible features only.

Do not use:

* API routes
* Server Actions
* Middleware
* NextAuth
* Dynamic SSR
* Server-side databases
* Runtime server dependencies
* ISR
* Runtime redirects or rewrites
* Dynamic routes without statically generated parameters

A static single-page portfolio is preferred.

## 5. Next.js Configuration

Configure `next.config.ts` to support both user-site and project-site
repositories.

Expected behavior:

* `nvhiep1811.github.io` uses an empty base path.
* Other repositories use `/<repository-name>`.
* Static assets, images, CV links, and navigation work under either setup.
* Images are compatible with static export.
* Trailing slashes are enabled.

Reference configuration:

```ts
import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repositoryName === "nvhiep1811.github.io";
const basePath = isUserSite || !repositoryName ? "" : `/${repositoryName}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Create a reusable helper for base-path-aware local asset URLs.

## 6. GitHub Pages Deployment

Create:

```text
.github/workflows/deploy-pages.yml
```

The workflow must:

* Run on pushes to `main`
* Support `workflow_dispatch`
* Use `npm ci`
* Run `npm run check`
* Upload `out/`
* Deploy through GitHub Pages
* Use official GitHub Actions
* Use deployment concurrency
* Use the required permissions
* Expose the deployed page URL through the GitHub Pages environment

Use the current stable major versions of:

* `actions/checkout`
* `actions/setup-node`
* `actions/configure-pages`
* `actions/upload-pages-artifact`
* `actions/deploy-pages`

Required permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

Required concurrency:

```yaml
concurrency:
  group: pages
  cancel-in-progress: true
```

Required deployment environment:

```yaml
environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}
```

Document this setting:

```text
Repository Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
```

## 7. Public Files

Create or preserve:

```text
public/
├── .nojekyll
├── CV_NguyenVoHiep_BackendDeveloper.pdf
├── favicon.svg
└── projects/
```

Verify:

```text
out/.nojekyll
```

Do not regenerate the CV unless explicitly requested.

## 8. Visual Direction

Create a modern editorial portfolio adapted for software engineering.

Use:

* Warm off-white or light cream default background
* Near-black text
* One restrained accent color, such as muted blue or dark green
* Strong whitespace
* Large editorial section headings
* Clean technical diagrams
* Soft borders
* Restrained shadows
* Consistent spacing
* Professional typography
* Responsive layouts

Suggested fonts through `next/font`:

* Headings: Space Grotesk or Manrope
* Body: Inter
* Technical labels: JetBrains Mono

Avoid:

* Excessive gradients
* Excessive glassmorphism
* Neon effects
* Gaming-style interfaces
* Heavy glowing effects
* Stock photos of generic programmers or laptops
* Large technology-logo walls
* Skill percentage bars
* Decorative clutter

Support:

* Light theme as default
* Dark theme
* System theme detection
* Theme preference persistence

## 9. Animation

Use Framer Motion sparingly.

Allowed:

* Fade in
* Slight upward reveal
* Staggered skill-card entrance
* Small project-card hover movement
* Animated link underline
* Smooth anchor scrolling
* Subtle theme transition

Typical duration:

```text
0.3–0.7 seconds
```

Support `prefers-reduced-motion`.

Do not use:

* Bounce
* Typewriter effects
* Rotating technology icons
* Continuous floating elements
* Heavy parallax
* Long page transitions
* Repeating attention-seeking animation
* Animation on every individual word

## 10. Information Architecture

Create a responsive single-page portfolio with:

1. Header
2. Hero
3. About
4. Core Skills
5. Featured Projects
6. Additional Projects
7. Education and Certification
8. Current Learning Focus
9. Contact
10. Footer

Use semantic section IDs:

```text
#home
#about
#skills
#projects
#education
#contact
```

Navigation:

* Home
* About
* Skills
* Projects
* Education
* Contact

Requirements:

* Sticky navigation
* Active-section indication
* Smooth scrolling
* Accessible mobile menu
* Keyboard support
* Visible focus states
* No horizontal overflow
* Responsive behavior from 320px upward

## 11. Hero

Include:

* Full name
* Target role
* Strong backend-focused headline
* Concise professional summary
* Availability badge
* View Projects button
* Download CV button
* GitHub, LinkedIn, and email links

Do not use a fake profile photograph.

Use an original technical visual such as:

* Initials-based monogram
* Architecture-inspired diagram
* Technical grid
* Abstract system-flow visualization
* Infrastructure composition

## 12. About

Use the latest summary from `docs/CV_SUMMARY.md`.

Add compact information cards for:

* Location
* Education
* University
* GPA
* TOEIC
* Availability

Keep the text readable and avoid overly wide paragraphs.

## 13. Skills

Use clean skill-category cards.

Recommended categories:

* Backend and Security
* Data and Messaging
* Architecture and Cloud
* Testing and Delivery
* Frontend and Mobile
* Professional Skills

Do not display subjective percentage bars.

Use visual emphasis for the most relevant backend skills without implying
unsupported proficiency levels.

## 14. Featured Projects

Use the two featured projects from `docs/CV_SUMMARY.md`.

Each featured project should include:

* Project name
* Role
* Date
* Summary
* Key responsibilities
* Main technologies
* Repository link
* Real project visual or technical diagram

### Main Project Visual

Create a responsive HTML and CSS architecture visualization showing the general
flow from clients through an API Gateway to domain services and infrastructure.

Create a second event-flow diagram showing:

```text
Business Transaction
→ Outbox Table
→ Debezium
→ Kafka
→ Consumers
```

Do not invent a live demo URL.

Do not invent performance metrics.

### Second Project Visual

Use a visually consistent but mirrored layout.

A technical visual may represent:

* Authentication flow
* Product search and filtering
* REST API modules
* Relational entity relationships

## 15. Additional Projects

Create compact cards for supported additional projects from
`docs/CV_SUMMARY.md`.

Each card should contain:

* Name
* Short description
* Technologies
* Repository link

Do not create empty demo buttons.

## 16. Education and Certification

Render exact information from `src/data/` and `docs/CV_SUMMARY.md`.

Do not invent certifications.

Clearly separate education from certification.

## 17. Current Learning Focus

Present learning topics as current areas of improvement.

Do not use wording that suggests expert-level mastery.

## 18. Contact

Use the exact official contact data from `AGENTS.md` and `src/data/profile.ts`.

Include:

* Headline
* Brief opportunity statement
* Send Email button
* View GitHub button
* Download CV button
* GitHub
* LinkedIn
* Email
* Location

Do not create a form that requires a backend.

## 19. Footer

Include:

* Nguyen Vo Hiep
* Backend Developer
* Current year
* GitHub
* LinkedIn
* Email
* Back to top

## 20. Content Architecture

Keep runtime content under `src/data/`.

Recommended structure:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── education.ts
│   ├── learning.ts
│   └── navigation.ts
├── lib/
│   ├── base-path.ts
│   └── utils.ts
└── types/
    └── portfolio.ts
```

Create strong types for:

* Profile
* Social link
* Skill category
* Project
* Education
* Certification
* Learning topic
* Navigation item

Do not hard-code duplicated content inside section components.

## 21. SEO

Use:

### Title

```text
Nguyen Vo Hiep | Backend Developer
```

### Description

```text
Backend Developer portfolio of Nguyen Vo Hiep, featuring Java, Spring Boot,
RESTful APIs, PostgreSQL, Redis, Kafka, Docker, AWS, automated testing,
performance testing, and cloud deployment projects.
```

Include:

* Metadata
* Open Graph metadata
* Twitter metadata
* Canonical URL
* Favicon
* `robots.txt`
* `sitemap.xml`
* Semantic heading hierarchy
* Descriptive link labels
* Appropriate structured data

Use:

```text
NEXT_PUBLIC_SITE_URL
```

Preferred production URL:

```text
https://nvhiep1811.github.io
```

## 22. Accessibility

Ensure:

* Semantic HTML
* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* Proper contrast
* Accessible mobile navigation
* Descriptive `aria-label` values
* Reduced-motion support
* No clickable `div` elements
* Icons are not the only communication method
* Decorative visuals are hidden from assistive technology when appropriate
* External links indicate new-tab behavior
* Buttons and links have clear accessible names
* Touch targets are sufficiently large

## 23. Performance

Target:

```text
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

Use:

* Static generation
* Minimal client-side JavaScript
* Optimized SVG assets
* Lazy loading
* Reusable components
* Efficient font loading
* Minimal dependencies

Avoid:

* Heavy video backgrounds
* Autoplay media
* Unnecessary chart libraries
* Large logo libraries
* Hydration-heavy sections without a real need

## 24. Responsive Behavior

Support:

* Mobile 320px+
* Tablet
* Laptop
* Desktop
* Large desktop

On mobile:

* Stack project content vertically.
* Keep body text at least 16px.
* Avoid horizontal scrolling.
* Keep diagrams readable.
* Use an accessible navigation menu.
* Keep buttons easy to tap.
* Wrap repository names and technology badges safely.
* Prevent contact and footer overflow.

## 25. Content Validation

Create:

```text
scripts/validate-content.mjs
```

Validate at minimum:

* Official Gmail address
* Absence of old university email
* Absence of `gmai.com`
* CV PDF existence
* `.nojekyll` existence
* HTTPS external URLs
* Required project fields
* Unique IDs
* Existing referenced local files
* Absence of placeholder text
* Absence of unsupported Kubernetes or GraphQL claims unless explicitly
  confirmed

## 26. README Requirements

Create a professional `README.md` containing:

* Project overview
* Technology stack
* Portfolio sections
* Local setup
* Node.js version
* Installation
* Development commands
* Validation and build commands
* Folder structure
* Content customization
* Updating personal information
* Updating email
* Replacing the CV PDF
* Adding project screenshots
* Updating project data
* GitHub Pages setup
* GitHub Actions deployment
* Base-path explanation
* User-site and project-site deployment
* Troubleshooting broken CSS or images
* Testing the static export locally
* License

## 27. Final Validation

Run:

```bash
npm run check
```

Verify:

* Content validation passes.
* ESLint passes.
* Type checking passes.
* Production build passes.
* `out/` exists.
* `out/.nojekyll` exists.
* The app requires no runtime server.
* GitHub Pages workflow is valid.
* CV download works.
* Navigation works.
* External links work.
* The official email is correct.
* The previous university email is absent.
* Mobile layouts do not overflow.
* Light and dark themes work.
* Reduced-motion behavior works.
* No unsupported claims were added.

## 28. Completion Report

Report:

1. Files created or modified
2. Main design decisions
3. Content synchronized from the CV
4. Commands executed
5. Validation, lint, type-check, and build results
6. Whether `out/` and `out/.nojekyll` were generated
7. Assumptions or unresolved issues
8. Remaining deployment steps