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
  return (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className="text-xl font-bold mb-4">EXPERIENCE WITH</motion.h2>
      <motion.div className="grid grid-cols-5 gap-8 justify-items-center">
        {icons.map(({ Icon, name }) => (
          <motion.div key={name}>
            <Icon className="text-4xl" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
