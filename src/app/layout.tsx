import type { Metadata } from "next";
import { Sora, Noto_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

// 1200x630 share card with the full, uncropped award photo (platforms centre-crop portrait images)
const awardImage = {
  url: "/award/aruni_with_award-share-1200x630.jpg",
  width: 1200,
  height: 630,
  alt: "Aruni Samaranayake of AiGNITE Sri Lanka holding the Digital Innovation Impact Pioneer award at the Global Digital Trade Expo, Hangzhou, September 2026",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aignitelk.com"),
  title: "AiGNITE Software (Pvt) Ltd — AI-Powered Software Solutions from Sri Lanka",
  description:
    "Recognised as a Digital Innovation Impact Pioneer in Hangzhou, September 2026. AiGNITE Software (Pvt) Ltd is the Sri Lankan arm of the AiGNITE ecosystem, building AI-powered products for local and regional markets.",
  keywords: [
    "AiGNITE",
    "AI software",
    "Sri Lanka",
    "DrapeStudio",
    "GoviHub",
    "ScanPass",
    "event credentialing",
    "artificial intelligence",
    "software development",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AiGNITE Software (Pvt) Ltd",
    description: "AI-Powered Software Solutions from Sri Lanka",
    url: "https://aignitelk.com",
    siteName: "AiGNITE Software",
    locale: "en_US",
    type: "website",
    images: [awardImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [awardImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${notoSans.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
