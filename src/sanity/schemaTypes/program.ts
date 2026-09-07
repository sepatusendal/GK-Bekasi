import { defineField, defineType } from "sanity";
import { BRAND_COLORS } from "./shared";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Youth Development",
          "Social Impact",
          "Community",
          "Education",
          "Creative",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "coverColor",
      title: "Cover color",
      type: "string",
      options: { list: BRAND_COLORS },
      initialValue: "var(--gk-red)",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "date",
      title: "Date label",
      type: "string",
      description: "Free-text schedule label, e.g. \"Setiap Sabtu\"",
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
