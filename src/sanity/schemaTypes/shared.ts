export const BRAND_COLORS = [
  { title: "Red", value: "var(--gk-red)" },
  { title: "Black", value: "var(--gk-black)" },
  { title: "Mustard", value: "var(--gk-mustard)" },
  { title: "Blue", value: "var(--gk-blue)" },
];

export const slugField = {
  name: "slug",
  title: "Slug",
  type: "slug" as const,
  options: { source: "title", maxLength: 96 },
  validation: (Rule: import("sanity").SlugRule) => Rule.required(),
};
