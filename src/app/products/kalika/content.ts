// All visible copy for /products/kalika. Copy is final, from the Kalika flagship page brief (2026-10-05).
// Sinhala strings come byte for byte from the brief (checked against https://cosmicnexus.ai/lk).
// No em dashes anywhere in this file.

export const PAGE_PATH = "/products/kalika";
export const LK_PAGE_URL = "https://cosmicnexus.ai/lk";

// WhatsApp number confirmed on https://cosmicnexus.ai/lk (all wa.me links use it), 2026-10-05.
export const WA_NUMBER = "94767006085";
export const WA_BUSINESS = "Hello, I would like to know about Kalika readings for my business.";
export const WA_PERSONAL = "Hello, I would like to know about Kalika personal readings.";
export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
export const WA_BUSINESS_URL = waLink(WA_BUSINESS);
export const WA_PERSONAL_URL = waLink(WA_PERSONAL);

export const brandSrc = (file: string) => `/img/kalika/brand/${file}`;
export const OG_IMAGE_PATH = "/img/kalika/og/kalika-share-1200x630.jpg";

export const meta = {
  title: "Kalika | Vedic Intelligence for Business, Sri Lanka",
  description:
    "Kalika times your business decisions with Vedic astrology. Business consultation from Rs. 9,000, muhurtha Rs. 3,000, wealth reading Rs. 8,000. Sinhala or English, ordered on WhatsApp.",
  ogAlt: "Kalika yantra logo beside the words Kalika and Business decisions, better timed.",
};

export const hero = {
  eyebrow: "Our flagship · Vedic Intelligence",
  title: "Business decisions, better timed.",
  sinhala: "ඔබේ ව්‍යාපාරික තීරණ සඳහා කාල මාර්ගෝපදේශය",
  sub: "Kalika reads the business owner's chart and the nature of the business, then shows when to start, sign, open and grow. Classical Vedic astrology, computed by software and checked against more than 79,000 charts.",
  primary: "Talk to us on WhatsApp",
  secondary: "See sample readings",
  chips: ["Business consultation from Rs. 9,000", "Sinhala or English", "PDF on WhatsApp"],
  yantraAlt: "Kalika yantra logo",
};

export const problem = {
  eyebrow: "The problem",
  title: "You research the what. Few research the when.",
  cards: [
    {
      title: "Dates chosen by convenience",
      body: "Most owners pick a launch date from a free weekend on the calendar.",
    },
    {
      title: "Contracts signed with no timing check",
      body: "Leases, partnerships and big orders get signed whenever the paperwork is ready.",
    },
    {
      title: "Growth with no season plan",
      body: "Owners plan budgets and staff for a new branch. Few plan the timing.",
    },
  ],
};

export const steps = {
  eyebrow: "How Kalika works",
  title: "Four steps from question to timing",
  items: [
    {
      title: "Tell us the decision",
      body: "Message us on WhatsApp. Say what you plan to do and the date range you have in mind.",
    },
    {
      title: "Share birth details",
      body: "Send the owner's birth date, birth time and birth place. For a muhurtha, send details for up to two people.",
    },
    {
      title: "Kalika computes the charts",
      body: "The engine runs four dasha systems, 13 divisional charts, KP and Jaimini on every chart.",
    },
    {
      title: "Act inside your window",
      body: "You receive a PDF with dated windows, the reasons behind each one and a practical action.",
    },
  ],
};

// Illustration only. Month positions are 0 to 11 on a 12-month band.
export const timing = {
  label: "Sample timing illustration: a 12-month band with three highlighted windows labelled Start, Sign and Grow.",
  months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  windows: [
    { label: "Start", from: 1, to: 3, tone: "saffron" },
    { label: "Sign", from: 5, to: 6, tone: "pink" },
    { label: "Grow", from: 8, to: 11, tone: "teal" },
  ] as { label: string; from: number; to: number; tone: "saffron" | "pink" | "teal" }[],
  caption: "Sample illustration. Your reading gives your own dated windows.",
};

export type ServiceCard = {
  key: string;
  badge?: string;
  title: string;
  sinhala: string;
  price: string;
  lead: string;
  bullets: string[];
  note?: string;
  cta: string;
};

