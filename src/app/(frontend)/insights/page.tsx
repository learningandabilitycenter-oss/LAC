import type { Metadata } from 'next'
import { ArrowRight, BookOpenText, Images, Newspaper } from 'lucide-react'
import Link from 'next/link'

import { ArticleCard } from '@/components/ArticleCard'
import { GalleryCard } from '@/components/GalleryCard'
import { UpdateCard } from '@/components/UpdateCard'
import { getFeaturedArticles, getFeaturedGalleryItems, getUpdates } from '@/lib/site-data'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  description: 'Explore practical articles, visual resources, and updates from LAC and Neuro Bridge Foundation.',
  title: 'Insights',
}

const insightChannels = [
  {
    icon: BookOpenText,
    href: '/insights/articles',
    title: 'Articles',
    text: 'Practical guidance for emotional wellbeing, child development, learning, and families.',
  },
  {
    icon: Images,
    href: '/insights/gallery',
    title: 'Visual gallery',
    text: 'Flyers, visual resources, awareness material, and moments from community programs.',
  },
  {
    icon: Newspaper,
    href: '/insights/updates',
    title: 'Updates',
    text: 'News from the counselling centre, foundation initiatives, and outreach activities.',
  },
]

export default async function InsightsPage() {
  const [articles, gallery, updates] = await Promise.all([
    getFeaturedArticles(3),
    getFeaturedGalleryItems(3),
    getUpdates(2),
  ])

  return (
    <>
      <section className="page-hero insights-hub-hero">
        <div className="shell page-hero-copy">
          <p className="eyebrow">Insights hub</p>
          <h1>Stories, resources, and moments that help us grow.</h1>
          <p>Explore practical guidance, visual awareness material, and the latest work from LAC and Neuro Bridge Foundation.</p>
        </div>
      </section>

      <section className="section insight-channel-section">
        <div className="shell insight-channel-grid">
          {insightChannels.map(({ href, icon: Icon, text, title }) => (
            <Link className="insight-channel-card" href={href} key={href}>
              <Icon />
              <h2>{title}</h2>
              <p>{text}</p>
              <span>Explore <ArrowRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section insights-article-preview">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Latest articles</p>
              <h2>Clear guidance for everyday wellbeing.</h2>
            </div>
            <Link className="text-link" href="/insights/articles">View all articles <ArrowRight /></Link>
          </div>
          <div className="article-grid">
            {articles.map((article) => <ArticleCard article={article} key={article.slug} />)}
          </div>
        </div>
      </section>

      <section className="section insights-gallery-preview">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Visual gallery</p>
              <h2>Ideas and awareness, made easy to share.</h2>
            </div>
            <Link className="text-link" href="/insights/gallery">Explore gallery <ArrowRight /></Link>
          </div>
          <div className="gallery-creative-grid gallery-creative-grid-preview">
            {gallery.map((item) => <GalleryCard creative item={item} key={`${item.title}-${item.eventDate || ''}`} />)}
          </div>
        </div>
      </section>

      <section className="section insights-update-preview">
        <div className="shell update-grid">
          <div>
            <p className="eyebrow">Latest updates</p>
            <h2>News from the centre and foundation.</h2>
            <Link className="text-link" href="/insights/updates">View all updates <ArrowRight /></Link>
          </div>
          <div className="update-list">
            {updates.map((update) => <UpdateCard compact key={update.slug} update={update} />)}
          </div>
        </div>
      </section>
    </>
  )
}
