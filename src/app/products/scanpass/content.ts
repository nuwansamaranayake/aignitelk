// All visible copy for /products/scanpass, from the CC_SCANPASS_PRODUCT_PAGE brief.
// Every claim is checked against the ScanPass repo in docs/scanpass-page-claims.md.
// Change a claim there first, then here.

export const SP_URL = "https://www.scanpasslk.com";
export const CONTACT_URL = "https://www.scanpasslk.com/#contact";
export const VIDEO_URL = "https://www.scanpasslk.com/video/scanpass-product-video.mp4";
export const PAGE_PATH = "/products/scanpass";

export const meta = {
  title: "ScanPass | Event Credentials and Gate Scanning, Sri Lanka",
  description:
    "Issue QR passes for media, staff, VIPs and guests. Scan each pass at the gate with GPS logs. Per-event pricing in rupees.",
  ogAlt: "ScanPass logo beside a phone showing an approved gate scan",
};

export type Screen = { name: string; alt: string; width: number; height: number };

// Assets live under /img so no public folder shares the page route (nginx would 403 /products/scanpass/).
export const screenSrc = (s: Screen, width: 480 | 896) => `/img/scanpass/screens/${s.name}-${width}.webp`;
export const brandSrc = (file: string) => `/img/scanpass/brand/${file}`;
export const POSTER_SRC = "/img/scanpass/screens/demo-poster-896.webp";

// Real ScanPass screens with demo data only. Register and verify come from the demo tenant
// (demo.scanpasslk.com, no personal data on screen). The badge comes from the ScanPass backend
// badge code (services/api/app/credentials) with a demo name. Admin review has no demo capture yet.
export const screens = {
  register: {
    name: "register",
    alt: "ScanPass registration form for a demo media accreditation event, on a phone",
    width: 896,
    height: 1939,
  },
  badge: {
    name: "badge",
    alt: "ScanPass badge PDF for Demo Media Pass, with a QR code and an orange Media stripe",
    width: 896,
    height: 565,
  },
  gate: {
    name: "verify-signin",
    alt: "ScanPass Verify sign-in screen where the gate team starts scanning, on a phone",
    width: 896,
    height: 1939,
  },
} satisfies Record<string, Screen>;

export const hero = {
  badge: "From registration to gate, built for Sri Lanka",
  title: "Register online. Scan at the gate.",
  // REVIEW: Aruni. Translated with the gemini-translate skill (Gemini 2.5 Flash). Needs a native speaker review.
  sinhala: "මාර්ගගතව ලියාපදිංචි වන්න. ගේට්ටුවෙන් QR ස්කෑන් කරන්න. කඩදාසි ලැයිස්තු අවශ්‍ය නැත.",
  sub: "Issue QR passes for media, staff, VIPs and guests. Your gate team checks each pass on a phone, and every scan logs the time and place.",
  primary: "Tell us about your event",
  secondary: "Watch the demo",
  facts: ["Per-event pricing in LKR", "No monthly fee", "Works in your phone browser"],
  gateLabel: "Gate scan",
  badgeLabel: "Badge PDF",
  approved: "Approved",
  // Coded mock of the verify app approved screen (apps/verify/src/components/ScanResult.tsx).
  // Labelled as an illustration on the page, never as a real screen.
  mockNote: "Illustration, demo data",
  mockDescription: "Illustration of the ScanPass approved scan screen for Demo Media Pass.",
  mock: {
    mark: "✓",
    status: "Valid",
    result: "valid",
    name: "Demo Media Pass",
    org: "Demo Newsroom",
    pass: "Media · MED-0001",
    scans: "Scan count: 1",
    next: "Next scan",
  },
};

export const problem = {
  eyebrow: "The problem",
  title: "Paper lists slow the gate and invite fake passes",
  cards: [
    {
      title: "Laminated passes",
      body: "A colour copy of a laminated pass looks real at a busy gate. A paper list leaves no record of who walked in.",
    },
    {
      title: "Forms and WhatsApp threads",
      body: "You collect names in a Google Form, then chase approvals in chat. No QR codes, no gate control, no audit trail.",
    },
    {
      title: "Dollar-priced platforms",
      body: "Overseas tools charge in USD per attendee, with no local support. Your budget is in rupees.",
    },
  ],
};

