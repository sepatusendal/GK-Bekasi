import { defineField, defineType } from "sanity";
import { BRAND_COLORS } from "./shared";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "caption", title: "Caption", type: "text", rows: 2 }),
    defineField({ name: "event", title: "Event name", type: "string" }),
    defineField({
      name: "date",
      title: "Date label",
      type: "string",
      description: "e.g. \"Ags 2026\"",
    }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({
      name: "size",
      title: "Grid size",
      type: "string",
      description: "Controls how large this tile renders in the masonry grid",
      options: {
        list: ["large", "small", "wide", "tall"],
        layout: "radio",
      },
      initialValue: "small",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Accent color",
      type: "string",
      options: { list: BRAND_COLORS },
      initialValue: "var(--gk-red)",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "event", media: "image" },
  },
});
