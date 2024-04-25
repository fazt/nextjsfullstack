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
        width={100}
        height={100}
        className="inline-block h-20 w-20 rounded-full"
      />
    </Zoom>
  );
}
