import {
  ArrowRight,
  Brain,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  MessageCircleHeart,
  Phone,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { AnnouncementBar } from '@/components/AnnouncementBar'
import { ArticleCard } from '@/components/ArticleCard'
import { GalleryCard } from '@/components/GalleryCard'
import { UpdateCard } from '@/components/UpdateCard'
import { carePrinciples, careSteps, serviceAreas } from '@/lib/practice-content'
import { getAnnouncements, getFeaturedArticles, getFeaturedGalleryItems, getUpdates } from '@/lib/site-data'

export const dynamic = 'force-dynamic'

const serviceIcons = [MessageCircleHeart, Brain, GraduationCap, HeartHandshake]

export default async function HomePage() {
  const [announcements, articles, gallery, updates] = await Promise.all([
    getAnnouncements(),
    getFeaturedArticles(3),
    getFeaturedGalleryItems(3),
    getUpdates(2),
  ])

  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Counselling and developmental support</p>
            <h1>A safe place to understand, support, and move forward.</h1>
            <p className="hero-text">
              Learning & Ability Counselling Centre provides thoughtful, structured support for children,
              adolescents, adults, parents, and families. Every care journey begins with listening and moves at a
              pace that respects the individual.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Start a conversation <ArrowRight />
              </Link>
              <Link className="button button-secondary" href="/services">
                Explore services
              </Link>
            </div>
            <div className="hero-assurance">
              {carePrinciples.map((principle) => <span key={principle}><CheckCircle2 />{principle}</span>)}
            </div>
          </div>
          <div className="founder-cutout-stage">
            <div className="mandala-halo" />
            <Image
              alt="Vineela Anney, Founder and Clinical Director"
              className="founder-cutout"
              height={1124}
              loading="eager"
              priority
              src="/brand/vineela-anney.webp"
              width={1250}
            />
            <div className="founder-label">
              <span>Founder & Clinical Director</span>
              <strong>Vineela Anney</strong>
              <small>MHI5712</small>
            </div>
          </div>
        </div>
      </section>

      <AnnouncementBar announcement={announcements[0]} />

      <section className="section home-intro-section">
        <div className="shell home-intro-grid">
          <div>
            <p className="eyebrow">A thoughtful first step</p>
            <h2>Support begins with understanding.</h2>
          </div>
          <div>
            <p className="lead-copy">
              Every care journey is personal. LAC brings counselling, therapy, learning support, and family
              guidance together with a clear focus: meaningful progress in daily life.
            </p>
            <Link className="text-link" href="/about">About the centre <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section home-services-section">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">How we can help</p>
              <h2>Care for different needs and stages of life.</h2>
            </div>
            <Link className="text-link" href="/services">View all services <ArrowRight /></Link>
          </div>
          <div className="home-service-grid">
            {serviceAreas.slice(0, 4).map(({ summary, title }, index) => {
              const Icon = serviceIcons[index]
              return (
                <article className="home-service-card" key={title}>
                  <div className="icon-box"><Icon /></div>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="shell journey-grid">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>A clear path, one step at a time.</h2>
            <p>Care stays practical, patient, and aligned with the individual and family.</p>
            <Link className="text-link" href="/approach">See our approach <ArrowRight /></Link>
          </div>
          <ol className="home-step-list">
            {careSteps.map(({ number, text, title }) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section foundation-spotlight">
        <div className="shell foundation-spotlight-grid">
          <Image
            alt="Neuro Bridge Foundation"
            className="foundation-spotlight-logo"
            height={1080}
            src="/brand/nbf-logo.png"
            width={1080}
          />
          <div>
            <p className="eyebrow">Neuro Bridge Foundation</p>
            <h2>Connecting minds. Changing lives.</h2>
            <p className="lead-copy">
              Extending access to counselling, education, healthcare, and practical community support.
            </p>
            <Link className="button button-secondary" href="/foundation">Explore the foundation <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section insights-preview">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Explore insights</p>
              <h2>Guidance, updates, and moments that matter.</h2>
            </div>
            <Link className="text-link" href="/insights">Explore the hub <ArrowRight /></Link>
          </div>
          <div className="home-insights-grid">
            <div className="home-insights-column">
              <div className="preview-heading">
                <p className="eyebrow">Articles</p>
                <Link className="text-link" href="/insights/articles">Read articles <ArrowRight /></Link>
              </div>
              <ArticleCard article={articles[0]} />
            </div>
            <div className="home-insights-column">
              <div className="preview-heading">
                <p className="eyebrow">Visual gallery</p>
                <Link className="text-link" href="/insights/gallery">View gallery <ArrowRight /></Link>
              </div>
              <GalleryCard creative item={gallery[0]} />
            </div>
            <div className="home-insights-column">
              <div className="preview-heading">
                <p className="eyebrow">Latest updates</p>
                <Link className="text-link" href="/insights/updates">View updates <ArrowRight /></Link>
              </div>
              <div className="home-update-list">
                {updates.map((update) => <UpdateCard compact key={update.slug} update={update} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact-cta">
        <div className="shell home-contact-cta-inner">
          <div>
            <p className="eyebrow">Ready to begin?</p>
            <h2>Start with a confidential conversation.</h2>
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Send an enquiry <ArrowRight /></Link>
            <a className="button button-secondary" href="tel:9347575114"><Phone />9347575114</a>
          </div>
        </div>
      </section>
    </>
  )
}
