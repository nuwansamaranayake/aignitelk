import type { Metadata } from "next";
import Image from "next/image";
import { Noto_Sans_Sinhala } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BeforeAfter, { type CompareTheme } from "@/components/drapestudio/BeforeAfter";
import RevealObserver from "@/components/drapestudio/RevealObserver";
import PayslipCard from "@/components/primepath/PayslipCard";
import SalarySheet from "@/components/primepath/SalarySheet";
import StatutoryCalculator from "@/components/primepath/StatutoryCalculator";
import {
  DEMO_URL,
  PAGE_PATH,
  SIGNIN_URL,
  brandSrc,
  calculator,
  compare,
  faq,
  finalCta,
  getStarted,
  hero,
  meta,
  modules,
  problem,
  roles,
  sriLanka,
  steps,
  stickyCta,
  type ModuleKey,
} from "./content";

const sinhala = Noto_Sans_Sinhala({ subsets: ["sinhala"], display: "swap" });

const OG_IMAGE = { url: "/img/primepath/og-primepath-1200x630.jpg", width: 1200, height: 630, alt: meta.ogAlt };

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
const APP_URL = "https://lk.primepathhr.ai";

const ORG_ID = "https://aignitelk.com/#aignite-software-private-limited";
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "AIgnite Software (Private) Limited",
    legalName: "AIgnite Software (Private) Limited",
    alternateName: "AiGNITE Software (Pvt) Ltd",
    url: "https://aignitelk.com",
    identifier: { "@type": "PropertyValue", propertyID: "Sri Lanka company number", value: "PV 00362580" },
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
    brand: [{ "@type": "Brand", name: "PrimePath HR", url: APP_URL }],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PrimePath HR",
    url: APP_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    inLanguage: ["en", "si"],
    description: meta.description,
    publisher: { "@id": ORG_ID },
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
const onLight = "focus-visible:ring-pp-primary";
const onDark = "focus-visible:ring-pp-accent focus-visible:ring-offset-pp-night";

const compareTheme: CompareTheme = {
  frame: "border-pp-accent/70 bg-white outline-pp-accent/40 has-[:focus-visible]:ring-pp-accent",
  afterTag: "bg-pp-primary/90 text-pp-accent",
  line: "bg-pp-accent",
  handle: "border-pp-accent bg-pp-primary text-pp-accent",
  caption: "text-pp-primary",
};

function Eyebrow({ children, tone = "text-pp-primary" }: { children: React.ReactNode; tone?: string }) {
  return (
    <p className={`flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] ${tone}`}>
      <span aria-hidden className="text-pp-accent">
        ✦
      </span>
      {children}
    </p>
  );
}

const icons = {
  sheet: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5",
  clock: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  chat: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  userPlus: "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z",
  calculator: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z",
  download: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  users: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  document: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  calendar: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  userCircle: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  chart: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  cog: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  briefcase: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
  user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
};

const moduleIcons: Record<ModuleKey, string> = {
  records: icons.users,
  payroll: icons.calculator,
  statutory: icons.download,
  payslips: icons.document,
  leave: icons.calendar,
  portal: icons.userCircle,
  attendance: icons.clock,
  reports: icons.chart,
};

