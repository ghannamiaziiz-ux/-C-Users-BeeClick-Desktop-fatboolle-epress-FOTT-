import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "EXPRESS FOOT",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f0d",
    theme_color: "#00e676",
    lang: "fr",
  };
}
