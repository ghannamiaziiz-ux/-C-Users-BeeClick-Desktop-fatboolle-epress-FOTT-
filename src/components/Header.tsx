"use client";

import Link from "next/link";
import { useState } from "react";
import {
  IconSearch,
  IconMenu2,
  IconX,
  IconLivePhoto,
} from "@tabler/icons-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/?league=UCL", label: "LDC" },
  { href: "/?league=PL", label: "Premier League" },
  { href: "/?league=La Liga", label: "La Liga" },
  { href: "/?league=Ligue 1", label: "Ligue 1" },
  { href: "/?league=Serie A", label: "Serie A" },
  { href: "/?league=Transferts", label: "Transferts" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pitch-border bg-pitch/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-pitch-muted transition hover:bg-pitch-card hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-pitch-border bg-pitch-card px-3 py-1.5 sm:flex">
            <IconSearch className="h-4 w-4 text-pitch-muted" stroke={1.5} />
            <input
              type="search"
              placeholder="Rechercher..."
              className="w-28 bg-transparent text-sm outline-none placeholder:text-pitch-muted md:w-40"
            />
          </div>

          <Link
            href="/#live"
            className="flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-red-600/30"
          >
            <IconLivePhoto className="h-4 w-4 animate-pulse-live" />
            Live
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-pitch-muted hover:bg-pitch-card lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? (
              <IconX className="h-6 w-6" />
            ) : (
              <IconMenu2 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-pitch-border bg-pitch-card px-4 py-3 lg:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-lg border border-pitch-border bg-pitch px-3 py-2">
            <IconSearch className="h-4 w-4 text-pitch-muted" />
            <input
              type="search"
              placeholder="Rechercher..."
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2.5 text-sm text-pitch-muted hover:bg-pitch hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="mt-2 block rounded-md px-3 py-2.5 text-sm text-pitch-accent"
            onClick={() => setMenuOpen(false)}
          >
            Admin
          </Link>
        </nav>
      )}
    </header>
  );
}
