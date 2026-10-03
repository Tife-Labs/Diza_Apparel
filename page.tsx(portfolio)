import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h1 className="mb-10 font-serif text-4xl md:text-6xl">Portfolio</h1>
      <PortfolioGrid items={portfolio} />
    </div>
  );
}
