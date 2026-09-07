import { defineField, defineType } from "sanity";
import { BRAND_COLORS } from "./shared";

export const leadershipMember = defineType({
  name: "leadershipMember",
  title: "Leadership member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 3 }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      description: "Optional — falls back to initials avatar if left empty",
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: "Used as an avatar fallback when no photo is set",
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "color",
      title: "Avatar color",
      type: "string",
      options: { list: BRAND_COLORS },
      initialValue: "var(--gk-red)",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers show first",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
