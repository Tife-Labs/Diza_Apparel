"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn, waLink } from "@/lib/utils";

const needs = ["Custom outfit", "Ready-made or casual wear", "Sewing tools or equipment", "Alteration"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80, "Use 80 characters or fewer."),
  phone: z.string().trim().regex(/^[+\d\s()-]{7,20}$/, "Enter a valid phone number."),
  need: z.enum(needs, { errorMap: () => ({ message: "Choose what you need." }) }),
  message: z.string().trim().min(10, "Write at least 10 characters.").max(1000, "Use 1000 characters or fewer."),
  website: z.string().max(0).optional(), // honeypot: real people never fill this in
});
type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { need: undefined } });

  const onSubmit = (v: Values) => {
    if (v.website) return;
    const text = `Hello Diza Apparel, I'm ${v.name} (${v.phone}). I need: ${v.need}.\n\n${v.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    reset();
  };

  const label = "mb-1 block text-sm font-medium";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid max-w-xl gap-5">
      <div>
        <label htmlFor="name" className={label}>Your name</label>
        <Input id="name" autoComplete="name" error={errors.name?.message} {...register("name")} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Phone number</label>
        <Input id="phone" type="tel" autoComplete="tel" error={errors.phone?.message} {...register("phone")} />
      </div>
      <div>
        <label htmlFor="need" className={label}>What do you need?</label>
        <select
          id="need"
          defaultValue=""
          aria-invalid={!!errors.need}
          className={cn(
            "h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            errors.need && "border-destructive"
          )}
          {...register("need")}
        >
          <option value="" disabled>Select one</option>
          {needs.map((n) => (<option key={n} value={n}>{n}</option>))}
        </select>
        {errors.need && <p role="alert" className="mt-1 text-sm text-destructive">{errors.need.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className={label}>Details</label>
        <Textarea id="message" placeholder="Style, fabric, date needed, measurements…" error={errors.message?.message} {...register("message")} />
      </div>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px]" {...register("website")} />
      <Button type="submit" disabled={isSubmitting} className="w-fit">Send on WhatsApp</Button>
      {sent && <p role="status" className="text-sm text-muted-foreground">WhatsApp opened with your message. Press send there to finish.</p>}
    </form>
  );
}
