import Image from 'next/image'

import { formatDate, getMediaURL, type Update } from '@/lib/site-data'

export function UpdateCard({ compact = false, update }: { compact?: boolean; update: Update }) {
  const image = getMediaURL(update.image)

  return (
    <article className={compact ? 'update-card update-card-compact' : 'update-card'}>
      {image && (
        <Image
          alt={typeof update.image === 'object' && update.image ? update.image.alt || update.title : update.title}
          className="update-image"
          height={480}
          src={image}
          unoptimized
          width={800}
        />
      )}
      <div className="update-content">
        <span>{update.type}</span>
        {compact ? <h3>{update.title}</h3> : <h2>{update.title}</h2>}
        <p>{update.summary}</p>
        <time dateTime={update.publishedAt}>{formatDate(update.publishedAt)}</time>
      </div>
    </article>
  )
}
