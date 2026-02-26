# GEMINI.md - timrodz.dev Monorepo

This document serves as the primary instructional context for Gemini CLI interactions within the `timrodz.dev` monorepo.

## Project Overview

A comprehensive monorepo for `timrodz.dev`, managing both a personal blog and a portfolio application. It utilizes a modern tech stack focused on performance, developer experience, and shared UI components.

- **Type:** Code Project (Monorepo)
- **Architecture:** [Turborepo](https://turbo.build/) with [Bun](https://bun.sh/) as the package manager.
- **Frontend:** [Next.js 16](https://nextjs.org/) (React 19) using the App Router.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with shared configurations.
- **Content:** MDX-driven blog posts and project showcases.
- **Shared Packages:** Internal packages for UI components, ESLint, Tailwind, and TypeScript configurations.

## Building and Running

The project uses `turbo` for task orchestration. Prefer running these commands from the root directory using `bun`.

- **Development:** `bun run dev` (Starts all apps)
- **Build:** `bun run build` (Builds all apps and packages)
- **Lint:** `bun run lint` (Lints the entire codebase)
- **Typecheck:** `bun run typecheck` (Performs TypeScript validation)
- **Format:** `bun run format` (Runs Prettier on all files)
- **Resume Update:** `bun run update-resume <path-to-pdf>` (Synchronizes resume across apps)

## Repository Structure

- `apps/blog/`: The Next.js blog application.
  - `blog-posts/`: MDX files for blog content.
  - `projects/`: MDX files for project content.
- `apps/portfolio/`: The Next.js portfolio application.
- `packages/ui/`: Shared React component library (`@repo/ui`).
- `packages/eslint-config/`: Shared ESLint rules.
- `packages/tailwind-config/`: Shared Tailwind CSS styles and configuration.
- `packages/typescript-config/`: Shared `tsconfig.json` bases.
- `scripts/`: Maintenance scripts, including resume synchronization.

## Development Conventions

### General
- **Package Manager:** Exclusively use `bun` for installing dependencies and running scripts.
- **TypeScript:** Strict typing is enforced. Use the `@repo/typescript-config` bases.
- **Linting:** Follow the project's ESLint rules (Next.js + Prettier).

### Components & Styling
- **UI Library:** Prefer using or extending components from `packages/ui`.
- **Styling:** Use Tailwind CSS 4 utility classes. Shared components in `packages/ui` use a `ui-` prefix for clarity.
- **Icons:** Use `lucide-react` for iconography.

### Content Management
- **MDX:** Blog posts and projects are written in MDX. Content utilities for parsing and rendering can be found in `apps/blog/utils/mdx.ts`.

### Path Aliases
- In applications, `~/*` is configured to point to the application root for cleaner imports.
- Use `@repo/ui/*` for shared component imports.

---

*Note: This file is intended for AI context and should be updated whenever significant architectural changes occur.*
