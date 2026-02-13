import { About } from "@repo/ui/components/about";
import { TitleName } from "@repo/ui/components/title";
import Link from "next/link";
import { SocialStack } from "@repo/ui/components/social-stack";
import { socials } from "data";
import { LinkCTA } from "@repo/ui/components/cta";
import { DownloadIcon } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about">
      <TitleName />
      <hr />
      <p>
        {`I'm a software engineer (8+ years of experience) & digital nomad based
        in New Zealand, currently working with `}
        <Link href="https://www.the-boundary.com/" target="_blank">
          The Boundary
        </Link>
        {`. You can see my blog at `}
        <Link href="https://blog.timrodz.dev" target="_blank">
          blog.timrodz.dev
        </Link>
        {`. If you want to get in touch with me, please send me a message at`}
        <Link href="mailto:juan@timrodz.dev" target="_blank">
          juan@timrodz.dev
        </Link>
        .
      </p>
      <LinkCTA
        href={"/cv.pdf"}
        target="_blank"
        label="View my resume 🦀"
        icon={DownloadIcon}
        className="mt-8"
      />
      <SocialStack socials={socials} />
      <About asTitle={false} />
    </section>
  );
}
