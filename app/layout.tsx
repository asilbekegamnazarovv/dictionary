import type { Metadata } from "next";
import { Inter, Poppins, Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my.uz"),
  manifest: "/minefest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "My-dictionary - Inglizcha so'zlarni o'rganish",
    template: "%s | My dictionary",
  },
  description:
    "My Dictionary - inglizcha so'zlarni oson yodlash, tarjima, misollar va talaffuz bilan o'rganish platformasi.",
  keywords: [
    "ingliz-tili",
    "english words",
    "so'z yodlash",
    "lug‘at",
    "dictionary",
    "o‘zbekcha inglizcha tarjima",
    "so‘zlar ma’nosi",
    "online dictionary",
  ],
  authors: [{ name: "My Dictionary" }],
  creator: "My Dictionary",
  openGraph: {
    title: "My Dictionary",
    description:
      "Ingliz tilidagi so'zlarni tarjimasi, misol va talaffuzi bilan o'rganing.",
    url: "https://dictionary.vercel.app",
    siteName: "My Dictionary",
    locale: "uz_UZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              name: "apple",
              description: "Olma — meva turi",
            }),
          }}
        />
      </body>
    </html>
  );
}
