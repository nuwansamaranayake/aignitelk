import type { Metadata } from "next";
import Image from "next/image";
import { Noto_Sans_Sinhala, Noto_Sans_Tamil } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { breadcrumbs } from "@/lib/seo";
import RevealObserver from "@/components/drapestudio/RevealObserver";
import {
  CONTACT_URL,
  PAGE_PATH,
  POSTER_SRC,
  SP_URL,
  VIDEO_URL,
  brandSrc,
  demo,
  faq,
  features,
  finalCta,
  gate,
  hero,
  meta,
  passTypes,
  pricing,
  problem,
  proof,
  proofStats,
  screenSrc,
  screens,
  sriLanka,
  steps,
  stickyCta,
  type PassType,
  type Screen,
} from "./content";

const sinhala = Noto_Sans_Sinhala({ subsets: ["sinhala"], display: "swap" });
// One chip uses Tamil, so the font loads on demand instead of being preloaded.
const tamil = Noto_Sans_Tamil({ subsets: ["tamil"], display: "swap", preload: false });

const OG_IMAGE = { url: "/img/scanpass/og-scanpass-1200x630.jpg", width: 1200, height: 630, alt: meta.ogAlt };

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

const ORG_ID = "https://aignitelk.com/#aignite-software-private-limited";
const [starter, standard, large] = pricing.tiers;
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "AiGNITE Software (Pvt) Ltd",
    legalName: "AIgnite Software (Private) Limited",
    alternateName: "AiGNITE Sri Lanka",
    url: "https://aignitelk.com",
    identifier: { "@type": "PropertyValue", propertyID: "Sri Lanka company number", value: "PV 00362580" },
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
    brand: [{ "@type": "Brand", name: "ScanPass", url: SP_URL }],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ScanPass",
    url: SP_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    inLanguage: ["en", "si", "ta"],
    description: meta.description,
    publisher: { "@id": ORG_ID },
    offers: [
      { "@type": "Offer", name: starter.name, price: String(starter.lowPrice), priceCurrency: "LKR" },
      ...[standard, large].map((t) => ({
        "@type": "AggregateOffer",
        name: t.name,
        lowPrice: String(t.lowPrice),
        highPrice: String(t.highPrice),
        priceCurrency: "LKR",
      })),
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const btn =
  "inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-3 text-center font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const onLight = "focus-visible:ring-sp-teal";
const onDark = "focus-visible:ring-sp-aqua focus-visible:ring-offset-sp-night";

// The ScanPass icon geometry from the logo kit (assets/svg/icon), drawn inline as the section marker.
function SpMark({ className = "h-4 w-4", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="10" fill="#0E7490" />
      <rect x="14" y="14" width="72" height="72" rx="4" fill={dark ? "#1F2937" : "#FFFFFF"} />
      <rect x="28" y="28" width="44" height="44" rx="2" fill="#B45309" />
    </svg>
  );
}

// Eyebrows are 12px, so they use the deeper teal: sp-teal drops below 4.5:1 on the mesh tint.
function Eyebrow({ children, tone = "text-sp-teal-deep", dark = false }: { children: React.ReactNode; tone?: string; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] ${tone}`}>
      <SpMark className="h-3.5 w-3.5" dark={dark} />
      {children}
    </p>
  );
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-sp-teal/50 bg-sp-teal-pale p-4 text-center ${className}`}
    >
      <SpMark className="h-8 w-8" />
      <span className="text-sm font-semibold text-sp-teal-deep">{label}</span>
    </div>
  );
}

// bar: fill for a status bar strip above a real screenshot, so the notch never covers the screen.
function PhoneFrame({ children, className = "", bar }: { children: React.ReactNode; className?: string; bar?: string }) {
  return (
    <div className={`relative rounded-[2.2rem] border-[8px] border-sp-ink bg-sp-ink shadow-lk-3 ${className}`}>
      <div aria-hidden className="absolute left-1/2 top-1.5 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-sp-ink" />
      <div className="relative aspect-[390/844] overflow-hidden rounded-[1.7rem] bg-white">
        {bar && <div aria-hidden className={`h-6 ${bar}`} />}
        {children}
      </div>
    </div>
  );
}

