import { SocialLink, SocialStack } from "./social-stack";

const FOOTER_ITEMS: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/timrodz" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/timrodz" },
  { name: "Email", href: "mailto:juan@timrodz.dev" },
];

interface FooterProps {
  socialLinks?: SocialLink[];
}

export function Footer({ socialLinks = [] }: FooterProps) {
  const socials = Array.from(new Set([...FOOTER_ITEMS, ...socialLinks]));

  return (
    <footer>
      <SocialStack socials={socials} />
      <p className="mt-4 text-base">
        &copy; {new Date().getFullYear()} Juan Rodríguez Morais
      </p>
    </footer>
  );
}
