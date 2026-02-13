import Link from "next/link";

const NAV_ITEMS: { name: string; href: string }[] = [
  { name: "home", href: "/" },
  { name: "blog posts", href: "/posts" },
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "uses", href: "/uses" },
  { name: "resume", href: "/resume" },
];

export function Navbar() {
  return (
    <nav
      className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative text-neutral-600 dark:text-neutral-300"
      id="nav"
    >
      <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </nav>
  );
}
