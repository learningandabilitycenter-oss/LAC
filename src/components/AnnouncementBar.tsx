import { ArrowRight, Bell } from 'lucide-react'

import type { Announcement } from '@/lib/site-data'

export function AnnouncementBar({ announcement }: { announcement: Announcement }) {
  return (
    <aside className="announcement">
      <div className="shell announcement-inner">
        <span className="announcement-icon"><Bell /></span>
        <div>
          <strong>{announcement.title}</strong>
          <p>{announcement.summary}</p>
        </div>
        {announcement.linkUrl && (
          <a href={announcement.linkUrl}>
            {announcement.linkLabel || 'Learn more'}
            <ArrowRight />
          </a>
        )}
      </div>
    </aside>
  )
}
