import "@repo/ui/styles.css";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@repo/ui/components/footer";
import type { Metadata } from "next";
import { Navbar } from "~/components/navbar";
import { baseUrl } from "~/app/sitemap";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import { LayoutContainer } from "~/components/layout-container";
import { fontClassNames } from "~/app/fonts";

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

const GOOGLE_ANALYTICS_ID = "UA-52663114-1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={fontClassNames()}>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutContainer>
            <Navbar />
            {children}
            <Footer />
          </LayoutContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
