"use client";
// Bang Wira - github.com/sepatusendal

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      if (!open) {
        if (y > lastScrollY.current + 4 && y > 120) {
          setHidden(true);
        } else if (y < lastScrollY.current - 4 || y < 120) {
          setHidden(false);
        }
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    // Reacts to browser/back-forward navigation too, not just in-app
    // Link clicks, so this can't be moved into a single event handler.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[transform,background-color,border-color] duration-300 ease-out",
        scrolled || open
          ? "bg-gk-bg/95 backdrop-blur border-b-[2.5px] border-gk-black"
          : "bg-transparent border-b-[2.5px] border-transparent",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold uppercase tracking-tight"
        >
          <Image
            src="/logo-icon.jpg"
            alt="Logo Garuda Keadilan Kabupaten Bekasi"
            width={40}
            height={40}
            className="h-9 w-9 rounded-full brutal-border sm:h-10 sm:w-10"
            priority
          />
          <span className="hidden sm:inline">GK Bekasi</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-display text-sm font-bold uppercase tracking-wide text-gk-black/80 transition-colors hover:text-gk-red",
                pathname === item.href && "text-gk-red",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/join">Join The Movement</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="brutal-border flex h-10 w-10 items-center justify-center bg-gk-white md:hidden"
          onClick={() => {
            setOpen((v) => {
              const next = !v;
              if (next) setHidden(false);
              return next;
            });
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t-[2.5px] border-gk-black bg-gk-bg md:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-gk-black/10 py-3 font-display text-xl font-bold uppercase tracking-tight text-gk-black"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-5 w-full">
              <Link href="/join">Join GK</Link>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
