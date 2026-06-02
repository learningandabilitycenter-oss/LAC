import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { UpdateCard } from '@/components/UpdateCard'
import { getUpdates } from '@/lib/site-data'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  description: 'Latest announcements and organizational updates from LAC and Neuro Bridge Foundation.',
  title: 'Updates',
}

export default async function UpdatesPage() {
  const updates = await getUpdates(40)

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-copy">
          <Link className="page-back-link" href="/insights"><ArrowLeft />Insights hub</Link>
          <p className="eyebrow">Latest updates</p>
          <h1>News from the centre and foundation.</h1>
          <p>Follow programs, awareness activities, counselling initiatives, and community support updates.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell update-archive">
          {updates.map((update) => <UpdateCard key={update.slug} update={update} />)}
        </div>
      </section>
    </>
  )
}
