import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    defaultColumns: ['authorName', 'authorRole', 'featured', 'publishedAt'],
    description:
      'Share what families and clients say about LAC. Featured testimonials appear on the homepage; all published testimonials appear on the About page.',
    group: 'Website content',
    useAsTitle: 'authorName',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      label: 'Testimonial',
      admin: {
        description: 'The words shared by the family or client. Keep it to a few sentences.',
      },
      required: true,
    },
    {
      name: 'authorName',
      type: 'text',
      label: 'Name',
      admin: {
        description: 'Who shared this. Use a first name or initials if they prefer privacy.',
      },
      required: true,
    },
    {
      name: 'authorRole',
      type: 'text',
      label: 'Role or relationship',
      admin: {
        description: 'For example: Parent of an 8-year-old, Client, School counsellor.',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Optional. For example: Hyderabad.',
      },
    },
    {
      name: 'rating',
      type: 'number',
      admin: {
        description: 'Optional star rating from 1 to 5.',
      },
      max: 5,
      min: 1,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Feature on homepage',
    },
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      label: 'Date',
      required: true,
    },
  ],
}
