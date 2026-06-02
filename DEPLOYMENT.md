# Vercel Deployment

The application is designed for Vercel with Neon Postgres and Vercel Blob. Each service has a free tier suitable for the initial launch. Review provider limits before a higher-traffic production rollout.

## 1. Create Production Services

1. Create a Neon project and copy its pooled Postgres connection string.
2. Import the GitHub repository into Vercel.
3. Create a Vercel Blob store and connect it to the Vercel project.

## 2. Configure Environment Variables

Add these variables to the Vercel project:

```text
PAYLOAD_SECRET=<long-random-secret>
DATABASE_URL=<pooled-neon-postgres-connection-string>
NEXT_PUBLIC_SERVER_URL=https://<production-domain>
BLOB_READ_WRITE_TOKEN=<vercel-blob-token>
```

Use a different `PAYLOAD_SECRET` from local development. Keep all production values private.

## 3. Deploy and Configure the CMS

1. Deploy the Vercel project.
2. Open `https://<production-domain>/admin`.
3. Create the first administrator account.
4. Add announcements, updates, blog posts, and gallery items through the CMS.
5. Upload media through the Media collection so files are stored in Vercel Blob.

## 4. Connect a Custom Domain

Add the final domain in the Vercel project settings, update the DNS records requested by Vercel, and set `NEXT_PUBLIC_SERVER_URL` to the final HTTPS URL.

## Reference Documentation

- [Payload deployment guide](https://payloadcms.com/docs/production/deployment)
- [Payload Postgres adapter](https://payloadcms.com/docs/database/postgres)
- [Payload storage adapters](https://payloadcms.com/docs/upload/storage-adapters)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
- [Neon plans](https://neon.com/docs/introduction/plans)
