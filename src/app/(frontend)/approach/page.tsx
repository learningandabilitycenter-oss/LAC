import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react'
import Link from 'next/link'

import { carePrinciples, careSteps } from '@/lib/practice-content'

export const metadata: Metadata = {
  description: 'Learn about the clear, patient, family-informed care approach at LAC.',
  title: 'Approach',
}

export default function ApproachPage() {
  return (
    <>
      <section className="page-hero page-hero-approach">
        <div className="shell page-hero-copy">
          <p className="eyebrow">Our approach</p>
          <h1>Clear, patient, and family-informed.</h1>
          <p>Progress is built through trust, practical guidance, and consistent support.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell approach-page-grid">
          <div>
            <p className="eyebrow">How care begins</p>
            <h2>A thoughtful path forward.</h2>
            <p>
              Every person is different. The first priority is understanding what is happening in daily life,
              what support already exists, and what meaningful progress would look like.
            </p>
            <div className="principle-list">
              {carePrinciples.map((principle) => <span key={principle}><CheckCircle2 />{principle}</span>)}
            </div>
          </div>
          <ol className="care-step-list">
            {careSteps.map(({ number, text, title }) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="quote-section">
        <div className="shell quote-inner">
          <Quote />
          <blockquote>Therapy is not only for the child. Parents are also part of the healing journey.</blockquote>
          <Link className="text-link" href="/contact">Begin a conversation <ArrowRight /></Link>
        </div>
      </section>
    </>
  )
}
