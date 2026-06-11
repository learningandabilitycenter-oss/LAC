import { Quote, Star } from 'lucide-react'

import type { Testimonial } from '@/lib/site-data'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const rating = testimonial.rating ?? 0
  const meta = [testimonial.authorRole, testimonial.location].filter(Boolean).join(' · ')

  return (
    <figure className="testimonial-card">
      <Quote className="testimonial-quote-mark" aria-hidden="true" />
      {rating > 0 && (
        <div className="testimonial-stars" aria-label={`${rating} out of 5`}>
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} aria-hidden="true" />
          ))}
        </div>
      )}
      <blockquote>{testimonial.quote}</blockquote>
      <figcaption>
        <strong>{testimonial.authorName}</strong>
        {meta && <span>{meta}</span>}
      </figcaption>
    </figure>
  )
}
