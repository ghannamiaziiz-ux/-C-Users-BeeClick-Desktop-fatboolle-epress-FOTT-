"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { articles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard";
import { IconSearch } from "@tabler/icons-react";

const CATEGORIES = ["All", "UCL", "PL", "La Liga", "Ligue 1", "Serie A", "Bundesliga", "Transferts"];

export function SearchClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 12;

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchSearch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategory === "All" || a.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <main className="min-h-screen bg-pitch">
      <div className="border-b border-pitch-border bg-pitch-card">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-white mb-8">Search Articles</h1>

          <div className="flex items-center gap-2 mb-6 bg-pitch rounded-lg border border-pitch-border px-4 py-3">
            <IconSearch className="h-5 w-5 text-pitch-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="flex-1 bg-transparent text-white outline-none placeholder-pitch-muted"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat
                    ? "bg-pitch-accent text-pitch"
                    : "bg-pitch-border text-pitch-muted hover:bg-pitch-border/80"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-pitch-muted mb-8">
          Showing {paginated.length > 0 ? (page - 1) * perPage + 1 : 0} to{" "}
          {Math.min(page * perPage, filtered.length)} of {filtered.length} results
        </p>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginated.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-pitch-muted text-lg">No articles found. Try a different search.</p>
            <Link href="/" className="text-pitch-gold hover:text-pitch-accent mt-4 inline-block">
              Back to home
            </Link>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 rounded-lg border border-pitch-border disabled:opacity-50 hover:border-pitch-accent transition"
            >
              Previous
            </button>
            <span className="text-pitch-muted">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 rounded-lg border border-pitch-border disabled:opacity-50 hover:border-pitch-accent transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
