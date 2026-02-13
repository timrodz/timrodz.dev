import Image from "next/image";
import { cx } from "../utils/classNames";

export interface PolaroidPhotoProps {
  source: string;
  alt: string;
  description: string;
  className?: string;
}

export function PolaroidPhoto({
  source,
  alt,
  description,
  className,
}: PolaroidPhotoProps) {
  return (
    <div className={cx("polaroid-container", className)}>
      <div className="polaroid">
        <Image src={source} width={300} height={400} alt={alt} />
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
}
