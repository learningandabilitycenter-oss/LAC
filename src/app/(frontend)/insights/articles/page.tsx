import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { ArticleCard } from '@/components/ArticleCard'
import { getArticles } from '@/lib/site-data'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  description: 'Practical mental health, learning support, and parent guidance articles from LAC.',
  title: 'Articles',
}

export default async function ArticlesPage() {
  const articles = await getArticles(24)

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-copy">
          <Link className="page-back-link" href="/insights"><ArrowLeft />Insights hub</Link>
          <p className="eyebrow">Articles</p>
          <h1>Clear, practical guidance for everyday wellbeing.</h1>
          <p>Explore articles on counselling, learning support, child development, parent guidance, and emotional wellness.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell article-grid">
          {articles.map((article) => <ArticleCard article={article} key={article.slug} />)}
        </div>
      </section>
    </>
  )
}
