export const categories = ["Custom", "Ready-made", "Casual wear"] as const;
export type Category = (typeof categories)[number];

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  /** Put the photo in /public/portfolio and set e.g. "/portfolio/gown.jpg" */
  image?: string;
  alt?: string;
}

// Sample entries: replace with her real work.
export const portfolio: PortfolioItem[] = [
  { id: "evening-gown", title: "Fitted evening gown", category: "Custom" },
  { id: "tailored-blazer", title: "Tailored blazer set", category: "Custom" },
  { id: "wrap-dress", title: "Wrap dress", category: "Ready-made" },
  { id: "kaftan", title: "Printed kaftan", category: "Ready-made" },
  { id: "linen-coord", title: "Linen co-ord", category: "Casual wear" },
  { id: "shirt-dress", title: "Everyday shirt dress", category: "Casual wear" },
  { id: "two-piece", title: "Two-piece set", category: "Custom" },
  { id: "palazzo-top", title: "Palazzo and top", category: "Casual wear" },
];
