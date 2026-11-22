import type { Metadata } from "next";
import { apps } from "@/config/apps";
import { getSupabaseEnv } from "@/lib/supabase/env";

export const metadata: Metadata = {
  title: "Reports · SPARC",
};

export default function ReportsPage() {
  const supabaseConfigured = getSupabaseEnv() !== null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        Reports from each SPARC app will appear here.
      </p>

      {!supabaseConfigured && (
        <p className="mt-6 rounded-md border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
          Supabase is not connected yet. Add <code>NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code>NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</code> to the environment.
        </p>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {apps.map((app) => (
          <div
            key={app.slug}
            className="rounded-lg border border-black/10 p-5 dark:border-white/15"
          >
            <h2 className="font-semibold">{app.name}</h2>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              Report coming soon.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
