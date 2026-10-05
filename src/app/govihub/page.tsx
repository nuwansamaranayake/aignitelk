/* eslint-disable @next/next/no-img-element -- static export: responsive WebP with JPG/PNG fallback via <picture> */
import type { Metadata } from "next";
import { Inter, Noto_Sans_Sinhala, Noto_Sans_Tamil } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PhoneDemo from "@/components/govihub/PhoneDemo";
import {
  CONTACT_HREF,
  GH_APP_URL,
  GH_YOUTUBE_URL,
  PAGE_PATH,
  builtBy,
  closing,
  features,
  ghImg,
  government,
  hero,
  meta,
  photos,
  problem,
  recognition,
  screenSrc,
  screens,
  sectors,
  steps,
  visionMission,
  who,
  type Feature,
  type Screen,
} from "./content";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const sinhala = Noto_Sans_Sinhala({ subsets: ["sinhala"], display: "swap" });
const tamil = Noto_Sans_Tamil({ subsets: ["tamil"], display: "swap" });

const OG_IMAGE = { url: "/img/govihub/og-govihub-1200x630.jpg", width: 1200, height: 630, alt: meta.ogAlt };

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: PAGE_PATH,
    siteName: "AiGNITE Sri Lanka",
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [OG_IMAGE] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GoviHub",
  url: GH_APP_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: ["en", "si", "ta"],
  award: "Digital Innovation Impact Pioneer, Global Digital Trade Expo, Hangzhou, September 2026",
  publisher: { "@type": "Organization", name: "AiGNITE Sri Lanka", url: "https://aignitelk.com" },
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const btn =
  "inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-3 text-center text-base font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-gh-gold";
const wrap = "mx-auto max-w-6xl px-6";

type PhotoRef = (typeof photos)[keyof typeof photos];

function Photo({ p, sizes, className = "", eager = false }: { p: PhotoRef; sizes: string; className?: string; eager?: boolean }) {
  const wide = p.w === 16;
  const widths = wide ? [480, 800, 1200, 1600] : [480, 800, 1200];
  const fallback = wide ? 1200 : 800;
  return (
    <picture>
      <source type="image/webp" srcSet={widths.map((w) => `${ghImg(p.name, w)} ${w}w`).join(", ")} sizes={sizes} />
      <img
        src={ghImg(p.name, fallback, "jpg")}
        alt={p.alt}
        width={fallback}
        height={Math.round((fallback * p.h) / p.w)}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

function ScreenShot({ s, className = "" }: { s: Screen; className?: string }) {
  return (
    <div className={`rounded-[2rem] border-[8px] border-gh-ink bg-gh-ink shadow-lg ${className}`}>
      <picture>
        <source type="image/webp" srcSet={screenSrc(s)} />
        <img
          src={screenSrc(s, "png")}
          alt={s.alt}
          width={390}
          height={844}
          loading="lazy"
          decoding="async"
          className="block aspect-[390/844] h-auto w-full rounded-[1.5rem] object-cover object-top"
        />
      </picture>
    </div>
  );
}

function AiTag() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gh-field px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.1em] text-white">
      <svg aria-hidden className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.25a.75.75 0 0 1 .71.51l1.42 4.1 4.1 1.43a.75.75 0 0 1 0 1.42l-4.1 1.42-1.42 4.1a.75.75 0 0 1-1.42 0l-1.42-4.1-4.1-1.42a.75.75 0 0 1 0-1.42l4.1-1.43 1.42-4.1A.75.75 0 0 1 12 2.25Z" />
      </svg>
      AI
    </span>
  );
}

function FeatureText({ f, size = "lg" }: { f: Feature; size?: "lg" | "md" | "sm" }) {
  const title = { lg: "text-2xl sm:text-3xl", md: "text-xl sm:text-2xl", sm: "text-lg" }[size];
  return (
    <div>
      {f.ai && <AiTag />}
      <h3 className={`${f.ai ? "mt-3" : ""} font-extrabold leading-tight text-gh-ink ${title}`}>{f.title}</h3>
      <p className={`mt-3 leading-relaxed text-gh-slate ${size === "sm" ? "text-base" : "text-lg"}`}>{f.body}</p>
    </div>
  );
}

