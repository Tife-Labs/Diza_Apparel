"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-28">
      <h1 className="font-serif text-4xl md:text-6xl">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground">The page failed to load. Try again.</p>
      <Button onClick={reset} className="mt-8">Try again</Button>
    </div>
  );
}