export const business = {
  eyebrow: "Kalika for business",
  title: "Three ways to time your business",
  cards: [
    {
      key: "consultation",
      badge: "Most complete",
      title: "Business Astrology Consultation",
      sinhala: "ව්‍යාපාරික ජ්‍යොතිෂ්‍ය උපදේශනය",
      price: "From Rs. 9,000",
      lead: "A study of the owner's chart together with the nature of the business.",
      bullets: [
        "Best time to start the business",
        "Business fields suited to the owner",
        "Challenges and obstacles ahead",
        "A timing guide for business decisions",
      ],
      note: "The final fee depends on your needs. Talk to us on WhatsApp first and we confirm a fixed fee.",
      cta: "Discuss your business",
    },
    {
      key: "muhurtha",
      title: "Business Muhurtha",
      sinhala: "සුබ මොහොත් (නැකත්) පරීක්ෂාව",
      price: "Rs. 3,000",
      lead: "The best moment to begin an important step.",
      bullets: [
        "Several good moments inside your date range",
        "A check on a date you already picked",
        "Full charts for up to two people",
        "Business opening, contracts and foreign travel",
      ],
      note: "Tell us the activity and your date range when you order.",
      cta: "Book a muhurtha",
    },
    {
      key: "wealth",
      title: "Wealth Deep Reading",
      sinhala: "ධනය පිළිබඳ ගැඹුරු පරීක්ෂාව",
      price: "Rs. 8,000",
      lead: "A 19-page study of how your chart handles money.",
      bullets: [
        "Wealth structure and wealth score",
        "Income level: salary, profit or ownership",
        "Money channels at nakshatra level",
        "Dated windows to build, protect or reduce debt",
        "Traditional practices matched to your weakest wealth planet",
      ],
      cta: "Order a wealth reading",
    },
  ] satisfies ServiceCard[],
  decisionsTitle: "Decisions Kalika times",
  decisions: [
    "Starting a business",
    "Opening a shop or branch",
    "Signing a contract or lease",
    "Choosing a business field",
    "Business travel abroad",
    "Planning around difficult periods",
  ],
};

export const engine = {
  eyebrow: "Under every reading",
  title: "Every method, on every chart",
  stats: [
    { value: 79000, suffix: "+", label: "charts used to test our methods" },
    { value: 4, suffix: "", label: "dasha systems, compared side by side" },
    { value: 13, suffix: "", label: "divisional charts on every reading" },
    { value: 2, suffix: "", label: "patent applications filed" },
  ],
  methods: [
    "Vimshottari",
    "Yogini",
    "Chara",
    "Kalachakra",
    "KP sub-lords",
    "Jaimini karakas",
    "Arudha padas",
    "Ashtakavarga",
    "Swiss Ephemeris",
    "Lahiri ayanamsa",
  ],
  compareTitle: "Where Kalika differs",
  compareColumns: ["Topic", "A typical reading", "Kalika"],
  compareRows: [
    ["Dasha systems", "One", "Four, compared side by side"],
    ["Divisional charts", "Mostly the birth chart", "13 charts on every reading"],
    ["Method testing", "Tradition only", "Checked against 79,000+ charts"],
    ["Timing", "General periods", "Dated windows with an action for each"],
    ["Delivery", "Spoken advice", "A written PDF you keep"],
  ],
};

export const promise = {
  eyebrow: "Our promise",
  title: "What we claim and what we do not",
  body: "Kalika gives decision support built on Vedic timing tradition and a computation engine. Timing windows are seasons, not certainties. We show the structure of a chart, the timing and the action suited to each period.",
  never: [
    "We never give share-market or stock timing.",
    "We never sell gemstones or charms.",
    "We never use fear to sell a reading.",
  ],
};

