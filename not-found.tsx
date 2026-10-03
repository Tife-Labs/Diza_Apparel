import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-28">
      <h1 className="font-serif text-4xl md:text-6xl">Page not found</h1>
      <p className="mt-4 text-muted-foreground">This page doesn&apos;t exist or has moved.</p>
      <Button asChild className="mt-8"><Link href="/">Go to home</Link></Button>
    </div>
  );
}
