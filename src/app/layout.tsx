import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
    "artificial intelligence",
    "software development",
  ],
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
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
