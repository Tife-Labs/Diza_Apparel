# Diza Apparel website

Next.js 14, TypeScript, Tailwind. Run: `npm install`, copy `.env.example` to `.env.local`, then `npm run dev`.

**Logo:** push her logo to `public/logo.png` (full logo) and `public/monogram.png` (DA only, used in the header). The site loads them automatically; if a file is missing, the brand name shows in script type instead. For the browser tab icon, add `app/icon.png`.
**Photos:** add images to `public/portfolio/` and set `image: "/portfolio/name.jpg"` in `data/portfolio.ts`.
**Contact:** set `NEXT_PUBLIC_WHATSAPP` (digits with country code, no +) and `NEXT_PUBLIC_INSTAGRAM`.
**Deploy:** Netlify reads `netlify.toml`; add the same env vars in the Netlify dashboard.
