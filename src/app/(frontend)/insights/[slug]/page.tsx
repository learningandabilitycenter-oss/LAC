import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { RichTextContent } from '@/components/RichTextContent'
import { formatDate, getArticle, getMediaURL } from '@/lib/site-data'

type Args = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  return article ? { description: article.excerpt, title: article.title } : { title: 'Article' }
}

export default async function InsightPage({ params }: Args) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) notFound()

  const image = getMediaURL(article.heroImage)

  return (
    <article>
      <section className="article-hero">
        <div className="shell article-hero-inner">
          <Link href="/insights">Insights</Link>
          <span>{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>
      </section>
      {image && (
        <Image
          alt=""
          className="article-detail-image"
          height={700}
          src={image}
          unoptimized
          width={1200}
        />
      )}
      <section className="section">
        <div className="shell article-body">
          {article.content ? (
            <RichTextContent data={article.content} />
          ) : (
            <>
              <p>{article.excerpt}</p>
              <p>
                Every person’s situation is different. If a concern is persistent, affecting daily life, or creating
                distress for the individual or family, a professional conversation can help identify the next step.
              </p>
              <p>
                Contact Learning & Ability Counselling Centre for an individual consultation and appropriate guidance.
              </p>
            </>
          )}
        </div>
      </section>
    </article>
  )
}
