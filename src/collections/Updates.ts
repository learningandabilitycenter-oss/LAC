import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import { slugField } from '../lib/fields'

export const Updates: CollectionConfig = {
  slug: 'updates',
  admin: {
    defaultColumns: ['title', 'type', 'publishedAt'],
    description: 'Publish centre and foundation news. The newest updates appear first.',
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
    slugField,
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'community',
      options: [
        { label: 'Community', value: 'community' },
        { label: 'Clinical', value: 'clinical' },
        { label: 'Awareness', value: 'awareness' },
        { label: 'Foundation', value: 'foundation' },
      ],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      required: true,
    },
  ],
}
