import type { Metadata } from 'next'
import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

import './styles.css'

export const metadata: Metadata = {
  description:
    'Professional counselling, developmental support, speech and behaviour therapy, learning assistance, and family guidance in Hyderabad and Vijayawada.',
  icons: {
    icon: '/brand/lac-logo.png',
  },
  title: {
    default: 'Learning & Ability Counselling Centre',
    template: '%s | Learning & Ability Counselling Centre',
  },
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
