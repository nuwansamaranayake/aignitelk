// Copy for /products/kadesavi. Every claim matches a feature that is built and
// live on kadesavi.com (checked 2026-11-19). Unbuilt features sit in comingSoon.
// Claims map: docs/kadesavi-page-claims.md

export const PAGE_PATH = "/products/kadesavi";
export const SITE_URL = "https://kadesavi.com";
export const STORES_URL = "https://kadesavi.com/stores";
export const SAMPLE_SHOP_URL = "https://kadesavi.com/s/demo";

export const brandSrc = (file: string) => `/img/kadesavi/brand/${file}`;

export const meta = {
  title: "Kadesavi | Order book for online sellers in Sri Lanka | AiGNITE Software",
  description:
    "Kadesavi is an order book and business advisor for one-owner online sellers in Sri Lanka. Paste a WhatsApp order, get the courier Excel in one tap, check the weekly courier payment and see what makes money.",
  ogAlt: "Kadesavi, the order book for small online sellers in Sri Lanka",
};

export const hero = {
  eyebrow: "For sellers on WhatsApp and Facebook",
  title: "Kadesavi",
  sinhala: "කඩේ සවි",
  meaning: "Strength for your shop",
  sub: "An order book and business advisor for one-owner online sellers in Sri Lanka. You take orders on WhatsApp and Facebook, ship by courier with cash on delivery and get paid weekly. Kadesavi keeps the book for you.",
  primary: "Visit kadesavi.com",
  secondary: "See the store directory",
  chips: ["Runs on your phone", "Sinhala and English", "Cash on delivery", "We set it up"],
};

export const problem = {
  eyebrow: "The problem",
  title: "Today you do all of this by hand",
  cards: [
    { title: "Write every order in a book", body: "Name, address, phone, items and amount, one order at a time." },
    { title: "Type it again into Excel", body: "The same details twice, every day, for the courier." },
    { title: "Check the invoice against the book", body: "Line by line, to see if the courier paid you correctly." },
  ],
};

export const steps = {
  eyebrow: "How it works",
  title: "Four steps replace the paper book",
  items: [
    {
      title: "Add the order",
      body: "Paste the WhatsApp message, type the order or photograph a page of your order book. Kadesavi fills in the details. You confirm.",
    },
    {
      title: "One tap courier sheet",
      body: "The day's orders come out in your courier's own Excel format. No retyping.",
    },
    {
      title: "Weekly payment check",
      body: "Upload the courier invoice. Kadesavi flags short payments, parcels missing from the invoice and returns.",
    },
    {
      title: "See your profit",
      body: "Profit per product and sales by district. Figures are estimates until the courier invoice arrives.",
    },
  ],
};

export const shop = {
  eyebrow: "Promote your business",
  title: "A shop page and a store directory",
  body: "Each seller can turn on a shop page on Kadesavi with a logo, product photos and product lines. Customers tap Order on WhatsApp and message the seller directly. No website or domain needed. Shops that are on appear in the Kadesavi store directory.",
  primary: "Open the store directory",
  secondary: "See a sample shop",
  sampleNote: "The sample shop shows what a seller gets. It is not a real business.",
};

export const features = {
  eyebrow: "Made for one-person businesses",
  title: "Built for how small sellers work",
  items: [
    { title: "Runs on your phone", body: "No computer needed. Install it like an app." },
    { title: "In your language", body: "Sinhala and English, on every screen." },
    { title: "We set it up for you", body: "We load your products and your courier's Excel format." },
    { title: "Your data stays yours", body: "Only you see your customers' details." },
  ],
};

export const comingSoon = {
  eyebrow: "Coming soon",
  title: "Not built yet",
  note: "These are planned. They are not part of Kadesavi today.",
  items: [
    { title: "Product search", body: "Customers search by product and find your shop." },
    { title: "Business of the week", body: "One business featured on the Kadesavi front page each week." },
    { title: "Tax-ready records", body: "Income and expense records and a report pack for your accountant." },
    { title: "Marketing dashboard", body: "See which product sells in which area and who buys again." },
    { title: "Deeper analytics", body: "Profit by product category, monthly trends and demand estimates." },
  ],
  disclaimer: "Kadesavi does not give tax advice.",
};

export const finalCta = {
  title: "Run your shop from your phone",
  body: "Kadesavi is a managed service with a monthly fee. We set it up for you. Talk to us about pricing and setup.",
  primary: "Visit kadesavi.com",
  secondary: "Talk to us",
};
