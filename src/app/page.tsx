import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ORG_ID } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Each product enters through the job the customer still does by hand.
// Problem lines and prices come from the product pages on this site.
const jobs: {
  problem: string;
  name: string;
  line: string;
  url: string;
  docsUrl?: string;
  page: { href: string; label: string };
  icon: React.ReactNode;
  flagship?: boolean;
}[] = [
  {
    problem: "You write every order in a book, then type the order again for the courier.",
    name: "Kadesavi",
    line: "Paste the order. Get the courier Excel in one tap.",
    url: "https://kadesavi.com",
    page: { href: "/products/kadesavi", label: "See Kadesavi →" },
    icon: (
      <Image src="/img/kadesavi/brand/kadesavi-mark.svg" alt="Kadesavi logo" width={64} height={64} className="h-12 w-12" />
    ),
  },
  {
    problem: "Payroll lives in a spreadsheet. EPF and ETF files take hours.",
    name: "PrimePath HR",
    line: "Salary sheet in. Payslips and EPF files out.",
    url: "https://lk.primepathhr.ai/login",
    page: { href: "/products/primepath", label: "See PrimePath HR →" },
    icon: (
      <Image
        src="/img/primepath/brand/primepath-icon-192.webp"
        alt="PrimePath HR logo"
        width={192}
        height={192}
        className="h-12 w-12 rounded-xl"
      />
    ),
  },
  {
    problem: "Good clothing photos cost too much.",
    name: "DrapeStudio",
    line: "Phone photo in. Model photo out. Rs. 50 per image.",
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
    problem: "Paper lists slow your gate and invite fake passes.",
    name: "ScanPass",
    line: "Register online. Scan at the gate.",
    url: "https://www.scanpasslk.com",
    page: { href: "/products/scanpass", label: "See ScanPass →" },
    icon: (
      <Image src="/img/scanpass/brand/scanpass-icon.svg" alt="ScanPass logo" width={100} height={100} className="h-12 w-12" />
    ),
  },
  {
    problem: "You sell through middlemen, with no clear view of fair prices.",
    name: "GoviHub",
    line: "Sell direct to buyers. Free for farmers.",
    url: "https://spices.govihublk.com/si",
    docsUrl: "https://docs.govihublk.com",
    page: { href: "/govihub", label: "See GoviHub →" },
    icon: (
      <Image src="/img/govihub/govihub-icon-192.webp" alt="GoviHub logo" width={192} height={192} className="h-12 w-12" />
    ),
  },
  {
    problem: "You pick a launch date from a free weekend on the calendar.",
    name: "Kalika",
    line: "Business decisions, better timed. From Rs. 3,000.",
    url: "https://cosmicnexus.ai/lk",
    page: { href: "/products/kalika", label: "See Kalika →" },
    flagship: true,
    icon: (
      <Image src="/img/kalika/brand/kalika-yantra-256.webp" alt="Kalika logo" width={256} height={256} className="h-12 w-12" />
    ),
  },
];

// The hero picture: three jobs from the first paragraph, each crossed out
// and handed to the product built for the job.
const handWork = [
  { by: "Orders in a paper book", product: "Kadesavi", href: "/products/kadesavi" },
  { by: "Payroll in Excel", product: "PrimePath HR", href: "/products/primepath" },
  { by: "Guest lists on WhatsApp", product: "ScanPass", href: "/products/scanpass" },
];

const proofPoints = [
  "6 products",
  "Digital Innovation Impact Pioneer, 2026",
  "Sister company in Houston, Texas",
];

const planSteps = [
  { title: "Pick your problem", body: "Choose the job you still do by hand." },
  {
    title: "See the product work",
    body: "Each product page shows the screens, the steps and the price where we publish one.",
  },
  {
    title: "Message us",
    body: "Tell us about your business. Aruni replies in Sinhala and English.",
  },
];

