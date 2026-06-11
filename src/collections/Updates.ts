import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import { slugField } from '../lib/fields'

export const Updates: CollectionConfig = {
  slug: 'updates',
  labels: {
    singular: 'Update',
    plural: 'Updates',
  },
  admin: {
    defaultColumns: ['title', 'type', 'publishedAt'],
    description:
      'Centre and foundation news shown on the Insights → Updates page (and the homepage). The newest updates appear first.',
    group: 'Website content',
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
