# sparc-main

Main website for the SPARC group of subdomain apps, with a reports section that will pull data from the apps' Supabase databases.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Supabase · hosted on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase URL and key
npm run dev
```

Open http://localhost:3000.

## Project structure

- `src/app/` – pages (`page.tsx` = homepage, `reports/` = reports page)
- `src/components/` – shared UI components
- `src/config/apps.ts` – list of subdomain apps (names, descriptions, URLs)
- `src/lib/supabase/` – Supabase clients (`client.ts` for the browser, `server.ts` for the server)

## Environment variables

Set these in Vercel → Project → Settings → Environment Variables:

| Name | Where to find it |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase → Project Settings → API Keys (publishable / anon key) |

Never expose the Supabase `service_role` / secret key in a `NEXT_PUBLIC_` variable.
