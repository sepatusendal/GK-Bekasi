import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).width(1200).url()}
        alt={value?.alt ?? ""}
        width={1200}
        height={800}
        className="h-auto w-full brutal-border"
      />
    ),
  },
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => (
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-gk-black">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-gk-black">
        {children}
      </h3>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="underline decoration-gk-red decoration-2 underline-offset-2"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};

export function RichText({
  value,
  className,
}: {
  value: PortableTextBlock[] | null | undefined;
  className?: string;
}) {
  if (!value || value.length === 0) return null;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <PortableText value={value} components={components} />
    </div>
  );
}
