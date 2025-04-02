This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Folder Structure
idme_demo/
├── src/
│   ├── app/                     # Core application directory
│   │   ├── layout.tsx           # Root layout (applies to all routes) - You have this!
│   │   ├── page.tsx             # Root page (maps to '/') - You have this!
│   │   │                        # (This could be your login page OR a different home page)
│   │   │
│   │   ├── login/               # Route segment for '/login' (Alternative location for login)
│   │   │   └── page.tsx         # UI for the '/login' path
│   │   │
│   │   ├── (auth)/              # Optional: Route Group for auth-related pages
│   │   │   ├── login/           # Example: '/login' within the group
│   │   │   │   └── page.tsx
│   │   │   └── forgot-password/ # Example: '/forgot-password'
│   │   │       └── page.tsx
│   │   │
│   │   ├── _components/         # Optional: Private folder for components specific to a route segment
│   │   │   └── login-specific-component.tsx
│   │   │
│   │   └── globals.css          # Global styles imported in layout.tsx
│   │   └── ...                  # Other routes, loading.tsx, error.tsx files
│   │
│   ├── components/              # **Reusable UI components (App-wide)**
│   │   ├── Header.tsx           # Header component (May need 'use client')
│   │   ├── LoginForm.tsx        # Login form component (Needs 'use client' due to useState)
│   │   ├── Footer.tsx           # Footer component (May need 'use client')
│   │   └── ...                  # Other shared components
│   │
│   ├── lib/                     # Utility functions, helpers, API logic
│   │   └── auth.ts              # Example auth functions
│   │
│   └── styles/                  # Optional: Other styling resources (fonts, themes)
│       └── uswds-theme.scss      # Example USWDS overrides
│
├── public/                      # Static assets (images, fonts)
│   ├── favicon.ico
│   └── img/
│       └── usa-icons/
│           └── close.svg
│
├── .env.local                   # Environment variables (local)
├── .eslintrc.json
├── .gitignore
├── next.config.mjs              # Next.js configuration (note .mjs common now)
├── package.json
├── postcss.config.js            # PostCSS config (for Tailwind/USWDS)
├── README.md
├── tailwind.config.ts           # Tailwind config (if using)
└── tsconfig.json                # TypeScript configuration
