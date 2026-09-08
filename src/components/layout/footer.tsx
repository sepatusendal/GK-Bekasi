// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M16.6 5.82a4.28 4.28 0 0 1-3.03-3.03V2h-3.35v13.62a2.4 2.4 0 1 1-1.72-2.3V9.87a5.7 5.7 0 1 0 5.07 5.66V9.29a7.63 7.63 0 0 0 4.55 1.5V7.34a4.27 4.27 0 0 1-1.52-1.52Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22.5 6.5a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 1 12a30 30 0 0 0 .5 5.5 2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 23 12a30 30 0 0 0-.5-5.5ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.86L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm4.52 14.03c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.73 2.64 4.2 3.71.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const socialLinks = [
  { href: siteConfig.socials.instagram, label: "Instagram GK Bekasi", icon: InstagramIcon },
  { href: siteConfig.socials.youtube, label: "YouTube GK Bekasi", icon: YoutubeIcon },
  { href: siteConfig.socials.tiktok, label: "TikTok GK Bekasi", icon: TikTokIcon },
  { href: siteConfig.socials.whatsapp, label: "WhatsApp GK Bekasi", icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="border-t-[2.5px] border-gk-black bg-gk-black text-gk-white">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl">
              Garuda
              <br />
              Keadilan
            </p>
            <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-gk-red">
              Kabupaten Bekasi
            </p>
            <p className="mt-1 text-sm italic text-gk-mustard">
              &ldquo;{siteConfig.slogan}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="brutal-border flex h-9 w-9 items-center justify-center bg-gk-white text-gk-black transition-colors hover:bg-gk-red hover:text-gk-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-gk-white/40">
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
            <p className="font-display text-xs font-bold uppercase tracking-widest text-gk-white/40">
              Kontak
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-gk-white/90">
              <li>{siteConfig.contact.address}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-gk-red"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gk-red"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
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
            aria-label="GitHub sepatusendal"
            className="inline-flex items-center gap-1.5 font-bold text-gk-white/70 transition-colors hover:text-gk-red"
          >
            <GithubIcon />
            sepatusendal
          </a>
        </div>
      </Container>
    </footer>
  );
}
