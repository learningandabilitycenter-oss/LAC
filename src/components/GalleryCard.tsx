import { ImageIcon, Play } from 'lucide-react'
import Image from 'next/image'

import { formatDate, getMediaURL, type GalleryItem } from '@/lib/site-data'

export function GalleryCard({ item }: { item: GalleryItem }) {
  const image = getMediaURL(item.image)

  return (
    <article className="gallery-card">
      {image ? (
        <Image
          alt={typeof item.image === 'object' && item.image ? item.image.alt || item.title : item.title}
          height={560}
          src={image}
          unoptimized
          width={800}
        />
      ) : (
        <div className="gallery-placeholder">
          {item.mediaType === 'video' ? <Play /> : <ImageIcon />}
          <span>{item.title}</span>
        </div>
      )}
      <div className="gallery-caption">
        <span>{item.mediaType === 'video' ? 'Video' : 'Gallery'}</span>
        <h3>{item.title}</h3>
        {item.description && <p>{item.description}</p>}
        {item.eventDate && <time dateTime={item.eventDate}>{formatDate(item.eventDate)}</time>}
      </div>
    </article>
  )
}
