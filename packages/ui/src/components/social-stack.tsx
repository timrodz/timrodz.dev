import { LinkCTA } from "./link-cta";

export interface SocialLink {
  name: string;
  href: string;
}

interface SocialsProps {
  socials: SocialLink[];
  className?: string;
}

export function SocialStack({ socials = [] }: SocialsProps) {
  return (
    <div className="my-4 flex flex-wrap gap-2 md:gap-4">
      {socials.map(({ name, href }) => (
        <LinkCTA key={href} href={href} subtle>
          {name}
        </LinkCTA>
      ))}
    </div>
  );
}
