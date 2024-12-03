"use client";
import { differenceInYears } from "date-fns";
import Image from "next/image";
import { motion } from "framer-motion";
import DownloadButton from "./ui/DownloadButton";

export default function ProfileIntro() {
  const birthDate = new Date(2001, 3, 25);
  const currentDate = new Date();
  const age = differenceInYears(currentDate, birthDate);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id="home"
      className="px-4 sm:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] relative m-auto"
        variants={imageVariants}
      >
        <Image
          src="/computer.gif"
          alt="Profile picture of a person with a laptop"
          fill
          className="rounded-full m-auto object-cover"
        />
      </motion.div>

      <motion.h1
        className="text-2xl sm:text-4xl font-bold my-6 sm:my-10"
        variants={itemVariants}
      >
        Hi, I'm <span className="text-purple-500">Paulo Mariano</span>, a
        Fullstack Developer.
      </motion.h1>

      <motion.p
        className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base"
        variants={itemVariants}
      >
        I'm {age} years old, a fullstack developer with a Bachelor's in Computer
        Science. I create web applications using React, .NET, Node.js, and
        TypeScript. I love exploring new tech, contributing to open-source, and
        reading books.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
        variants={itemVariants}
      >
        <DownloadButton />
      </motion.div>
    </motion.div>
  );
}
