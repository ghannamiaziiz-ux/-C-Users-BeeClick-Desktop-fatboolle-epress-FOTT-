"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  IconLayoutDashboard,
  IconArticle,
  IconChartBar,
  IconUsers,
  IconSettings,
  IconSearch,
  IconEdit,
  IconEye,
  IconTrash,
  IconPlus,
  IconTrendingUp,
  IconTrendingDown,
} from "@tabler/icons-react";
import { articles, formatDate } from "@/lib/data";
import type { ArticleStatus } from "@/lib/types";

const nav = [
  { icon: IconLayoutDashboard, label: "Tableau de bord", active: true },
  { icon: IconArticle, label: "Articles", badge: 12 },
  { icon: IconChartBar, label: "Statistiques" },
  { icon: IconUsers, label: "Utilisateurs" },
  { icon: IconSettings, label: "Paramètres" },
];

const stats = [
  {
    label: "Articles publiés",
    value: "1 248",
    trend: "+12%",
    up: true,
  },
  {
    label: "Vues aujourd'hui",
    value: "84 320",
    trend: "+8%",
    up: true,
  },
  {
    label: "Visiteurs uniques",
    value: "12 450",
    trend: "-2%",
    up: false,
  },
  {
    label: "Abonnés newsletter",
    value: "3 890",
    trend: "+24%",
    up: true,
  },
];

const leagueStats = [
  { name: "UCL", pct: 28 },
  { name: "Premier League", pct: 24 },
  { name: "La Liga", pct: 18 },
  { name: "Ligue 1", pct: 15 },
  { name: "Transferts", pct: 15 },
];

const weekViews = [42, 58, 45, 72, 65, 88, 76];

const allArticles = [
  ...articles,
  ...articles.map((a, i) => ({
    ...a,
    id: `${a.id}-dup-${i}`,
    title: `[Brouillon] ${a.title}`,
    status: "draft" as ArticleStatus,
    views: Math.floor(a.views / 10),
  })),
];

const statusStyles: Record<ArticleStatus, string> = {
  published: "bg-emerald-500/20 text-emerald-400",
  draft: "bg-amber-500/20 text-amber-400",
  scheduled: "bg-blue-500/20 text-blue-400",
};

