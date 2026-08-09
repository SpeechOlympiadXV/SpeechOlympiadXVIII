import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
  console.warn(
    '[supabase] Missing VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY. ' +
      'Registration submissions will fail. Set them in .env locally and as ' +
      'GitHub Actions secrets for deploys (see .env.example).'
  )
}

/**
 * Falls back to a syntactically valid placeholder URL when the environment is
 * not configured.
 *
 * createClient() throws "supabaseUrl is required" on an empty string. Because
 * this module is imported at app start (via the /register route), that throw
 * escapes before React mounts and takes the WHOLE SITE blank — not just the
 * form. A missing deploy secret must degrade to "the form doesn't submit",
 * never to "the site is down". Callers should check isSupabaseConfigured.
 */
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)
