import { articles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard";
import Link from "next/link";

const CATEGORIES = ["UCL", "PL", "La Liga", "Ligue 1", "Serie A", "Bundesliga", "Transferts"];

export const generateStaticParams = () => {
  return CATEGORIES.map((cat) => ({ slug: cat.toLowerCase().replace(/\s+/g, "-") }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const categoryName = params.slug.replace(/-/g, " ");
  return {
    title: `${categoryName} News | EXPRESS FOOT`,
    description: `Latest ${categoryName} football news and updates`,
  };
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.replace(/-/g, " ");
  const categoryKey = CATEGORIES.find((c) => c.toLowerCase().replace(/\s+/g, "-") === params.slug);

  const categoryArticles = articles.filter((a) => a.category === categoryKey).slice(0, 24);

  return (
    <main className="min-h-screen bg-pitch">
      <div className="border-b border-pitch-border bg-pitch-card">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/" className="text-pitch-gold hover:text-pitch-accent mb-4 inline-block">
            ← Back
          </Link>
          <h1 className="font-display text-4xl font-bold text-white capitalize">
            {categoryName}
          </h1>
          <p className="text-pitch-muted mt-2">Latest news from {categoryName}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-pitch-muted text-lg">No articles in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}