const icon = {
  // Heroicons v2 outline: sun, shopping-cart, truck
  farmer: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
  buyer: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
  supplier: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
};

function Icon({ d, className = "h-7 w-7" }: { d: string; className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default function GoviHubPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-gh-page text-gh-ink`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteNav />

      <main>
        {/* 1. Hero: daylight. The logo sits on a plain background, never on a photo. */}
        <section aria-labelledby="gh-hero" className="relative overflow-hidden bg-[linear-gradient(180deg,theme(colors.gh.sky-tint)_0%,theme(colors.gh.gold-tint)_70%,theme(colors.gh.page)_100%)] pt-[84px]">
          <div aria-hidden className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-gh-gold/25 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-gh-field/10 blur-3xl" />
          <div className={`${wrap} relative grid items-center gap-10 pb-12 pt-6 md:grid-cols-[1.15fr_0.85fr] md:pb-10 md:pt-8`}>
            <div>
              <picture>
                <source type="image/webp" srcSet={`${ghImg("govihub-logo", 240)} 240w, ${ghImg("govihub-logo", 480)} 480w, ${ghImg("govihub-logo", 960)} 960w`} sizes="208px" />
                <img src={ghImg("govihub-logo", 480, "png")} alt="GoviHub" width={480} height={230} loading="eager" className="h-auto w-52" />
              </picture>
              <h1 id="gh-hero" className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-gh-ink sm:text-5xl lg:text-6xl">
                {hero.headline}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-gh-slate sm:text-xl">{hero.subhead}</p>
              <p className="mt-5 inline-flex rounded-full bg-gh-gold px-4 py-1.5 text-base font-bold text-gh-ink">{hero.promise}</p>
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-gh-slate">
                <span aria-hidden className="h-2 w-2 rounded-full bg-gh-field" />
                {hero.note}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={GH_APP_URL} {...ext} className={`${btn} bg-gh-field text-white shadow-md hover:bg-gh-leaf`}>
                  {hero.primary}
                </a>
                <a href={CONTACT_HREF} className={`${btn} border-2 border-gh-field bg-white text-gh-field hover:bg-gh-green-tint`}>
                  {hero.secondary}
                </a>
              </div>
            </div>
            <PhoneDemo
              label="The GoviHub crop diagnosis flow: a leaf photo, then the result and treatment advice in Sinhala"
              frames={[screens.diagPhoto, screens.diagResult, screens.diagAdvice].map((s) => ({
                src: screenSrc(s),
                alt: s.alt,
                width: 390,
                height: 844,
              }))}
            />
          </div>
        </section>

        {/* 2. The problem */}
        <section aria-labelledby="gh-problem" className="bg-white">
          <div className={`${wrap} grid gap-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-20`}>
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-gh-pepper">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-gh-pepper" />
                {problem.eyebrow}
              </p>
              <h2 id="gh-problem" className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                {problem.heading}
              </h2>
            </div>
            <p className="self-end text-lg leading-relaxed text-gh-slate">{problem.body}</p>
          </div>
          <Photo p={photos.pepperWide} sizes="100vw" className="block h-56 w-full object-cover sm:h-72 lg:h-80" />
        </section>

        {/* 3. What GoviHub does: two large AI rows, two medium, two compact */}
        <section aria-labelledby="gh-features" className="bg-gh-page py-16 md:py-20">
          <div className={wrap}>
            <h2 id="gh-features" className="text-3xl font-extrabold sm:text-4xl">
              {features.heading}
            </h2>

            <div className="mt-10 space-y-6 rounded-3xl border border-gh-line bg-gh-green-tint p-6 sm:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
                <FeatureText f={features.diagnose} />
                <ScreenShot s={screens.diagResult} className="mx-auto w-56 sm:w-60" />
              </div>
              <div className="border-t border-gh-line" />
              <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
                <ScreenShot s={screens.advisor} className="order-2 mx-auto w-56 sm:w-60 md:order-1" />
                <div className="order-1 md:order-2">
                  <FeatureText f={features.advisor} />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="grid grid-cols-[1fr_auto] items-end gap-5 rounded-3xl border border-gh-line bg-white p-6">
                <FeatureText f={features.sell} size="md" />
                <ScreenShot s={screens.listing} className="w-28 sm:w-36" />
              </div>
              <div className="grid grid-cols-[1fr_auto] items-end gap-5 rounded-3xl border border-gh-line bg-gh-sky-tint p-6">
                <FeatureText f={features.weather} size="md" />
                <ScreenShot s={screens.weather} className="w-28 sm:w-36" />
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr]">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5">
                <ScreenShot s={screens.market} className="w-20 shrink-0 rounded-[1.2rem] border-[5px]" />
                <FeatureText f={features.inputs} size="sm" />
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p aria-hidden className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-2xl font-extrabold text-gh-field">
                  <span lang="si" className={`${sinhala.className} leading-[1.8]`}>
                    සිංහල
                  </span>
                  <span lang="ta" className={`${tamil.className} leading-[1.85]`}>
                    தமிழ்
                  </span>
                  <span>English</span>
                </p>
                <div className="mt-2">
                  <FeatureText f={features.languages} size="sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Who GoviHub serves: bands of different weight */}
        <section aria-labelledby="gh-who" className="bg-white py-16 md:py-20">
          <div className={wrap}>
            <h2 id="gh-who" className="text-3xl font-extrabold sm:text-4xl">
              {who.heading}
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr_1fr]">
              {who.items.map((item, i) => (
                <li
                  key={item.name}
                  className={`rounded-3xl p-7 ${
                    ["bg-gh-field text-white md:row-span-1 md:p-9", "bg-gh-gold text-gh-ink", "border border-gh-line bg-gh-sky-tint text-gh-ink"][i]
                  }`}
                >
                  <Icon d={[icon.farmer, icon.buyer, icon.supplier][i]} className={`h-8 w-8 ${i === 2 ? "text-gh-sky" : ""}`} />
                  <h3 className={`mt-4 font-extrabold ${i === 0 ? "text-3xl" : "text-2xl"}`}>{item.name}</h3>
                  <p className={`mt-2 leading-relaxed ${i === 0 ? "text-lg text-white" : "text-base"}`}>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Start in four steps: the only numbered markers on the page */}
        <section aria-labelledby="gh-steps" className="bg-gh-gold-tint py-16 md:py-20">
          <div className={`${wrap} grid items-center gap-10 md:grid-cols-[1fr_16rem]`}>
            <div>
              <h2 id="gh-steps" className="text-3xl font-extrabold sm:text-4xl">
                {steps.heading}
              </h2>
              <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.items.map((s, i) => (
                  <li key={s} className="relative">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gh-field text-xl font-extrabold text-white">
                      {i + 1}
                    </span>
                    <p className="mt-4 text-lg font-semibold leading-snug text-gh-ink">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
            <Photo p={photos.handsTall} sizes="(min-width: 768px) 16rem, 70vw" className="mx-auto hidden h-auto w-64 rounded-3xl object-cover shadow-lg md:block" />
          </div>
        </section>

        {/* 6. International recognition */}
        <section aria-labelledby="gh-award" className="bg-white py-16 md:py-20">
          <div className={`${wrap} grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14`}>
            <picture>
              <source
                type="image/webp"
                srcSet="/award/aruni_with_award-480.webp 480w, /award/aruni_with_award-800.webp 800w, /award/aruni_with_award-1200.webp 1200w"
                sizes="(min-width: 768px) 24rem, 90vw"
              />
              <img
                src="/award/aruni_with_award-1200.jpg"
                alt={recognition.imageAlt}
                width={1200}
                height={1800}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-sm rounded-3xl border border-gh-line shadow-lg"
              />
            </picture>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-gh-field">{recognition.eyebrow}</p>
              <h2 id="gh-award" className="mt-3 text-3xl font-extrabold sm:text-4xl">
                {recognition.heading}
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-gh-slate">
                {recognition.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Working with the government: no emblems, no agency logos */}
        <section aria-labelledby="gh-gov" className="relative bg-gh-page">
          <Photo p={photos.farmlandWide} sizes="100vw" className="block h-64 w-full object-cover sm:h-96 lg:h-[30rem]" />
          <div className={`${wrap} relative -mt-16 pb-16 sm:-mt-24 md:pb-20`}>
            <div className="max-w-2xl rounded-3xl border border-gh-line bg-white p-7 shadow-lg sm:p-10">
              <h2 id="gh-gov" className="text-3xl font-extrabold sm:text-4xl">
                {government.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gh-slate">{government.body}</p>
            </div>
          </div>
        </section>

        {/* 8. Vision and mission: Sinhala first */}
        <section aria-labelledby="gh-vision" className="bg-gh-green-tint py-16 md:py-20">
          <div className={wrap}>
            <h2 id="gh-vision" className="text-3xl font-extrabold sm:text-4xl">
              {visionMission.heading}
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {[visionMission.vision, visionMission.mission].map((block) => (
                <div key={block.label} className="border-l-4 border-gh-gold pl-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-gh-field">{block.label}</h3>
                  <p lang="si" className={`${sinhala.className} mt-3 text-lg leading-[1.8] text-gh-ink [word-spacing:0.05em]`}>
                    {block.si}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-gh-slate">{block.en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Sectors */}
        <section aria-labelledby="gh-sectors" className="bg-white py-16 md:py-20">
          <div className={wrap}>
            <h2 id="gh-sectors" className="text-3xl font-extrabold sm:text-4xl">
              {sectors.heading}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-[1.5fr_1fr]">
              <div className="grid overflow-hidden rounded-3xl bg-gh-field text-white sm:grid-cols-[1fr_14rem]">
                <div className="p-7 sm:p-9">
                  <h3 className="text-3xl font-extrabold">{sectors.spices.name}</h3>
                  <p className="mt-3 text-lg leading-relaxed">{sectors.spices.body}</p>
                </div>
                <Photo p={photos.cardamomTall} sizes="(min-width: 640px) 14rem, 100vw" className="h-56 w-full object-cover sm:h-full" />
              </div>
              <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
                {sectors.later.map((s) => (
                  <li key={s.name} className="rounded-3xl border border-dashed border-gh-line bg-gh-page p-7">
                    <h3 className="text-2xl font-extrabold text-gh-ink">{s.name}</h3>
                    <p className="mt-2 text-base text-gh-slate">{s.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 10. Built by AiGNITE */}
        <section aria-labelledby="gh-built" className="border-t border-gh-line bg-gh-page py-14">
          <div className={`${wrap} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
            <div className="max-w-2xl">
              <div aria-hidden className="h-1 w-16 bg-stripe" />
              <h2 id="gh-built" className="mt-4 text-2xl font-extrabold sm:text-3xl">
                {builtBy.heading}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-gh-slate">{builtBy.body}</p>
            </div>
            <a href={CONTACT_HREF} className={`${btn} shrink-0 bg-lk-maroon text-white hover:bg-lk-maroon-deep`}>
              {builtBy.button}
            </a>
          </div>
        </section>

        {/* 11. Closing call to action */}
        <section aria-labelledby="gh-closing" className="bg-gh-field py-16 text-white md:py-20">
          <div className={`${wrap} text-center`}>
            <h2 id="gh-closing" className="text-3xl font-extrabold sm:text-4xl">
              {closing.heading}
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={GH_APP_URL} {...ext} className={`${btn} bg-gh-gold text-gh-ink hover:bg-white`}>
                {closing.primary}
              </a>
              <a href={GH_YOUTUBE_URL} {...ext} className={`${btn} border-2 border-white text-white hover:bg-white hover:text-gh-field`}>
                {closing.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
