import { About } from "@repo/ui/components/about";
import { TitleName } from "@repo/ui/components/title";
import { SocialStack } from "@repo/ui/components/social-stack";
import { socials } from "data";
import { LinkCTA } from "@repo/ui/components/link-cta";
import { DownloadIcon } from "lucide-react";
import { WhoAmI } from "@repo/ui/components/whoami";

export function AboutSection() {
  return (
    <section id="about">
      <TitleName />
      <hr />
      <WhoAmI />
      <LinkCTA
        href={"/resume-juan-rodriguez.pdf"}
        target="_blank"
        label="View my resume 🦀"
        icon={DownloadIcon}
        className="mt-4"
      />
      <SocialStack socials={socials} />
      <About />
    </section>
  );
}
