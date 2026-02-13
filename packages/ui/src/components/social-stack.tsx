import { ArrowUpRightIcon } from "lucide-react";

interface SocialsProps {
  socials: { name: string; url: string }[];
  className?: string;
}

export function SocialStack({ socials }: SocialsProps) {
  return (
    <div id="social-stack" className="my-4">
      <ul className="flex flex-col md:flex-row gap-4">
        {socials.map(({ name, url }) => (
          <li key={`socials-${name}`}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={url}
              className="text-base flex gap-1 items-center"
            >
              <ArrowUpRightIcon className="size-4 inline-block" />
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
