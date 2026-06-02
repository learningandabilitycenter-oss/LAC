# LAC Website — Vercel Deployment Guide

The LAC website runs on **Next.js 16 + Payload CMS 3.85** and requires three backing services on Vercel: **Neon Postgres** (database), **Vercel Blob** (media storage), and a **domain connection** (lacc.org.in).

> **Important:** The current Vercel project "arbor" is a different project. You need to create a NEW Vercel project for the LAC website.

---

## Step 1: Create a Neon Postgres Database

1. Go to [neon.tech](https://neon.tech) and sign up (free tier works).
2. Create a new project (name it "lac-website" or similar).
3. Copy the **pooled connection string** — it looks like:
   ```
   postgresql://user:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require
   ```
4. Keep this string safe — you'll need it in Step 3.

## Step 2: Push Code to GitHub

1. Create a new GitHub repository (e.g., `lac-website`).
2. Push this project code to the repository:
   ```bash
   git init
   git add .
   git commit -m "LAC website — initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lac-website.git
   git push -u origin main
   ```

## Step 3: Create a New Vercel Project

1. Go to [vercel.com](https://vercel.com) → **Add New Project**.
2. Import the GitHub repository you just created.
3. Set the **Framework Preset** to **Next.js**.
4. Before deploying, add these **Environment Variables**:

   | Variable | Value |
   |----------|-------|
   | `PAYLOAD_SECRET` | A long random string (generate one at [generate-secret.vercel.app](https://generate-secret.vercel.app/64)) |
   | `DATABASE_URL` | Your Neon pooled connection string from Step 1 |
   | `NEXT_PUBLIC_SERVER_URL` | `https://www.lacc.org.in` (or your Vercel URL initially) |

5. Click **Deploy**.

The repository's Vercel build command runs `npm run ci`, which applies pending Payload migrations before building the application. The initial migration creates the CMS tables in a new Neon database automatically.

## Step 4: Add Vercel Blob Storage

1. In your Vercel project dashboard, go to **Storage** → **Create Store** → **Blob**.
2. Name it "lac-media" and connect it to your project.
3. This automatically adds the `BLOB_READ_WRITE_TOKEN` environment variable.
4. **Redeploy** the project after connecting Blob storage.

## Step 5: Connect the Domain

1. In Vercel project settings → **Domains** → add `lacc.org.in`.
2. Vercel will show DNS records to configure:
   - For root domain: add an **A record** pointing to `76.76.21.21`
   - For www: add a **CNAME record** pointing to `cname.vercel-dns.com`
3. Configure these DNS records with your domain registrar.
4. Wait for DNS propagation (usually 5–30 minutes).
5. Update `NEXT_PUBLIC_SERVER_URL` to the canonical URL, `https://www.lacc.org.in`, if you haven't already.

## Step 6: Set Up the CMS

1. Visit `https://www.lacc.org.in/admin` (or your Vercel URL + /admin).
2. Create the first administrator account (use the client's email).
3. Start adding content:
   - **Announcements** — banner notices for the homepage
   - **Posts** — insight articles/blog posts
   - **Gallery Items** — photos and videos
   - **Updates** — news from the centre and foundation
   - **Media** — upload images (stored in Vercel Blob)
4. **Enquiries** will automatically appear in the CMS as visitors submit the contact form.

### CMS Editor Workflow

- Upload images in **Media** and provide alternative text. These uploads can be reused in posts, updates, and gallery items.
- In **Gallery Items**, choose **Image** and select a media upload, or choose **Video** and add a YouTube or direct HTTPS video URL.
- Enable **Featured** on gallery items and posts that should be prioritized in the homepage previews.
- Publish insight posts after editing. Draft posts remain hidden from the public site.
- Keep an announcement **Active** to show it in the homepage banner. The newest active announcement is displayed first.
- Content changes appear on the public site immediately after saving; a Vercel redeploy is not required for routine CMS edits.

## Step 7: Email Notifications for Enquiries (Optional)

The enquiry form saves all submissions to the CMS database. To also receive email notifications:

1. Sign up for [Resend](https://resend.com) (free tier: 3,000 emails/month).
2. Get your API key and add it as `RESEND_API_KEY` in Vercel environment variables.
3. Add a `afterChange` hook to the Enquiries collection that sends a notification email to `vinni.anneypsychologist@gmail.com`.

Without this setup, the client should check `/admin` → **Enquiries** regularly for new submissions.

---

## Environment Variables Summary

| Variable | Required | Description |
|----------|----------|-------------|
| `PAYLOAD_SECRET` | Yes | Random secret for CMS authentication |
| `DATABASE_URL` | Yes | Neon Postgres pooled connection string |
| `NEXT_PUBLIC_SERVER_URL` | Yes | Production URL (https://lacc.org.in) |
| `BLOB_READ_WRITE_TOKEN` | Yes | Auto-added when Vercel Blob is connected |
| `RESEND_API_KEY` | Optional | For email notifications on enquiry submissions |

## Local Development

```bash
cp .env.example .env    # Edit with your local values
npm install
npm run dev             # Opens at http://localhost:3000
```

Local development uses SQLite (no Postgres needed). The CMS admin is at `http://localhost:3000/admin`.

## CMS Schema Changes

Payload automatically updates the local development database. For production, generate and commit a Postgres migration whenever collections or fields change:

```bash
DATABASE_URL=postgresql://... npm run payload migrate:create describe-the-change
```

Vercel applies pending migrations during `npm run ci` before each production build.

## Reference

- [Payload CMS docs](https://payloadcms.com/docs)
- [Neon Postgres](https://neon.tech/docs)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
- [Vercel Domains](https://vercel.com/docs/projects/domains)
