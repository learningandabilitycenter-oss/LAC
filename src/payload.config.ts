import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Announcements } from './collections/Announcements'
import { GalleryItems } from './collections/GalleryItems'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Updates } from './collections/Updates'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const databaseURL = process.env.DATABASE_URL || 'file:./lac-cms.db'
const usePostgres = databaseURL.startsWith('postgres://') || databaseURL.startsWith('postgresql://')
const useBlobStorage = Boolean(process.env.BLOB_READ_WRITE_TOKEN)

if (process.env.VERCEL && !process.env.PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET must be configured before deploying to Vercel.')
}

if (process.env.VERCEL && !usePostgres) {
  throw new Error('A Neon Postgres DATABASE_URL must be configured before deploying to Vercel.')
}

if (process.env.VERCEL && !useBlobStorage) {
  throw new Error('BLOB_READ_WRITE_TOKEN must be configured before deploying to Vercel.')
}

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: '- LAC CMS',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Users, Media, Posts, Announcements, Updates, GalleryItems],
  db: usePostgres
    ? postgresAdapter({
        pool: {
          connectionString: databaseURL,
        },
      })
    : sqliteAdapter({
        client: {
          url: databaseURL,
        },
      }),
  editor: lexicalEditor(),
  plugins: [
    vercelBlobStorage({
      clientUploads: true,
      collections: {
        media: true,
      },
      enabled: useBlobStorage,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || 'local-development-secret-change-before-deploying',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
