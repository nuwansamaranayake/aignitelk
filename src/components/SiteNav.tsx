import Link from "next/link";
import LkLogo from "@/components/LkLogo";
import MobileNav, { type NavItem } from "@/components/MobileNav";

// Site shell navigation, shared by every page. Section links point at the
// home page so they work from product pages too.
const productPages = [
  { href: "/products/drapestudio", label: "DrapeStudio & MirrorMe" },
  { href: "/govihub", label: "GoviHub" },
];

const mobileItems: NavItem[] = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/govihub", label: "GoviHub" },
  { href: "/products/drapestudio", label: "DrapeStudio & MirrorMe" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="h-[3px] bg-stripe" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="AiGNITE Software home" className="flex items-center gap-3">
          <LkLogo size={40} />
        </Link>
        <div className="hidden items-center gap-8 text-sm text-text-muted sm:flex">
          <a href="/#about" className="transition-colors hover:text-lk-maroon">
            About
          </a>
          <div className="group relative">
            <a href="/#products" className="transition-colors hover:text-lk-maroon">
              Products
            </a>
            <div className="invisible absolute left-1/2 top-full z-10 -translate-x-1/2 pt-3 opacity-0 motion-safe:transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="w-60 rounded-xl border border-border bg-bg-surface p-2 shadow-lk-2">
                <a href="/#products" className="block rounded-lg px-3 py-2 hover:bg-bg-alt hover:text-lk-maroon">
                  All products
                </a>
                {productPages.map((p) => (
                  <Link key={p.href} href={p.href} className="block rounded-lg px-3 py-2 hover:bg-bg-alt hover:text-lk-maroon">
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/govihub" className="transition-colors hover:text-lk-maroon">
            GoviHub
          </Link>
          <a href="/#team" className="transition-colors hover:text-lk-maroon">
            Team
          </a>
          <a
            href="/#contact"
            className="rounded-lg bg-lk-maroon px-4 py-2 text-white transition-colors hover:bg-lk-maroon-deep"
          >
            Contact
          </a>
        </div>
        <MobileNav items={mobileItems} />
      </div>
    </nav>
  );
}
