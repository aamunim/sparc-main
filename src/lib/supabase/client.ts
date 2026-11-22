import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "./env";

/** Supabase client for Client Components (runs in the browser). */
export function createClient() {
  const env = getSupabaseEnv();
  if (!env) {
    throw new Error(
      "Supabase env vars missing: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );
  }
  return createBrowserClient(env.url, env.key);
}
