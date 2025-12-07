"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
const container: Variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 10,
      stiffness: 100,
      staggerChildren: 0.15,
    },
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring" as const,
      damping: 10,
      stiffness: 100,
      staggerChildren: 0.15,
    },
  },
};

export const AboutMeParagraph = ({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  title,
}: Record<
  | "firstParagraph"
  | "secondParagraph"
  | "thirdParagraph"
  | "fourthParagraph"
  | "title",
  string
>) => {
  return (
    <motion.article>
      <motion.h1
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="my-4 text-fs-700 font-bold"
      >
        {title}
      </motion.h1>
      <section className="flex flex-col gap-4 text-fs-300">
        <motion.p
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {firstParagraph}
        </motion.p>
        <motion.p
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {secondParagraph}
        </motion.p>
        <motion.p
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {thirdParagraph}
        </motion.p>
        <motion.p
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {fourthParagraph}
        </motion.p>
      </section>
    </motion.article>
  );
};
