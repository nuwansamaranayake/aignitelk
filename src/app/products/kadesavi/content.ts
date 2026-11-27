// Copy for /products/kadesavi. Every claim matches a feature that is built and
// live on kadesavi.com (checked 2026-11-19). Unbuilt features sit in comingSoon.
// The page opens with the free page offer (2026-11-27). Its wording follows the
// approved offer terms shown on kadesavi.com/offer.
// Claims map: docs/kadesavi-page-claims.md

export const PAGE_PATH = "/products/kadesavi";
export const SITE_URL = "https://kadesavi.com";
export const OFFER_URL = "https://kadesavi.com/offer";
export const STORES_URL = "https://kadesavi.com/stores";
export const SAMPLE_SHOP_URL = "https://kadesavi.com/s/demo";

export const brandSrc = (file: string) => `/img/kadesavi/brand/${file}`;

export const meta = {
  title: "Kadesavi | Order book for online sellers in Sri Lanka | AiGNITE Software",
  description:
    "Kadesavi is an order book for one-owner online sellers in Sri Lanka. Paste a WhatsApp order, get the courier Excel in one tap and check the courier payment.",
  ogAlt: "Kadesavi, the order book for small online sellers in Sri Lanka",
};

export const hero = {
  eyebrow: "For small businesses in Sri Lanka",
  title: "Kadesavi",
  sinhala: "කඩේ සවි",
  meaning: "Strength for your shop",
  sub: "Start with a free web page for your business. It is free for 2 months. Then it is Rs. 1,000 a month, only if you keep it. When your orders grow, Kadesavi keeps your order book too.",
  primary: "Get your free page",
  secondary: "See the store directory",
  chips: ["We build it for you", "Free for 2 months", "Sinhala and English", "No domain or hosting to buy"],
};

// The free page offer. Each line is taken from the approved terms on kadesavi.com/offer.
export const offer = {
  eyebrow: "The offer",
  title: "A free web page for your business",
  body: "We build the page from your Facebook or Instagram page and the details you send us. Customers open one link, see what you sell and message you on WhatsApp.",
  getTitle: "What you get",
  items: [
    "Your business name, logo, location and a short description",
    "Up to 10 products or services, with one photo each",
    "A WhatsApp button, so customers message you directly",
    "Your own link: kadesavi.com/s/your-business",
    "A listing in the Kadesavi store directory",
    "One free update a month, up to 5 changes",
  ],
  price: "Free for 2 months from the day your page goes live. Then Rs. 1,000 a month by bank transfer, only if you keep it. If you do not, we turn the page off and charge nothing.",
  not: "It does not include a custom domain, online payments, a cart or ads for your business.",
  primary: "Get your free page",
  secondary: "See a sample shop",
  terms: "Read the full terms",
  sampleNote: "The sample shop shows what a business gets. It is not a real business.",
};

// From here down: the order book, for sellers whose orders have grown.
export const problem = {
  eyebrow: "When your orders grow",
  title: "Today you do all of this by hand",
  lead: "You take orders on WhatsApp and Facebook, ship by courier with cash on delivery and get paid weekly. Kadesavi keeps the order book for you.",
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
  title: "Start with your free page",
  body: "We build it for you. You pay nothing now. The order book is a managed service with a monthly fee. Talk to us about it when your orders grow.",
  primary: "Get your free page",
  secondary: "Talk to us",
};