export const steps = {
  eyebrow: "How ScanPass works",
  title: "Three steps from setup to scan",
  items: [
    { title: "Configure", body: "Set up your event, your pass types and your registration form. No code." },
    { title: "Register", body: "Share your link. Applicants fill the form, upload ID and receive a unique PIN." },
    { title: "Scan", body: "Your gate team scans each QR. The phone shows green or red and logs the GPS location." },
  ],
};

export type PassType = {
  key: "media" | "staff" | "vip" | "attendee" | "zones";
  name: string;
  badgeLabel: string;
  body: string;
  chip: string;
};

export const passTypes = {
  eyebrow: "Pass types",
  title: "One system for every pass at your event",
  items: [
    {
      key: "media",
      name: "Media",
      badgeLabel: "Media",
      body: "Journalists apply with ID. Your team reviews each request before a pass goes out.",
      chip: "Manual review",
    },
    {
      key: "staff",
      name: "Staff and volunteers",
      badgeLabel: "Staff",
      body: "Upload your approved list. Passes go out with no review queue.",
      chip: "Pre-approved list",
    },
    {
      key: "vip",
      name: "VIP guests",
      badgeLabel: "VIP",
      body: "Invite-only registration for the guests you name.",
      chip: "Invite only",
    },
    {
      key: "attendee",
      name: "Attendees",
      badgeLabel: "Guest",
      body: "Open registration with instant approval for free-entry events.",
      chip: "Auto-approve",
    },
    {
      key: "zones",
      name: "Zones and sessions",
      badgeLabel: "Press · Day 2",
      body: "Limit a pass to one zone or one time window, such as the press area on day two.",
      chip: "Time-bound access",
    },
  ] satisfies PassType[],
};

// State names match the verify app result states: approved, denied, flagged
// (displayColors in apps/verify/src/components/ScanResult.tsx).
export const gate = {
  title: "One look tells your gate team what to do",
  sub: "Each scan checks the signed QR against your event records.",
  tiles: [
    { key: "approved", label: "Approved", body: "Let the person in." },
    { key: "denied", label: "Denied", body: "Stop entry and call a supervisor." },
    { key: "flagged", label: "Flagged", body: "Check photo ID before entry." },
  ],
};

export const demo = {
  eyebrow: "See ScanPass",
  title: "Real ScanPass screens",
  sub: "Every screen below comes from the ScanPass app, filled with demo data.",
  captions: {
    register: "Registration form",
    admin: "Admin review queue",
    badge: "Badge PDF",
    gate: "Gate scan",
  },
  placeholder: "Sample coming soon",
  videoTitle: "Watch the full flow, from registration to gate scan",
  videoFallback: "Open the demo video",
};

export const features = {
  eyebrow: "Features",
  title: "Built for the gate",
  items: [
    {
      title: "Your own database",
      body: "Each organizer gets a separate database and a branded web address. Your attendee data never mixes with another event.",
    },
    { title: "Approval rules per pass type", body: "Manual review, auto-approve or a mix, set for each pass type." },
    {
      title: "Badge PDFs on approval",
      body: "ScanPass creates the QR and badge PDF the moment you approve. Reprint any time.",
    },
    {
      title: "QR checks with GPS",
      body: "Every QR carries a signature. Each scan logs the time, the device and the location.",
    },
    // Brief copy said idle phones log out and admins see scan history per phone. The shipped verify
    // app has no idle logout and no per-phone history screen. Gate logins expire (expires_at) and
    // Session Info shows each phone its scan count and last scan time.
    {
      title: "Gate team controls",
      body: "Gate logins expire on their own. Each phone shows its scan count and last scan time.",
    },
    // Brief copy said forms, badges and admin screens. Only the register app uses @scanpass/i18n.
    // Badge PDFs use Helvetica, with no Sinhala or Tamil glyphs, and the admin app is English only.
    { title: "Sinhala, Tamil, English", body: "Registration forms in all three languages." },
  ],
  // Conditional card. Evidence: apps/verify/src/lib/db.ts (IndexedDB pack), offlineVerifier.ts,
  // syncService.ts (pending scan queue), wired in ScanPage.tsx and SessionInfoPage.tsx.
  offline: {
    title: "Weak signal? Keep scanning.",
    body: "Download the pass list on WiFi. Scan offline at the gate. Scans sync when the signal returns.",
  },
};

export type ProofStat = { value: string; label: string };

export const proof = {
  title: "Built from the system behind Walk for Peace Sri Lanka 2026",
  body: "ScanPass grew out of the credential system for Walk for Peace Sri Lanka 2026. The same registration, review and gate flow runs your event.",
};

