export const site = {
  name: "Diza Apparel",
  description:
    "Diza Apparel sews custom outfits, makes ready-made and casual wear, and sells sewing tools and equipment.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
  // Drop her files into /public with these names and the site uses them automatically.
  logo: "/logo.png",
  monogram: "/monogram.png",
} as const;

export const nav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
