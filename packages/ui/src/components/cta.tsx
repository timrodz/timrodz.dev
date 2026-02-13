import { LucideIcon, ArrowUpRightIcon } from "lucide-react";
import { cx } from "../utils/classNames";
import { ComponentProps } from "react";
import Link from "next/link";

interface CTAProps extends ComponentProps<"a"> {
  href: string;
  subtle?: boolean;
  label?: string;
  icon?: LucideIcon | null;
}

export function LinkCTA({
  subtle,
  label,
  icon,
  className,
  ...props
}: CTAProps) {
  const IconComponent = icon !== undefined ? icon : ArrowUpRightIcon;
  return (
    <Link
      className={cx(
        "inline-flex items-center",
        subtle ? "cta-subtle" : "cta",
        className,
      )}
      {...props}
    >
      {IconComponent && (
        <IconComponent className="size-4 inline-block mr-1.5 md:mr-1" />
      )}
      {label ?? `Learn more`}
    </Link>
  );
}
