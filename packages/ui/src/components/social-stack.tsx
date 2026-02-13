import { LinkCTA } from "./cta";

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
    <div className="my-8 flex flex-col md:flex-row gap-2 md:gap-3">
      {socials.map(({ name, href }) => (
        <LinkCTA key={href} href={href} label={name} subtle />
      ))}
    </div>
  );
}
