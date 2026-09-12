import { defineField, defineType } from "sanity";

export const pledge = defineType({
  name: "pledge",
  title: "Pledge (Dinding Komitmen)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "kecamatan",
      title: "Kecamatan",
      type: "string",
      validation: (Rule) => Rule.max(60),
    }),
  ],
  orderings: [
    {
      title: "Terbaru",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "kecamatan" },
  },
});