function Icon({ d, className = "h-6 w-6" }: { d: string; className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default function PrimePathPage() {
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
        <section id="top" aria-labelledby="hero-title" className="pp-mesh-light overflow-hidden pt-[84px]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-8 md:grid-cols-[1.05fr_0.95fr] md:pb-20 md:pt-12">
            <div>
              <Image
                src={brandSrc("primepath-logo-640.webp")}
                alt="PrimePath HR logo"
                width={640}
                height={480}
                priority
                className="h-auto w-40 md:w-52"
              />
              <div className="mt-5">
                <Eyebrow>{hero.eyebrow}</Eyebrow>
              </div>
              <h1
                id="hero-title"
                className="mt-4 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-pp-primary sm:text-5xl lg:text-6xl"
              >
                {hero.title}
              </h1>
              <p lang="si" className={`${sinhala.className} mt-3 text-xl leading-[1.7] text-pp-accent-deep`}>
                {hero.sinhala}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted">{hero.sub}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={DEMO_URL} className={`${btn} ${onLight} bg-pp-primary text-white shadow-lk-2 hover:bg-pp-navy-700`}>
                  {hero.primary}
                </a>
                <a
                  href={SIGNIN_URL}
                  {...ext}
                  className={`${btn} ${onLight} border-2 border-pp-primary bg-white text-pp-primary hover:bg-pp-accent`}
                >
                  {hero.secondary}
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {hero.chips.map((c) => (
                  <li key={c} className="rounded-full bg-pp-primary px-3 py-1 text-sm font-semibold text-pp-accent">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature moment: a coded payslip floating on the gold and navy glow, with the two returns as files out. */}
            <div className="relative mx-auto w-full max-w-[22rem] pb-16 md:max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,theme(colors.pp.accent/45%),theme(colors.pp.navy-500/20%),transparent)] blur-2xl"
              />
              <figure className="relative md:rotate-1">
                <div role="img" aria-label={hero.payslipAlt}>
                  <div aria-hidden>
                    <PayslipCard />
                  </div>
                </div>
              </figure>
              <ul aria-hidden className="absolute bottom-0 left-0 flex gap-3 sm:-left-6">
                {hero.files.map((f, i) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 rounded-xl bg-pp-accent px-3 py-2 text-xs font-bold text-pp-primary shadow-lk-3 ${
                      i === 0 ? "-rotate-3" : "translate-y-2 rotate-2"
                    }`}
                  >
                    <Icon d={icons.download} className="h-4 w-4" />
                    {f}
                  </li>
                ))}
              </ul>
              <span aria-hidden className="absolute -right-3 -top-5 text-3xl text-pp-accent">
                ✦
              </span>
              <span aria-hidden className="absolute -left-6 top-10 text-xl text-pp-navy-500">
                ✦
              </span>
            </div>
          </div>
        </section>

        {/* 2. The problem */}
        <section aria-labelledby="problem-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-lk-maroon">{problem.eyebrow}</Eyebrow>
            <h2 id="problem-title" className="mt-3 font-heading text-3xl font-bold text-pp-primary sm:text-4xl">
              {problem.title}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {problem.cards.map((c, i) => (
                <div
                  key={c.title}
                  className={`rounded-2xl border border-border bg-ds-cream p-6 shadow-lk-1 ${
                    ["border-t-4 border-t-lk-maroon", "border-t-4 border-t-pp-accent", "border-t-4 border-t-pp-primary"][i]
                  }`}
                >
                  <Icon
                    d={[icons.sheet, icons.clock, icons.chat][i]}
                    className={`h-8 w-8 ${["text-lk-maroon", "text-pp-accent-deep", "text-pp-primary"][i]}`}
                  />
                  <h3 className="mt-4 font-heading text-xl font-semibold text-pp-primary">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. How it works */}
        <section aria-labelledby="how-title" className="pp-mesh-dark py-16 text-white md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow tone="text-pp-cream">{steps.eyebrow}</Eyebrow>
            <h2 id="how-title" className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              {steps.title}
            </h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.items.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl border border-pp-accent/40 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="font-heading text-5xl font-bold text-pp-accent">{i + 1}</span>
                  <Icon d={[icons.userPlus, icons.calculator, icons.download][i]} className="absolute right-6 top-7 h-8 w-8 text-pp-cream/80" />
                  <h3 className="mt-3 font-heading text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-pp-cream">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Before and after */}
        <section aria-labelledby="compare-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{compare.eyebrow}</Eyebrow>
            <h2 id="compare-title" className="mt-3 font-heading text-3xl font-bold text-pp-primary sm:text-4xl">
              {compare.title}
            </h2>
            <div className="mt-10">
              <BeforeAfter
                beforeNode={
                  <div role="img" aria-label={compare.beforeAlt} className="h-full">
                    <div aria-hidden className="h-full pt-10">
                      <SalarySheet />
                    </div>
                  </div>
                }
                afterNode={
                  <div role="img" aria-label={compare.afterAlt} className="h-full bg-pp-navy-50 px-4 pb-4 pt-11">
                    <div aria-hidden>
                      <PayslipCard compact className="shadow-lk-2" />
                    </div>
                  </div>
                }
                beforeLabel={compare.beforeLabel}
                afterLabel={compare.afterLabel}
                sliderLabel={compare.sliderLabel}
                theme={compareTheme}
                aspect="aspect-[3/5] sm:aspect-[3/4]"
                initial={64}
              />
              <p className="mt-2 text-center text-sm text-text-muted">{compare.caption}</p>
            </div>
          </div>
        </section>

        {/* 5. Modules */}
        <section aria-labelledby="modules-title" className="pp-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{modules.eyebrow}</Eyebrow>
            <h2 id="modules-title" className="mt-3 font-heading text-3xl font-bold text-pp-primary sm:text-4xl">
              {modules.title}
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {modules.items.map((m, i) => (
                <li key={m.key} className="glass-card-hover p-6">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      i % 2 === 0 ? "bg-pp-primary text-pp-accent" : "bg-pp-accent text-pp-primary"
                    }`}
                  >
                    <Icon d={moduleIcons[m.key]} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-pp-primary">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Statutory math */}
        <section aria-labelledby="calc-title" className="bg-bg-surface py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{calculator.eyebrow}</Eyebrow>
            <h2 id="calc-title" className="mt-3 font-heading text-3xl font-bold text-pp-primary sm:text-4xl">
              {calculator.title}
            </h2>
            <p className="mt-2 text-text-muted">{calculator.sub}</p>
            <div className="mt-10">
              <StatutoryCalculator />
            </div>
          </div>
        </section>

        {/* 7. Roles */}
        <section aria-labelledby="roles-title" className="pp-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{roles.eyebrow}</Eyebrow>
            <h2 id="roles-title" className="mt-3 font-heading text-3xl font-bold text-pp-primary sm:text-4xl">
              {roles.title}
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {roles.items.map((r, i) => (
                <li
                  key={r.title}
                  className={`rounded-2xl p-6 shadow-lk-2 ${
                    ["bg-pp-primary text-white", "border border-pp-accent bg-pp-accent-soft text-pp-primary", "bg-white text-pp-primary"][i]
                  }`}
                >
                  <Icon d={[icons.cog, icons.briefcase, icons.user][i]} className={`h-8 w-8 ${i === 0 ? "text-pp-accent" : "text-pp-primary"}`} />
                  <h3 className="mt-4 font-heading text-xl font-semibold">{r.title}</h3>
                  <p className={`mt-2 leading-relaxed ${i === 0 ? "text-pp-cream" : "text-text-muted"}`}>{r.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. Built for Sri Lanka */}
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
                    ["bg-pp-primary text-white", "bg-pp-accent text-pp-primary", "bg-lk-maroon text-white", "bg-pp-navy-50 text-pp-primary"][i % 4]
                  }`}
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-sm text-text-muted">{sriLanka.company}</p>
          </div>
        </section>

        {/* 9. Get started */}
        <section id="get-started" aria-labelledby="start-title" className="pp-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-6xl px-6">
            <Eyebrow>{getStarted.eyebrow}</Eyebrow>
            <h2 id="start-title" className="mt-3 font-heading text-3xl font-bold text-pp-primary sm:text-4xl">
              {getStarted.title}
            </h2>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {getStarted.items.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl border border-border bg-white p-6 shadow-lk-1">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pp-accent font-heading text-lg font-bold text-pp-primary">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-pp-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
            <a href={DEMO_URL} className={`${btn} ${onLight} mt-8 bg-pp-primary text-white shadow-lk-2 hover:bg-pp-navy-700`}>
              {getStarted.cta}
            </a>
          </div>
        </section>

        {/* 10. FAQ */}
        <section aria-labelledby="faq-title" className="pp-mesh-light py-16 md:py-20">
          <div className="reveal mx-auto max-w-3xl px-6">
            <h2 id="faq-title" className="text-center font-heading text-3xl font-bold text-pp-primary sm:text-4xl">
              {faq.title}
            </h2>
            <div className="mt-10 space-y-3">
              {faq.items.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-white p-5 shadow-lk-1 open:border-pp-accent">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-pp-primary [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden className="text-xl text-pp-accent-deep group-open:rotate-45 motion-safe:transition-transform">
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
        <section aria-labelledby="final-title" className="pp-mesh-dark py-16 text-center text-white md:py-20">
          <div className="reveal mx-auto max-w-3xl px-6">
            <Image
              src={brandSrc("primepath-icon-192.webp")}
              alt=""
              width={192}
              height={192}
              className="mx-auto h-14 w-14 rounded-2xl ring-2 ring-pp-accent/60"
            />
            <h2 id="final-title" className="mt-6 font-heading text-3xl font-bold sm:text-4xl">
              {finalCta.title}
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={DEMO_URL} className={`${btn} ${onDark} bg-pp-accent text-pp-primary hover:bg-pp-accent-light`}>
                {finalCta.primary}
              </a>
              <a href={SIGNIN_URL} {...ext} className={`${btn} ${onDark} border-2 border-pp-cream text-pp-cream hover:bg-pp-cream hover:text-pp-primary`}>
                {finalCta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <div className="h-20 bg-lk-maroon-deep md:hidden" aria-hidden />

      {/* Sticky call to action on small screens */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-pp-accent/50 bg-pp-night/95 px-4 py-3 backdrop-blur md:hidden">
        <a href={DEMO_URL} className={`${btn} ${onDark} w-full bg-pp-accent text-pp-primary`}>
          {stickyCta}
        </a>
      </div>
    </div>
  );
}
