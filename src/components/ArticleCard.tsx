import Image from "next/image";
import Link from "next/link";
import { IconClock, IconEye, IconPencil } from "@tabler/icons-react";
import type { Article } from "@/lib/types";
import { formatRelative } from "@/lib/data";

const categoryColors: Record<string, string> = {
  UCL: "bg-purple-600/80",
  PL: "bg-blue-600/80",
  "La Liga": "bg-orange-600/80",
  "Ligue 1": "bg-indigo-600/80",
  "Serie A": "bg-emerald-600/80",
  Bundesliga: "bg-red-700/80",
  Transferts: "bg-pitch-accent/80 text-pitch",
};

export function ArticleCard({ article }: { article: Article }) {
  const tagClass =
    categoryColors[article.category] ?? "bg-pitch-border";

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-pitch-border bg-pitch-card transition hover:border-pitch-accent/40 hover:shadow-lg hover:shadow-pitch-accent/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span
          className={`absolute left-3 top-3 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tagClass}`}
        >
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold leading-snug text-white group-hover:text-pitch-accent">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-pitch-muted">
          {article.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 text-xs text-pitch-muted">
          <span className="flex items-center gap-1">
            <IconPencil className="h-3.5 w-3.5" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <IconClock className="h-3.5 w-3.5" />
            {formatRelative(article.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <IconEye className="h-3.5 w-3.5" />
            {(article.views / 1000).toFixed(1)}k
          </span>
        </div>
      </div>
    </Link>
  );
}
