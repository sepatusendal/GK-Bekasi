// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, AtSign, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact GK Bekasi",
  description:
    "Punya pertanyaan, ide kolaborasi, atau mau ngobrol soal GK Bekasi? Hubungi kami lewat email, WhatsApp, atau media sosial.",
  openGraph: {
    title: "Contact GK Bekasi",
    description:
      "Punya pertanyaan atau ide kolaborasi? Hubungi Garuda Keadilan Kabupaten Bekasi.",
    url: `${siteConfig.url}/contact`,
  },
};

const socialLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram, icon: AtSign },
  { label: "YouTube", href: siteConfig.socials.youtube, icon: Play },
  { label: "WhatsApp", href: siteConfig.socials.whatsapp, icon: MessageCircle },
];

export default function ContactPage() {
  return (
    <main className="bg-gk-bg">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            <div className="flex flex-col gap-6">
              <Badge variant="black" className="w-fit">
                Hubungi Kami
              </Badge>
              <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-gk-black">
                Let&apos;s
                <br />
                Talk.
              </h1>
              <p className="max-w-md text-lg text-gk-black/70">
                Ada pertanyaan, ide kolaborasi, atau cuma mau say hi? Kami
                selalu terbuka buat ngobrol.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <ContactRow icon={MapPin} label="Alamat">
                {siteConfig.contact.address}
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gk-red hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </ContactRow>
              <ContactRow icon={MessageCircle} label="WhatsApp">
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gk-red hover:underline"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </ContactRow>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-black/60">
                Sosial Media
              </span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gk-white px-4 py-2 text-sm font-medium text-gk-black brutal-border brutal-hover"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-gk-white p-6 brutal-border brutal-shadow sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </main>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center bg-gk-black text-gk-white brutal-border">
        <Icon className="size-4" />
      </span>
      <div className="flex flex-col">
        <span className="font-display text-xs font-bold uppercase tracking-wide text-gk-black/50">
          {label}
        </span>
        <span className="text-base text-gk-black">{children}</span>
      </div>
    </div>
  );
}
