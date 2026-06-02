import type { Metadata } from 'next'
import { ArrowRight, Brain, GraduationCap, HeartHandshake, MessageCircleHeart, Sparkles, UsersRound } from 'lucide-react'
import Link from 'next/link'

import { serviceAreas } from '@/lib/practice-content'

export const metadata: Metadata = {
  description: 'Explore counselling, developmental, speech, learning, family, and personal development support at LAC.',
  title: 'Services',
}

const icons = [MessageCircleHeart, Brain, Sparkles, GraduationCap, UsersRound, HeartHandshake]

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero-services">
        <div className="shell page-hero-copy">
          <p className="eyebrow">Services</p>
          <h1>Support shaped around the person.</h1>
          <p>Every care plan begins with listening. Services may be combined when needs overlap.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell services-detail-grid">
          {serviceAreas.map(({ detail, title }, index) => {
            const Icon = icons[index]
            return (
              <article className="service-detail-card" key={title}>
                <div className="icon-box"><Icon /></div>
                <h2>{title}</h2>
                <p>{detail}</p>
              </article>
            )
          })}
        </div>
      </section>
      <section className="page-cta">
        <div className="shell page-cta-inner">
          <div>
            <p className="eyebrow">Not sure where to begin?</p>
            <h2>Start with a confidential conversation.</h2>
          </div>
          <Link className="button button-primary" href="/contact">Contact the centre <ArrowRight /></Link>
        </div>
      </section>
    </>
  )
}
