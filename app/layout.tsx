import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const myFont = localFont({
  src: [
    {
      path: "../public/Google_Sans/static/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Google_Sans/static/GoogleSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Google_Sans/static/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Google_Sans/static/GoogleSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/Google_Sans/static/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Google_Sans/static/GoogleSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/Google_Sans/static/GoogleSans-SemiBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/Google_Sans/static/GoogleSans-SemiBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-myFont",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dictionary.render.com"),
  manifest: "/minefest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Dictionary - Inglizcha so'zlarni o'rganish",
    template: "%s | Dictionary",
  },
  description:
    "Dictionary - inglizcha so'zlarni oson yodlash, tarjima, misollar va talaffuz bilan o'rganish platformasi.",
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
  authors: [{ name: "Dictionary" }],
  creator: "Dictionary",
  openGraph: {
    title: "Dictionary",
    description:
      "Ingliz tilidagi so'zlarni tarjimasi, misol va talaffuzi bilan o'rganing.",
    url: "https://dictionary.render.com",
    siteName: "Dictionary",
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
      className={cn("h-full", "antialiased", myFont.className, "font-sans")}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col select-none">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
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
