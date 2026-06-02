import type { CollectionConfig, TextFieldValidation, UploadFieldValidation } from 'payload'

import { authenticated } from '../lib/access'

function isWebURL(value: unknown) {
  if (typeof value !== 'string' || !value.trim()) return false

  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function getMediaType(siblingData: unknown) {
  if (!siblingData || typeof siblingData !== 'object' || !('mediaType' in siblingData)) return undefined
  return siblingData.mediaType
}

const validateGalleryImage: UploadFieldValidation = (value, { siblingData }) =>
  getMediaType(siblingData) !== 'image' || Boolean(value) || 'Select an image for this gallery item.'

const validateVideoURL: TextFieldValidation = (value, { siblingData }) => {
  if (getMediaType(siblingData) !== 'video') return true
  if (!value) return 'Add a video URL for this gallery item.'
  return isWebURL(value) || 'Enter a valid HTTP or HTTPS video URL.'
}

export const GalleryItems: CollectionConfig = {
  slug: 'gallery-items',
  admin: {
    defaultColumns: ['title', 'mediaType', 'eventDate', 'featured'],
    description: 'Add photos or videos for the public gallery. Featured items are prioritized on the homepage.',
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
      admin: {
        condition: (_, siblingData) => siblingData.mediaType === 'image',
        description: 'Upload a new image or select one from the Media library.',
      },
      relationTo: 'media',
      validate: validateGalleryImage,
    },
    {
      name: 'videoUrl',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.mediaType === 'video',
        description: 'Use a YouTube URL or a direct HTTPS video URL.',
      },
      label: 'YouTube or direct video URL',
      validate: validateVideoURL,
    },
    {
      name: 'eventDate',
      type: 'date',
    },
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        description: 'Featured items are shown first in the homepage gallery preview.',
      },
      defaultValue: false,
    },
  ],
}
