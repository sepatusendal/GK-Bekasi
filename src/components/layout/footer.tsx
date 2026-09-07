import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M16.6 5.82a4.28 4.28 0 0 1-3.03-3.03V2h-3.35v13.62a2.4 2.4 0 1 1-1.72-2.3V9.87a5.7 5.7 0 1 0 5.07 5.66V9.29a7.63 7.63 0 0 0 4.55 1.5V7.34a4.27 4.27 0 0 1-1.52-1.52Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22.5 6.5a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 1 12a30 30 0 0 0 .5 5.5 2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 23 12a30 30 0 0 0-.5-5.5ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t-[2.5px] border-gk-black bg-gk-black text-gk-white">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl">
              Garuda
              <br />
              Keadilan
            </p>
            <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-gk-red">
              Kabupaten Bekasi
            </p>
            <p className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-gk-white/90 sm:text-2xl">
              Gerak Bareng.
              <br />
              Bikin Dampak.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram GK Bekasi"
                className="brutal-border flex h-10 w-10 items-center justify-center bg-gk-white text-gk-black transition-colors hover:bg-gk-red hover:text-gk-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube GK Bekasi"
                className="brutal-border flex h-10 w-10 items-center justify-center bg-gk-white text-gk-black transition-colors hover:bg-gk-red hover:text-gk-white"
              >
                <YoutubeIcon />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok GK Bekasi"
                className="brutal-border flex h-10 w-10 items-center justify-center bg-gk-white text-gk-black transition-colors hover:bg-gk-red hover:text-gk-white"
              >
                <TikTokIcon />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp GK Bekasi"
                className="brutal-border flex h-10 w-10 items-center justify-center bg-gk-white text-gk-black transition-colors hover:bg-gk-red hover:text-gk-white"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-gk-white/50">
              Jelajah
            </p>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-sm font-bold uppercase tracking-wide text-gk-white/90 transition-colors hover:text-gk-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-gk-white/50">
              Kontak
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-gk-white/90">
              <li>{siteConfig.contact.address}</li>
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.whatsapp}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-gk-white/15 pt-6 text-xs text-gk-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Garuda Keadilan Kabupaten Bekasi.</p>
          <p>Gerak bareng, bikin dampak nyata di Kabupaten Bekasi.</p>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gk-white/40">
          <span>Made with ❤️ oleh Bang Wira -</span>
          <a
            href="https://github.com/sepatusendal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-gk-white/70 transition-colors hover:text-gk-red"
          >
            <GithubIcon /> sepatusendal
          </a>
        </div>
      </Container>
    </footer>
  );
}
