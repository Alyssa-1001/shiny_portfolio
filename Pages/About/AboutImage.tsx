import fatimapicture from "@/public/pics/furkan.png";
import Image from "next/image";
import React from "react";

export default function AboutImage() {
  return (
    <figure>
      <Image
        src={fatimapicture}
        alt={"Fatima Chan"}
        sizes="(min-width: 768px) 90vw, 75vw"
        quality={100}
        className="rounded-lg"
        placeholder="blur"
      />
    </figure>
  );
}
