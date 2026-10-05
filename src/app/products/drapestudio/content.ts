// All visible copy for /products/drapestudio. Every price and feature here is backed by a
// row in docs/drapestudio-page-claims.md. Change a claim there first, then here.

export const DS_URL = "https://drapestudiolk.com";
export const MM_URL = "https://mirrorme.cc";
export const PAGE_PATH = "/products/drapestudio";

export const meta = {
  title: "DrapeStudio & MirrorMe | AI Clothing Photos, Sri Lanka",
  description:
    "Turn a phone photo of a garment into a model photo with DrapeStudio. Rs. 50 per image, 5 free images to start. Plus MirrorMe for shoppers.",
  ogAlt: "DrapeStudio logo beside a maroon saree worn by a model, a real DrapeStudio result",
};

export type Shot = { name: string; alt: string; width: number; height: number };

// Assets live under /img so no public folder shares the page route (nginx would 403 /products/drapestudio/).
export const shotSrc = (s: Shot, width: 480 | 896) => `/img/drapestudio/results/${s.name}-${width}.webp`;
export const brandSrc = (file: string) => `/img/drapestudio/brand/${file}`;

// Real DrapeStudio outputs (DrapeStudio-v2/output/2026-06-14/generation). Inputs padded to 3:4.
export const shots = {
  sareeBefore: { name: "saree-before", alt: "Garment photo of a maroon saree with a gold border on a mannequin", width: 896, height: 1200 },
  sareeAfter: { name: "saree-after", alt: "DrapeStudio result: the same maroon saree worn by a model in a studio", width: 896, height: 1200 },
  shalwarBefore: { name: "shalwar-before", alt: "Garment photo of a teal shalwar kameez with a sheer dupatta on a mannequin", width: 896, height: 1200 },
  shalwarAfter: { name: "shalwar-after", alt: "DrapeStudio result: the same teal shalwar kameez worn by a model", width: 896, height: 1200 },
  dressAfter: { name: "dress-after", alt: "DrapeStudio result: a pink dress worn by an adult model", width: 896, height: 1200 },
  childrenAfter: { name: "children-after", alt: "DrapeStudio result: a child model in a denim jacket and jeans", width: 896, height: 1200 },
} satisfies Record<string, Shot>;

export const hero = {
  badge: "The DrapeStudio family",
  title: "Phone photo in. Model photo out.",
  // Translated with the gemini-translate skill (Gemini 2.5 Flash). Needs a native speaker review.
  sinhala: "ඔබේ ඇඳුම්, නිරූපිකාවකට අන්දවා, ෆොටෝ ෂූට් රහිතව.",
  sub: "Show your clothes on a model without a photo shoot. Built for clothing sellers, accessory makers and online shops in Sri Lanka.",
  primary: "Try 5 free images",
  secondary: "Meet MirrorMe",
  facts: ["Rs. 50 per image", "Pay in rupees", "Sign in with Google"],
  beforeLabel: "Garment photo",
  afterLabel: "DrapeStudio result",
};

export const problem = {
  eyebrow: "The problem",
  title: "Good clothing photos cost too much",
  cards: [
    { title: "Photo shoots cost money", body: "A studio, a photographer and lights add up before you sell a single piece." },
    { title: "Models cost money", body: "Paying a model for every new design adds to the cost of each item." },
    { title: "Flat photos do not sell", body: "Shoppers want to see the garment on a person before they buy." },
  ],
};

export const steps = {
  eyebrow: "How DrapeStudio works",
  title: "Three steps from photo to post",
  items: [
    { title: "Snap your garment", body: "Take a clear photo of the garment with your phone." },
    { title: "Pick model, pose and background", body: "Choose the model, skin tone, pose and background for the shot." },
    { title: "Download and share", body: "Save the image, or share the image on WhatsApp." },
  ],
};

export type Module = {
  key: string;
  name: string;
  body: string;
  tags: string[];
  shot?: Shot;
  accent: "emerald" | "gold" | "maroon" | "teal";
};

export const modules = {
  eyebrow: "Modules",
  title: "Four ways to show your products",
  items: [
    {
      key: "adult",
      name: "Adult Clothing",
      body: "Sarees, shalwar kameez, dresses, T-shirts, shirts, blouses, trousers, skirts and jackets on adult models. Pick male or female, five skin tones and four poses.",
      tags: ["Up to 3 views", "Rs. 50 per image"],
      shot: shots.dressAfter,
      accent: "emerald",
    },
    {
      key: "children",
      name: "Children's Clothing",
      body: "Baby, toddler, kid and teen models. Choose girl, boy or unisex, then pick the pose and background.",
      tags: ["Up to 3 views", "Rs. 50 per image"],
      shot: shots.childrenAfter,
      accent: "gold",
    },
    {
      key: "accessories",
      name: "Accessories",
      body: "Necklaces, earrings, bracelets, rings, handbags, hats, scarves, crochet and hair accessories. Show each piece on a model, as a flat lay or in a lifestyle scene.",
      tags: ["1 view", "Rs. 50 per image"],
      accent: "maroon",
    },
    {
      key: "fiton",
      name: "Virtual Fit-On",
      body: "Put one garment, or a top and a bottom, on your customer's photo. Add body measurements to get a size suggestion.",
      tags: ["1 or 2 garments", "Rs. 50 per fit-on"],
      accent: "teal",
    },
  ] satisfies Module[],
};

