import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          SPARC
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/#apps" className="hover:underline">
            Apps
          </Link>
          <Link href="/reports" className="hover:underline">
            Reports
          </Link>
        </div>
      </nav>
    </header>
  );
}
