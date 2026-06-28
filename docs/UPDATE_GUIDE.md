Portfolio CV Update Guide

This guide explains how to update the portfolio safely when the CV changes.

Goal

Keep these sources synchronized:

Latest CV
→ src/data/
→ docs/CV_SUMMARY.md
→ Portfolio UI

The downloadable PDF must remain at:

public/CV_NguyenVoHiep_BackendDeveloper.pdf

Keep this filename unchanged so the public CV link remains stable.

Source-of-Truth Order

Use:

Latest explicit user instruction
Newly attached CV
Repository CV PDF
Confirmed repository evidence
src/data/
docs/CV_SUMMARY.md
Seed content in docs/PORTFOLIO_SPEC.md
Standard Update Workflow
1. Prepare the New CV

Export the latest CV as a PDF.

Rename it to:

CV_NguyenVoHiep_BackendDeveloper.pdf
2. Replace the Repository PDF

Replace:

public/CV_NguyenVoHiep_BackendDeveloper.pdf

Do not create versioned public filenames such as:

CV_v2.pdf
CV_final.pdf
CV_latest.pdf

The stable filename avoids broken portfolio links.

3. Ask the Coding Agent to Compare Content

Use the prompt in the final section of this guide.

The agent should compare:

Personal information
Professional summary
Skills
Education
GPA
Certification
Project names
Project dates
Project responsibilities
Technologies
Repository links
Current learning focus
4. Review the Content Diff

The agent should report changes such as:

Changed:
- Professional summary
- Project 1 date
- Added JUnit and Mockito
- Updated CV PDF

Unchanged:
- Education
- TOEIC
- Project 2
- GitHub
- LinkedIn

Do not accept invented additions.

5. Update Runtime Data

Update only the relevant typed files under:

src/data/

Do not hard-code changes directly in components.

6. Update the Structured Summary

Synchronize:

docs/CV_SUMMARY.md

The summary should reflect the latest approved content.

7. Keep the Design Stable

Do not redesign the portfolio for every CV update.

Only change layout when:

A new project requires a new card or section
Text no longer fits responsibly
A new certification requires a new visual block
The user explicitly requests a redesign
8. Validate

Run:

npm run check

The command should execute:

npm run validate:content
npm run lint
npm run typecheck
npm run build

Confirm:

out/ exists
out/.nojekyll exists
CV download works
Email is correct
Old email is absent
Links work
Mobile layout does not overflow
No unsupported claims were added
9. Review Locally

Run:

npm run dev

Also test the static output with a local static server when possible.

Check:

Desktop
Mobile
Light theme
Dark theme
Reduced motion
Keyboard navigation
CV download
GitHub and LinkedIn links
10. Commit and Deploy

Example:

git add .
git commit -m "docs: update portfolio from latest CV"
git push origin main

GitHub Actions should rebuild and deploy the site.

Updating the Email

The official email is:

nguyenvohiep.29122004@gmail.com

Update it centrally in:

src/data/profile.ts

The validation script should reject:

The previous university email
gmai.com
Conflicting email values
Adding a New Project

Add the project to:

src/data/projects.ts

Include:

Unique ID
Name
Role
Date
Summary
Responsibilities
Technologies
Repository URL
Optional verified live URL
Optional local images
Featured flag

Add screenshots under:

public/projects/<project-id>/

Do not add empty demo buttons.

Do not invent a live deployment.

Adding a New Skill

Add a skill only when:

It appears in the latest CV, or
It is supported by real project work and approved by the user

Do not add technologies only to match an ATS keyword list.

Kubernetes and GraphQL must not be added without confirmed hands-on experience.

Adding a Certification

Add only verified certifications.

Include:

Exact certification name
Issuing organization
Issue date
Optional credential URL or ID

Do not describe a course as a professional certification unless it is one.

Updating Project Dates

Use:

MM/YYYY – MM/YYYY

or:

MM/YYYY – Present

Use Present only when the project is genuinely ongoing and the user confirms
it.

Updating Performance Testing Content

Performance Testing may be listed because the user has experience with k6 and
JMeter.

Do not invent:

p95 latency
Throughput
Error-rate improvements
Concurrent user numbers
Performance gains

Only add metrics when real reports are available and the user approves them.

Recommended Agent Prompt for a CV Update
Read and follow AGENTS.md before making any changes.

Review:
- docs/PORTFOLIO_SPEC.md
- docs/CV_SUMMARY.md
- docs/UPDATE_GUIDE.md
- the newly attached CV
- public/CV_NguyenVoHiep_BackendDeveloper.pdf
- the existing src/data files and portfolio implementation

Compare the new CV with the existing portfolio and report the changed fields.

Use the new CV as the source of truth for personal information, summary,
skills, education, certification, project dates, responsibilities, and links.
Use nguyenvohiep.29122004@gmail.com everywhere.

Update only the affected typed files under src/data, synchronize
docs/CV_SUMMARY.md, and replace the downloadable PDF while keeping the
filename public/CV_NguyenVoHiep_BackendDeveloper.pdf.

Preserve the existing design unless the new content requires a layout change.
Do not invent experience, certifications, technologies, achievements, or
performance metrics.

Run npm run check, fix all errors, confirm that out/ and out/.nojekyll are
generated, and provide a field-by-field change report.