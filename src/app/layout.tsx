import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "EXPRESS FOOT — Actualités football en direct",
    template: "%s | EXPRESS FOOT",
  },
  description:
    "EXPRESS FOOT : actualités football mondiales, transferts, scores live, analyses et Ligue des Champions. Plus de 300 articles par jour.",
  keywords: [
    "football",
    "actualités foot",
    "transferts",
    "Ligue des Champions",
    "Premier League",
    "scores live",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "EXPRESS FOOT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