function ScreenImage({ shot, sizes }: { shot: Screen; sizes: string }) {
  return (
    <Image
      src={screenSrc(shot, 896)}
      alt={shot.alt}
      width={shot.width}
      height={shot.height}
      sizes={sizes}
      className="h-auto w-full"
    />
  );
}

const badgeColours: Record<PassType["key"], string> = {
  media: "bg-sp-terra text-white",
  staff: "bg-sp-teal text-white",
  vip: "bg-sp-hold text-sp-ink",
  attendee: "bg-sp-teal-deep text-white",
  zones: "bg-sp-night text-sp-aqua",
};

// A coded pass badge for the pass type cards: colour band with the pass label, the ScanPass mark as the QR.
function PassBadge({ colour, label }: { colour: string; label: string }) {
  return (
    <div aria-hidden className="w-24 -rotate-3 overflow-hidden rounded-lg bg-white shadow-lk-2 ring-1 ring-black/5">
      <div className={`px-2 py-1 text-center text-[10px] font-bold uppercase tracking-wider ${colour}`}>{label}</div>
      <div className="flex flex-col items-center gap-1.5 p-2.5">
        <SpMark className="h-11 w-11" />
        <span className="h-1.5 w-14 rounded bg-sp-ink/15" />
        <span className="h-1.5 w-10 rounded bg-sp-ink/10" />
      </div>
    </div>
  );
}

const passStyles: Record<PassType["key"], { card: string; chip: string; span?: string }> = {
  media: { card: "bg-sp-terra text-white", chip: "bg-white text-sp-terra-deep" },
  staff: { card: "bg-sp-teal text-white", chip: "bg-white text-sp-teal-deep" },
  vip: { card: "border border-sp-hold bg-sp-terra-soft text-sp-ink", chip: "bg-sp-hold text-sp-ink" },
  attendee: { card: "bg-sp-teal-soft text-sp-night", chip: "bg-white text-sp-night" },
  zones: { card: "bg-sp-night text-white", chip: "bg-sp-aqua text-sp-night", span: "md:col-span-2" },
};

const icons = {
  pass: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z",
  chat: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  dollar: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  sliders: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
  userPlus: "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z",
  qr: "M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5ZM6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z",
  database: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  document: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  pin: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
  phone: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  language: "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802",
  wifi: "M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z",
  check: "m4.5 12.75 6 6 9-13.5",
  x: "M6 18 18 6M6 6l12 12",
  warn: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
};

