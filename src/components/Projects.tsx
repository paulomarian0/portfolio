"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section className="mb-16" initial="hidden" animate="visible">
      <motion.h2 className="text-2xl font-bold text-orange-500 mb-8">
        PROJECTS
      </motion.h2>

      <motion.div className="flex justify-center space-x-8">
        <motion.div className="bg-gray-800 p-4 rounded-lg">
          <a
            href="https://rena-fast.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              src="/renafast-logo.png"
              alt="Project 1 thumbnail"
              className="rounded mb-4 w-[300px] h-[200px] bg-gray-900"
            />
            <motion.h3 className="text-xl font-bold">RENAFAST</motion.h3>
            <motion.p className="text-gray-400">Photo renaming app</motion.p>
          </a>
        </motion.div>

        {/* <motion.div
          className="bg-gray-800 p-4 rounded-lg"
          variants={itemVariants}
        >
          <img
            src="https://placehold.co/300x200"
            alt="Project 2 thumbnail"
            className="rounded mb-4"
          />
          <h3 className="text-xl font-bold">UNLOCK CSS MAGIC</h3>
          <p className="text-gray-400">CSS TUTORIAL</p>
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
}
