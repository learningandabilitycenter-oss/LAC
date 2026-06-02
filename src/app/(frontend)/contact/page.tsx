import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'

import { EnquiryForm } from '@/components/EnquiryForm'

export const metadata: Metadata = {
  description: 'Contact Learning & Ability Counselling Centre for a confidential consultation.',
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero-contact">
        <div className="shell page-hero-copy">
          <p className="eyebrow">Contact</p>
          <h1>Begin with a confidential conversation.</h1>
          <p>Tell us what support you are looking for. The centre will help identify an appropriate next step.</p>
        </div>
      </section>
      <section className="contact-page-section">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Reach the centre</p>
            <h2>We are here to listen.</h2>
            <div className="contact-cards">
              <a href="tel:9347575114"><Phone /><span><small>Call for consultation</small><strong>9347575114</strong></span></a>
              <a href="mailto:vinni.anneypsychologist@gmail.com"><Mail /><span><small>Email</small><strong>vinni.anneypsychologist@gmail.com</strong></span></a>
              <span className="contact-card-static"><MapPin /><span><small>Locations</small><strong>Hyderabad and Vijayawada</strong></span></span>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  )
}
