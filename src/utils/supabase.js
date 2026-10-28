import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://icynwsusucapkxycnnjd.supabase.co'
const supabaseAnonKey = 'sb_publishable_NgXpAZWGMOyIuk-Tqpvd5A_uXnSW8_e'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
