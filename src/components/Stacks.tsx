"use client";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";

const icons = [
  { Icon: FaReact, name: "FaReact" },
  { Icon: SiJavascript, name: "SiJavascript" },
  { Icon: SiTypescript, name: "SiTypescript" },
  { Icon: SiNextdotjs, name: "SiNextdotjs" },
  { Icon: FaNodeJs, name: "FaNodeJs" },
  { Icon: BiLogoPostgresql, name: "BiLogoPostgresql" },
  { Icon: RiTailwindCssFill, name: "RiTailwindCssFill" },
  { Icon: IoLogoCss3, name: "IoLogoCss3" },
  { Icon: FaGitAlt, name: "FaGitAlt" },
  { Icon: AiOutlineDotNet, name: "AiOutlineDotNet" },
];

export default function Stacks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 className="text-xl font-bold mb-4" variants={itemVariants}>
        EXPERIENCE WITH
      </motion.h2>
      <motion.div
        className="grid grid-cols-5 gap-8 justify-items-center"
        variants={containerVariants}
      >
        {icons.map(({ Icon, name }) => (
          <motion.div variants={itemVariants} key={name}>
            <Icon className="text-4xl" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
