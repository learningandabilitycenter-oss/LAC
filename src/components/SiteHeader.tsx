'use client'

import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/about', label: 'About' },
  { href: '/foundation', label: 'Foundation' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="topline">
        <div className="shell topline-inner">
          <span>Hyderabad and Vijayawada</span>
          <span>Individualised care | Ethical practice | Confidential support</span>
        </div>
      </div>
      <nav className="shell navbar" aria-label="Primary navigation">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image alt="" height={72} loading="eager" src="/brand/lac-logo.png" width={72} />
          <span>
            <strong>Learning & Ability</strong>
            <small>Counselling Centre</small>
          </span>
        </Link>

        <button
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className={open ? 'nav-panel nav-panel-open' : 'nav-panel'}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="header-call" href="/contact" onClick={() => setOpen(false)}>
            <span>Book consultation</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
