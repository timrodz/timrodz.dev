import "@repo/ui/styles.css";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@repo/ui/components/footer";
import { cx } from "@repo/ui/utils/classNames";
import type { Metadata } from "next";
import {
  JetBrains_Mono as MonoFont,
  Geist as SansFont,
} from "next/font/google";
import { Navbar } from "~/components/navbar";
import { baseUrl } from "./sitemap";

// Font files can be colocated inside of `pages`
const sans = SansFont({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = MonoFont({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Juan Rodríguez Morais - Blog",
    template: "%s - Juan Rodríguez Morais - Blog",
  },
  description: `Juan is a Software Engineer with 7+ years of professional experience, primarily
  focusing on SaaS products for small to medium-sized businesses (including startups). He is located in
  Auckland, New Zealand, working with The Boundary as a Senior Software Engineer. Juan's preferred tech
  stack is TypeScript, React, Node, AWS, and Elixir + Phoenix. He also has experience with leading
  developer teams. Contact Juan at juan@timrodz.dev
    `,
  authors: [
    { name: "Juan Alejandro Rodriguez Morais", url: "https://www.timrodz.dev" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(sans.variable, mono.variable)}>
      <GoogleAnalytics gaId="UA-52663114-1" />
      <body className="antialiased max-w-5xl mt-8 px-6 lg:px-10 mx-auto">
        <div className="flex-auto min-w-0 mt-6 flex flex-col">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
