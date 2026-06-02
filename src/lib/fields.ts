import type { Field } from 'payload'

export const slugField: Field = {
  name: 'slug',
  type: 'text',
  admin: {
    description: 'Use lowercase words separated by hyphens, for example: supporting-child-confidence',
  },
  index: true,
  required: true,
  unique: true,
}
