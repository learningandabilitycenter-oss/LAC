import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alternative text',
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea',
    },
  ],
  upload: {
    imageSizes: [
      {
        name: 'card',
        width: 720,
        height: 480,
        position: 'centre',
      },
      {
        name: 'square',
        width: 640,
        height: 640,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
  },
}
