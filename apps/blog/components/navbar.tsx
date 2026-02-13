import { LinkCTA } from "@repo/ui/components/link-cta";
import Link from "next/link";

const NAV_ITEMS: { name: string; href: string }[] = [
  { name: "home", href: "/" },
  { name: "blog posts", href: "/posts" },
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "uses", href: "/uses" },
];

export function Navbar() {
  return (
    <nav>
      <div className="flex flex-wrap gap-4">
        {NAV_ITEMS.map(({ name, href: href }) => {
          return (
            <Link
              key={href}
              href={href}
              className="text-base transition-all flex align-middle relative font-mono"
            >
              {name}
            </Link>
          );
        })}
        <LinkCTA
          href="/resume-juan-rodriguez.pdf"
          target="_blank"
          subtle
          content="resume"
        />
      </div>
    </nav>
  );
}
