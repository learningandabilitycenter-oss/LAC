import { getPayload } from 'payload'

import config from '@/payload.config'

export type CmsMedia = {
  alt?: string | null
  url?: string | null
}

export type Article = {
  category: string
  content?: unknown
  excerpt: string
  featured?: boolean | null
  heroImage?: CmsMedia | number | null
  publishedAt: string
  slug: string
  title: string
}

export type Announcement = {
  linkLabel?: string | null
  linkUrl?: string | null
  summary: string
  title: string
  type: string
}

export type Update = {
  image?: CmsMedia | number | null
  publishedAt: string
  slug: string
  summary: string
  title: string
  type: string
}

export type GalleryItem = {
  description?: string | null
  eventDate?: string | null
  featured?: boolean | null
  image?: CmsMedia | number | null
  mediaType: string
  title: string
  videoUrl?: string | null
}

const fallbackArticles: Article[] = [
  {
    category: 'Parent guidance',
    excerpt:
      'A practical guide to observing progress, supporting routines, and reinforcing therapy strategies with patience at home.',
    publishedAt: '2026-05-20T00:00:00.000Z',
    slug: 'parents-as-partners-in-progress',
    title: 'Parents as Partners in a Child’s Progress',
  },
  {
    category: 'Learning support',
    excerpt:
      'Early support can help students build confidence, communication skills, and a more positive relationship with learning.',
    publishedAt: '2026-05-12T00:00:00.000Z',
    slug: 'when-learning-needs-extra-support',
    title: 'When Learning Needs Extra Support',
  },
  {
    category: 'Mental health',
    excerpt:
      'Emotional wellbeing is shaped by everyday habits, safe conversations, and timely professional support when concerns persist.',
    publishedAt: '2026-05-05T00:00:00.000Z',
    slug: 'everyday-emotional-wellbeing',
    title: 'Everyday Practices for Emotional Wellbeing',
  },
]

const fallbackAnnouncements: Announcement[] = [
  {
    linkLabel: 'Call for details',
    linkUrl: 'tel:9347575114',
    summary: 'Appointments are available for counselling, developmental support, and family guidance.',
    title: 'Consultation appointments',
    type: 'Notice',
  },
]

const fallbackUpdates: Update[] = [
  {
    publishedAt: '2026-05-24T00:00:00.000Z',
    slug: 'community-counselling-access',
    summary:
      'Neuro Bridge Foundation continues to support counselling access, education assistance, and mental health awareness for families facing financial barriers.',
    title: 'Extending access through community support',
    type: 'Foundation',
  },
  {
    publishedAt: '2026-05-18T00:00:00.000Z',
    slug: 'family-guidance-focus',
    summary:
      'Parent participation, home consistency, and patient reinforcement remain central to the care approach at LAC.',
    title: 'Family involvement remains a core priority',
    type: 'Clinical',
  },
]

const fallbackGallery: GalleryItem[] = [
  {
    description: 'Mental health awareness and community outreach programs.',
    mediaType: 'image',
    title: 'Community awareness',
  },
  {
    description: 'Learning support and education assistance for children and students.',
    mediaType: 'image',
    title: 'Education support',
  },
  {
    description: 'Free counselling and guidance programs for families in need.',
    mediaType: 'image',
    title: 'Care access initiatives',
  },
]

async function withPayload<T>(operation: (payload: Awaited<ReturnType<typeof getPayload>>) => Promise<T>, fallback: T) {
  try {
    const payload = await getPayload({ config })
    return await operation(payload)
  } catch {
    return fallback
  }
}

function prioritizeDocuments<T extends { id: number | string }>(featured: T[], recent: T[], limit: number) {
  const seen = new Set<number | string>()

  return [...featured, ...recent].filter((document) => {
    if (seen.has(document.id)) return false

    seen.add(document.id)
    return true
  }).slice(0, limit)
}

export async function getAnnouncements(): Promise<Announcement[]> {
  return withPayload(async (payload) => {
    const result = await payload.find({
      collection: 'announcements',
      limit: 3,
      sort: '-publishedAt',
      where: {
        active: {
          equals: true,
        },
      },
    })

    return result.docs.length ? (result.docs as Announcement[]) : fallbackAnnouncements
  }, fallbackAnnouncements)
}

export async function getArticles(limit = 6): Promise<Article[]> {
  return withPayload(async (payload) => {
    const result = await findArticles(payload, limit)

    return result.docs.length ? (result.docs as Article[]) : fallbackArticles
  }, fallbackArticles)
}

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  return withPayload(async (payload) => {
    const featured = await findArticles(payload, limit, true)
    const recent = await findArticles(payload, limit)
    const articles = prioritizeDocuments(featured.docs, recent.docs, limit)

    return articles.length ? (articles as Article[]) : fallbackArticles.slice(0, limit)
  }, fallbackArticles.slice(0, limit))
}

export async function getArticle(slug: string) {
  return withPayload(async (payload) => {
    const result = await payload.find({
      collection: 'posts',
      depth: 1,
      limit: 1,
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            _status: {
              equals: 'published',
            },
          },
        ],
      },
    })

    return result.docs[0] || fallbackArticles.find((article) => article.slug === slug) || null
  }, fallbackArticles.find((article) => article.slug === slug) || null)
}

export async function getUpdates(limit = 6): Promise<Update[]> {
  return withPayload(async (payload) => {
    const result = await payload.find({
      collection: 'updates',
      depth: 1,
      limit,
      sort: '-publishedAt',
    })

    return result.docs.length ? (result.docs as Update[]) : fallbackUpdates
  }, fallbackUpdates)
}

export async function getGalleryItems(limit = 12): Promise<GalleryItem[]> {
  return withPayload(async (payload) => {
    const result = await findGalleryItems(payload, limit)

    return result.docs.length ? (result.docs as GalleryItem[]) : fallbackGallery
  }, fallbackGallery)
}

export async function getFeaturedGalleryItems(limit = 3): Promise<GalleryItem[]> {
  return withPayload(async (payload) => {
    const featured = await findGalleryItems(payload, limit, true)
    const recent = await findGalleryItems(payload, limit)
    const galleryItems = prioritizeDocuments(featured.docs, recent.docs, limit)

    return galleryItems.length ? (galleryItems as GalleryItem[]) : fallbackGallery.slice(0, limit)
  }, fallbackGallery.slice(0, limit))
}

async function findArticles(
  payload: Awaited<ReturnType<typeof getPayload>>,
  limit: number,
  featured = false,
) {
  return payload.find({
    collection: 'posts',
    depth: 1,
    limit,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
      ...(featured ? { featured: { equals: true } } : {}),
    },
  })
}

async function findGalleryItems(
  payload: Awaited<ReturnType<typeof getPayload>>,
  limit: number,
  featured = false,
) {
  return payload.find({
    collection: 'gallery-items',
    depth: 1,
    limit,
    sort: '-eventDate',
    where: featured ? { featured: { equals: true } } : undefined,
  })
}

export function getMediaURL(media?: CmsMedia | number | null) {
  if (!media || typeof media === 'number') return null
  return media.url || null
}

export function formatDate(date?: string | null) {
  if (!date) return ''

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export function getYouTubeEmbedURL(url?: string | null) {
  if (!url) return null

  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/)
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null
}
