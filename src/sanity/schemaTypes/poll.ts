import { defineArrayMember, defineField, defineType } from "sanity";

export const poll = defineType({
  name: "poll",
  title: "Polling (Suara Anak Muda)",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Pertanyaan",
      type: "string",
      validation: (Rule) => Rule.required().max(140),
    }),
    defineField({
      name: "options",
      title: "Pilihan Jawaban",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required().max(80),
            }),
            defineField({
              name: "votes",
              title: "Jumlah Suara",
              type: "number",
              initialValue: 0,
              readOnly: true,
              description: "Dikelola otomatis lewat voting di situs, jangan diedit manual.",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "votes" },
            prepare: ({ title, subtitle }) => ({
              title,
              subtitle: `${subtitle ?? 0} suara`,
            }),
          },
        }),
      ],
      validation: (Rule) => Rule.min(2).max(6).required(),
    }),
    defineField({
      name: "isActive",
      title: "Tampilkan di Situs?",
      type: "boolean",
      description:
        "Cuma satu polling aktif yang bakal muncul di homepage. Matiin polling lama sebelum ngaktifin yang baru.",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "question", isActive: "isActive" },
    prepare: ({ title, isActive }) => ({
      title,
      subtitle: isActive ? "🟢 Aktif di situs" : "Nonaktif",
    }),
  },
});
