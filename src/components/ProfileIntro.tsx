"use client";
import { differenceInYears } from "date-fns";
import Image from "next/image";
import { motion } from "framer-motion";
import DownloadButton from "./ui/DownloadButton";

export default function ProfileIntro() {
  const birthDate = new Date(2001, 3, 25);
  const currentDate = new Date();
  const age = differenceInYears(currentDate, birthDate);

  return (
    <motion.div
      id="home"
      className="px-4 sm:px-8"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] relative m-auto">
        <Image
          src="/computer.gif"
          alt="Profile picture of a person with a laptop"
          fill
          className="rounded-full m-auto object-cover"
        />
      </motion.div>

      <motion.h1 className="text-2xl sm:text-4xl font-bold my-6 sm:my-10">
        Hi, I'm <span className="text-purple-500">Paulo Mariano</span>, a
        Fullstack Developer.
      </motion.h1>

      <motion.p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
        I'm {age} years old, a fullstack developer with a Bachelor's in Computer
        Science. I create web applications using React, .NET, Node.js, and
        TypeScript. I love exploring new tech, contributing to open-source, and
        reading books.
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <DownloadButton />
      </motion.div>
    </motion.div>
  );
}
