// import Image from "next/image";

// // import { Reenie_Beanie } from "next/font/google";

// const handwrittenFont = Reenie_Beanie({ weight: "400", subsets: ["latin"] });

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
    <div className={`polaroid-container ${className ?? ""}`}>
      <div className="polaroid">
        <img src={source} width={300} height={400} alt={alt} />
      </div>
      {/*<p className={handwrittenFont.className}>{description}</p>*/}
    </div>
  );
}
