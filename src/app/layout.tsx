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

export const metadata: Metadata = {
  title: "AiGNITE Software (Pvt) Ltd — AI-Powered Software Solutions from Sri Lanka",
  description:
    "AiGNITE Software (Pvt) Ltd is the Sri Lankan arm of the AiGNITE ecosystem, building AI-powered products for local and regional markets.",
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