const statusLabels: Record<ArticleStatus, string> = {
  published: "Publié",
  draft: "Brouillon",
  scheduled: "Programmé",
};

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ArticleStatus | "all">(
    "all"
  );
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => {
    return allArticles.filter((a) => {
      const matchSearch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase());
      const matchStatus =
        statusFilter === "all" || a.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="flex min-h-screen bg-[#0c1210] text-white">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-pitch-border bg-pitch-card transition lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2 border-b border-pitch-border px-4">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-pitch-accent text-sm font-bold text-pitch">
            EF
          </span>
          <span className="font-display text-lg">Admin</span>
        </div>
        <nav className="p-3">
          {nav.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                item.active
                  ? "bg-pitch-accent/15 text-pitch-accent"
                  : "text-pitch-muted hover:bg-pitch hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" stroke={1.5} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-400">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-pitch-border p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pitch-accent/20 font-bold text-pitch-accent">
              A
            </span>
            <div>
              <p className="text-sm font-medium">Admin EXPRESS</p>
              <p className="text-xs text-pitch-muted">admin@expressfoot.com</p>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Fermer"
        />
      )}

      <div className="flex flex-1 flex-col min-w-0">
        <header className="flex items-center justify-between border-b border-pitch-border bg-pitch-card px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg p-2 hover:bg-pitch lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <IconLayoutDashboard className="h-6 w-6" />
            </button>
            <h1 className="font-display text-xl font-bold sm:text-2xl">
              Tableau de bord
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hidden text-sm text-pitch-muted hover:text-pitch-accent sm:block"
            >
              Voir le site
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-pitch-accent px-3 py-2 text-sm font-bold text-pitch sm:px-4"
            >
              <IconPlus className="h-4 w-4" />
              <span className="hidden sm:inline">Nouvel article</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-pitch-border bg-pitch-card p-4"
              >
                <p className="text-sm text-pitch-muted">{s.label}</p>
                <p className="mt-1 font-display text-3xl font-bold">
                  {s.value}
                </p>
                <p
                  className={`mt-2 flex items-center gap-1 text-xs ${
                    s.up ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {s.up ? (
                    <IconTrendingUp className="h-4 w-4" />
                  ) : (
                    <IconTrendingDown className="h-4 w-4" />
                  )}
                  {s.trend} vs hier
                </p>
              </div>
            ))}
          </div>

          <div className="mb-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-pitch-border bg-pitch-card p-4 lg:col-span-2">
              <h2 className="mb-4 font-semibold">Vues — 7 derniers jours</h2>
              <div className="flex h-40 items-end justify-between gap-2">
                {weekViews.map((v, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full max-w-[40px] rounded-t bg-pitch-accent/80 transition hover:bg-pitch-accent"
                      style={{ height: `${(v / 88) * 100}%` }}
                      title={`${v}k vues`}
                    />
                    <span className="text-[10px] text-pitch-muted">
                      {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-pitch-border bg-pitch-card p-4">
              <h2 className="mb-4 font-semibold">Par ligue</h2>
              <ul className="space-y-3">
                {leagueStats.map((l) => (
                  <li key={l.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{l.name}</span>
                      <span className="text-pitch-muted">{l.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-pitch">
                      <div
                        className="h-full rounded-full bg-pitch-accent"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-pitch-border bg-pitch-card">
            <div className="flex flex-col gap-3 border-b border-pitch-border p-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-semibold">Articles</h2>
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex items-center gap-2 rounded-lg border border-pitch-border bg-pitch px-3 py-2">
                  <IconSearch className="h-4 w-4 text-pitch-muted" />
                  <input
                    type="search"
                    placeholder="Rechercher..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setPage(1);
                    }}
                    className="w-full bg-transparent text-sm outline-none sm:w-48"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(
                      e.target.value as ArticleStatus | "all"
                    );
                    setPage(1);
                  }}
                  className="rounded-lg border border-pitch-border bg-pitch px-3 py-2 text-sm outline-none"
                >
                  <option value="all">Tous les statuts</option>
                  <option value="published">Publié</option>
                  <option value="draft">Brouillon</option>
                  <option value="scheduled">Programmé</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-pitch-border text-left text-xs text-pitch-muted">
                    <th className="p-3">Article</th>
                    <th className="p-3 hidden md:table-cell">Catégorie</th>
                    <th className="p-3 hidden lg:table-cell">Auteur</th>
                    <th className="p-3">Statut</th>
                    <th className="p-3 hidden sm:table-cell">Vues</th>
                    <th className="p-3 hidden lg:table-cell">Date</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((a) => (
                    <tr
                      key={a.id}
                      className="border-b border-pitch-border/50 hover:bg-pitch/50"
                    >
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded">
                            <Image
                              src={a.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <span className="line-clamp-2 max-w-[200px] font-medium">
                            {a.title}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 hidden md:table-cell text-pitch-muted">
                        {a.category}
                      </td>
                      <td className="p-3 hidden lg:table-cell text-pitch-muted">
                        {a.author}
                      </td>
                      <td className="p-3">
                        <span
                          className={`rounded px-2 py-0.5 text-xs font-medium ${
                            statusStyles[a.status]
                          }`}
                        >
                          {statusLabels[a.status]}
                        </span>
                      </td>
                      <td className="p-3 hidden sm:table-cell">
                        {a.views.toLocaleString("fr-FR")}
                      </td>
                      <td className="p-3 hidden lg:table-cell text-pitch-muted text-xs">
                        {formatDate(a.publishedAt)}
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            type="button"
                            className="rounded p-1.5 hover:bg-pitch"
                            aria-label="Éditer"
                          >
                            <IconEdit className="h-4 w-4" />
                          </button>
                          <Link
                            href={`/article/${a.slug}`}
                            className="rounded p-1.5 hover:bg-pitch"
                          >
                            <IconEye className="h-4 w-4" />
                          </Link>
                          <button
                            type="button"
                            className="rounded p-1.5 text-red-400 hover:bg-red-500/10"
                            aria-label="Supprimer"
                          >
                            <IconTrash className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-pitch-border p-4 text-sm">
              <span className="text-pitch-muted">
                Page {page} / {totalPages || 1} — {filtered.length} résultats
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="rounded-lg border border-pitch-border px-3 py-1 disabled:opacity-40"
                >
                  Préc.
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="rounded-lg border border-pitch-border px-3 py-1 disabled:opacity-40"
                >
                  Suiv.
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
