// Visible copy for /govihub. The brief (CC Task: GoviHub detail page) fixes this text verbatim.
// Do not add numbers, user counts, accuracy figures, response times, testimonials or quotes.

export const GH_APP_URL = "https://spices.govihublk.com";
export const GH_YOUTUBE_URL = "https://www.youtube.com/@GoviHubSriLanka";
export const CONTACT_HREF = "/#contact";
export const PAGE_PATH = "/govihub";

export const meta = {
  title: "GoviHub | Sri Lanka's AI farming marketplace | AiGNITE Sri Lanka",
  description:
    "GoviHub connects Sri Lankan farmers directly to buyers, diagnoses crop disease from a photo and answers farming questions in Sinhala. Free for farmers.",
  ogAlt: "GoviHub logo beside black pepper vines with green and red berries",
};

export const ghImg = (name: string, width: number, ext: "webp" | "jpg" | "png" = "webp") => `/img/govihub/${name}-${width}.${ext}`;

export const hero = {
  headline: "Sri Lanka's AI farming marketplace",
  subhead: "GoviHub connects farmers directly to buyers and gives them AI crop help in their own language.",
  promise: "Free for farmers. Forever.",
  note: "Live now for spice farmers. Works in any phone browser.",
  primary: "Open GoviHub Spices",
  secondary: "Work with us",
};

export const problem = {
  eyebrow: "The problem",
  heading: "The farmer grows the crop. The middleman sets the price.",
  body: "Most Sri Lankan farmers sell through middlemen. They have no direct line to buyers and no clear view of fair prices. When a crop falls sick, help from an agricultural officer takes days to arrive.",
};

export type Feature = { title: string; body: string; ai?: boolean };

export const features = {
  heading: "What GoviHub does",
  sell: { title: "Sell direct to buyers", body: "List a harvest with quantity, price and a photo. GoviHub matches each listing with buyers who want the crop, close to the farm." },
  diagnose: { title: "Diagnose crop disease from a photo", body: "Photograph a sick leaf. AI identifies the likely disease and explains the treatment in Sinhala, Tamil or English.", ai: true },
  advisor: { title: "Ask a farming question in Sinhala", body: "The AI advisor answers from Sri Lankan Department of Agriculture publications on spice crops. Local guidance for local farms.", ai: true },
  weather: { title: "Plan around the weather", body: "See a 7-day forecast for your farm, with soil temperature and moisture. Get alerts when the weather puts your crops at risk. Forecasts come from international weather models." },
  inputs: { title: "Buy seeds, fertiliser and tools", body: "Suppliers list farm inputs on GoviHub. Farmers call or WhatsApp them directly." },
  languages: { title: "Sinhala, Tamil and English", body: "Every screen works in all three languages. No app store, no download. Open the site on any phone." },
} satisfies Record<string, Feature | string>;

export const who = {
  heading: "Built for everyone in the supply chain",
  items: [
    { name: "Farmers", body: "Free, forever. List harvests, get matched with buyers, diagnose crops and ask for advice." },
    { name: "Buyers", body: "Post what you need. GoviHub matches you with farmers who grow the crop near you." },
    { name: "Suppliers", body: "Put seeds, fertiliser, tools and equipment in front of farmers who need them." },
  ],
};

export const steps = {
  heading: "Start in four steps",
  items: [
    "Open spices.govihublk.com on your phone.",
    "Register with your name and phone number.",
    "Choose your role: farmer, buyer or supplier.",
    "List a harvest, post a need or ask a question.",
  ],
};

export const recognition = {
  eyebrow: "International recognition",
  heading: "Digital Innovation Impact Pioneer",
  paragraphs: [
    "GoviHub received the Digital Innovation Impact Pioneer award at the International Youth OPC Co-Creation Dialogue, Global Digital Trade Expo, Hangzhou, China, in September 2026.",
    "The programme brought together 33 enterprises from 22 developing countries. GoviHub was the only one from Sri Lanka.",
    "The International Trade Centre, a joint agency of the United Nations and the World Trade Organization, organised the programme with the Global SDGs and Leadership Development Center and the China International Youth Exchange Center.",
    "Aruni Samaranayake, Director of Operations at AiGNITE Sri Lanka, accepted the award in Hangzhou.",
  ],
  // Same alt text as the home page award hero.
  imageAlt:
    "Aruni Samaranayake of AiGNITE Sri Lanka holding the Digital Innovation Impact Pioneer award at the Global Digital Trade Expo, Hangzhou, September 2026",
};

export const government = {
  heading: "Working with the Sri Lankan government",
  body: "We are working with the Sri Lankan government on proposals to integrate GoviHub with agriculture institutions across the country. Together, we aim to bring more services to the farming community through one platform.",
};