// Empty until Nuwan supplies real Walk for Peace figures. The page renders nothing while empty.
export const proofStats: ProofStat[] = [];

export type Tier = {
  name: string;
  attendees: string;
  price: string;
  lowPrice?: number;
  highPrice?: number;
  features: string[];
  badge?: string;
};

export const pricing = {
  eyebrow: "Pricing",
  title: "Pay per event, in rupees",
  sub: "No monthly subscription. Pick the tier for your event size.",
  cta: "Get a quote",
  // Source: scanpasslk.com #pricing, fetched 2026-10-05. Change both sites together.
  // The live site shows the Most popular badge on Starter, so this page does too.
  tiers: [
    {
      name: "Starter",
      attendees: "Up to 200 attendees",
      price: "LKR 50,000",
      lowPrice: 50000,
      features: ["Single credential type", "Standard branding", "Email support", "QR + badge PDF", "GPS scan logging"],
      badge: "Most popular",
    },
    {
      name: "Standard",
      attendees: "201 to 1,000 attendees",
      price: "LKR 150,000 to 300,000",
      lowPrice: 150000,
      highPrice: 300000,
      features: ["Multiple credential types", "Custom branding", "SMS notifications", "Hybrid approval rules", "Bulk CSV import"],
    },
    {
      name: "Large",
      attendees: "1,001 to 5,000 attendees",
      price: "LKR 400,000 to 800,000",
      lowPrice: 400000,
      highPrice: 800000,
      features: ["Custom domain", "Dedicated support", "Post-event analytics", "Time-bound access control", "Priority response"],
    },
    {
      name: "Enterprise",
      attendees: "5,000+ attendees",
      price: "Custom",
      features: [
        "SLA guarantee",
        "On-site support available",
        "Custom integrations",
        "Single-tenant deployment option",
        "Dedicated account manager",
      ],
    },
  ] satisfies Tier[],
  nonprofit: {
    title: "Free for non-profits",
    body: "Free for registered non-profits and religious events under 500 attendees.",
  },
};

export const sriLanka = {
  eyebrow: "Built for Sri Lanka",
  title: "Made for event organizers in Sri Lanka",
  chips: [
    { label: "සිංහල", lang: "si" },
    { label: "தமிழ்", lang: "ta" },
    { label: "English" },
    { label: "LKR pricing" },
    { label: "WhatsApp support" },
    { label: "Works in your phone browser" },
    { label: "Set up by our team" },
  ] as { label: string; lang?: "si" | "ta" }[],
  // Nuwan enables this after production retention leaves dry-run mode.
  privacyLine: {
    enabled: false,
    text: "Your attendee data stays in your own database. ScanPass deletes event data 90 days after your event by default, in line with Sri Lanka’s Personal Data Protection Act.",
  },
  company:
    "ScanPass is a product of AIgnite Software (Private) Limited, company number PV 00362580, Colombo, Sri Lanka.",
};

export const faq = {
  title: "Questions and answers",
  items: [
    { q: "Do attendees need an app?", a: "No. Registration and gate scanning both run in a phone browser." },
    {
      q: "How does a gate check work?",
      a: "Your gate team opens the ScanPass scan page on a phone and points the camera at the QR. The screen shows green or red, and the scan log records the time and location.",
    },
    {
      q: "Who sets up my event?",
      a: "Our team sets up ScanPass for you. Tell us about your event and we reply within one business day.",
    },
    {
      q: "How much does ScanPass cost?",
      a: "Pricing is per event, in rupees. Events up to 200 attendees start at LKR 50,000. Registered non-profits and religious events under 500 attendees pay nothing.",
    },
    {
      q: "Does ScanPass sell paid tickets?",
      a: "No. ScanPass issues credentials and free-entry tickets. Collect any fees through your own channel.",
    },
    { q: "Which languages does ScanPass support?", a: "Sinhala, Tamil and English." },
    {
      q: "Do I get my own web address?",
      a: "Yes. Each organizer gets a branded address such as yourname.scanpasslk.com. The Large tier and above add your own domain.",
    },
    {
      q: "Who makes ScanPass?",
      a: "AIgnite Software (Private) Limited, company number PV 00362580, based in Colombo, Sri Lanka.",
    },
  ],
};

export const finalCta = {
  title: "Plan your next event gate with ScanPass",
  primary: "Tell us about your event",
  secondary: "Visit scanpasslk.com",
};

export const stickyCta = "Tell us about your event";
