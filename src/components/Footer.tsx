"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <motion.footer
      className="bg-zinc-900 py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="container mx-auto text-center">
        <motion.h2 className="text-xl font-bold mb-4 text-white">
          Contact
        </motion.h2>
        <motion.div className="flex justify-center space-x-4">
          <motion.a
            href="https://github.com/paulomarian0"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub className="text-4xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/paulomarian0/"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin className="text-4xl" />
          </motion.a>
          <motion.a
            href="mailto:paulomariano2501@gmail.com"
            className="text-white"
          >
            <MdOutlineEmail className="text-4xl" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
