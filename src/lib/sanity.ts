import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'i32b0q2c',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})
