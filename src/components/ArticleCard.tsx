import Image from "next/image";
import Link from "next/link";
import { IconClock, IconEye, IconUser, IconFlame } from "@tabler/icons-react";
import type { Article } from "@/lib/types";
import { formatRelative } from "@/lib/data";

const categoryColors: Record<string, string> = {
  UCL: "bg-gradient-to-r from-pitch-gold to-pitch-accent shadow-lg shadow-pitch-accent/30",
  PL: "bg-gradient-to-r from-pitch-gold to-pitch-accent shadow-lg shadow-pitch-accent/30",
  "La Liga": "bg-gradient-to-r from-pitch-gold to-pitch-accent shadow-lg shadow-pitch-accent/30",
  "Ligue 1": "bg-gradient-to-r from-red-900 to-red-800 shadow-lg shadow-red-900/30",
  "Serie A": "bg-gradient-to-r from-pitch-gold to-pitch-accent shadow-lg shadow-pitch-accent/30",
  Bundesliga: "bg-gradient-to-r from-red-800 to-red-700 shadow-lg shadow-red-800/30",
  Transferts: "bg-gradient-to-r from-pitch-gold to-pitch-accent text-pitch shadow-lg shadow-pitch-accent/30",
};

export function ArticleCard({ article }: { article: Article }) {
  const tagClass =
    categoryColors[article.category] ?? "bg-pitch-border";

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-pitch-border/50 bg-pitch-card backdrop-blur-sm transition duration-300 hover:border-pitch-accent/80 hover:shadow-2xl hover:shadow-pitch-accent/20"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden bg-pitch-border/20">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110 brightness-90 group-hover:brightness-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
        
        {/* Category Badge */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white ${tagClass}`}
        >
          {article.category}
        </span>

        {/* Views Badge */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-pitch/80 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-pitch-accent">
          <IconFlame className="h-3.5 w-3.5" />
          {(article.views / 1000).toFixed(1)}k
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight text-white group-hover:text-pitch-accent transition line-clamp-2">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-pitch-muted">
          {article.excerpt}
        </p>

        {/* Meta Info */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5 border-t border-pitch-border/30">
          <span className="mt-4 flex items-center gap-1.5 text-xs text-pitch-muted hover:text-pitch-accent transition">
            <IconUser className="h-4 w-4" />
            <span className="font-medium">{article.author}</span>
          </span>
          <span className="mt-4 flex items-center gap-1.5 text-xs text-pitch-muted hover:text-pitch-accent transition">
            <IconClock className="h-4 w-4" />
            <span>{formatRelative(article.publishedAt)}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
