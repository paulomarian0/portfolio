"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className="text-2xl font-bold text-gray-200 mb-8">
        EDUCATION
      </motion.h2>
      <motion.div className="text-left max-w-2xl mx-auto">
        <motion.div className="mb-8 p-6 border border-gray-600 shadow-md shadow-gray-900 rounded-lg bg-[#161616] transition-shadow duration-300">
          <h3 className="text-xl font-bold">
            <i className="fab fa-google text-2xl" /> Bacheelor Degre in Computer
            Science
          </h3>
          <p className="text-gray-500">UVV - Universidade Vila Velha</p>
          <p className="text-gray-400 mb-4">02/2019 - 11/2022</p>
          <p className="text-gray-300">
            Bachelor's Degree in Computer Science. During my time at UVV, I
            focused on developing a strong foundation in computer science
            principles, including algorithms, data structures, and software
            engineering. I also participated in various projects and internships
            that provided practical experience in the field.
          </p>
        </motion.div>
        <motion.div className="mb-8 p-6 border border-gray-600 shadow-md shadow-gray-900 rounded-lg bg-[#161616] transition-shadow duration-300">
          <h3 className="text-xl font-bold">
            <i className="fab fa-google text-2xl" />
            Postgraduate in Software Engineering
          </h3>
          <p className="text-gray-500">Descomplica Faculdade Digital</p>
          <p className="text-gray-400 mb-4">06/2023 - 01/2024</p>
          <p className="text-gray-300">
            Postgraduate in Software Engineering. This program has allowed me to
            deepen my knowledge in software development methodologies, advanced
            programming techniques, and project management. I have worked on
            several capstone projects that simulate real-world software
            development scenarios, enhancing my problem-solving and teamwork
            skills.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
