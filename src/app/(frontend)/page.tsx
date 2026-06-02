import {
  ArrowRight,
  Brain,
  CheckCircle2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Mail,
  MessageCircleHeart,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { AnnouncementBar } from '@/components/AnnouncementBar'
import { ArticleCard } from '@/components/ArticleCard'
import { EnquiryForm } from '@/components/EnquiryForm'
import { GalleryCard } from '@/components/GalleryCard'
import { formatDate, getAnnouncements, getArticles, getGalleryItems, getUpdates } from '@/lib/site-data'

const services = [
  {
    icon: MessageCircleHeart,
    title: 'Psychological counselling',
    text: 'Confidential support for anxiety, stress, PTSD, OCD, ODD, depression, emotional wellbeing, and life transitions.',
  },
  {
    icon: Brain,
    title: 'Developmental & behavioural support',
    text: 'Structured guidance for autism spectrum disorder (ASD), intellectual disability (ID), ADHD, behavioural concerns, and child development.',
  },
  {
    icon: Sparkles,
    title: 'Speech & language therapy',
    text: 'Support for speech delays, language difficulties, communication challenges, social interaction, and practical confidence building.',
  },
  {
    icon: GraduationCap,
    title: 'Learning support & SLD',
    text: 'Individualised assistance for school and college students, including specific learning disability (SLD) support, study guidance, and assessment.',
  },
  {
    icon: UsersRound,
    title: 'Parent & family counselling',
    text: 'Family counselling, parent guidance, practical home strategies, and consistent reinforcement techniques for the progress journey.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal development & wellness',
    text: 'Confidence building, personality development, career guidance, addiction counselling (alcohol, gambling, substance use), hypnotherapy, and graphology.',
  },
]

const approach = [
  ['01', 'Understand', 'Listen carefully to concerns, history, strengths, family context, and practical priorities.'],
  ['02', 'Plan', 'Create an individualised support direction aligned with communication, behaviour, learning, and wellbeing.'],
  ['03', 'Support', 'Deliver appropriate counselling, therapy, guidance, and home strategies with patience and consistency.'],
  ['04', 'Review', 'Observe meaningful changes, reinforce progress, and refine the support plan when required.'],
]

const foundationPrograms = [
  'Free counselling and therapy camps',
  'Rural mental health awareness programs',
  'Education support for underprivileged children',
  'Medical and surgical assistance',
  'Basic-needs support for families',
  'Community development activities',
]

export default async function HomePage() {
  const [announcements, articles, gallery, updates] = await Promise.all([
    getAnnouncements(),
    getArticles(3),
    getGalleryItems(3),
    getUpdates(2),
  ])

  return (
    <>
      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="trust-kicker">
              <ShieldCheck />
              <span>Professional, confidential, individualised care</span>
            </div>
            <p className="eyebrow">Counselling and developmental support</p>
            <h1>A safe place to understand, support, and move forward.</h1>
            <p className="hero-text">
              Learning & Ability Counselling Centre provides thoughtful, structured support for children,
              adolescents, adults, parents, and families. Every care journey begins with listening and moves at a
              pace that respects the individual.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:9347575114">
                <Phone /> Call for consultation
              </a>
              <a className="button button-secondary" href="mailto:vinni.anneypsychologist@gmail.com">
                <Mail /> Send an enquiry
              </a>
            </div>
            <div className="hero-assurance">
              <span><CheckCircle2 /> Confidential support</span>
              <span><CheckCircle2 /> Family-informed care</span>
              <span><CheckCircle2 /> Hyderabad and Vijayawada</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-portrait">
              <Image
                alt="Vineela Anney, Founder and Clinical Director"
                height={900}
                loading="eager"
                src="/brand/vineela-anney.webp"
                width={720}
              />
            </div>
            <div className="hero-director">
              <span>Founder & Clinical Director</span>
              <strong>Vineela Anney</strong>
              <small>MHI5712</small>
            </div>
          </div>
        </div>
        <div className="shell hero-brandline">
          <Image alt="Learning and Ability Counselling Centre" height={128} src="/brand/lac-logo.png" width={128} />
          <div>
            <strong>Every mind matters. Every life has potential.</strong>
            <span>Individualised care | Ethical practice | Confidential support</span>
          </div>
        </div>
      </section>

      <AnnouncementBar announcement={announcements[0]} />

      <section className="section welcome-section">
        <div className="shell welcome-grid">
          <div>
            <p className="eyebrow">A thoughtful first step</p>
            <h2>Support begins with understanding the person, not only the concern.</h2>
          </div>
          <div className="welcome-copy">
            <p>
              People seek support for many reasons: a child may be finding communication difficult, a student may
              be struggling with learning, a family may need guidance, or an adult may be carrying stress that has
              become difficult to manage alone.
            </p>
            <p>
              LAC brings counselling, therapy, learning support, and family guidance together in one professional
              setting. The focus is practical progress, emotional safety, dignity, and trust in the process.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Clinical services</p>
            <h2>Professional support for different stages of life.</h2>
            <p>
              Care plans are shaped around the individual’s needs and may include one or more areas of support.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="icon-box"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="shell approach-grid">
          <div className="approach-intro">
            <p className="eyebrow">Our approach</p>
            <h2>Clear, patient, and family-informed.</h2>
            <p>
              Progress is rarely instant. It is built through attentive care, practical strategies, consistent
              reinforcement, and an environment where the individual feels understood.
            </p>
            <blockquote>
              <Quote />
              <p>Therapy is not only for the child. Parents are also part of the healing journey.</p>
            </blockquote>
          </div>
          <ol className="steps">
            {approach.map(([number, title, text]) => (
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

      <section className="section founder-section">
        <div className="shell founder-grid">
          <div className="founder-image">
            <Image alt="Vineela Anney" height={900} src="/brand/vineela-anney.webp" width={720} />
          </div>
          <div>
            <p className="eyebrow">Founder & Clinical Director</p>
            <h2>Vineela Anney, MHI5712</h2>
            <p className="founder-role">
              Psychologist | Hypnotherapist | Counsellor | Speech Trainer | Graphologist (Writing Analysis)
            </p>
            <p>
              Vineela Anney’s work is shaped by professional training and lived experience. A mother’s journey
              through her daughter’s medical challenges became the catalyst for a mission — to help children,
              families, and individuals who face emotional, developmental, and learning difficulties.
            </p>
            <p>
              Her approach brings together counselling, therapy, parent involvement, practical guidance, and
              consistent reinforcement. The emphasis is on patience, understanding each person carefully, and
              working towards meaningful improvements in daily life.
            </p>
            <div className="outcomes">
              {['Communication', 'Emotional balance', 'Confidence', 'Behaviour improvement'].map((outcome) => (
                <span key={outcome}>{outcome}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section foundation-section" id="foundation">
        <div className="shell foundation-grid">
          <div className="foundation-logo">
            <Image alt="Neuro Bridge Foundation" height={240} src="/brand/nbf-logo.png" width={240} />
          </div>
          <div>
            <p className="eyebrow">Neuro Bridge Foundation</p>
            <h2>Connecting Minds. Changing Lives.</h2>
            <p>
              Neuro Bridge Foundation supports children, students, families, women, adults, elderly individuals,
              and rural communities where access to counselling, education, developmental support, and healthcare
              may be limited.
            </p>
            <div className="foundation-list">
              {foundationPrograms.map((program) => (
                <span key={program}><HandHeart />{program}</span>
              ))}
            </div>
            <div className="membership">
              <div>
                <span>Monthly membership</span>
                <strong>Rs. 650</strong>
              </div>
              <div>
                <span>Annual membership</span>
                <strong>Rs. 7,800</strong>
              </div>
              <div>
                <span>Donation / payment</span>
                <a href="tel:9676564462">9676564462</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section content-section">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Insights</p>
              <h2>Useful guidance for families and individuals.</h2>
            </div>
            <Link className="text-link" href="/insights">View all insights <ArrowRight /></Link>
          </div>
          <div className="article-grid">
            {articles.map((article) => <ArticleCard article={article} key={article.slug} />)}
          </div>
        </div>
      </section>

      <section className="section gallery-preview">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2>Programs, outreach, and community moments.</h2>
            </div>
            <Link className="text-link" href="/gallery">Explore gallery <ArrowRight /></Link>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => <GalleryCard item={item} key={item.title} />)}
          </div>
        </div>
      </section>

      <section className="section update-section">
        <div className="shell update-grid">
          <div>
            <p className="eyebrow">Latest updates</p>
            <h2>News from the centre and foundation.</h2>
            <Link className="text-link" href="/updates">View all updates <ArrowRight /></Link>
          </div>
          <div className="update-list">
            {updates.map((update) => (
              <article key={update.slug}>
                <span>{update.type}</span>
                <h3>{update.title}</h3>
                <p>{update.summary}</p>
                <time dateTime={update.publishedAt}>{formatDate(update.publishedAt)}</time>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Begin with a confidential conversation.</h2>
            <p>
              For counselling, therapy, developmental support, learning guidance, or family enquiries, reach out
              using this form or contact the centre directly.
            </p>
            <div className="contact-cards">
              <a href="tel:9347575114"><Phone /><span><small>Call for consultation</small><strong>9347575114</strong></span></a>
              <a href="mailto:vinni.anneypsychologist@gmail.com"><Mail /><span><small>Email</small><strong>vinni.anneypsychologist@gmail.com</strong></span></a>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  )
}
