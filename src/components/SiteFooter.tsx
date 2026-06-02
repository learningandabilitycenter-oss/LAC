import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="shell footer-cta-inner">
          <div>
            <p className="eyebrow">Learning & Ability Counselling Centre</p>
            <h2>Care begins with a conversation.</h2>
          </div>
          <Link className="button button-primary" href="/contact">Book a consultation <ArrowRight /></Link>
        </div>
      </div>

      <div className="shell footer-main-grid">
        <div className="footer-brand-column">
          <div className="footer-brand">
            <Image alt="" height={104} src="/brand/lac-logo.png" width={104} />
            <div>
              <strong>Learning & Ability</strong>
              <span>Counselling Centre</span>
            </div>
          </div>
          <p>Individualised counselling, developmental support, learning guidance, and family-informed care.</p>
          <small>Every mind matters. Every life has potential.</small>
        </div>

        <div className="footer-link-column">
          <h3>Explore</h3>
          <Link href="/services">Services</Link>
          <Link href="/approach">Our approach</Link>
          <Link href="/about">Founder story</Link>
          <Link href="/foundation">Foundation</Link>
        </div>

        <div className="footer-link-column">
          <h3>Insights</h3>
          <Link href="/insights">Insights hub</Link>
          <Link href="/insights/articles">Articles</Link>
          <Link href="/insights/gallery">Visual gallery</Link>
          <Link href="/insights/updates">Updates</Link>
        </div>

        <div className="footer-contact-column">
          <h3>Reach us</h3>
          <a href="tel:9347575114"><Phone />9347575114</a>
          <a href="mailto:vinni.anneypsychologist@gmail.com"><Mail />Email the centre</a>
          <span><MapPin />Hyderabad and Vijayawada</span>
        </div>
      </div>

      <div className="shell footer-foundation-note">
        <Image alt="" height={72} src="/brand/nbf-logo.png" width={72} />
        <div>
          <strong>Neuro Bridge Foundation</strong>
          <span>Connecting minds. Changing lives.</span>
        </div>
        <Link href="/foundation">Explore the foundation <ArrowRight /></Link>
      </div>

      <div className="shell footer-bottom">
        <p>
          This website is informational and does not replace emergency medical care. For immediate danger or
          crisis situations, contact local emergency services.
        </p>
        <div>
          <span>© 2026 Learning & Ability Counselling Centre</span>
          <Link href="/admin">CMS login</Link>
        </div>
      </div>
    </footer>
  )
}
