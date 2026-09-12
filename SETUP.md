# BINUS Chess Club — Setup & Deployment Guide

> Complete guide to build, run, and deploy the BINUS Chess Club landing page.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Overview](#project-overview)
- [Getting Started (Local Development)](#getting-started-local-development)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)
- [Deploying to Vercel](#deploying-to-vercel)
- [Deploying to Render.com](#deploying-to-rendercom)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

| Tool       | Minimum Version | Recommended        |
| ---------- | --------------- | ------------------ |
| **Node.js** | 18.x            | 20.x or later (LTS) |
| **npm**     | 9.x             | 10.x or later       |
| **Git**     | 2.x             | Latest             |

> **Note:** The project also includes a `bun.lockb` lockfile, so [Bun](https://bun.sh/) can be used as an alternative package manager / runtime.

---

## Project Overview

| Item             | Detail                                                                     |
| ---------------- | -------------------------------------------------------------------------- |
| **Framework**    | React 18 + TypeScript                                                      |
| **Build Tool**   | Vite 5                                                                     |
| **Styling**      | Tailwind CSS 3 + shadcn/ui components                                      |
| **Routing**      | React Router DOM v6 (client-side SPA)                                      |
| **UI Extras**    | Framer Motion, Radix UI primitives, Recharts, react-chessboard, chess.js   |
| **Dev Port**     | `8080` (configured in `vite.config.ts`)                                    |
| **Output Dir**   | `dist/`                                                                    |

---

## Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/Binus-Chess-Club/binus-chess-club-landing.git
cd binus-chess-club-landing
```

### 2. Install dependencies

Using **npm**:

```bash
npm install
```

Or using **Bun**:

```bash
bun install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:8080**.

> Vite is configured to listen on all interfaces (`host: "::"`) on port **8080**.

---

## Available Scripts

| Command             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `npm run dev`       | Start the Vite dev server (hot-reload, port 8080)            |
| `npm run build`     | Build for **production** (outputs to `dist/`)                |
| `npm run build:dev` | Build with **development** mode (includes dev-only plugins)  |
| `npm run preview`   | Locally preview the production build                         |
| `npm run lint`      | Run ESLint across the project                                |

---

## Project Structure

```
binus-chess-club-landing/
├── public/                  # Static assets (images, favicon, robots.txt)
│   ├── achievements/        # Achievement images
│   ├── events/              # Event images
│   ├── person/              # Team member photos
│   ├── lovable-uploads/     # Uploaded media assets
│   ├── favicon.ico
│   ├── logo.png
│   └── robots.txt
│
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # shadcn/ui primitives (Button, Card, etc.)
│   │   ├── about/           # About page components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   ├── Hero.tsx         # Hero section
│   │   ├── EventCard.tsx    # Event card component
│   │   ├── TeamCard.tsx     # Team member card
│   │   ├── PGNViewer.tsx    # Chess PGN game viewer
│   │   └── SectionNav.tsx   # Section navigation
│   │
│   ├── data/                # Static data (articles, events, team members)
│   │   ├── articles/        # Article markdown/data
│   │   ├── articles2.ts     # Article metadata
│   │   ├── events.ts        # Events data
│   │   └── person.ts        # Team member data
│   │
│   ├── features/            # Feature modules
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions (cn, etc.)
│   ├── pages/               # Route page components
│   │   ├── Index.tsx        # Home page
│   │   ├── Team.tsx         # Team page
│   │   ├── Alumni.tsx       # Alumni page
│   │   ├── Events.tsx       # Events listing
│   │   ├── EventDetail.tsx  # Single event page
│   │   ├── Articles.tsx     # Articles listing
│   │   ├── ArticleDetail.tsx# Single article page
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact page
│   │   ├── Learn.tsx        # Learn chess page
│   │   └── NotFound.tsx     # 404 page
│   │
│   ├── App.tsx              # Root component with routing
│   ├── App.css              # App-level styles
│   ├── main.tsx             # Entry point (React DOM render)
│   └── index.css            # Global styles + Tailwind directives
│
├── index.html               # HTML entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── components.json           # shadcn/ui configuration
├── vercel.json               # Vercel deployment config (SPA rewrites)
├── postcss.config.js         # PostCSS plugins
├── eslint.config.js          # ESLint configuration
└── package.json              # Dependencies & scripts
```

---

## Environment Variables

**This project does not currently use any environment variables.** There is no `.env` file, and no references to `import.meta.env` or `process.env` exist in the source code.

All data (articles, events, team members) is statically defined in TypeScript files under `src/data/`.

> **If you add environment variables in the future**, create a `.env` file at the project root using Vite's convention:
>
> ```env
> # .env
> VITE_API_URL=https://api.example.com
> VITE_ANALYTICS_ID=UA-XXXXXXXXX
> ```
>
> - Variables **must** be prefixed with `VITE_` to be exposed to the client-side code.
> - Access them via `import.meta.env.VITE_API_URL` in your source code.
> - **Never** commit `.env` files containing secrets — add `.env` to `.gitignore`.

---

## Building for Production

```bash
npm run build
```

This generates an optimized static bundle in the `dist/` directory. To preview it locally:

```bash
npm run preview
```

The `dist/` folder contains everything needed for deployment — pure static HTML, CSS, JS, and assets.

---

## Deploying to Vercel

The project already includes a [`vercel.json`](vercel.json) configuration file that handles SPA client-side routing rewrites.

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Push your code** to a GitHub/GitLab/Bitbucket repository.

2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.

3. **Import** your repository.

4. Vercel will auto-detect the Vite framework. Verify these settings:

   | Setting              | Value          |
   | -------------------- | -------------- |
   | **Framework Preset** | Vite           |
   | **Build Command**    | `npm run build`|
   | **Output Directory** | `dist`         |
   | **Install Command**  | `npm install`  |
   | **Node.js Version**  | 18.x or 20.x  |

5. Click **Deploy**. Vercel will build and deploy your site automatically.

6. **(Optional)** Set up a custom domain in **Project Settings → Domains**.

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (follow the prompts)
vercel

# Deploy to production
vercel --prod
```

### Vercel SPA Routing

The included `vercel.json` ensures all non-API routes are rewritten to `/index.html`, allowing React Router to handle client-side navigation:

```json
{
  "rewrites": [
    {
      "source": "/((?!api/.*).*)",
      "destination": "/index.html"
    }
  ]
}
```

### Environment Variables on Vercel

If you add environment variables in the future:

1. Go to **Project Settings → Environment Variables**.
2. Add each variable with the `VITE_` prefix.
3. Select the environments (Production, Preview, Development).
4. Redeploy for changes to take effect.

---

## Deploying to Render.com

Render.com can host this project as a **Static Site**.

### Step-by-Step

1. **Push your code** to a GitHub/GitLab repository.

2. Go to [render.com](https://render.com) and click **"New" → "Static Site"**.

3. **Connect** your repository.

4. Configure the following settings:

   | Setting              | Value          |
   | -------------------- | -------------- |
   | **Name**             | `binus-chess-club` (or your preference) |
   | **Branch**           | `main`         |
   | **Build Command**    | `npm install && npm run build` |
   | **Publish Directory**| `dist`         |

5. Under **Redirects/Rewrites**, add a rewrite rule for SPA routing:

   | Source     | Destination    | Action    |
   | ---------- | -------------- | --------- |
   | `/*`       | `/index.html`  | Rewrite   |

   > This is **critical** — without it, refreshing on any route other than `/` will return a 404.

6. Click **"Create Static Site"**. Render will build and deploy automatically.

7. **(Optional)** Set up a custom domain in **Settings → Custom Domains**.

### Environment Variables on Render

If you add environment variables in the future:

1. Go to your Static Site's **Environment** tab.
2. Add each variable with the `VITE_` prefix.
3. Trigger a manual deploy for changes to take effect.

### Alternative: Deploy as a Web Service (Node.js)

If you later need server-side functionality (e.g., API routes), you can deploy as a **Web Service** instead:

1. Choose **"New" → "Web Service"**.
2. Set the **Build Command** to `npm install && npm run build`.
3. Set the **Start Command** to `npx serve dist -s -l 10000` (or use `vite preview`).
4. Set the **Environment** to **Node**.

> For a purely static site like this one, the **Static Site** option is simpler and cheaper (free tier available).

---

## Troubleshooting

### Common Issues

| Issue | Solution |
| ----- | -------- |
| **Port 8080 already in use** | Kill the process using the port: `lsof -ti:8080 \| xargs kill -9`, or change the port in `vite.config.ts`. |
| **404 on page refresh (deployed)** | Ensure SPA rewrite rules are configured (see Vercel/Render sections above). |
| **`node_modules` issues** | Delete `node_modules` and `package-lock.json`, then run `npm install` fresh. |
| **TypeScript errors during build** | Run `npm run lint` to identify issues. The project has relaxed TS settings (`noImplicitAny: false`, `strictNullChecks: false`). |
| **Tailwind styles not applying** | Ensure `postcss.config.js` and `tailwind.config.ts` are present and `index.css` includes `@tailwind` directives. |

### Verifying the Build

```bash
# Build and preview locally
npm run build
npm run preview
```

Visit the preview URL to confirm everything works before deploying.

---

## Quick Reference

```bash
# Clone & setup
git clone https://github.com/Binus-Chess-Club/binus-chess-club-landing.git
cd binus-chess-club-landing
npm install

# Develop
npm run dev              # → http://localhost:8080

# Build & preview
npm run build
npm run preview

# Lint
npm run lint

# Deploy (Vercel CLI)
vercel --prod
```
