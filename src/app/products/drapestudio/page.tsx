import type { Metadata } from "next";
import Image from "next/image";
import { Noto_Sans_Sinhala } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BeforeAfter from "@/components/drapestudio/BeforeAfter";
import RevealObserver from "@/components/drapestudio/RevealObserver";
import CountUp from "@/components/drapestudio/CountUp";
import {
  DS_URL,
  MM_URL,
  PAGE_PATH,
  PRICE_PER_IMAGE,
  brandSrc,
  compare,
  faq,
  finalCta,
  gallery,
  hero,
  meta,
  mirrorme,
  modules,
  pricing,
  problem,
  shotSrc,
  shots,
  sriLanka,
  steps,
  stickyCta,
  type Module,
} from "./content";

const sinhala = Noto_Sans_Sinhala({ subsets: ["sinhala"], display: "swap" });

const OG_IMAGE = { url: `${PAGE_PATH}/og-drapestudio-1200x630.jpg`, width: 1200, height: 630, alt: meta.ogAlt };

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

const rs = (n: number) => `Rs. ${n.toLocaleString("en-US")}`;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const ORG_ID = "https://aignitelk.com/#aignite-software-private-limited";
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "AIgnite Software (Private) Limited",
    legalName: "AIgnite Software (Private) Limited",
    url: "https://aignitelk.com",
    identifier: { "@type": "PropertyValue", propertyID: "Sri Lanka company number", value: "PV 00362580" },
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
    brand: [
      { "@type": "Brand", name: "DrapeStudio", url: DS_URL },
      { "@type": "Brand", name: "MirrorMe", url: MM_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DrapeStudio",
    url: DS_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    inLanguage: ["en", "si", "ta"],
    description:
      "Turns a phone photo of a garment into a photo of a model wearing the garment. For clothing sellers and online shops in Sri Lanka.",
    publisher: { "@id": ORG_ID },
    offers: [
      { "@type": "Offer", name: "Generated image, any module", price: String(PRICE_PER_IMAGE), priceCurrency: "LKR" },
      { "@type": "Offer", name: "Virtual fit-on, one or two garments", price: "50", priceCurrency: "LKR" },
      ...pricing.packages.map((p) => ({
        "@type": "Offer",
        name: `${p.name} wallet reload${p.bonus ? `, ${rs(p.bonus)} bonus` : ""}`,
        price: String(p.price),
        priceCurrency: "LKR",
      })),
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MirrorMe",
    url: MM_URL,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web browser",
    inLanguage: ["si", "en", "ta"],
    description: "Puts clothes on your own selfie so you see the outfit on you before you buy, then share the look.",
    audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
    publisher: { "@id": ORG_ID },
    offers: [{ "@type": "Offer", name: "Virtual try-on look", price: "50", priceCurrency: "LKR" }],
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

const moduleStyles: Record<Module["accent"], { card: string; tag: string; frame: string }> = {
  emerald: { card: "bg-ds-emerald text-white", tag: "bg-white/15 text-white", frame: "border-ds-gold" },
  gold: { card: "border border-ds-gold bg-ds-gold-soft text-ds-ink", tag: "bg-ds-gold text-ds-ink", frame: "border-ds-gold" },
  maroon: { card: "bg-lk-maroon text-white", tag: "bg-white/15 text-white", frame: "border-lk-gold" },
  teal: { card: "bg-lk-teal text-white", tag: "bg-white/15 text-white", frame: "border-lk-gold" },
};

const btn =
  "inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-3 text-center font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-ds-gold/60";

function Eyebrow({ children, tone = "text-ds-emerald" }: { children: React.ReactNode; tone?: string }) {
  return (
    <p className={`flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] ${tone}`}>
      <span aria-hidden className="text-ds-gold">
        ✦
      </span>
      {children}
    </p>
  );
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-ds-gold/70 bg-ds-gold-soft/80 p-4 text-center ${className}`}
    >
      <span aria-hidden className="text-2xl text-ds-gold">
        ✦
      </span>
      <span className="text-sm font-semibold text-ds-emerald">{label}</span>
    </div>
  );
}

const icons = {
  camera: "M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316ZM16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
  user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  photo: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z",
  sliders: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
  share: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z",
  check: "m4.5 12.75 6 6 9-13.5",
};

function Icon({ d, className = "h-6 w-6" }: { d: string; className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default function DrapeStudioPage() {
  return (
    <div className="min-h-screen bg-ds-cream text-text-primary">
      {jsonLd.map((block, i) => (
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
        <section id="top" aria-labelledby="hero-title" className="ds-mesh-light pt-[84px]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-14 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pb-20 md:pt-12">
            <div>
              <Image
                src={brandSrc("drapestudio-lockup-640.webp")}
                alt="DrapeStudio logo"
                width={640}
                height={428}
                className="h-auto w-40 md:w-52"
              />
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-ds-gold/60 bg-white/80 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-ds-emerald shadow-lk-1">
                <Image src={brandSrc("drapestudio-monogram-256.webp")} alt="" width={256} height={256} className="h-7 w-7" />
                <Image src={brandSrc("mirrorme-mark.svg")} alt="" width={28} height={28} className="h-7 w-7 rounded-lg" />
                {hero.badge}
              </p>
              <h1
                id="hero-title"
                className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-ds-emerald sm:text-5xl lg:text-6xl"
              >
                {hero.title}
              </h1>
              <p lang="si" className={`${sinhala.className} mt-3 text-xl leading-[1.7] text-lk-maroon`}>
                {hero.sinhala}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted">{hero.sub}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={DS_URL} {...ext} className={`${btn} bg-ds-emerald text-white shadow-lk-2 hover:bg-ds-emerald-deep`}>
                  {hero.primary}
                </a>
                <a
                  href="#mirrorme"
                  className={`${btn} border-2 border-mm-primary-deep bg-white text-mm-primary-deep hover:bg-mm-primary-deep hover:text-white`}
                >
                  {hero.secondary}
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {hero.facts.map((f) => (
                  <li key={f} className="rounded-full bg-ds-emerald-soft px-3 py-1 text-sm font-semibold text-ds-emerald">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[22rem] md:max-w-sm">
              <div className="overflow-hidden rounded-2xl border border-ds-gold/70 bg-white shadow-lk-3 outline outline-1 outline-offset-4 outline-ds-gold/40">
                <Image
                  src={shotSrc(shots.sareeAfter, 896)}
                  alt={shots.sareeAfter.alt}
                  width={shots.sareeAfter.width}
                  height={shots.sareeAfter.height}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <span className="absolute right-3 top-3 rounded-md bg-ds-emerald/90 px-2 py-1 text-xs font-semibold text-ds-gold-pale">
                {hero.afterLabel}
              </span>
              <div className="absolute -bottom-6 left-1 w-[40%] -rotate-3 sm:-left-8">
                <div className="overflow-hidden rounded-xl border-4 border-white bg-white shadow-lk-3">
                  <Image
                    src={shotSrc(shots.sareeBefore, 480)}
                    alt={shots.sareeBefore.alt}
                    width={480}
                    height={643}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <span className="mt-1 block text-center text-xs font-semibold text-ds-ink">{hero.beforeLabel}</span>
              </div>
              <span aria-hidden className="absolute -right-2 -top-4 text-3xl text-ds-gold">
                ✦
              </span>
            </div>
          </div>
        </section>

        {/* 2. The problem */}
        <section aria-labelledby="problem-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-lk-maroon">{problem.eyebrow}</Eyebrow>
            <h2 id="problem-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              {problem.title}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {problem.cards.map((c, i) => (
                <div
                  key={c.title}
                  className={`rounded-2xl border border-border bg-ds-cream p-6 shadow-lk-1 ${
                    ["border-t-4 border-t-lk-maroon", "border-t-4 border-t-ds-gold", "border-t-4 border-t-lk-teal"][i]
                  }`}
                >
                  <Icon d={[icons.camera, icons.user, icons.photo][i]} className={`h-8 w-8 ${["text-lk-maroon", "text-ds-gold", "text-lk-teal"][i]}`} />
                  <h3 className="mt-4 font-heading text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. How it works */}
        <section aria-labelledby="how-title" className="ds-mesh-dark py-16 text-white md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-ds-gold-light">{steps.eyebrow}</Eyebrow>
            <h2 id="how-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              {steps.title}
            </h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.items.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl border border-ds-gold/40 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="font-heading text-5xl font-bold text-ds-gold-light">{i + 1}</span>
                  <Icon d={[icons.camera, icons.sliders, icons.share][i]} className="absolute right-6 top-7 h-8 w-8 text-ds-gold-pale/80" />
                  <h3 className="mt-3 font-heading text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ds-gold-pale">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Modules */}
        <section aria-labelledby="modules-title" className="ds-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{modules.eyebrow}</Eyebrow>
            <h2 id="modules-title" className="mt-3 font-heading text-3xl font-bold text-ds-emerald sm:text-4xl">
              {modules.title}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {modules.items.map((m) => {
                const st = moduleStyles[m.accent];
                return (
                  <article key={m.key} className={`grid grid-cols-[2fr_3fr] overflow-hidden rounded-2xl shadow-lk-2 ${st.card}`}>
                    <div className="relative min-h-[11rem] bg-white/10">
                      {m.shot ? (
                        <Image
                          src={shotSrc(m.shot, 480)}
                          alt={m.shot.alt}
                          width={480}
                          height={643}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      ) : (
                        <Placeholder label={gallery.placeholder} className="absolute inset-2" />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-xl font-semibold">{m.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed opacity-90">{m.body}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {m.tags.map((t) => (
                          <li key={t} className={`rounded-full px-3 py-1 text-xs font-semibold ${st.tag}`}>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Before and after */}
        <section aria-labelledby="gallery-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{gallery.eyebrow}</Eyebrow>
            <h2 id="gallery-title" className="mt-3 font-heading text-3xl font-bold text-ds-emerald sm:text-4xl">
              {gallery.title}
            </h2>
            <p className="mt-2 text-text-muted">{gallery.note}</p>
            <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
              <BeforeAfter
                before={shots.sareeBefore}
                after={shots.sareeAfter}
                beforeLabel={hero.beforeLabel}
                afterLabel={hero.afterLabel}
                sliderLabel={gallery.sliderLabel}
              />
              <ul className="grid grid-cols-2 gap-4">
                {gallery.pairs.map((p) => (
                  <li key={p.label} className="rounded-2xl border border-border bg-ds-cream p-3 shadow-lk-1">
                    {p.before && p.after ? (
                      <div className="grid grid-cols-2 gap-1.5">
                        <Image src={shotSrc(p.before, 480)} alt={p.before.alt} width={480} height={643} className="h-auto w-full rounded-lg" />
                        <Image src={shotSrc(p.after, 480)} alt={p.after.alt} width={480} height={643} className="h-auto w-full rounded-lg" />
                      </div>
                    ) : (
                      <Placeholder label={gallery.placeholder} className="aspect-[3/2]" />
                    )}
                    <p className="mt-2 text-center text-sm font-semibold text-ds-emerald">{p.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Pricing */}
        <section aria-labelledby="pricing-title" className="ds-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{pricing.eyebrow}</Eyebrow>
            <h2 id="pricing-title" className="mt-3 font-heading text-3xl font-bold text-ds-emerald sm:text-4xl">
              {pricing.title}
            </h2>
            <p className="mt-2 text-text-muted">{pricing.sub}</p>

            <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="ds-mesh-dark relative overflow-hidden rounded-3xl border border-ds-gold/60 p-6 text-white shadow-lk-3 outline outline-1 outline-offset-4 outline-ds-gold/40">
                <div className="flex items-center justify-between">
                  <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-ds-gold-light">{pricing.walletLabel}</p>
                  <Image src={brandSrc("drapestudio-monogram-white-256.webp")} alt="" width={256} height={256} className="h-10 w-10" />
                </div>
                <p className="mt-8 font-heading text-5xl font-bold tracking-tight">
                  <CountUp value={pricing.walletBalance} />
                </p>
                <p className="mt-2 text-sm text-ds-gold-pale">{pricing.walletCaption}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {pricing.chips.map((c) => (
                    <li key={c} className="rounded-full border border-ds-gold/60 bg-white/10 px-3 py-1 text-sm font-semibold text-ds-gold-pale">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="grid grid-cols-2 gap-4">
                  {pricing.packages.map((p) => {
                    const total = p.price + p.bonus;
                    return (
                      <li
                        key={p.name}
                        className={`relative rounded-2xl border bg-white p-4 shadow-lk-1 ${p.badge ? "border-ds-gold ring-2 ring-ds-gold/50" : "border-border"}`}
                      >
                        {p.badge && (
                          <span className="absolute -top-3 right-3 rounded-full bg-ds-emerald px-2.5 py-0.5 text-xs font-semibold text-ds-gold-pale">
                            {p.badge}
                          </span>
                        )}
                        <h3 className="font-heading text-base font-semibold text-ds-emerald">{p.name}</h3>
                        <p className="mt-1 font-heading text-2xl font-bold">{rs(p.price)}</p>
                        {p.bonus > 0 ? (
                          <p className="mt-2 inline-block rounded-full bg-ds-gold px-2.5 py-0.5 text-xs font-bold text-ds-ink">
                            + {rs(p.bonus)} bonus
                          </p>
                        ) : (
                          <p className="mt-2 inline-block rounded-full bg-ds-emerald-soft px-2.5 py-0.5 text-xs font-semibold text-ds-emerald">
                            No bonus
                          </p>
                        )}
                        <p className="mt-3 text-sm text-text-muted">
                          You get {rs(total)}, enough for {total / PRICE_PER_IMAGE} images
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <ul className="mt-6 space-y-2">
                  {pricing.trust.map((t) => (
                    <li key={t} className="flex items-start gap-2 font-semibold text-ds-emerald">
                      <Icon d={icons.check} className="mt-0.5 h-5 w-5 shrink-0 text-ds-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a href={DS_URL} {...ext} className={`${btn} mt-6 bg-ds-emerald text-white hover:bg-ds-emerald-deep`}>
                  {pricing.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Built for Sri Lanka */}
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
                  key={c}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    ["bg-lk-maroon text-white", "bg-lk-gold text-lk-ink", "bg-lk-saffron/15 text-lk-ink", "bg-lk-teal text-white"][i % 4]
                  }`}
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-sm text-text-muted">{sriLanka.legal}</p>
          </div>
        </section>

        <div className="family-band h-2" aria-hidden />

        {/* 8. MirrorMe */}
        <section id="mirrorme" aria-labelledby="mirrorme-title" className="mm-mesh py-16 text-mm-text md:py-24">
          <div className="reveal mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <Image src={brandSrc("mirrorme-mark.svg")} alt="MirrorMe logo" width={48} height={48} className="h-12 w-12 rounded-xl" />
                <span className="font-heading text-2xl font-bold">MirrorMe</span>
              </div>
              <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-mm-accent">{mirrorme.eyebrow}</p>
              <h2 id="mirrorme-title" className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                {mirrorme.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-mm-text-2">{mirrorme.sub}</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {mirrorme.tiles.map((t, i) => (
                  <li key={t.title} className="rounded-2xl border border-white/10 bg-mm-surface p-4">
                    <Icon d={[icons.user, icons.photo, icons.sliders][i]} className={`h-7 w-7 ${i === 1 ? "text-mm-accent" : "text-mm-primary"}`} />
                    <h3 className="mt-3 font-heading text-base font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mm-text-2">{t.body}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={MM_URL} {...ext} className={`${btn} bg-mm-primary text-mm-night hover:bg-mm-primary-soft`}>
                  {mirrorme.cta}
                </a>
                <p>
                  <span className="rounded-full bg-mm-accent px-3 py-1 text-sm font-bold text-mm-night">{mirrorme.price}</span>
                  <span className="ml-2 text-sm text-mm-text-2">{mirrorme.priceNote}</span>
                </p>
              </div>
              <p className="mt-4 text-sm text-mm-text-2">{mirrorme.notes}</p>
            </div>

            <div className="mx-auto w-full max-w-[17rem]">
              <div className="rounded-[2.2rem] border border-white/15 bg-mm-surface p-3 shadow-[0_0_0_1px_theme(colors.mm.primary/40%),0_10px_34px_theme(colors.mm.primary/30%)]">
                <div className="rounded-[1.7rem] bg-mm-surface-2 p-4">
                  <p className="text-center text-sm font-semibold">{mirrorme.shareTitle}</p>
                  <div className="mt-3 flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-mm-primary/60 bg-mm-night/60 text-center">
                    <span aria-hidden className="text-2xl text-mm-accent">
                      ✦
                    </span>
                    <span className="px-4 text-sm font-semibold text-mm-text">{gallery.placeholder}</span>
                  </div>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {mirrorme.shareTargets.map((s) => (
                      <li key={s} className="rounded-xl bg-mm-elevated px-2 py-2 text-center text-xs font-semibold">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="family-band h-2" aria-hidden />

        {/* 9. One family, two apps */}
        <section aria-labelledby="compare-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-4xl px-4 sm:px-6">
            <h2 id="compare-title" className="text-center font-heading text-3xl font-bold sm:text-4xl">
              {compare.title}
            </h2>
            <table className="mt-10 w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-2xl text-sm shadow-lk-2">
              <thead>
                <tr>
                  <th scope="col" className="w-[28%] bg-ds-cream p-3 text-left font-semibold text-text-muted">
                    <span className="sr-only">Topic</span>
                  </th>
                  <th scope="col" className="bg-ds-emerald p-3 text-left font-heading text-base font-semibold text-white">
                    DrapeStudio
                  </th>
                  <th scope="col" className="bg-mm-night p-3 text-left font-heading text-base font-semibold text-mm-primary">
                    MirrorMe
                  </th>
                </tr>
              </thead>
              <tbody>
                {compare.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="border-t border-border bg-ds-cream p-3 text-left align-top font-semibold">
                      {r.label}
                    </th>
                    <td className="border-t border-border bg-ds-emerald-soft p-3 align-top">{r.ds}</td>
                    <td className="border-t border-border bg-white p-3 align-top">{r.mm}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="border-t border-border bg-ds-cream p-3 text-left font-semibold">
                    Link
                  </th>
                  <td className="border-t border-border bg-ds-emerald-soft p-3">
                    <a href={DS_URL} {...ext} className="inline-flex min-h-11 items-center break-words text-xs font-semibold text-ds-emerald underline underline-offset-2 sm:text-sm">
                      drapestudiolk.com
                    </a>
                  </td>
                  <td className="border-t border-border bg-white p-3">
                    <a href={MM_URL} {...ext} className="inline-flex min-h-11 items-center break-words text-xs font-semibold text-mm-primary-deep underline underline-offset-2 sm:text-sm">
                      mirrorme.cc
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 10. FAQ */}
        <section aria-labelledby="faq-title" className="ds-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-3xl px-6">
            <h2 id="faq-title" className="text-center font-heading text-3xl font-bold text-ds-emerald sm:text-4xl">
              {faq.title}
            </h2>
            <div className="mt-10 space-y-3">
              {faq.items.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-white p-5 shadow-lk-1 open:border-ds-gold">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ds-ink">
                    {f.q}
                    <span aria-hidden className="text-xl text-ds-gold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Final call to action */}
        <section aria-labelledby="final-title" className="ds-mesh-dark py-16 text-center text-white md:py-20">
          <div className="reveal mx-auto max-w-3xl px-6">
            <h2 id="final-title" className="font-heading text-3xl font-bold sm:text-4xl">
              {finalCta.title}
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={DS_URL} {...ext} className={`${btn} bg-ds-gold text-ds-ink hover:bg-ds-gold-light`}>
                {finalCta.ds}
              </a>
              <a href={MM_URL} {...ext} className={`${btn} bg-mm-primary text-mm-night hover:bg-mm-primary-soft`}>
                {finalCta.mm}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <div className="h-20 bg-lk-maroon-deep md:hidden" aria-hidden />

      {/* Sticky call to action on small screens */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ds-gold/50 bg-ds-emerald/95 px-4 py-3 backdrop-blur md:hidden">
        <a href={DS_URL} {...ext} className={`${btn} w-full bg-ds-gold text-ds-ink`}>
          {stickyCta}
        </a>
      </div>
    </div>
  );
}
