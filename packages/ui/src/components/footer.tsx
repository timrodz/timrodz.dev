import { SocialLink, SocialStack } from "./social-stack";

const footerItems: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/timrodz" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/timrodz" },
  {
    name: "StackOverflow",
    href: "https://stackoverflow.com/users/4329379/juan-morais",
  },
  { name: "Email", href: "mailto:juan@timrodz.dev" },
];

interface FooterProps {
  socialLinks?: SocialLink[];
}

export function Footer({ socialLinks = [] }: FooterProps) {
  const socials = Array.from(new Set([...footerItems, ...socialLinks]));

  return (
    <footer>
      <SocialStack socials={socials} />
      <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base">
        &copy; {new Date().getFullYear()} Juan Rodríguez Morais
      </p>
    </footer>
  );
}
