import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'

export const Announcements: CollectionConfig = {
  slug: 'announcements',
  admin: {
    defaultColumns: ['title', 'type', 'publishedAt', 'active'],
    useAsTitle: 'title',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'notice',
      options: [
        { label: 'Notice', value: 'notice' },
        { label: 'Camp', value: 'camp' },
        { label: 'Event', value: 'event' },
        { label: 'Membership', value: 'membership' },
      ],
      required: true,
    },
    {
      name: 'linkLabel',
      type: 'text',
    },
    {
      name: 'linkUrl',
      type: 'text',
    },
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      required: true,
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
