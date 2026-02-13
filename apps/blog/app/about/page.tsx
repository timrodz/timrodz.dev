import { About } from "@repo/ui/components/about";
import { Title } from "@repo/ui/components/title";
import { WhoAmI } from "@repo/ui/components/whoami";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <main>
      <Title>About me 👨🏽‍💻</Title>
      <hr />
      <div className="space-y-6">
        <WhoAmI />
        <About />
      </div>
    </main>
  );
}
