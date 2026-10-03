import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";
import { waLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <Logo className="h-28" />
        <div className="flex flex-col gap-2 text-sm">
          {site.whatsapp && (
            <a className="underline-offset-4 hover:underline" href={waLink("Hello Diza Apparel")} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          )}
          {site.instagram && (
            <a className="underline-offset-4 hover:underline" href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          <p className="text-muted-foreground">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
