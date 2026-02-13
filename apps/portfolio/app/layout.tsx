import "@repo/ui/styles.css";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { cx } from "@repo/ui/utils/classNames";
import type { Metadata } from "next";
import {
  JetBrains_Mono as MonoFont,
  Geist as SansFont,
} from "next/font/google";

import { googleAnalyticsID } from "../data";

const sans = SansFont({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = MonoFont({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timrodz.dev"),
  title: "Juan Rodríguez Morais - Portfolio",
  description: `Juan is a Software Engineer with 6+ years of professional experience, primarily
  focusing on SaaS products for small to medium-sized businesses (including startups). He is located in
  Auckland, New Zealand, working with The Boundary as a Senior Software Engineer. Juan's preferred tech
  stack is TypeScript, React, Node, AWS, and Elixir + Phoenix. He also has experience with leading
  developer teams. Contact Juan at juan@timrodz.dev
    `,
  authors: [
    { name: "Juan Alejandro Rodriguez Morais", url: "https://www.timrodz.dev" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cx(sans.variable, mono.variable)}>
      <GoogleAnalytics gaId={googleAnalyticsID} />
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
