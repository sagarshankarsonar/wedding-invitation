
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://icynwsusucapkxycnnjd.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_NgXpAZWGMOyIuk-Tqpvd5A_uXnSW8_e'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
