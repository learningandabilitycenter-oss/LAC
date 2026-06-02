# Learning & Ability Counselling Centre

Next.js and Payload CMS website for Learning & Ability Counselling Centre (LAC) and Neuro Bridge Foundation (NBF).

## Stack

- Next.js 16 and React 19
- Payload CMS 3
- SQLite for local development
- Neon Postgres for production
- Vercel Blob for persistent CMS media uploads
- Vercel for deployment

## Local Setup

1. Copy `.env.example` to `.env`.
2. Replace `PAYLOAD_SECRET` with a local secret.
3. Install dependencies with `npm install`.
4. Start the site with `npm run dev`.
5. Visit `http://localhost:3000`.
6. Visit `http://localhost:3000/admin` to create the first CMS administrator.

## CMS Collections

- Blog posts
- Announcements
- Updates
- Gallery items
- Media uploads
- Users

## Production Environment

Configure these variables in Vercel:

- `PAYLOAD_SECRET`
- `DATABASE_URL` using a pooled Neon Postgres connection string
- `NEXT_PUBLIC_SERVER_URL`
- `BLOB_READ_WRITE_TOKEN` after connecting Vercel Blob storage

Vercel runs `npm run ci`, which applies pending Payload Postgres migrations before building the application. When the CMS schema changes, generate and commit a migration:

```bash
DATABASE_URL=postgresql://... npm run payload migrate:create describe-the-change
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the complete production checklist.

## Transition Note

The previous GitHub Pages prototype remains in the repository root until the Vercel application is deployed and the domain is moved. The new application is served by Next.js from `src/`.
