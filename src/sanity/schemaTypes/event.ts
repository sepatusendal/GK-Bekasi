import { defineArrayMember, defineField, defineType } from "sanity";
import { BRAND_COLORS } from "./shared";

export const event = defineType({
  name: "event",
  title: "Event",
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
    defineField({ name: "category", title: "Category", type: "string" }),
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
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "agenda",
      title: "Agenda",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "agendaItem",
          fields: [
            defineField({ name: "time", title: "Time", type: "string" }),
            defineField({ name: "item", title: "Item", type: "string" }),
          ],
          preview: {
            select: { title: "item", subtitle: "time" },
          },
        }),
      ],
    }),
    defineField({
      name: "date",
      title: "Date (ISO)",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "day",
      title: "Day label",
      type: "string",
      description: "e.g. \"14\"",
    }),
    defineField({
      name: "month",
      title: "Month label",
      type: "string",
      description: "e.g. \"Mar\"",
    }),
    defineField({ name: "time", title: "Time label", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "capacity",
      title: "Capacity",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "registered",
      title: "Registered",
      type: "number",
      validation: (Rule) => Rule.min(0),
      initialValue: 0,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Registration open", value: "registration-open" },
          { title: "Registration closed", value: "registration-closed" },
          { title: "Completed", value: "completed" },
        ],
      },
      initialValue: "registration-open",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "registrationUrl",
      title: "Registration URL",
      type: "url",
    }),
    defineField({ name: "organizer", title: "Organizer", type: "string" }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "status" },
  },
});