function Icon({ d, className = "h-6 w-6", strokeWidth = 1.6 }: { d: string; className?: string; strokeWidth?: number }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

const gateStyles: Record<string, { tile: string; icon: string }> = {
  approved: { tile: "bg-sp-go text-white", icon: icons.check },
  denied: { tile: "bg-sp-stop text-white", icon: icons.x },
  flagged: { tile: "bg-sp-hold text-sp-ink", icon: icons.warn },
};

export default function ScanPassPage() {
  return (
    <div className="min-h-screen bg-bg-surface text-text-primary">
      {[...jsonLd, breadcrumbs("ScanPass", PAGE_PATH)].map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, "\\u003c") }}
        />
      ))}
      <RevealObserver />
      <SiteNav />

      <main>
        {/* 1. Hero */}
        <section id="top" aria-labelledby="hero-title" className="sp-mesh-light pt-[84px]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pb-20 md:pt-12">
            <div>
              <Image
                src={brandSrc("scanpass-lockup-640.webp")}
                alt="ScanPass logo"
                width={640}
                height={137}
                priority
                className="h-auto w-40 md:w-52"
              />
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-sp-teal/40 bg-white/80 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-sp-teal shadow-lk-1">
                <Image src={brandSrc("scanpass-icon.svg")} alt="" width={28} height={28} className="h-7 w-7" />
                {hero.badge}
              </p>
              <h1
                id="hero-title"
                className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-sp-teal sm:text-5xl lg:text-6xl"
              >
                {hero.title}
              </h1>
              <p lang="si" className={`${sinhala.className} mt-3 text-xl leading-[1.7] text-sp-terra`}>
                {hero.sinhala}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted">{hero.sub}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={CONTACT_URL} {...ext} className={`${btn} ${onLight} bg-sp-teal text-white shadow-lk-2 hover:bg-sp-teal-deep`}>
                  {hero.primary}
                </a>
                <a
                  href="#demo"
                  className={`${btn} ${onLight} border-2 border-sp-terra bg-white text-sp-terra hover:bg-sp-terra hover:text-white`}
                >
                  {hero.secondary}
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {hero.facts.map((f) => (
                  <li key={f} className="rounded-full bg-sp-teal-soft px-3 py-1 text-sm font-semibold text-sp-teal-deep">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature moment: a scan line sweeps the badge QR, then the Approved chip pops onto the phone. */}
            <div className="relative mx-auto w-full max-w-[22rem] pb-12 md:max-w-sm">
              <figure className="relative ml-auto mr-2 w-[13.5rem] sm:w-[15rem]">
                <PhoneFrame>
                  <div
                    aria-hidden
                    className="flex h-full flex-col items-center justify-center bg-sp-go px-4 text-center text-white"
                  >
                    <span className="text-4xl leading-none">{hero.mock.mark}</span>
                    <span className="mt-2 font-heading text-3xl font-semibold">{hero.mock.status}</span>
                    <span className="mt-1 text-[11px] uppercase tracking-wide opacity-80">{hero.mock.result}</span>
                    <span className="mt-6 block w-full rounded-lg bg-black/20 px-3 py-3 text-left">
                      <span className="block text-lg font-medium leading-tight">{hero.mock.name}</span>
                      <span className="block text-sm opacity-80">{hero.mock.org}</span>
                      <span className="mt-2 inline-block rounded bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-sp-terra">
                        {hero.mock.pass}
                      </span>
                      <span className="mt-2 block text-xs opacity-80">{hero.mock.scans}</span>
                    </span>
                    <span className="mt-6 rounded bg-white/20 px-5 py-2 text-xs font-medium">{hero.mock.next}</span>
                  </div>
                </PhoneFrame>
                <span className="absolute right-3 top-6 z-10 rounded-md bg-sp-night/90 px-2 py-1 text-xs font-semibold text-sp-teal-soft">
                  {hero.gateLabel}
                </span>
                <span className="sp-pop absolute -left-8 top-[2%] z-20 sm:top-[7%] inline-flex items-center gap-1.5 rounded-full bg-sp-go py-1.5 pl-2.5 pr-4 font-heading text-xl font-bold text-white shadow-lk-3 ring-4 ring-white">
                  <Icon d={icons.check} className="h-5 w-5" strokeWidth={2.6} />
                  {hero.approved}
                </span>
                <figcaption className="mt-2 text-right text-xs font-semibold text-sp-ink/80">
                  <span className="sr-only">{hero.mockDescription} </span>
                  {hero.mockNote}
                </figcaption>
              </figure>

              <div className="absolute bottom-0 left-0 w-[56%] -rotate-3 sm:-left-6">
                <div className="relative overflow-hidden rounded-xl border-4 border-white bg-white shadow-lk-3">
                  <Image
                    src={screenSrc(screens.badge, 480)}
                    alt={screens.badge.alt}
                    width={480}
                    height={303}
                    priority
                    className="h-auto w-full"
                  />
                  {/* QR area of the badge layout: 4 mm in, 20 mm square, on an 85.6 x 54 mm card. */}
                  <div aria-hidden className="absolute left-[4.67%] top-[7.4%] h-[37%] w-[23.4%] overflow-hidden">
                    <span className="sp-scan-line absolute inset-0 border-b-2 border-sp-teal bg-gradient-to-b from-transparent to-sp-teal/35" />
                  </div>
                </div>
                <span className="mt-1 block text-center text-xs font-semibold text-sp-ink">{hero.badgeLabel}</span>
              </div>
              <SpMark className="absolute -top-4 right-0 h-8 w-8 rotate-12" />
            </div>
          </div>
        </section>

        {/* 2. The problem */}
        <section aria-labelledby="problem-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-sp-terra">{problem.eyebrow}</Eyebrow>
            <h2 id="problem-title" className="mt-3 font-heading text-3xl font-bold text-sp-ink sm:text-4xl">
              {problem.title}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {problem.cards.map((c, i) => (
                <div
                  key={c.title}
                  className={`rounded-2xl border border-border bg-sp-teal-pale p-6 shadow-lk-1 ${
                    ["border-t-4 border-t-sp-terra", "border-t-4 border-t-sp-hold", "border-t-4 border-t-sp-teal"][i]
                  }`}
                >
                  <Icon
                    d={[icons.pass, icons.chat, icons.dollar][i]}
                    className={`h-8 w-8 ${["text-sp-terra", "text-sp-terra-deep", "text-sp-teal"][i]}`}
                  />
                  <h3 className="mt-4 font-heading text-xl font-semibold text-sp-ink">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. How it works */}
        <section aria-labelledby="how-title" className="sp-mesh-dark py-16 text-white md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-sp-teal-soft" dark>
              {steps.eyebrow}
            </Eyebrow>
            <h2 id="how-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              {steps.title}
            </h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.items.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl border border-sp-aqua/30 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="font-heading text-5xl font-bold text-sp-aqua">{i + 1}</span>
                  <Icon d={[icons.sliders, icons.userPlus, icons.qr][i]} className="absolute right-6 top-7 h-8 w-8 text-sp-apricot" />
                  <h3 className="mt-3 font-heading text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-sp-teal-soft">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Pass types */}
        <section aria-labelledby="pass-title" className="sp-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{passTypes.eyebrow}</Eyebrow>
            <h2 id="pass-title" className="mt-3 font-heading text-3xl font-bold text-sp-teal sm:text-4xl">
              {passTypes.title}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {passTypes.items.map((p) => {
                const st = passStyles[p.key];
                return (
                  <article
                    key={p.key}
                    className={`grid grid-cols-[auto_1fr] items-center gap-5 overflow-hidden rounded-2xl p-5 shadow-lk-2 sm:gap-6 sm:p-6 ${st.card} ${st.span ?? ""}`}
                  >
                    <PassBadge colour={badgeColours[p.key]} label={p.badgeLabel} />
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{p.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed">{p.body}</p>
                      <p className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${st.chip}`}>{p.chip}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Gate results */}
        <section aria-labelledby="gate-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <h2 id="gate-title" className="font-heading text-3xl font-bold text-sp-ink sm:text-4xl">
              {gate.title}
            </h2>
            <p className="mt-2 text-text-muted">{gate.sub}</p>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {gate.tiles.map((t) => {
                const st = gateStyles[t.key];
                return (
                  <li key={t.key} className={`rounded-2xl p-6 shadow-lk-2 md:p-8 ${st.tile}`}>
                    <Icon d={st.icon} className="h-10 w-10" strokeWidth={2.4} />
                    <p className="mt-4 font-heading text-3xl font-bold">{t.label}</p>
                    <p className="mt-2 text-xl font-bold">{t.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 6. Real screens and demo */}
        <section id="demo" aria-labelledby="demo-title" className="sp-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{demo.eyebrow}</Eyebrow>
            <h2 id="demo-title" className="mt-3 font-heading text-3xl font-bold text-sp-teal sm:text-4xl">
              {demo.title}
            </h2>
            <p className="mt-2 text-text-muted">{demo.sub}</p>

            <div className="mt-10 grid grid-cols-2 items-start gap-5 md:grid-cols-[1fr_2fr_1fr] md:gap-6">
              <figure className="md:row-span-2">
                <PhoneFrame bar="bg-white">
                  <ScreenImage shot={screens.register} sizes="(min-width: 768px) 16rem, 45vw" />
                </PhoneFrame>
                <figcaption className="mt-3 text-center text-sm font-semibold text-sp-ink">{demo.captions.register}</figcaption>
              </figure>
              <figure className="md:col-start-3 md:row-span-2 md:row-start-1">
                <PhoneFrame bar="bg-sp-ink">
                  <ScreenImage shot={screens.gate} sizes="(min-width: 768px) 16rem, 45vw" />
                </PhoneFrame>
                <figcaption className="mt-3 text-center text-sm font-semibold text-sp-ink">{demo.captions.gate}</figcaption>
              </figure>
              <figure className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1">
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lk-2">
                  <div aria-hidden className="flex gap-1.5 border-b border-border bg-sp-teal-pale px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-sp-stop/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-sp-hold/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-sp-go/70" />
                  </div>
                  <Placeholder label={demo.placeholder} className="m-3 aspect-[16/9]" />
                </div>
                <figcaption className="mt-3 text-center text-sm font-semibold text-sp-ink">{demo.captions.admin}</figcaption>
              </figure>
              <figure className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-2">
                <div className="rounded-2xl border border-border bg-sp-teal-pale p-4 shadow-lk-2 sm:p-6">
                  <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lk-2">
                    <ScreenImage shot={screens.badge} sizes="(min-width: 768px) 28rem, 90vw" />
                  </div>
                </div>
                <figcaption className="mt-3 text-center text-sm font-semibold text-sp-ink">{demo.captions.badge}</figcaption>
              </figure>
            </div>

            <div className="mx-auto mt-14 max-w-4xl">
              <h3 id="video-title" className="text-center font-heading text-2xl font-semibold text-sp-ink">
                {demo.videoTitle}
              </h3>
              <div className="mt-6 overflow-hidden rounded-2xl border-4 border-white bg-sp-night shadow-lk-3">
                <video
                  controls
                  preload="none"
                  playsInline
                  poster={POSTER_SRC}
                  aria-labelledby="video-title"
                  className="aspect-video h-auto w-full focus-within:outline focus-within:outline-4 focus-within:-outline-offset-4 focus-within:outline-sp-aqua"
                  src={VIDEO_URL}
                >
                  <track kind="captions" src={demo.captionsSrc} srcLang="en" label={demo.captionsLabel} default />
                  <a href={VIDEO_URL} {...ext}>
                    {demo.videoFallback}
                  </a>
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Features */}
        <section aria-labelledby="features-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{features.eyebrow}</Eyebrow>
            <h2 id="features-title" className="mt-3 font-heading text-3xl font-bold text-sp-ink sm:text-4xl">
              {features.title}
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.items.map((f, i) => (
                <li key={f.title} className="rounded-2xl border border-border bg-white p-6 shadow-lk-1">
                  <Icon
                    d={[icons.database, icons.sliders, icons.document, icons.pin, icons.phone, icons.language][i]}
                    className={`h-8 w-8 ${["text-sp-teal", "text-sp-terra", "text-sp-teal-deep"][i % 3]}`}
                  />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-sp-ink">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted">{f.body}</p>
                </li>
              ))}
              <li className="flex flex-col gap-4 rounded-2xl bg-sp-night p-6 text-white shadow-lk-2 sm:flex-row sm:items-center md:col-span-2 lg:col-span-3">
                <Icon d={icons.wifi} className="h-10 w-10 shrink-0 text-sp-aqua" />
                <div>
                  <h3 className="font-heading text-lg font-semibold">{features.offline.title}</h3>
                  <p className="mt-1 leading-relaxed text-sp-teal-soft">{features.offline.body}</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 8. Proof */}
        <section aria-labelledby="proof-title" className="sp-mesh-dark py-16 text-white md:py-20">
          <div className="reveal mx-auto max-w-4xl px-6 text-center">
            <SpMark className="mx-auto h-10 w-10" dark />
            <h2 id="proof-title" className="mt-5 font-heading text-3xl font-bold sm:text-4xl">
              {proof.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-sp-teal-soft">{proof.body}</p>
            {proofStats.length > 0 && (
              <dl className="mt-10 grid gap-5 sm:grid-cols-3">
                {proofStats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-sp-aqua/30 bg-white/5 p-5">
                    <dt className="text-sm text-sp-teal-soft">{s.label}</dt>
                    <dd className="mt-1 font-heading text-3xl font-bold text-sp-aqua">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>

        {/* 9. Pricing */}
        <section aria-labelledby="pricing-title" className="sp-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{pricing.eyebrow}</Eyebrow>
            <h2 id="pricing-title" className="mt-3 font-heading text-3xl font-bold text-sp-teal sm:text-4xl">
              {pricing.title}
            </h2>
            <p className="mt-2 text-text-muted">{pricing.sub}</p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pricing.tiers.map((t) => {
                // A range prints as "LKR 150,000" on one line and "to 300,000" under it.
                const cut = t.price.indexOf(" to ");
                const from = cut < 0 ? t.price : t.price.slice(0, cut);
                const to = cut < 0 ? "" : t.price.slice(cut + 1);
                return (
                  <li
                    key={t.name}
                    className={`relative flex flex-col rounded-2xl border bg-white p-5 shadow-lk-1 ${
                      t.badge ? "border-sp-terra ring-2 ring-sp-terra/40" : "border-border"
                    }`}
                  >
                    {t.badge && (
                      <span className="absolute -top-3 right-4 rounded-full bg-sp-terra px-2.5 py-0.5 text-xs font-semibold text-white">
                        {t.badge}
                      </span>
                    )}
                    <h3 className="font-heading text-lg font-semibold text-sp-teal">{t.name}</h3>
                    <p className="mt-1 text-sm text-text-muted">{t.attendees}</p>
                    <p className="mt-4 font-heading text-2xl font-bold leading-tight text-sp-ink">
                      {from}
                      {to && <span className="block text-base font-semibold text-text-muted">{to}</span>}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2 text-sm">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Icon d={icons.check} className="mt-0.5 h-4 w-4 shrink-0 text-sp-teal" strokeWidth={2.2} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={CONTACT_URL}
                      {...ext}
                      aria-label={`${pricing.cta}, ${t.name}`}
                      className={`${btn} ${onLight} mt-6 bg-sp-teal text-white hover:bg-sp-teal-deep`}
                    >
                      {pricing.cta}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border-2 border-sp-terra bg-sp-terra-soft p-6 sm:flex-row sm:items-center">
              <SpMark className="h-12 w-12 shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-semibold text-sp-terra-deep">{pricing.nonprofit.title}</h3>
                <p className="mt-1 text-sp-ink">{pricing.nonprofit.body}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Built for Sri Lanka */}
        <section aria-labelledby="lk-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-lk-maroon">{sriLanka.eyebrow}</Eyebrow>
            <h2 id="lk-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              {sriLanka.title}
            </h2>
            <div className="mt-4 h-1 w-24 bg-stripe" aria-hidden />
            <ul className="mt-8 flex flex-wrap gap-3">
              {sriLanka.chips.map((c, i) => (
                <li
                  key={c.label}
                  lang={c.lang}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    c.lang === "si" ? sinhala.className : c.lang === "ta" ? tamil.className : ""
                  } ${["bg-lk-maroon text-white", "bg-lk-gold text-lk-ink", "bg-sp-teal text-white", "bg-sp-terra text-white"][i % 4]}`}
                >
                  {c.label}
                </li>
              ))}
            </ul>
            {sriLanka.privacyLine.enabled && <p className="mt-8 max-w-2xl text-text-muted">{sriLanka.privacyLine.text}</p>}
            <p className="mt-8 max-w-2xl text-sm text-text-muted">{sriLanka.company}</p>
          </div>
        </section>

        {/* 11. FAQ */}
        <section aria-labelledby="faq-title" className="sp-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-3xl px-6">
            <h2 id="faq-title" className="text-center font-heading text-3xl font-bold text-sp-teal sm:text-4xl">
              {faq.title}
            </h2>
            <div className="mt-10 space-y-3">
              {faq.items.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-white p-5 shadow-lk-1 open:border-sp-teal">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-sp-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden className="text-xl text-sp-terra group-open:rotate-45 motion-safe:transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Final call to action */}
        <section aria-labelledby="final-title" className="sp-mesh-dark py-16 text-center text-white md:py-20">
          <div className="reveal mx-auto max-w-3xl px-6">
            <h2 id="final-title" className="font-heading text-3xl font-bold sm:text-4xl">
              {finalCta.title}
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={CONTACT_URL} {...ext} className={`${btn} ${onDark} bg-sp-aqua text-sp-night hover:bg-white`}>
                {finalCta.primary}
              </a>
              <a href={SP_URL} {...ext} className={`${btn} ${onDark} border-2 border-white text-white hover:bg-white hover:text-sp-night`}>
                {finalCta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <div className="h-20 bg-lk-maroon-deep md:hidden" aria-hidden />

      {/* Sticky call to action on small screens */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sp-aqua/40 bg-sp-night/95 px-4 py-3 backdrop-blur md:hidden">
        <a href={CONTACT_URL} {...ext} className={`${btn} ${onDark} w-full bg-sp-aqua text-sp-night`}>
          {stickyCta}
        </a>
      </div>
    </div>
  );
}
