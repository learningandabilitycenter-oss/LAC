import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'

export const GalleryItems: CollectionConfig = {
  slug: 'gallery-items',
  admin: {
    defaultColumns: ['title', 'mediaType', 'eventDate', 'featured'],
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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'mediaType',
      type: 'select',
      defaultValue: 'image',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Video', value: 'video' },
      ],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'videoUrl',
      type: 'text',
      label: 'YouTube or video URL',
    },
    {
      name: 'eventDate',
      type: 'date',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
