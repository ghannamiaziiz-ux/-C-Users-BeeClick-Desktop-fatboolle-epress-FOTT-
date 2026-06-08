/** URL publique du site (obligatoire pour Google une fois en ligne). */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "https://expressfoot.com";
}

export const siteConfig = {
  name: "EXPRESS FOOT",
  tagline: "Actualités football en direct",
  description:
    "EXPRESS FOOT : actualités football mondiales, transferts, scores live, analyses et Ligue des Champions.",
  locale: "fr_FR",
  twitter: "@expressfoot",
} as const;
