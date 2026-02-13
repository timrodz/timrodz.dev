import { ArrowUpRightIcon } from "lucide-react";
import { cx } from "../utils/classNames";

interface SocialsProps {
  socials: { name: string; url: string }[];
  className?: string;
}

export function Socials({ socials }: SocialsProps) {
  return (
    <div className="ui:my-4">
      <ul className="flex gap-4">
        {socials.map(({ name, url }) => (
          <li key={`socials-${name}`}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={url}
              className="text-base flex gap-2"
            >
              <ArrowUpRightIcon className="size-2" />
              <span className="ml-2">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
