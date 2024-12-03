"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
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
    <motion.footer
      className="bg-zinc-900 py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="container mx-auto text-center"
        variants={containerVariants}
      >
        <motion.h2
          className="text-xl font-bold mb-4 text-white"
          variants={itemVariants}
        >
          Contact
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-4"
          variants={containerVariants}
        >
          <motion.a
            href="https://github.com/paulomarian0"
            rel="noopener noreferrer"
            className="text-white"
            variants={itemVariants}
          >
            <FaGithub className="text-4xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/paulomarian0/"
            rel="noopener noreferrer"
            className="text-white"
            variants={itemVariants}
          >
            <FaLinkedin className="text-4xl" />
          </motion.a>
          <motion.a
            href="mailto:paulomariano2501@gmail.com"
            className="text-white"
            variants={itemVariants}
          >
            <MdOutlineEmail className="text-4xl" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
