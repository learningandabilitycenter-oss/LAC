import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image alt="" height={80} src="/brand/lac-logo.png" width={80} />
          <div>
            <strong>Learning & Ability Counselling Centre</strong>
            <span>Every mind matters. Every life has potential.</span>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/#services">Clinical services</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/updates">Updates</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:9347575114"><Phone />9347575114</a>
          <a href="mailto:vinni.anneypsychologist@gmail.com"><Mail />Email the centre</a>
          <span><MapPin />Hyderabad and Vijayawada</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>
          This website is informational and does not replace emergency medical care. For immediate danger or
          crisis situations, contact local emergency services.
        </p>
        <Link href="/admin">CMS login</Link>
      </div>
    </footer>
  )
}
