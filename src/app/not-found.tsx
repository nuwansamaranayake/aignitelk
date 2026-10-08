import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Static export writes this page to out/404.html. nginx serves it with a 404 status.
export const metadata: Metadata = {
  title: "Page not found | AiGNITE Software",
  robots: { index: false },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/products/kalika", label: "Kalika" },
  { href: "/products/drapestudio", label: "DrapeStudio & MirrorMe" },
  { href: "/govihub", label: "GoviHub" },
  { href: "/products/scanpass", label: "ScanPass" },
  { href: "/products/primepath", label: "PrimePath HR" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="section-container pt-[120px] text-center">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-lk-maroon">404</p>
        <h1 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
          This page does not exist. Try one of these instead.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-block rounded-lg border border-lk-maroon px-5 py-2.5 font-semibold text-lk-maroon transition-colors hover:bg-lk-maroon/5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
