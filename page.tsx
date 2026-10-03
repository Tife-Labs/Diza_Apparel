import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { portfolio } from "@/data/portfolio";
import { services } from "@/data/services";
import { waLink } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-28">
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Clothes made to fit you.
        </h1>
        <div className="stitch stitch-draw mt-10" aria-hidden="true" />
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Diza Apparel sews custom outfits, makes ready-made and casual wear, and sells sewing tools and equipment.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild><Link href="/portfolio">See the work</Link></Button>
            <Button asChild variant="outline">
              <a href={waLink("Hello Diza Apparel, I'd like to order.")} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl md:text-4xl">Recent work</h2>
            <Link href="/portfolio" className="text-sm underline underline-offset-4">View all work</Link>
          </div>
          <PortfolioGrid items={portfolio.slice(0, 4)} filters={false} />
        </div>
      </section>

      <section id="services" className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-serif text-3xl md:text-4xl">What Diza makes and sells</h2>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {services.map((s) => (
              <div key={s.name} className="grid gap-2 py-6 md:grid-cols-[1fr_2fr]">
                <dt className="font-serif text-2xl">{s.name}</dt>
                <dd className="max-w-prose text-muted-foreground">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-xl font-serif text-3xl md:text-4xl">Tell Diza what you need made.</h2>
          <Button asChild className="mt-8"><Link href="/contact">Start an order</Link></Button>
        </div>
      </section>
    </>
  );
}
