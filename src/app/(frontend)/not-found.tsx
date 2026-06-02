import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="eyebrow">Page not found</p>
        <h1>The page you requested could not be found.</h1>
        <p>Please return to the homepage or explore the latest guidance articles.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">Return home</Link>
          <Link className="button button-secondary" href="/insights">Explore insights</Link>
        </div>
      </div>
    </section>
  )
}
