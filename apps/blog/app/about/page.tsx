import { About } from "@repo/ui/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <main>
      <About />
    </main>
  );
}
