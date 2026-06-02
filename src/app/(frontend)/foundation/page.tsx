import type { Metadata } from 'next'
import { ArrowRight, HandHeart, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { foundationPrograms } from '@/lib/practice-content'

export const metadata: Metadata = {
  description: 'Learn about Neuro Bridge Foundation programs for counselling access, education, healthcare, and communities.',
  title: 'Neuro Bridge Foundation',
}

export default function FoundationPage() {
  return (
    <>
      <section className="page-hero page-hero-foundation">
        <div className="shell foundation-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">Neuro Bridge Foundation</p>
            <h1>Connecting minds. Changing lives.</h1>
            <p>Extending counselling, education, healthcare, and practical support to communities in need.</p>
          </div>
          <Image
            alt="Neuro Bridge Foundation"
            className="foundation-page-logo"
            height={1080}
            loading="eager"
            priority
            src="/brand/nbf-logo.png"
            width={1080}
          />
        </div>
      </section>
      <section className="section">
        <div className="shell foundation-page-grid">
          <div>
            <p className="eyebrow">Community support</p>
            <h2>Access where it matters most.</h2>
            <p>
              Neuro Bridge Foundation supports children, students, families, women, adults, elderly individuals,
              and rural communities where care may otherwise be difficult to reach.
            </p>
          </div>
          <div className="foundation-program-grid">
            {foundationPrograms.map((program) => <span key={program}><HandHeart />{program}</span>)}
          </div>
        </div>
      </section>
      <section className="membership-section">
        <div className="shell membership-page-grid">
          <div>
            <p className="eyebrow">Support the foundation</p>
            <h2>Help make care more accessible.</h2>
          </div>
          <div className="membership-card"><span>Monthly membership</span><strong>Rs. 1,000</strong></div>
          <div className="membership-card"><span>Annual membership</span><strong>Rs. 12,000</strong></div>
          <a className="membership-card membership-call" href="tel:9676564462"><Phone /><span>Donation enquiries</span><strong>9676564462</strong></a>
        </div>
      </section>
      <section className="page-cta">
        <div className="shell page-cta-inner">
          <div>
            <p className="eyebrow">Learn more</p>
            <h2>Speak with the foundation team.</h2>
          </div>
          <Link className="button button-primary" href="/contact">Contact us <ArrowRight /></Link>
        </div>
      </section>
    </>
  )
}
