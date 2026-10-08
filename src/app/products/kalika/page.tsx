import type { Metadata } from "next";
import Image from "next/image";
import { Abhaya_Libre, Cormorant_Garamond } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { breadcrumbs } from "@/lib/seo";
import RevealObserver from "@/components/drapestudio/RevealObserver";
import CountUp from "@/components/drapestudio/CountUp";
import TimingWindow from "@/components/kalika/TimingWindow";
import {
  LK_PAGE_URL,
  OG_IMAGE_PATH,
  PAGE_PATH,
  WA_BUSINESS_URL,
  WA_PERSONAL_URL,
  brandSrc,
  business,
  closing,
  engine,
  faq,
  hero,
  meta,
  offers,
  personal,
  problem,
  promise,
  samples,
  sriLanka,
  steps,
  stickyCta,
  type ServiceCard,
} from "./content";

// Kalika type from the logo kit: Cormorant Garamond. Sinhala in Abhaya Libre.
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const sinhala = Abhaya_Libre({ subsets: ["sinhala"], weight: ["600", "700"], display: "swap" });

const OG_IMAGE = { url: OG_IMAGE_PATH, width: 1200, height: 630, alt: meta.ogAlt };

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
    brand: [{ "@type": "Brand", name: "Kalika", url: LK_PAGE_URL }],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kalika",
    serviceType: "Vedic astrology readings for business timing",
    url: `https://aignitelk.com${PAGE_PATH}`,
    description: meta.description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    availableLanguage: ["si", "en"],
    offers: offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: String(o.price),
      priceCurrency: "LKR",
      ...(o.from ? { priceSpecification: { "@type": "PriceSpecification", minPrice: o.price, priceCurrency: "LKR" } } : {}),
    })),
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
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-3 text-center font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const onNight = "focus-visible:ring-lk-gold focus-visible:ring-offset-kk-night";
const onIvory = "focus-visible:ring-kk-crimson-deep focus-visible:ring-offset-kk-cream";

const accents = [
  "bg-lk-saffron text-kk-night",
  "bg-lk-gold text-kk-night",
  "bg-mm-primary text-kk-night",
  "bg-lk-teal text-kk-cream",
];

function Eyebrow({ children, tone = "text-kk-crimson-deep" }: { children: React.ReactNode; tone?: string }) {
  return (
    <p className={`flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.22em] ${tone}`}>
      <span aria-hidden className="text-lk-gold">
        ✦
      </span>
      {children}
    </p>
  );
}

const icons = {
  chat: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z",
  calendar: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  pen: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
  trend: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
  check: "m4.5 12.75 6 6 9-13.5",
  xCircle: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  document: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  arrow: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
};

function Icon({ d, className = "h-6 w-6", strokeWidth = 1.6 }: { d: string; className?: string; strokeWidth?: number }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function BusinessCard({ card, featured }: { card: ServiceCard; featured: boolean }) {
  return (
    <article
      className={`relative flex flex-col rounded-3xl border-2 border-kk-gold bg-kk-night p-6 text-kk-cream shadow-lk-3 sm:p-8 ${
        featured ? "ring-4 ring-kk-gold/30 lg:-my-4 lg:py-12" : ""
      }`}
    >
      {card.badge && (
        <span className="absolute -top-4 left-6 rounded-full bg-lk-gold px-4 py-1 font-heading text-sm font-bold text-kk-night shadow-lk-2">
          {card.badge}
        </span>
      )}
      <h3 className={`${serif.className} text-3xl font-bold leading-tight text-kk-gold-warm`}>{card.title}</h3>
      <p lang="si" className={`${sinhala.className} mt-1 text-lg leading-[1.6] text-kk-pink`}>
        {card.sinhala}
      </p>
      <p className="mt-4 inline-block self-start rounded-xl bg-gradient-to-r from-lk-saffron to-lk-gold px-4 py-1.5 font-heading text-2xl font-bold text-kk-night">
        {card.price}
      </p>
      <p className="mt-4 leading-relaxed text-kk-cream/90">{card.lead}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Icon d={icons.check} className="mt-1 h-4 w-4 shrink-0 text-lk-gold" strokeWidth={2.4} />
            {b}
          </li>
        ))}
      </ul>
      {card.note && <p className="mt-5 rounded-xl border border-kk-gold/40 bg-white/5 p-3 text-sm text-kk-cream/85">{card.note}</p>}
      <a href={WA_BUSINESS_URL} {...ext} className={`${btn} ${onNight} mt-6 bg-lk-gold text-kk-night hover:bg-kk-gold-hi`}>
        <Icon d={icons.chat} className="h-5 w-5" />
        {card.cta}
      </a>
    </article>
  );
}

