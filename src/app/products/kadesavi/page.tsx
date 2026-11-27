import type { Metadata } from "next";
import Image from "next/image";
import { Noto_Sans_Sinhala } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ORG_ID, breadcrumbs } from "@/lib/seo";
import {
  OFFER_URL,
  PAGE_PATH,
  SAMPLE_SHOP_URL,
  SITE_URL,
  STORES_URL,
  brandSrc,
  comingSoon,
  features,
  finalCta,
  hero,
  meta,
  offer,
  problem,
  steps,
} from "./content";

const sinhala = Noto_Sans_Sinhala({ subsets: ["sinhala"], display: "swap" });

const OG_IMAGE = { url: "/img/kadesavi/og-kadesavi-1200x630.jpg", width: 1200, height: 630, alt: meta.ogAlt };

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: PAGE_PATH,
    siteName: "AiGNITE Software",
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [OG_IMAGE] },
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kadesavi",
    alternateName: "කඩේ සවි",
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser, installable on Android and iPhone",
    inLanguage: ["si", "en"],
    description: meta.description,
    publisher: { "@id": ORG_ID },
  },
];

// Kadesavi brand tokens (kadesavi repo docs/brand): blue #1f3fa6, amber #f2a60c, ground #f6f8fc.
const BLUE = "text-[#1f3fa6]";
const btn =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function Eyebrow({ children, tone = "text-[#8a5a00]" }: { children: React.ReactNode; tone?: string }) {
  return (
    <p className={`font-heading text-xs font-semibold uppercase tracking-[0.2em] ${tone}`}>{children}</p>
  );
}

