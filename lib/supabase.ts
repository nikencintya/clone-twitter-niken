import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env'

const supabaseUrl = SUPABASE_URL || 'https://khzwdqwdyxtqddjhtekd.supabase.co'

const supabaseAnonKey = SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoendkcXdkeXh0cWRkamh0ZWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMjQyNTcsImV4cCI6MjA3MTcwMDI1N30.D1xUpvIWTCAWW-7LF9gmuXe57W1bY-RNylf7rnoPaBU'


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})