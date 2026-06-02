import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { GalleryCard } from '@/components/GalleryCard'
import { getGalleryItems } from '@/lib/site-data'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  description: 'Flyers, awareness resources, program visuals, and community moments from LAC and Neuro Bridge Foundation.',
  title: 'Visual Gallery',
}

export default async function GalleryPage() {
  const gallery = await getGalleryItems(60)

  return (
    <>
      <section className="page-hero gallery-page-hero">
        <div className="shell page-hero-copy">
          <Link className="page-back-link" href="/insights"><ArrowLeft />Insights hub</Link>
          <p className="eyebrow">Visual gallery</p>
          <h1>Ideas and information, designed to be seen.</h1>
          <p>Explore flyers, visual resources, awareness material, program highlights, and community moments.</p>
        </div>
      </section>
      <section className="section gallery-creative-section">
        <div className="shell">
          <div className="gallery-intro-row">
            <div>
              <p className="eyebrow">Browse the collection</p>
              <h2>A visual library for awareness and connection.</h2>
            </div>
            <p>Shareable information, practical reminders, and a closer look at the work happening across our community.</p>
          </div>
          <div className="gallery-creative-grid">
            {gallery.map((item) => <GalleryCard creative item={item} key={`${item.title}-${item.eventDate || ''}`} />)}
          </div>
        </div>
      </section>
    </>
  )
}