// Canonical text, approved. Sinhala first, English below.
export const visionMission = {
  heading: "Our vision and mission",
  vision: {
    label: "Vision",
    si: "අතරමැදි සූරාකෑමෙන් තොර සෘජු වෙළෙඳපොළ බලය සහ AI තාක්ෂණයේ ප්‍රඥාව ගොවියාගේම අතට පත් කරමින්, සෑම ශ්‍රී ලාංකික ගොවියෙකුම අභිමානවත් හා ස්වාධීන ඩිජිටල් යුගයක පෙරගමන්කරුවෙකු බවට පත්කිරීම.",
    en: "To make every Sri Lankan farmer a proud and independent pioneer of the digital age, with direct market power and the intelligence of AI in their own hands, free from middleman exploitation.",
  },
  mission: {
    label: "Mission",
    si: "අතරමැදි බාධක බිඳහෙලමින් ගොවීන් සහ ගැනුම්කරුවන් සෘජුවම යා කරන, ගොවියාට සදහටම නොමිලේ වන ඩිජිටල් වේදිකාවක් තිළිණ කිරීමත්, සරල AI තාක්ෂණය මගින් වගා අභියෝගවලට සැණින් විසඳුම් දෙමින් කාලය, ශ්‍රමය සහ අස්වනු නාස්තිය වළක්වා ග්‍රාමීය ගොවි ආර්ථිකය සවිබල ගැන්වීමත් අපගේ මෙහෙවරයි.",
    en: "Our mission is to give farmers a digital platform, free for farmers forever. We connect farmers and buyers directly, break down middleman barriers, and put simple AI to work on crop problems the moment they appear. We cut waste of time, labor, and harvests, and build a stronger rural farming economy for Sri Lanka.",
  },
};

export const sectors = {
  heading: "Starting with spices. Growing to every crop.",
  spices: {
    name: "Spices",
    body: "Live now. The pilot started with spice farmers in Anuradhapura and Polonnaruwa. Black pepper, cinnamon, turmeric, ginger, cloves, nutmeg and cardamom.",
  },
  later: [
    { name: "Fruits", body: "Coming soon." },
    { name: "Produce", body: "Coming soon." },
  ],
};

export const builtBy = {
  heading: "Built in Sri Lanka by AiGNITE",
  body: "AiGNITE Sri Lanka designs and builds AI products for Sri Lankan businesses and institutions. GoviHub is our flagship platform.",
  button: "Work with us",
};

export const closing = {
  heading: "See GoviHub at work",
  primary: "Open GoviHub Spices",
  secondary: "Watch on YouTube",
};

// Real GoviHub app screenshots (spices.govihublk.com, 390 x 844 viewport). No other users' data.
// false until the screens are captured from a farmer test account (BLOCKED.md). While false the
// page shows photos in their place and the hero phone mockup is off. Nothing fake ships.
export const screensReady = false;
export type Screen = { name: string; alt: string };
export const screens = {
  diagPhoto: { name: "screen-diagnosis-photo", alt: "GoviHub crop diagnosis screen with a photo of a sick spice leaf" },
  diagResult: { name: "screen-diagnosis-result", alt: "GoviHub diagnosis result in Sinhala, naming the likely disease" },
  diagAdvice: { name: "screen-diagnosis-advice", alt: "GoviHub treatment advice in Sinhala for the diagnosed disease" },
  advisor: { name: "screen-advisor", alt: "GoviHub AI advisor answering a farming question in Sinhala" },
  listing: { name: "screen-listing", alt: "A harvest listing on GoviHub with quantity, price and photo" },
  market: { name: "screen-market", alt: "The GoviHub supplier marketplace listing seeds, fertiliser and tools" },
  weather: { name: "screen-weather", alt: "The GoviHub farmer dashboard with the 7-day weather card" },
} satisfies Record<string, Screen>;
export const screenSrc = (s: Screen, ext: "webp" | "png" = "webp") => `/img/govihub/screens/${s.name}.${ext}`;

// Generated images (imagegen, prompts in docs/govihub-image-prompts.md). Crops: wide 16:9, tall 4:5.
export const photos = {
  pepperWide: { name: "pepper-wide", alt: "Black pepper vines with clusters of green and ripe red berries in morning light", w: 16, h: 9 },
  pepperTall: { name: "pepper-tall", alt: "Black pepper vines with clusters of green and ripe red berries in morning light", w: 4, h: 5 },
  turmericWide: { name: "turmeric-wide", alt: "Fresh turmeric and ginger roots split open to show bright yellow and pale gold flesh", w: 16, h: 9 },
  cardamomTall: { name: "cardamom-tall", alt: "Fresh green cardamom pods beside green and pink clove buds", w: 4, h: 5 },
  farmlandWide: { name: "farmland-wide", alt: "Green paddy fields and a spice home garden under a clear blue sky in the North Central Province", w: 16, h: 9 },
  handsTall: { name: "hands-tall", alt: "A farmer's hands holding a phone over a black pepper vine", w: 4, h: 5 },
};