export const gallery = {
  eyebrow: "Before and after",
  title: "Real DrapeStudio results",
  note: "Every result below comes from the DrapeStudio app.",
  sliderLabel: "Drag to compare",
  pairs: [
    { label: "Saree", before: shots.sareeBefore, after: shots.sareeAfter },
    { label: "Shalwar kameez", before: shots.shalwarBefore, after: shots.shalwarAfter },
    { label: "Children's wear" },
    { label: "Virtual fit-on" },
  ] as { label: string; before?: Shot; after?: Shot }[],
  placeholder: "Sample coming soon",
};

export const PRICE_PER_IMAGE = 50;

export const pricing = {
  eyebrow: "Pricing",
  title: "Pay as you go from a rupee wallet",
  sub: "Reload your wallet, then pay per image.",
  walletLabel: "DrapeStudio wallet",
  walletBalance: 1100,
  walletCaption: "Balance after a Popular Pack reload",
  packages: [
    { name: "Starter Pack", price: 500, bonus: 0 },
    { name: "Popular Pack", price: 1000, bonus: 100, badge: "Best Value" },
    { name: "Value Pack", price: 2500, bonus: 350 },
    { name: "Bulk Pack", price: 5000, bonus: 1000 },
  ] as { name: string; price: number; bonus: number; badge?: string }[],
  chips: ["Rs. 50 per image, any module", "Rs. 50 per fit-on, one or two garments"],
  trust: ["Your balance never expires.", "A failed generation costs nothing.", "5 free images in your first 7 days."],
  cta: "Reload your wallet",
};

export const sriLanka = {
  eyebrow: "Built for Sri Lanka",
  title: "Made for sellers in Sri Lanka",
  chips: ["Sinhala", "Tamil", "English", "LKR pricing", "Google sign-in", "WhatsApp sharing", "Works in your phone browser"],
  legal: "DrapeStudio is a product of AIgnite Software (Private) Limited, company number PV 00362580, Colombo, Sri Lanka.",
};

export const mirrorme = {
  eyebrow: "For shoppers",
  title: "MirrorMe: try the look before you buy the look",
  sub: "MirrorMe puts clothes on your own selfie. Pick a garment photo, see the outfit on you, then share the look with friends.",
  tiles: [
    { title: "Your selfies", body: "Save up to five selfies on your phone and reuse them for every look." },
    { title: "Virtual try-on", body: "Add one piece or two, like a top and a bottom, and see the outfit on you." },
    { title: "Style scenes", body: "Place your look in a scene from the MirrorMe style catalog." },
  ],
  shareTitle: "Share your look",
  shareTargets: ["WhatsApp", "Facebook", "Instagram", "Download"],
  price: "Rs. 50 per look",
  priceNote: "Paid from your MirrorMe wallet.",
  notes: "For adults 18 and over. Sinhala, English and Tamil.",
  cta: "Open MirrorMe",
};

export const compare = {
  title: "One family, two apps",
  rows: [
    { label: "Made for", ds: "Sellers who list clothes", mm: "Shoppers who try clothes" },
    { label: "What you get", ds: "Model photos of your products, plus fit-ons on customer photos", mm: "Your outfit on your own selfie, ready to share" },
    { label: "How you pay", ds: "Rupee wallet, Rs. 50 per image or fit-on", mm: "Rupee wallet, Rs. 50 per look" },
    { label: "Account", ds: "Own account and wallet", mm: "Own account and wallet" },
  ],
};

export const faq = {
  title: "Questions and answers",
  items: [
    { q: "What do I need to start?", a: "A Google account and a phone photo of your garment. New accounts get 5 free images in the first 7 days." },
    { q: "How much does one image cost?", a: "Rs. 50 per image in every module. A virtual fit-on costs Rs. 50, with one garment or two." },
    { q: "Does my balance expire?", a: "No. Your wallet balance never expires." },
    { q: "What happens if an image fails?", a: "If a generation fails, you pay nothing. DrapeStudio charges your wallet after the generation finishes." },
    { q: "Which languages does DrapeStudio support?", a: "Sinhala, Tamil and English." },
    { q: "Are DrapeStudio and MirrorMe one account?", a: "No. Each app has a separate account and a separate wallet, even when you sign in with the same Google account." },
    { q: "How do I add money to my wallet?", a: "Pick a reload package in the app. Larger packages add a bonus to your balance." },
    { q: "Who makes DrapeStudio?", a: "AIgnite Software (Private) Limited, company number PV 00362580, based in Colombo, Sri Lanka." },
  ],
};

export const finalCta = {
  title: "Pick your app and start today",
  ds: "Try 5 free images",
  mm: "Open MirrorMe",
};

export const stickyCta = "Try 5 free images";
