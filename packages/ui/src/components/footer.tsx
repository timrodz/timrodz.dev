import { SocialLink, SocialStack } from "./social-stack";

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/timrodz" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/timrodz" },
  { name: "Email", href: "mailto:juan@timrodz.dev" },
];

interface FooterProps {
  socialLinks?: SocialLink[];
}

export function Footer({ socialLinks = DEFAULT_SOCIAL_LINKS }: FooterProps) {
  return (
    <footer>
      <SocialStack socials={socialLinks} />
      <p className="mt-4 text-base">
        &copy; {new Date().getFullYear()} Juan Rodríguez Morais
      </p>
    </footer>
  );
}
