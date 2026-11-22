import { apps } from "@/config/apps";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="py-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SPARC</h1>
        <p className="mt-4 max-w-2xl text-lg text-black/70 dark:text-white/70">
          One place for all SPARC apps and their reports.
        </p>
      </section>

      <section id="apps" className="pb-20">
        <h2 className="text-2xl font-semibold">Our apps</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {apps.map((app) => (
            <a
              key={app.slug}
              href={app.url}
              className="rounded-lg border border-black/10 p-5 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              <h3 className="font-semibold">{app.name}</h3>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                {app.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
