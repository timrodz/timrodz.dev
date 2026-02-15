import Link from "next/link";
import { LinkCTA } from "./link-cta";

interface NavItem {
  name: string;
  href: string;
  cta?: boolean;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { name: "home", href: "/" },
  { name: "blog posts", href: "/posts" },
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "uses", href: "/uses" },
  { name: "portfolio", href: "https://www.timrodz.dev", cta: true },
  { name: "resume", href: "/resume-juan-rodriguez.pdf", cta: true },
];

interface NavbarProps {
  navItems?: NavItem[];
}

export function Navbar({ navItems = DEFAULT_NAV_ITEMS }: NavbarProps) {
  return (
    <nav>
      <div className="flex flex-wrap gap-5">
        {navItems.map(({ name, href, cta }) => {
          return cta ? (
            <LinkCTA key={href} href={href} target="_blank" subtle>
              {name}
            </LinkCTA>
          ) : (
            <Link
              key={href}
              href={href}
              className="text-base transition-all flex align-middle relative font-mono"
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
