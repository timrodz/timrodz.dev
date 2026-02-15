import { cx } from "../utils/classNames";
import { LinkCTA } from "./link-cta";

export interface SocialLink {
  name: string;
  href: string;
}

interface SocialsProps {
  socials: SocialLink[];
  className?: string;
}

export function SocialStack({ socials = [], className }: SocialsProps) {
  return (
    <div className={cx("my-4 flex flex-wrap gap-2 md:gap-4", className)}>
      {socials.map(({ name, href }) => (
        <LinkCTA key={href} href={href} subtle>
          {name}
        </LinkCTA>
      ))}
    </div>
  );
}
