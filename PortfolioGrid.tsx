"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { categories, type Category, type PortfolioItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioGrid({ items, filters = true }: { items: PortfolioItem[]; filters?: boolean }) {
  const [active, setActive] = useState<Category | "All">("All");
  const shown = active === "All" ? items : items.filter((i) => i.category === active);
  const options: (Category | "All")[] = ["All", ...categories];

  return (
    <MotionConfig reducedMotion="user">
      {filters && (
        <div role="group" aria-label="Filter by category" className="mb-10 flex flex-wrap gap-2">
          {options.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "border px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
                active === c ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {shown.map((item) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt ?? item.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <span aria-hidden className="absolute inset-0 grid place-items-center font-serif text-5xl text-border">
                    DA
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-serif text-xl">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.category}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </MotionConfig>
  );
}
