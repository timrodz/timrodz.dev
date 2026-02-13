import { ArrowUpRightIcon } from "lucide-react";

interface SocialsProps {
  socials: { name: string; url: string }[];
  className?: string;
}

export function Socials({ socials, className }: SocialsProps) {
  return (
    <ul
      id="socials"
      className={`socials flex flex-col md:flex-row gap-4 my-6 ${className}`}
    >
      {socials.map(({ name, url }) => (
        <li key={`socials-${name}`}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            className="text-base"
          >
            <ArrowUpRightIcon />
            <span className="ml-2">{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
