import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { ClientShell } from "@/components/layout/ClientShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  buildPersonSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  combineSchemas,
} from "@/lib/seo/schemas";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = createPageMetadata(
  "Home",
  siteConfig.description,
  "/",
);

export const viewport: Viewport = {
  themeColor: "#ff2d55",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = combineSchemas(
    buildPersonSchema(),
    buildWebSiteSchema(),
    buildWebPageSchema("Home", "/", siteConfig.description),
  );

  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <JsonLd data={schemas} />
        <AppProviders>
          <ClientShell>{children}</ClientShell>
        </AppProviders>
      </body>
    </html>
  );
}
