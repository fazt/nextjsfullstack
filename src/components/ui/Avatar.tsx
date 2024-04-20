"use client"
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface Props {
  src: string;
  alt?: string;
}

export function Avatar({ src, alt = "" }: Props) {
  return (
    <Zoom>
      <Image
        src={src || ""}
        alt={alt}
        width={400}
        height={400}
        className="inline-block h-12 w-12 rounded-full"
      />
    </Zoom>
  );
}
