"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const skills: string[] = [
  "React - Crafting seamless UIs 🎨",
  "Node.js - Powering scalable APIs ⚡",
  "Next.js - Lightning-fast, dynamic pages 🚀",
  "Tailwind CSS - Styling with ease 🌿",
  "Python - Your go-to for AI & automation 🤖",
  "FastAPI - Building ultra-fast APIs ⚡",
  "PostgreSQL - Secure & reliable data 🗃️",
  "MongoDB - Flexible, scalable databases 🌱",
  "AI & Machine Learning - Smarter, faster solutions 🧠",
  "Blockchain - Decentralized innovation 🔗",
  "Git - Collaborating with precision 🔧",
];

export default function Home({
  className,
  title,
  subtitle,
  projectsLinkText,
  role,
}: Record<"title" | "subtitle" | "projectsLinkText" | "role", string> & {
  className?: string;
}) {
  const container = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: 1,
        duration: 0.5,
        type: "tween" as const,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "tween" as const,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
  };

  const titleAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "tween" as const,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    },
  };

  const textReveal = {
    hidden: { width: "0%" },
    show: {
      width: "100%",
      transition: {
        duration: 1,
        type: "tween" as const,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    },
  };

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/codebelle8" },
    // { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/fatima-chan-21b200242/" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:aprofessional0575@gmail.com" },
  ];

  const MotionedLink = motion.create(Link);

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={container}
      className={`relative my-auto h-full w-full px-3 sm:px-10 py-4 sm:py-10 z-20 gap-6 items-center justify-center ${className}`}
    >
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column - Main Content */}
        <motion.div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <motion.div
              variants={item}
              className="inline-block"
            >
              <span className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5">
                {role}
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.div
                initial="hidden"
                animate="show"
                variants={titleAnimation}
                className="w-fit mx-auto lg:mx-0"
              >
                <motion.h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {title}
                </motion.h1>
              </motion.div>
            </div>

            <motion.p
              variants={item}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            variants={item}
            className="flex gap-3 sm:gap-4 pointer-events-auto justify-center lg:justify-start"
          >
            {socialLinks.map((link, index) => (
              <MotionedLink
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 md:p-3 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                {link.icon}
              </MotionedLink>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="pointer-events-auto flex justify-center lg:justify-start"
          >
            <MotionedLink
              href="/projects"
              className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-red-700 to-purple-900 text-white font-medium hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base"
            >
              {projectsLinkText}
            </MotionedLink>
          </motion.div>
        </motion.div>

        {/* Right Column - Animated Code Block */}
        <div className="relative mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" as const, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-purple-900/20 blur-3xl"
          />
          <motion.div
            variants={item}
          >
            <pre className="relative backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-primary/20 bg-primary/5 overflow-x-auto text-[10px] xs:text-xs sm:text-sm">
              <code className="font-mono whitespace-pre-wrap break-words">
                <span className="text-blue-400">const</span>{" "}
                <span className="dark:text-yellow-400 text-yellow-600">developer</span> = {"{"}
                <br />
                {"  "}name: <span className="dark:text-green-400text-green-600">{"\"Fatima Chan\""}</span>,
                <br />
                {"  "}role: <span className="dark:text-green-400 text-green-600">{"\"Full Stack & AI Engineer\""}</span>,
                <br />
                {"  "}skills: {"["}
                {skills.map((skill, index) => (
                  <React.Fragment key={index}>
                    <br />
                    {"    "}<span className="dark:text-green-400 text-green-600">{`"${skill}"`}</span>
                    {index !== skills.length - 1 && ","}
                  </React.Fragment>
                ))}
                <br />
                {"]"},
                <br />
                {"  "}passion: <span className="dark:text-green-400 text-green-600">{"\"Transforming ideas into intelligent, scalable systems that make a real impact\""}</span>
                <br />
                {"}"};
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
