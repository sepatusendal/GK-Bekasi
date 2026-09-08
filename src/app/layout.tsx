// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Permanent_Marker } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppSticky } from "@/components/layout/whatsapp-sticky";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const marker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [{ url: "/logo-lockup.jpg", width: 1080, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/logo-lockup.jpg"],
  },
  icons: {
    icon: "/favicon-circle.png",
    apple: "/favicon-circle.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${marker.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-gk-bg text-gk-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
