import { SocialStack } from "./social-stack";

// TODO: Improve this
const footerItems: Record<string, string> = {
  "https://timrodz.dev": "Portfolio",
  "https://github.com/timrodz": "GitHub",
  "https://www.linkedin.com/in/timrodz": "LinkedIn",
  "https://stackoverflow.com/users/4329379/juan-morais": "StackOverflow",
  "mailto:juan@timrodz.dev": "Email",
  "/rss": "RSS Feed",
};

export function Footer() {
  const socials: { name: string; url: string }[] = Object.entries(
    footerItems,
  ).map(([url, name]) => ({ url, name }));
  return (
    <footer className="pt-10 pb-10">
      <SocialStack socials={socials} />
      <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base">
        &copy; {new Date().getFullYear()} Juan Rodríguez Morais
      </p>
    </footer>
  );
}
