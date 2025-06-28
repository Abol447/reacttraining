import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jruppzeeitolijrgbvyx.supabase.co";
const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
