import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import { slugField } from '../lib/fields'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'category', 'publishedAt', '_status'],
    description: 'Create insight articles. Publish a draft before it appears on the website.',
    useAsTitle: 'title',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField,
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'mental-health',
      options: [
        { label: 'Mental health', value: 'mental-health' },
        { label: 'Parent guidance', value: 'parent-guidance' },
        { label: 'Learning support', value: 'learning-support' },
        { label: 'Foundation stories', value: 'foundation-stories' },
      ],
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        description: 'Featured articles are prioritized in the homepage insights preview.',
      },
      defaultValue: false,
    },
  ],
}
