"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Shows /public/logo.png (or the src you pass). If the file isn't in the repo yet,
 * it falls back to the brand name in script type, so nothing ever looks broken.
 */
export function Logo({ src = site.logo, className }: { src?: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <Link href="/" aria-label={`${site.name} home`} className={cn("inline-flex items-center", className)}>
      {failed ? (
        <span className="font-script text-3xl leading-none">{site.name}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={img} src={src} alt={site.name} onError={() => setFailed(true)} className="h-full w-auto" />
      )}
    </Link>
  );
}
