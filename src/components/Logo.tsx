import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pitch-accent font-display text-lg font-bold text-pitch shadow-lg shadow-pitch-accent/20 transition group-hover:scale-105">
        EF
      </span>
      {!compact && (
        <div className="leading-tight">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            EXPRESS
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-pitch-accent">
            {" "}
            FOOT
          </span>
          <p className="text-[10px] uppercase tracking-widest text-pitch-muted">
            Football News 24/7
          </p>
        </div>
      )}
    </Link>
  );
}
