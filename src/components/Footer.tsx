import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-pitch-border bg-pitch-card">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <Logo />
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <h4 className="mb-3 font-semibold text-white">Ligues</h4>
              <ul className="space-y-2 text-pitch-muted">
                <li>
                  <Link href="/?league=UCL" className="hover:text-pitch-accent">
                    Ligue des Champions
                  </Link>
                </li>
                <li>
                  <Link href="/?league=PL" className="hover:text-pitch-accent">
                    Premier League
                  </Link>
                </li>
                <li>
                  <Link href="/?league=La Liga" className="hover:text-pitch-accent">
                    La Liga
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Site</h4>
              <ul className="space-y-2 text-pitch-muted">
                <li>
                  <Link href="/admin" className="hover:text-pitch-accent">
                    Admin
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-pitch-accent">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pitch-accent">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Réseaux</h4>
              <ul className="space-y-2 text-pitch-muted">
                <li>
                  <a href="#" className="hover:text-pitch-accent">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pitch-accent">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-pitch-border pt-6 text-center text-xs text-pitch-muted">
          © {new Date().getFullYear()} EXPRESS FOOT — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
