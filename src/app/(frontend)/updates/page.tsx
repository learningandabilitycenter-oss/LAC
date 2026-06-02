import type { Metadata } from 'next'

import { formatDate, getUpdates } from '@/lib/site-data'

export const metadata: Metadata = {
  description: 'Latest announcements and organizational updates from LAC and Neuro Bridge Foundation.',
  title: 'Updates',
}

export default async function UpdatesPage() {
  const updates = await getUpdates(40)

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Latest updates</p>
          <h1>News from the centre and foundation.</h1>
          <p>Follow programs, awareness activities, counselling initiatives, and community support updates.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell update-archive">
          {updates.map((update) => (
            <article key={update.slug}>
              <span>{update.type}</span>
              <h2>{update.title}</h2>
              <p>{update.summary}</p>
              <time dateTime={update.publishedAt}>{formatDate(update.publishedAt)}</time>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
