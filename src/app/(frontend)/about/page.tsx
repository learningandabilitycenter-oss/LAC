import type { Metadata } from 'next'
import { ArrowRight, HeartHandshake, Quote, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  description: 'Discover the personal journey that inspired Vineela Anney to establish LAC and Neuro Bridge Foundation.',
  title: 'About',
}

const journeyChapters = [
  {
    number: '01',
    title: 'A life changed',
    text:
      'When her daughter faced severe childhood health complications, including a life-threatening crisis and gangrene-related loss of fingers and toes, Vineela Anney experienced the fear, emotional strain, financial pressure, and uncertainty that can overwhelm a family.',
  },
  {
    number: '02',
    title: 'A turning point',
    text:
      'During that difficult period, she became deeply aware of other families quietly facing developmental delays, autism, ADHD, speech difficulties, learning disabilities, emotional trauma, and behavioural concerns without enough support.',
  },
  {
    number: '03',
    title: 'Learning to support others',
    text:
      'After the Covid period, she pursued a Master’s degree and specialised training in psychology, counselling, hypnotherapy, speech training, child development, behavioural support, therapies, and psychological guidance.',
  },
  {
    number: '04',
    title: 'Purpose in practice',
    text:
      'Today, her work reaches children, families, women, schools, colleges, organisations, and professionals through counselling, therapies, awareness programs, guidance sessions, and free support for people who cannot afford care.',
  },
]

const foundationSupport = [
  'Psychological counselling',
  'Child development support',
  'Speech and behavioural guidance',
  'Emotional wellness programs',
  'Educational and learning support',
  'Women empowerment and guidance',
  'Therapy and rehabilitation support',
  'Mental health awareness',
  'Community support services',
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-about">
        <div className="shell page-hero-copy">
          <p className="eyebrow">The story behind the mission</p>
          <h1>A mother&apos;s pain became a mission.</h1>
          <p>A journey of strength, healing, and purpose that now supports children, families, women, and communities.</p>
        </div>
      </section>

      <section className="section founder-opening-section">
        <div className="shell founder-detail-grid">
          <div className="founder-cutout-stage founder-cutout-stage-detail">
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
          </div>
          <div>
            <p className="eyebrow">Founder & Clinical Director</p>
            <h2>Vineela Anney</h2>
            <p className="founder-role">MHI5712</p>
            <p className="lead-copy">
              Behind every dream, there is a story. Behind LAC and Neuro Bridge Foundation is a mother&apos;s
              journey filled with pain, courage, sacrifice, and determination.
            </p>
            <p>
              Vineela&apos;s patience was not built in a classroom alone. It grew through years of struggle,
              healing, learning, and transformation. Her lived experience shaped a simple conviction: no family
              should feel unheard while trying to find the right support.
            </p>
          </div>
        </div>
      </section>

      <section className="section founder-story-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">The journey</p>
            <h2>From struggle, a purpose was born.</h2>
            <p>What began as a mother&apos;s fight for her daughter became a commitment to stand beside others.</p>
          </div>
          <ol className="founder-story-grid">
            {journeyChapters.map(({ number, text, title }) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="daughter-inspiration-section">
        <div className="shell daughter-inspiration-grid">
          <div className="daughter-quote">
            <Quote />
            <blockquote>Limitations do not define a person&apos;s future.</blockquote>
          </div>
          <div>
            <p className="eyebrow">Her greatest inspiration</p>
            <h2>A daughter&apos;s courage continues to guide the work.</h2>
            <p>
              Though she faces physical challenges, Vineela&apos;s daughter has never allowed her condition to stop
              her dreams. She is pursuing animation and creative design with confidence, passion, and positivity.
            </p>
            <p>
              Her creativity is a daily reminder that every child deserves understanding, opportunity, and the
              freedom to imagine a meaningful future.
            </p>
          </div>
        </div>
      </section>

      <section className="section founder-mission-section">
        <div className="shell founder-mission-grid">
          <div>
            <p className="eyebrow">Neuro Bridge Foundation</p>
            <h2>Connecting minds. Changing lives.</h2>
            <p className="lead-copy">
              The foundation was established to create hope, confidence, awareness, and opportunities for people
              who feel unheard, unsupported, or limited by their circumstances.
            </p>
            <Link className="button button-primary" href="/foundation">Explore the foundation <ArrowRight /></Link>
          </div>
          <div className="founder-support-grid">
            {foundationSupport.map((item, index) => (
              <span key={item}>{index % 2 ? <HeartHandshake /> : <Sparkles />}{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-belief-section">
        <div className="shell">
          <p>Every child deserves understanding. Every parent deserves support.</p>
          <h2>Every individual deserves dignity, care, and a chance to grow.</h2>
          <Link className="button button-secondary" href="/contact">Begin a conversation <ArrowRight /></Link>
        </div>
      </section>
    </>
  )
}
