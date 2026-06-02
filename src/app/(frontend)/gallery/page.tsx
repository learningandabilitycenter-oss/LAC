import type { Metadata } from 'next'

import { GalleryCard } from '@/components/GalleryCard'
import { getGalleryItems } from '@/lib/site-data'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  description: 'Programs, activities, outreach, and community moments from LAC and Neuro Bridge Foundation.',
  title: 'Gallery',
}

export default async function GalleryPage() {
  const gallery = await getGalleryItems(60)

  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Gallery</p>
          <h1>Programs, outreach, and community moments.</h1>
          <p>Photos and videos from counselling access initiatives, education support, awareness programs, and community activities.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell gallery-grid">
          {gallery.map((item) => <GalleryCard item={item} key={`${item.title}-${item.eventDate || ''}`} />)}
        </div>
      </section>
    </>
  )
}