function PersonalCard({ card }: { card: ServiceCard }) {
  return (
    <article className="flex flex-col rounded-2xl border border-kk-pink/40 bg-white/5 p-6 text-kk-cream">
      <h3 className={`${serif.className} text-2xl font-bold leading-tight text-kk-cream`}>{card.title}</h3>
      <p lang="si" className={`${sinhala.className} mt-1 text-base leading-[1.6] text-kk-pink`}>
        {card.sinhala}
      </p>
      <p className="mt-3 font-heading text-xl font-bold text-lk-gold">{card.price}</p>
      <p className="mt-3 text-kk-cream/90">{card.lead}</p>
      <ul className="mt-3 flex-1 space-y-1.5 text-sm">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Icon d={icons.check} className="mt-0.5 h-4 w-4 shrink-0 text-kk-pink" strokeWidth={2.4} />
            {b}
          </li>
        ))}
      </ul>
      <a
        href={WA_PERSONAL_URL}
        {...ext}
        className={`${btn} ${onNight} mt-6 border-2 border-kk-pink text-kk-cream hover:bg-kk-pink hover:text-kk-night`}
      >
        <Icon d={icons.chat} className="h-5 w-5" />
        {card.cta}
      </a>
    </article>
  );
}

function CompareTable({ columns, rows, highlight }: { columns: string[]; rows: string[][]; highlight: "night" | "ivory" }) {
  const head = highlight === "night" ? "bg-lk-gold text-kk-night" : "bg-kk-night text-kk-gold-warm";
  return (
    <div className="overflow-hidden rounded-2xl shadow-lk-2">
      <table className="w-full table-fixed border-separate border-spacing-0 text-left text-xs sm:text-sm [&_td]:p-2 [&_th]:p-2 sm:[&_td]:p-3 sm:[&_th]:p-3">
        <colgroup>
          <col className="w-[28%]" />
          <col className="w-[34%]" />
          <col />
        </colgroup>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={`font-heading text-sm font-semibold sm:text-base ${i === 0 ? "bg-kk-medallion text-kk-cream/90" : i === 1 ? "bg-kk-rose text-kk-cream" : head}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <th scope="row" className="border-t border-kk-gold/20 bg-kk-medallion align-top font-semibold text-kk-cream">
                {r[0]}
              </th>
              <td className="border-t border-kk-gold/20 bg-kk-night align-top text-kk-cream/90">{r[1]}</td>
              <td className="border-t border-kk-gold/20 bg-kk-night align-top font-semibold text-kk-gold-warm">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function KalikaPage() {
  const h2 = `${serif.className} mt-3 text-4xl font-bold leading-tight sm:text-5xl`;
  return (
    <div className="min-h-screen bg-kk-night text-kk-cream">
      {[...jsonLd, breadcrumbs("Kalika", PAGE_PATH)].map((block, i) => (
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
        <section id="top" aria-labelledby="hero-title" className="kk-night relative overflow-hidden pt-[84px]">
          <div aria-hidden className="kk-stars pointer-events-none absolute inset-0 opacity-70" />
          <div aria-hidden className="kk-stars-2 kk-twinkle pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:pb-24 md:pt-14">
            <div>
              <Image
                src={brandSrc("kalika-wordmark-cream-512.webp")}
                alt="Kalika"
                width={512}
                height={98}
                priority
                className="h-auto w-40 md:w-48"
              />
              <div className="mt-6">
                <Eyebrow tone="text-kk-gold-warm">{hero.eyebrow}</Eyebrow>
              </div>
              <h1 id="hero-title" className={`${serif.className} mt-4 text-5xl font-bold leading-[1.02] text-kk-cream sm:text-6xl lg:text-7xl`}>
                {hero.title}
              </h1>
              <p lang="si" className={`${sinhala.className} mt-4 text-2xl leading-[1.6] text-kk-pink`}>
                {hero.sinhala}
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-kk-cream/90">{hero.sub}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={WA_BUSINESS_URL} {...ext} className={`${btn} ${onNight} bg-lk-gold text-kk-night shadow-lk-3 hover:bg-kk-gold-hi`}>
                  <Icon d={icons.chat} className="h-5 w-5" />
                  {hero.primary}
                </a>
                <a href="#samples" className={`${btn} ${onNight} border-2 border-kk-gold text-kk-gold-warm hover:bg-kk-gold hover:text-kk-night`}>
                  {hero.secondary}
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2">
                {hero.chips.map((c, i) => (
                  <li key={c} className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${accents[i % accents.length]}`}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature: the Kalika yantra turning once a minute on a gold glow. */}
            <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm md:max-w-md">
              <div
                aria-hidden
                className="absolute inset-[-12%] rounded-full bg-[radial-gradient(closest-side,theme(colors.kk.gold/45%),theme(colors.kk.pink/18%),transparent)] blur-2xl"
              />
              <Image
                src={brandSrc("kalika-yantra-1024.webp")}
                alt={hero.yantraAlt}
                width={1024}
                height={1024}
                priority
                className="kk-spin relative h-auto w-full drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]"
              />
            </div>
          </div>
          <div aria-hidden className="kk-accent relative h-1.5" />
        </section>

        {/* 2. The problem */}
        <section aria-labelledby="problem-title" className="kk-ivory py-16 text-kk-night md:py-24">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{problem.eyebrow}</Eyebrow>
            <h2 id="problem-title" className={h2}>
              {problem.title}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {problem.cards.map((c, i) => (
                <div
                  key={c.title}
                  className={`rounded-2xl border border-kk-gold/50 bg-white p-6 shadow-lk-1 ${
                    ["border-t-4 border-t-lk-saffron", "border-t-4 border-t-mm-primary", "border-t-4 border-t-lk-teal"][i]
                  }`}
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accents[[0, 2, 3][i]]}`}>
                    <Icon d={[icons.calendar, icons.pen, icons.trend][i]} className="h-6 w-6" />
                  </span>
                  <h3 className={`${serif.className} mt-4 text-2xl font-bold`}>{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-kk-night/80">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. How Kalika works */}
        <section aria-labelledby="how-title" className="kk-night relative overflow-hidden py-16 md:py-24">
          <div aria-hidden className="kk-stars pointer-events-none absolute inset-0 opacity-40" />
          <div className="reveal relative mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-kk-gold-warm">{steps.eyebrow}</Eyebrow>
            <h2 id="how-title" className={h2}>
              {steps.title}
            </h2>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.items.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-kk-gold/40 bg-white/5 p-6">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full font-heading text-xl font-bold ${accents[i]}`}>
                    {i + 1}
                  </span>
                  <h3 className={`${serif.className} mt-4 text-2xl font-bold text-kk-gold-warm`}>{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-kk-cream/90">{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <TimingWindow />
            </div>
          </div>
        </section>

        {/* 4. Kalika for business: the most prominent section */}
        <section id="business" aria-labelledby="business-title" className="kk-ivory py-16 text-kk-night md:py-24">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{business.eyebrow}</Eyebrow>
            <h2 id="business-title" className={h2}>
              {business.title}
            </h2>
            <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
              {business.cards.map((c, i) => (
                <BusinessCard key={c.key} card={c} featured={i === 0} />
              ))}
            </div>
            <div className="mt-14 rounded-3xl border-2 border-kk-gold bg-white p-6 shadow-lk-2 sm:p-8">
              <h3 className={`${serif.className} text-3xl font-bold`}>{business.decisionsTitle}</h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {business.decisions.map((d, i) => (
                  <li key={d} className={`rounded-full px-4 py-2 text-sm font-semibold ${accents[i % accents.length]}`}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Under every reading */}
        <section aria-labelledby="engine-title" className="kk-night py-16 md:py-24">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-kk-gold-warm">{engine.eyebrow}</Eyebrow>
            <h2 id="engine-title" className={h2}>
              {engine.title}
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {engine.stats.map((s) => (
                <li key={s.label} className="rounded-2xl border border-kk-gold/50 bg-white/5 p-6">
                  <p className="bg-gradient-to-r from-lk-saffron via-lk-gold to-kk-pink bg-clip-text font-heading text-5xl font-bold text-transparent">
                    <CountUp value={s.value} prefix="" suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-kk-cream/90">{s.label}</p>
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex flex-wrap gap-2">
              {engine.methods.map((m) => (
                <li key={m} className="rounded-full border border-kk-gold/60 bg-kk-medallion px-3.5 py-1.5 text-sm font-semibold text-kk-gold-warm">
                  {m}
                </li>
              ))}
            </ul>
            <h3 className={`${serif.className} mt-14 text-3xl font-bold text-kk-cream`}>{engine.compareTitle}</h3>
            <div className="mt-6">
              <CompareTable columns={engine.compareColumns} rows={engine.compareRows} highlight="night" />
            </div>
          </div>
        </section>

        {/* 6. Our promise */}
        <section aria-labelledby="promise-title" className="kk-ivory py-16 text-kk-night md:py-24">
          <div className="reveal mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border-4 border-kk-gold bg-white p-6 shadow-lk-3 sm:p-10">
              <Eyebrow>{promise.eyebrow}</Eyebrow>
              <h2 id="promise-title" className={h2}>
                {promise.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-kk-night/85">{promise.body}</p>
              <ul className="mt-6 space-y-3">
                {promise.never.map((n) => (
                  <li key={n} className="flex items-start gap-3 font-semibold">
                    <Icon d={icons.xCircle} className="mt-0.5 h-6 w-6 shrink-0 text-kk-crimson" strokeWidth={2} />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Kalika for you */}
        <section aria-labelledby="personal-title" className="kk-night py-16 md:py-24">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-kk-gold-warm">{personal.eyebrow}</Eyebrow>
            <h2 id="personal-title" className={h2}>
              {personal.title}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {personal.cards.map((c) => (
                <PersonalCard key={c.key} card={c} />
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-kk-gold/40 bg-white/5 p-4 text-kk-cream/90">{personal.line}</p>
            <h3 className={`${serif.className} mt-14 text-3xl font-bold text-kk-cream`}>{personal.tableTitle}</h3>
            <div className="mt-6">
              <CompareTable columns={personal.tableColumns} rows={personal.tableRows} highlight="night" />
            </div>
          </div>
        </section>

        {/* 8. Sample readings */}
        <section id="samples" aria-labelledby="samples-title" className="kk-ivory py-16 text-kk-night md:py-24">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{samples.eyebrow}</Eyebrow>
            <h2 id="samples-title" className={h2}>
              {samples.title}
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {samples.cards.map((s, i) => (
                <li key={s.url} className="flex flex-col rounded-2xl border-2 border-kk-gold/60 bg-white p-6 shadow-lk-2">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${accents[[0, 2, 3][i]]}`}>
                    <Icon d={icons.document} className="h-6 w-6" />
                  </span>
                  <h3 className={`${serif.className} mt-4 text-2xl font-bold`}>{s.title}</h3>
                  <p className="mt-2 flex flex-wrap gap-2 text-sm font-semibold">
                    <span className="rounded-full bg-kk-night px-3 py-1 text-kk-gold-warm">{s.pages}</span>
                    <span className="rounded-full bg-kk-crimson-deep px-3 py-1 text-kk-cream">{s.language}</span>
                  </p>
                  <a
                    href={s.url}
                    {...ext}
                    className={`${btn} ${onIvory} mt-6 border-2 border-kk-night text-kk-night hover:bg-kk-night hover:text-kk-gold-warm`}
                    aria-label={`${samples.open}: ${s.title}`}
                  >
                    {samples.open}
                    <Icon d={icons.arrow} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-kk-night/80">{samples.note}</p>
            <a
              href={LK_PAGE_URL}
              {...ext}
              className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-kk-crimson-deep underline underline-offset-4 hover:text-kk-night"
            >
              {samples.reviews}
              <Icon d={icons.arrow} className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* 9. Built for Sri Lanka */}
        <section aria-labelledby="lk-title" className="kk-night py-16 md:py-24">
          <div className="reveal mx-auto max-w-6xl px-6">
            <h2 id="lk-title" className={`${serif.className} text-4xl font-bold leading-tight sm:text-5xl`}>
              {sriLanka.title}
            </h2>
            <div className="mt-4 h-1 w-24 bg-stripe" aria-hidden />
            <ul className="mt-8 flex flex-wrap gap-3">
              {sriLanka.chips.map((c, i) => (
                <li key={c} className={`rounded-full px-4 py-2 text-sm font-semibold ${accents[i % accents.length]}`}>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-kk-cream/80">{sriLanka.footnote}</p>
          </div>
        </section>

        {/* 10. Questions and answers */}
        <section aria-labelledby="faq-title" className="kk-ivory py-16 text-kk-night md:py-24">
          <div className="reveal mx-auto max-w-3xl px-6">
            <h2 id="faq-title" className={`${serif.className} text-center text-4xl font-bold sm:text-5xl`}>
              {faq.title}
            </h2>
            <div className="mt-10 space-y-3">
              {faq.items.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-kk-gold/50 bg-white p-5 shadow-lk-1 open:border-kk-gold">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden className="text-xl text-kk-crimson group-open:rotate-45 motion-safe:transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-kk-night/80">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Closing call to action */}
        <section aria-labelledby="final-title" className="kk-night relative overflow-hidden py-16 text-center md:py-24">
          <div aria-hidden className="kk-stars pointer-events-none absolute inset-0 opacity-50" />
          <div className="reveal relative mx-auto max-w-3xl px-6">
            <Image src={brandSrc("kalika-yantra-256.webp")} alt="" width={256} height={256} className="mx-auto h-20 w-20" />
            <h2 id="final-title" className={`${serif.className} mt-6 text-4xl font-bold leading-tight sm:text-5xl`}>
              {closing.title}
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={WA_BUSINESS_URL} {...ext} className={`${btn} ${onNight} bg-lk-gold text-kk-night hover:bg-kk-gold-hi`}>
                <Icon d={icons.chat} className="h-5 w-5" />
                {closing.primary}
              </a>
              <a href="#samples" className={`${btn} ${onNight} border-2 border-kk-gold text-kk-gold-warm hover:bg-kk-gold hover:text-kk-night`}>
                {closing.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <div className="h-20 bg-lk-maroon-deep md:hidden" aria-hidden />

      {/* Sticky call to action on small screens */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-kk-gold/50 bg-kk-night/95 px-4 py-3 backdrop-blur md:hidden">
        <a href={WA_BUSINESS_URL} {...ext} className={`${btn} ${onNight} w-full bg-lk-gold text-kk-night`}>
          <Icon d={icons.chat} className="h-5 w-5" />
          {stickyCta}
        </a>
      </div>
    </div>
  );
}
