import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h1 className="font-serif text-4xl md:text-6xl">Contact</h1>
      <p className="mt-6 max-w-prose text-muted-foreground">
        Fill in the form and it opens WhatsApp with your message ready to send.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
      {site.instagram && (
        <p className="mt-10 text-sm">
          Or message on{" "}
          <a className="underline underline-offset-4" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
        </p>
      )}
    </div>
  );
}
