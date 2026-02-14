import { LucideIcon, ArrowUpRightIcon } from "lucide-react";
import { cx } from "../utils/classNames";
import { ComponentProps } from "react";
import Link from "next/link";

interface CTAProps extends ComponentProps<"a"> {
  href: string;
  subtle?: boolean;
  icon?: LucideIcon | null;
  iconDirection?: "left" | "right";
}

export function LinkCTA({
  subtle,
  icon,
  className,
  iconDirection = "left",
  children,
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
      {iconDirection === "left" && IconComponent && (
        <IconComponent className="size-4 inline-block mr-1.5 md:mr-1" />
      )}
      {children ?? `Learn more`}
      {iconDirection === "right" && IconComponent && (
        <IconComponent className="size-4 inline-block ml-1.5 md:ml-1" />
      )}
    </Link>
  );
}