export default function KadesaviPage() {
  return (
    <div className="min-h-screen bg-[#f6f8fc] text-text-primary">
      {[...jsonLd, breadcrumbs("Kadesavi", PAGE_PATH)].map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, "\\u003c") }}
        />
      ))}
      <SiteNav />

      <main>
        {/* 1. Hero */}
        <section id="top" aria-labelledby="hero-title" className="overflow-hidden pt-[84px]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-8 md:grid-cols-[1.1fr_0.9fr] md:pb-20 md:pt-12">
            <div>
              <Image
                src={brandSrc("kadesavi-logo.svg")}
                alt="Kadesavi logo"
                width={274}
                height={64}
                priority
                className="h-12 w-auto md:h-14"
              />
              <div className="mt-6">
                <Eyebrow>{hero.eyebrow}</Eyebrow>
              </div>
              <h1
                id="hero-title"
                className={`mt-3 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${BLUE}`}
              >
                {hero.title}
              </h1>
              <p className="mt-3 text-xl leading-[1.7] text-text-muted">
                <span lang="si" className={sinhala.className}>
                  {hero.sinhala}
                </span>
                <span>, &ldquo;{hero.meaning}&rdquo;</span>
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted">{hero.sub}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={OFFER_URL}
                  {...ext}
                  className={`${btn} bg-[#1f3fa6] text-white shadow-lk-2 hover:bg-[#17307f] focus-visible:outline-[#1f3fa6]`}
                >
                  {hero.primary}
                </a>
                <a
                  href={STORES_URL}
                  {...ext}
                  className={`${btn} border-2 border-[#1f3fa6] bg-white ${BLUE} hover:bg-[#e9edf6] focus-visible:outline-[#1f3fa6]`}
                >
                  {hero.secondary}
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {hero.chips.map((c) => (
                  <li key={c} className="rounded-full bg-[#1f3fa6] px-3 py-1 text-sm font-semibold text-white">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto flex w-full max-w-xs justify-center">
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(242,166,12,0.35),rgba(31,63,166,0.18),transparent)] blur-2xl"
              />
              <Image
                src={brandSrc("kadesavi-mark.svg")}
                alt=""
                aria-hidden
                width={64}
                height={64}
                className="relative h-48 w-48 drop-shadow-xl md:h-64 md:w-64"
              />
            </div>
          </div>
        </section>

        {/* 2. The free page offer */}
        <section id="free-page" aria-labelledby="offer-title" className="bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Eyebrow>{offer.eyebrow}</Eyebrow>
              <h2 id="offer-title" className={`mt-3 font-heading text-3xl font-bold sm:text-4xl ${BLUE}`}>
                {offer.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">{offer.body}</p>
              <p className="mt-4 rounded-2xl border border-[#d3dae8] border-l-4 border-l-[#f2a60c] bg-[#f6f8fc] p-5 font-semibold leading-relaxed text-text-primary">
                {offer.price}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={OFFER_URL}
                  {...ext}
                  className={`${btn} bg-[#1f3fa6] text-white hover:bg-[#17307f] focus-visible:outline-[#1f3fa6]`}
                >
                  {offer.primary}
                </a>
                <a
                  href={SAMPLE_SHOP_URL}
                  {...ext}
                  className={`${btn} border-2 border-[#1f3fa6] bg-white ${BLUE} hover:bg-[#e9edf6] focus-visible:outline-[#1f3fa6]`}
                >
                  {offer.secondary}
                </a>
              </div>
              <p className="mt-3 text-sm text-text-muted">{offer.sampleNote}</p>
            </div>
            <div className="rounded-2xl border border-[#d3dae8] bg-[#f6f8fc] p-6 shadow-lk-1 sm:p-7">
              <h3 className={`font-heading text-xl font-semibold ${BLUE}`}>{offer.getTitle}</h3>
              <ul className="mt-4 space-y-3">
                {offer.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-text-primary">
                    <span aria-hidden className="mt-[2px] font-bold text-[#1a7f4b]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-text-muted">{offer.not}</p>
              <a
                href={OFFER_URL}
                {...ext}
                className={`mt-3 inline-block text-sm font-semibold underline underline-offset-4 ${BLUE} hover:text-[#17307f]`}
              >
                {offer.terms}
              </a>
            </div>
          </div>
        </section>

        {/* 3. The order book: the problem */}
        <section id="order-book" aria-labelledby="problem-title" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-lk-maroon">{problem.eyebrow}</Eyebrow>
            <h2 id="problem-title" className={`mt-3 font-heading text-3xl font-bold sm:text-4xl ${BLUE}`}>
              {problem.title}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-muted">{problem.lead}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {problem.cards.map((c) => (
                <div key={c.title} className="rounded-2xl border border-[#d3dae8] border-t-4 border-t-[#f2a60c] bg-white p-6 shadow-lk-1">
                  <h3 className={`font-heading text-xl font-semibold ${BLUE}`}>{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How it works */}
        <section aria-labelledby="how-title" className="bg-[#1f3fa6] py-16 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-[#f2a60c]">{steps.eyebrow}</Eyebrow>
            <h2 id="how-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              {steps.title}
            </h2>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.items.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-white/20 bg-white/5 p-6">
                  <span className="font-heading text-5xl font-bold text-[#f2a60c]">{i + 1}</span>
                  <h3 className="mt-3 font-heading text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/85">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. Made for one-person businesses */}
        <section aria-labelledby="features-title" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Eyebrow>{features.eyebrow}</Eyebrow>
            <h2 id="features-title" className={`mt-3 font-heading text-3xl font-bold sm:text-4xl ${BLUE}`}>
              {features.title}
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.items.map((f) => (
                <div key={f.title} className="rounded-2xl border border-[#d3dae8] bg-[#f6f8fc] p-6 shadow-lk-1">
                  <h3 className={`font-heading text-lg font-semibold ${BLUE}`}>{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Coming soon */}
        <section aria-labelledby="soon-title" className="bg-[#e9edf6] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-lk-maroon">{comingSoon.eyebrow}</Eyebrow>
            <h2 id="soon-title" className={`mt-3 font-heading text-3xl font-bold sm:text-4xl ${BLUE}`}>
              {comingSoon.title}
            </h2>
            <p className="mt-3 text-text-muted">{comingSoon.note}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {comingSoon.items.map((c) => (
                <li key={c.title} className="rounded-2xl border border-dashed border-[#9aa6c4] bg-white/70 p-5">
                  <span className="inline-block rounded-full bg-[#f2a60c] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-[#1a1a1a]">
                    Coming soon
                  </span>
                  <h3 className={`mt-3 font-heading text-lg font-semibold ${BLUE}`}>{c.title}</h3>
                  <p className="mt-1 leading-relaxed text-text-muted">{c.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-text-primary">{comingSoon.disclaimer}</p>
          </div>
        </section>

        {/* 7. Final call to action */}
        <section aria-labelledby="final-title" className="bg-[#1f3fa6] py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="final-title" className="font-heading text-3xl font-bold sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">{finalCta.body}</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={OFFER_URL}
                {...ext}
                className={`${btn} bg-[#f2a60c] text-[#1a1a1a] hover:bg-[#ffbe3d] focus-visible:outline-white`}
              >
                {finalCta.primary}
              </a>
              <a
                href="/#contact"
                className={`${btn} border-2 border-white text-white hover:bg-white/10 focus-visible:outline-white`}
              >
                {finalCta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