const awardStats = [
  ["33", "enterprises selected"],
  ["22", "developing countries"],
  ["1", "Sri Lankan company in the cohort"],
];

// sameAs is left out on purpose: the only profiles linked on the site are the
// founder's personal LinkedIn and the GoviHub YouTube channel, not this company.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "AiGNITE Software (Pvt) Ltd",
      legalName: "AIgnite Software (Private) Limited",
      alternateName: "AiGNITE Sri Lanka",
      url: "https://aignitelk.com",
      logo: "https://aignitelk.com/favicon-192.png",
      award: "Digital Innovation Impact Pioneer, Global Digital Trade Expo, Hangzhou, September 2026",
    },
    {
      "@type": "WebSite",
      "@id": "https://aignitelk.com/#website",
      url: "https://aignitelk.com",
      name: "AiGNITE Software",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <SiteNav />

      {/* Story order: hero, problem, guide (with the award), plan, team, ask. */}

      {/* Hero: the customer's day, then the offer */}
      <section className="relative overflow-hidden pt-[84px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-lk-saffron/10 blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-lk-maroon/5 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="animate-fade-in text-center lg:text-left">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-lk-maroon">
              AiGNITE Software · Sri Lanka
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              <span className="block">Stop running your business by hand.</span>{" "}
              <span className="block text-lk-maroon">Get software built for Sri Lanka.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted lg:mx-0">
              Orders in a paper book. Payroll in Excel. Guest lists on WhatsApp. We build software for the work you
              do by hand. Each product fits how business runs here: EPF and ETF, cash on delivery, prices in rupees.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#products"
                className="rounded-lg bg-lk-maroon px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-lk-maroon-deep"
              >
                Find your product
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-lk-maroon px-8 py-3 text-center font-semibold text-lk-maroon transition-colors hover:bg-lk-maroon/5"
              >
                Talk to us
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted lg:justify-start">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lk-saffron" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card mx-auto w-full max-w-md p-6 sm:p-7 lg:mx-0">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Still done by hand
            </p>
            <ul className="mt-4 divide-y divide-border-light">
              {handWork.map((row) => (
                <li key={row.product} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-[15px] text-text-muted line-through decoration-lk-maroon-soft decoration-2">
                    {row.by}
                  </span>
                  <Link
                    href={row.href}
                    className="flex shrink-0 items-center gap-2 font-heading text-sm font-semibold text-lk-maroon transition-colors hover:text-lk-maroon-deep"
                  >
                    <span aria-hidden="true" className="text-lk-saffron">
                      →
                    </span>
                    {row.product}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-text-muted">
              3 of the 6 jobs we have built for.{" "}
              <a href="#products" className="font-semibold text-lk-maroon underline underline-offset-2 hover:text-lk-maroon-deep">
                See all 6
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Problem: each product enters through the job done by hand */}
      <section id="products" className="border-t border-border bg-bg-alt">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-lk-maroon">The problem</p>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Which job do you <span className="text-lk-maroon">still do by hand?</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) =>
              job.flagship ? (
                <div
                  key={job.name}
                  className="kk-night relative flex flex-col overflow-hidden rounded-xl border-2 border-kk-gold p-7 text-kk-cream shadow-lk-3 transition-transform duration-200 hover:-translate-y-[3px]"
                >
                  <span className="absolute right-4 top-4 rounded-full bg-lk-gold px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-kk-night">
                    Flagship
                  </span>
                  <p className="pr-20 font-heading text-lg font-semibold leading-snug text-kk-cream">{job.problem}</p>
                  <div className="mt-6 flex items-center gap-4 border-t border-kk-gold/30 pt-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center">{job.icon}</div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-kk-gold-warm">{job.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-kk-cream/90">{job.line}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
                    <Link
                      href={job.page.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-lk-gold underline underline-offset-2 transition-colors hover:text-kk-gold-hi"
                    >
                      {job.page.label}
                    </Link>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-kk-gold-warm transition-colors hover:text-kk-gold-hi"
                    >
                      Visit →
                    </a>
                  </div>
                </div>
              ) : (
                <div key={job.name} className="glass-card-hover flex flex-col p-7">
                  <p className="font-heading text-lg font-semibold leading-snug">{job.problem}</p>
                  <div className="mt-6 flex items-center gap-4 border-t border-border-light pt-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-lk-maroon/10 text-lk-maroon">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-lk-maroon">{job.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">{job.line}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
                    <Link
                      href={job.page.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-lk-maroon underline underline-offset-2 transition-colors hover:text-lk-maroon-deep"
                    >
                      {job.page.label}
                    </Link>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-lk-maroon transition-colors hover:text-lk-maroon-deep"
                    >
                      Visit →
                    </a>
                    {job.docsUrl && (
                      <a
                        href={job.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-lk-teal transition-colors hover:text-lk-teal-soft"
                      >
                        Learn the concept →
                      </a>
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-text-muted">
            Overseas tools charge in dollars and skip the rules you follow. So the work stays on paper.
          </p>
        </div>
      </section>

      {/* Guide: empathy first, then the award */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-lk-maroon">Who we are</p>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              A Sri Lankan company, <span className="text-lk-maroon">recognised abroad.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              We build for the way business runs here. The courier pays weekly. The customer pays cash at the door.
              Your budget is in rupees.
            </p>
          </div>
        </div>
      </section>

      {/* Award (wording from the award record, unchanged) */}
      <section id="award">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pb-20 pt-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div className="order-2 md:order-1">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-lk-maroon">
              International recognition
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl">
              Digital Innovation Impact Pioneer
            </h2>
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
              <Link
                href="/govihub"
                className="rounded-lg border border-lk-maroon px-6 py-3 text-center font-semibold text-lk-maroon transition-colors hover:bg-lk-maroon/5"
              >
                Explore GoviHub
              </Link>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <picture className="block w-full">
              <source
                type="image/webp"
                srcSet="/award/aruni_with_award-480.webp 480w, /award/aruni_with_award-800.webp 800w, /award/aruni_with_award-1200.webp 1200w"
                sizes="(min-width: 768px) 384px, calc(100vw - 48px)"
              />
              {/* eslint-disable-next-line @next/next/no-img-element -- static export: responsive WebP via <picture> */}
              <img
                src="/award/aruni_with_award-1200.jpg"
                alt="Aruni Samaranayake of AiGNITE Sri Lanka holding the Digital Innovation Impact Pioneer award at the Global Digital Trade Expo, Hangzhou, September 2026"
                width={1200}
                height={1800}
                loading="lazy"
                className="mx-auto h-auto w-full max-w-xs rounded-xl border border-border shadow-lk-2 md:max-w-sm"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Plan */}
      <section id="plan" className="border-t border-border bg-bg-alt">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-lk-maroon">The plan</p>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              3 <span className="text-lk-maroon">steps.</span>
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {planSteps.map((step, i) => (
              <li key={step.title} className="glass-card p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lk-maroon font-heading text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
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

      {/* Sister company */}
      <section className="px-6 pb-20">
        <div className="glass-card mx-auto max-w-2xl p-6 text-center">
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
      </section>

      {/* The ask */}
      <section id="contact" className="border-t border-border bg-bg-alt">
        <div className="section-container text-center">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-lk-maroon">Start here</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-bold sm:text-4xl">
            Tell us which job you <span className="text-lk-maroon">still do by hand.</span>
          </h2>
          <p className="mt-4 text-text-muted">One message starts the conversation. No sales deck.</p>
          <a
            href="mailto:aruni@aigniteconsulting.ai"
            className="mt-8 inline-block rounded-lg bg-lk-maroon px-8 py-3 font-semibold text-white transition-colors hover:bg-lk-maroon-deep"
          >
            Talk to us
          </a>
          <p className="mt-4 text-sm text-text-muted">aruni@aigniteconsulting.ai</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
