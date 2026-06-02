import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate, getMediaURL, type Article } from '@/lib/site-data'

export function ArticleCard({ article }: { article: Article }) {
  const image = getMediaURL(article.heroImage)

  return (
    <article className="article-card">
      {image ? (
        <Image alt="" className="article-image" height={480} src={image} unoptimized width={800} />
      ) : (
        <div className="article-image article-placeholder">
          <Image alt="" height={96} src="/brand/lac-logo.png" width={96} />
        </div>
      )}
      <div className="article-content">
        <div className="article-meta">
          <span>{article.category}</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <Link href={`/insights/articles/${article.slug}`}>
          Read article <ArrowUpRight />
        </Link>
      </div>
    </article>
  )
}
