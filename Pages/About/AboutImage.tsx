import fatimapicture from "@/public/pics/fatima.jpg";
import Image from "next/image";
import React from "react";

export default function AboutImage() {
  return (
    <figure className="flex justify-center items-center">
      <Image
        src={fatimapicture}
        alt={"Fatima Chan"}
        sizes="(min-width: 768px) 30vw, 25vw"
        quality={100}
        className="rounded-lg"
        placeholder="blur"
      />
    </figure>
  );
}