export const personal = {
  eyebrow: "Kalika for you",
  title: "Readings for you and your family",
  cards: [
    {
      key: "life",
      title: "Full Life Reading",
      sinhala: "සම්පූර්ණ ජීවිත කේන්දර පරීක්ෂාව",
      price: "Rs. 5,000",
      lead: "Your whole chart in one document.",
      bullets: [
        "Nature, mind and strengths",
        "Career and education",
        "Marriage and relationships",
        "Wealth and income",
        "Health and vitality",
        "Family, children and home",
        "Spiritual path",
        "Timing for the years ahead, with practical advice",
      ],
      cta: "Order a life reading",
    },
    {
      key: "focused",
      title: "Focused Reading",
      sinhala: "නිශ්චිත ක්ෂේත්‍රයක් පිළිබඳ පරීක්ෂාව",
      price: "Rs. 3,000",
      lead: "One area of life, studied in depth. Pick one:",
      bullets: ["Marriage and relationships", "Compatibility, both charts", "Career and education", "Health"],
      cta: "Order a focused reading",
    },
  ] satisfies ServiceCard[],
  line: "Need a nakath for a wedding, a housewarming or first letters? The Rs. 3,000 muhurtha check covers those too.",
  tableTitle: "One engine, two ways to use Kalika",
  tableColumns: ["Topic", "Kalika for business", "Kalika for you"],
  tableRows: [
    ["Made for", "Owners and founders", "Individuals and families"],
    ["What you get", "Business timing, owner and business fit, wealth windows", "Life reading, focused readings, compatibility"],
    ["Starts at", "Rs. 3,000", "Rs. 3,000"],
    ["How to order", "WhatsApp", "WhatsApp"],
    ["Delivery", "PDF in Sinhala or English", "PDF in Sinhala or English"],
  ],
};

export const samples = {
  eyebrow: "Sample readings",
  title: "Read a full sample before you pay",
  cards: [
    {
      title: "Full Life Reading",
      pages: "20 pages",
      language: "Sinhala",
      url: "https://cosmicnexus.ai/lk/Kalika_Sample_Sinhala_Life_Reading.pdf",
    },
    {
      title: "Marriage Compatibility Reading",
      pages: "15 pages",
      language: "Sinhala",
      url: "https://cosmicnexus.ai/lk/Kalika_Sample_Sinhala_Compatibility_Reading.pdf",
    },
    {
      title: "Wealth Deep Reading",
      pages: "19 pages",
      language: "Sinhala",
      url: "https://cosmicnexus.ai/lk/Kalika_Sample_Sinhala_Wealth_Reading.pdf",
    },
  ],
  open: "Open the sample PDF",
  note: "Names and birth details in the samples belong to no real person. The charts and calculations come straight from the Kalika engine.",
  reviews: "Read client reviews on the Kalika Sri Lanka page",
};

export const sriLanka = {
  title: "Made for Sri Lankan owners and families",
  chips: ["Sinhala", "English", "LKR pricing", "WhatsApp ordering", "PDF you keep", "Designed by a Sri Lankan engineer"],
  footnote:
    "Kalika is built by Cosmic Nexus, the Vedic intelligence platform of the AiGNITE group. AiGNITE Software (Private) Limited, company number PV 00362580, Colombo, offers Kalika in Sri Lanka. Kalika gives decision support. Kalika is not financial, legal or investment advice.",
};

export const faq = {
  title: "Questions and answers",
  items: [
    {
      q: "Do I need to believe in astrology?",
      a: "No. Treat Kalika as a second opinion on timing. You still make the decision. Each window comes with its reasons, so you choose how much weight to give each one.",
    },
    {
      q: "What details do you need?",
      a: "The business owner's birth date, exact birth time and birth place. For a muhurtha, add the activity and your date range.",
    },
    {
      q: "How do I order and pay?",
      a: "Message us on WhatsApp. We confirm the service and the fee before any work starts.",
    },
    { q: "How do I receive the reading?", a: "As a PDF document on WhatsApp, in Sinhala or English." },
    {
      q: "Why does the business consultation fee vary?",
      a: "Each business brings different questions and different charts. We discuss your needs first, then give a fixed fee.",
    },
    {
      q: "Is this financial or investment advice?",
      a: "No. Kalika gives decision support for business operations. We never give share-market or stock timing.",
    },
    {
      q: "Who makes Kalika?",
      a: "Cosmic Nexus, the Vedic intelligence platform of the AiGNITE group. The engine uses Swiss Ephemeris calculations and Lahiri ayanamsa.",
    },
  ],
};

export const closing = {
  title: "Plan your next big step with Kalika",
  primary: "Talk to us on WhatsApp",
  secondary: "See sample readings",
};

export const stickyCta = "Talk to us on WhatsApp";

// JSON-LD offers, one per priced service (LKR). The consultation price is a starting price.
export const offers = [
  { name: "Business Astrology Consultation", price: 9000, from: true },
  { name: "Business Muhurtha", price: 3000 },
  { name: "Wealth Deep Reading", price: 8000 },
  { name: "Full Life Reading", price: 5000 },
  { name: "Focused Reading", price: 3000 },
];
