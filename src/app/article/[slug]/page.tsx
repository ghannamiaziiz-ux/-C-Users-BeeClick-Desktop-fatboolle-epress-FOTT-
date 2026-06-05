import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  IconClock,
  IconEye,
  IconPencil,
  IconShare,
  IconArrowLeft,
  IconBrandX,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { Header } from "@/components/Header";
import { ScoresBar } from "@/components/ScoresBar";
import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import {
  getArticleBySlug,
  getRelatedArticles,
  articles,
  formatDate,
} from "@/lib/data";
import { fetchLiveScores } from "@/lib/football-api";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const matches = await fetchLiveScores();
  const paragraphs = article.content.split("\n\n");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    image: [article.image],
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "EXPRESS FOOT",
      logo: { "@type": "ImageObject", url: "/logo.png" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <ScoresBar matches={matches} />

      <article className="mx-auto max-w-4xl px-4 py-6 sm:py-10">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-pitch-muted transition hover:text-pitch-accent"
        >
          <IconArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>

        <span className="rounded bg-purple-600/80 px-2 py-0.5 text-[10px] font-bold uppercase">
          {article.category}
        </span>

        <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
          {article.title}
        </h1>

        <p className="mt-4 text-lg text-pitch-muted">{article.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-pitch-border pb-6 text-sm text-pitch-muted">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pitch-accent/20 text-xs font-bold text-pitch-accent">
              {article.author.charAt(0)}
            </span>
            <span>
              <IconPencil className="mr-1 inline h-4 w-4" />
              {article.author}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <IconClock className="h-4 w-4" />
            {formatDate(article.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <IconEye className="h-4 w-4" />
            {article.views.toLocaleString("fr-FR")} vues
          </span>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              className="rounded-lg border border-pitch-border p-2 hover:border-pitch-accent hover:text-pitch-accent"
              aria-label="Partager sur X"
            >
              <IconBrandX className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="rounded-lg border border-pitch-border p-2 hover:border-pitch-accent hover:text-pitch-accent"
              aria-label="Partager sur Facebook"
            >
              <IconBrandFacebook className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="rounded-lg border border-pitch-border p-2 hover:border-pitch-accent hover:text-pitch-accent"
              aria-label="Partager"
            >
              <IconShare className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="prose prose-invert mt-10 max-w-none">
          {paragraphs.map((block, i) => {
            if (block.startsWith("**") && block.endsWith("**")) {
              const text = block.replace(/\*\*/g, "");
              return (
                <h2
                  key={i}
                  className="mt-8 font-display text-2xl font-bold text-pitch-accent"
                >
                  {text}
                </h2>
              );
            }
            return (
              <p
                key={i}
                className="mb-4 text-base leading-relaxed text-gray-200 sm:text-lg"
              >
                {block}
              </p>
            );
          })}
        </div>

        <div className="mt-12 rounded-xl border border-pitch-border bg-pitch-card p-6">
          <p className="text-sm text-pitch-muted">
            À propos de l&apos;auteur
          </p>
          <p className="mt-2 font-semibold">{article.author}</p>
          <p className="mt-1 text-sm text-pitch-muted">
            Journaliste EXPRESS FOOT — {article.category}
          </p>
        </div>
      </article>

      <section className="mx-auto max-w-7xl border-t border-pitch-border px-4 py-12">
        <h2 className="mb-6 font-display text-2xl font-bold">
          Articles similaires
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(related.length > 0 ? related : articles.slice(0, 4)).map(
            (a) => (
              <ArticleCard key={a.id} article={a} />
            )
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
