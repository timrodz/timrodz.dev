import "@repo/ui/styles.css";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { cx } from "@repo/ui/utils/classNames";
import type { Metadata } from "next";
import { GOOGLE_ANALYTICS_ID } from "~/data";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import { fontClassNames } from "~/app/fonts";

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
    <html lang="en" suppressHydrationWarning className={cx(fontClassNames())}>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      <body className={"antialiased"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
