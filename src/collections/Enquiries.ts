import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: {
    defaultColumns: ['name', 'email', 'subject', 'createdAt'],
    useAsTitle: 'name',
    description: 'Enquiries submitted through the website contact form.',
  },
  access: {
    create: () => true,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'subject',
      type: 'select',
      defaultValue: 'general',
      options: [
        { label: 'General enquiry', value: 'general' },
        { label: 'Counselling', value: 'counselling' },
        { label: 'Developmental support', value: 'developmental' },
        { label: 'Speech & language therapy', value: 'speech-therapy' },
        { label: 'Learning support', value: 'learning-support' },
        { label: 'Family guidance', value: 'family-guidance' },
        { label: 'Foundation / NBF', value: 'foundation' },
      ],
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Responded', value: 'responded' },
        { label: 'Closed', value: 'closed' },
      ],
      access: {
        create: () => false,
      },
    },
  ],
}
