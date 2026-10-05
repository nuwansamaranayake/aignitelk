import Image from "next/image";
import Link from "next/link";
import LkLogo from "@/components/LkLogo";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const products: { name: string; description: string; url?: string; docsUrl?: string; page?: { href: string; label: string }; icon: React.ReactNode }[] = [
  {
    name: "DrapeStudio",
    description:
      "AI-powered product photography for Sri Lankan e-commerce sellers. Transform basic product photos into professional catalog-ready images.",
    url: "https://drapestudiolk.com",
    page: { href: "/products/drapestudio", label: "See DrapeStudio & MirrorMe →" },
    icon: (
      <Image
        src="/img/drapestudio/brand/drapestudio-monogram-256.webp"
        alt="DrapeStudio logo"
        width={256}
        height={256}
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "GoviHub",
    description:
      "Agricultural intelligence platform connecting Sri Lankan farmers with buyers through smart matching, real-time pricing, and Sinhala/Tamil language support. Currently piloting for the spices market.",
    url: "https://spices.govihublk.com/si",
    docsUrl: "https://docs.govihublk.com",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    name: "ScanPass",
    description:
      "Event credentialing and gate access platform for Sri Lankan organizers. Issues QR-coded credentials for media, staff, VIP, and attendees, then verifies them at the gate on mobile devices with GPS and device tracking. Built from the production-proven Walk for Peace Sri Lanka 2026 system, with LKR pricing and Sinhala/Tamil/English support.",
    url: "https://www.scanpasslk.com",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
      </svg>
    ),
  },
  {
    name: "PrimePath HR",
    description:
      "Payroll management system built for Sri Lankan small and medium businesses. Handles salary calculations, statutory deductions (EPF/ETF), and employee records with full compliance to Sri Lankan labor regulations.",
    url: "https://lk.primepathhr.ai/login",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
];

const awardStats = [
  ["33", "enterprises selected"],
  ["22", "developing countries"],
  ["1", "Sri Lankan company in the cohort"],
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AiGNITE Software (Pvt) Ltd",
  url: "https://aignitelk.com",
  logo: "https://aignitelk.com/favicon-192.png",
  award: "Digital Innovation Impact Pioneer, Global Digital Trade Expo, Hangzhou, September 2026",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <SiteNav />

      {/* Award (first section, directly under the fixed nav) */}
      <section id="award" className="pt-[84px]">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 py-6 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:py-8">
          <div className="order-2 md:order-1">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-lk-maroon">
              International recognition
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Digital Innovation Impact Pioneer
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-primary">
              AiGNITE Sri Lanka was recognised at the Global Digital Trade Expo in Hangzhou, China, in September 2026.
            </p>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-text-muted">
              <p>
                Our GoviHub platform, an AI marketplace that connects Sri Lankan farmers directly to buyers, received the Digital Innovation Impact Pioneer award at the International Youth OPC Co-Creation Dialogue.
              </p>
              <p>
                The programme was organised by the International Trade Centre, a joint agency of the United Nations and the World Trade Organization, together with the Global SDGs and Leadership Development Center and the China International Youth Exchange Center.
              </p>
              <p>
                Aruni Samaranayake, our Director of Operations, accepted the award in Hangzhou on behalf of the company.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 divide-x divide-border-light border-y border-border-light py-4">
              {awardStats.map(([value, label]) => (
                <div key={label} className="px-3 first:pl-0 sm:px-5">
                  <p className="font-heading text-3xl font-bold text-lk-maroon">{value}</p>
                  <p className="mt-1 text-xs leading-snug text-text-muted sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://govihublk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-lk-maroon px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-lk-maroon-deep"
              >
                Explore GoviHub
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-lk-maroon px-6 py-3 text-center font-semibold text-lk-maroon transition-colors hover:bg-lk-maroon/5"
              >
                Work with us
              </a>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <picture className="block w-full">
              <source
                type="image/webp"
                srcSet="/award/aruni_with_award-480.webp 480w, /award/aruni_with_award-800.webp 800w, /award/aruni_with_award-1200.webp 1200w"
                sizes="(min-width: 1152px) 448px, (min-width: 768px) 40vw, calc(100vw - 48px)"
              />
              {/* eslint-disable-next-line @next/next/no-img-element -- static export: responsive WebP via <picture> */}
              <img
                src="/award/aruni_with_award-1200.jpg"
                alt="Aruni Samaranayake of AiGNITE Sri Lanka holding the Digital Innovation Impact Pioneer award at the Global Digital Trade Expo, Hangzhou, September 2026"
                width={1200}
                height={1800}
                loading="eager"
                fetchPriority="high"
                className="mx-auto h-auto w-full max-w-[min(100%,calc(58svh*2/3))] rounded-xl border border-border shadow-lk-2 md:max-w-[min(100%,calc((100svh_-_148px)*2/3))]"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden border-t border-border">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-lk-saffron/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-lk-maroon/5 blur-3xl" />
        </div>

        <div className="section-container relative text-center">
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <LkLogo size={72} />
            </div>
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-lk-maroon">
              Software (Pvt) Ltd
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              AI-Powered Software
              <br />
              <span className="text-lk-maroon">Solutions from Sri Lanka</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
              Combining Silicon Valley engineering standards with deep local domain
              knowledge to deliver intelligent software that solves real problems.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-lg bg-lk-maroon px-8 py-3 font-semibold text-white transition-colors hover:bg-lk-maroon-deep"
              >
                Our Products
              </a>
              <a
                href="#about"
                className="rounded-lg border border-lk-maroon px-8 py-3 font-semibold text-lk-maroon transition-colors hover:bg-lk-maroon/5"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              About <span className="text-lk-maroon">AiGNITE Software</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              AiGNITE Software (Pvt) Ltd is the Sri Lankan arm of the AiGNITE
              ecosystem, building AI-powered products for local and regional
              markets. We combine Silicon Valley engineering standards with deep
              local domain knowledge to deliver intelligent software that solves
              real problems.
            </p>
            <div className="glass-card mx-auto mt-10 max-w-2xl p-6">
              <p className="text-sm leading-relaxed text-text-muted">
                <span className="text-lk-saffron">●</span>{" "}
                AiGNITE Software (Pvt) Ltd operates as a sister company to{" "}
                <a
                  href="https://aigniteconsulting.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lk-maroon underline underline-offset-2 transition-colors hover:text-lk-maroon-deep"
                >
                  AiGNITE Consulting LLC
                </a>{" "}
                (Houston, TX), sharing architecture patterns, AI expertise, and
                engineering standards across both entities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-border bg-bg-alt">
        <div className="section-container">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Our <span className="text-lk-maroon">Products</span>
            </h2>
            <p className="mt-4 text-text-muted">
              Intelligent solutions for Sri Lankan markets
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div key={product.name} className="glass-card-hover p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-lk-maroon/10 text-lk-maroon">
                  {product.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {product.description}
                </p>
                {(product.url || product.docsUrl || product.page) && (
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {product.page && (
                      <Link
                        href={product.page.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-lk-maroon underline underline-offset-2 transition-colors hover:text-lk-maroon-deep"
                      >
                        {product.page.label}
                      </Link>
                    )}
                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-lk-maroon transition-colors hover:text-lk-maroon-deep"
                      >
                        Visit →
                      </a>
                    )}
                    {product.docsUrl && (
                      <a
                        href={product.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-lk-teal transition-colors hover:text-lk-teal-soft"
                      >
                        Learn the concept →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-t border-border">
        <div className="section-container">
          <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">
            Our <span className="text-lk-maroon">Team</span>
          </h2>

          {/* Nuwan - Featured */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="glass-card overflow-hidden sm:flex">
              <div className="flex-shrink-0 sm:w-56">
                <Image
                  src="/team/nuwan_profile.png"
                  alt="Nuwan Samaranayake"
                  width={224}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-lk-maroon">
                  Principal Software Architect & Mentor
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold">
                  Nuwan Samaranayake
                </h3>
                <p className="mt-1 text-sm text-lk-teal">
                  Founder/CEO, AiGNITE Consulting LLC, Houston TX
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  30 years of software engineering with deep expertise in AI/ML, multi-agent architectures, and enterprise systems. Former technical lead at Infosys/HPE, IBM, and MCI, managing 40+ developer teams across global locations. Architect of AiGNITE&apos;s product suite and AI strategy across both entities.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["AI/ML", "Multi-Agent Systems", "Full Stack", "Cloud Architecture", "Python", "TypeScript"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-light bg-bg-alt px-3 py-1 text-xs text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="mailto:nuwan@aigniteconsulting.ai"
                    className="text-sm text-text-muted transition-colors hover:text-lk-maroon"
                  >
                    nuwan@aigniteconsulting.ai
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nuwan-samaranayake-8a50388/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted transition-colors hover:text-lk-maroon"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Aruni */}
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="glass-card overflow-hidden sm:flex">
              <div className="flex-shrink-0 sm:w-56">
                <Image
                  src="/team/aruni_profile.png"
                  alt="Aruni Samaranayake"
                  width={224}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-lk-maroon">
                  Director of Operations
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold">
                  Aruni Samaranayake
                </h3>
                <p className="mt-1 text-sm text-lk-teal">
                  AiGNITE Software (Pvt) Ltd, Sri Lanka
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  Undergraduate in Information Technology at Keiser University, Florida. Brings a fresh perspective to technology-driven solutions with strong foundations in commerce and IT. Bilingual in English and Sinhala.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Information Technology", "Business Operations", "Research & Analysis"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-light bg-bg-alt px-3 py-1 text-xs text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-bg-alt">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Get in <span className="text-lk-maroon">Touch</span>
          </h2>
          <p className="mt-4 text-text-muted">
            Interested in our products or looking to collaborate?
          </p>
          <a
            href="mailto:aruni@aigniteconsulting.ai"
            className="mt-8 inline-block rounded-lg bg-lk-maroon px-8 py-3 font-semibold text-white transition-colors hover:bg-lk-maroon-deep"
          >
            aruni@aigniteconsulting.ai
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
