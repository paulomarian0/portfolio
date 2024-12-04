"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    jobTitle: "Front-End Developer",
    company: "LocX Real Estate",
    startDate: "03/2023",
    description:
      "At LocX, I joined as a frontend developer, where I primarily focused on maintaining the company's three internal projects using React and Redux. I also contributed to backend tasks using .NET, supporting the team when needed. My role involved ensuring the smooth functioning and updates of the applications, while occasionally assisting with backend development to enhance team productivity and project delivery.",
  },
  {
    id: 2,
    jobTitle: "Full-Stack Developer",
    company: "ILUMEO",
    startDate: "03/2023",
    endDate: "02/2024",
    description:
      "At Ilumeo, I worked as a full-stack developer, with a stronger focus on frontend development using React. On the backend, I utilized Node.js alongside TypeScript to build and maintain robust solutions. This role also introduced me to AWS cloud services, where I gained experience creating and managing buckets on the platform. It was a well-rounded experience that deepened my frontend expertise while expanding my knowledge of backend development and cloud infrastructure.",
  },
  {
    id: 3,
    jobTitle: "Front-End Developer",
    company: "Ketra Soluções Inteligentes",
    startDate: "09/2022",
    endDate: "01/2023",
    description:
      "At Ketra, I worked on a project for a local company, using .NET for the backend, React, and TypeScript for the frontend. I was fully responsible for the frontend development, crafting user interfaces and ensuring responsiveness and usability. While I focused on the frontend, I collaborated closely with a teammate who managed the backend development. This experience enhanced my ability to work in tandem with others, dividing responsibilities effectively to deliver a successful project.",
  },
  {
    id: 4,
    jobTitle: "Full-Stack Developer",
    company: "Infosis Consultoria e Sistemas",
    startDate: "06/2021",
    endDate: "09/2022",
    description:
      "At Infosis, I had my first experience as a full-stack developer, gaining hands-on knowledge in modern technologies such as ExtJs, .NET, React, and TypeScript. My responsibilities included developing and maintaining web applications, creating interactive and responsive user interfaces, and collaborating on backend APIs and systems. This role provided me with a strong foundation in both frontend and backend development, along with teamwork and problem-solving skills.",
  },
];

export default function Experiences() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl font-bold text-gray-200 mb-8"
        variants={itemVariants}
      >
        EXPERIENCE
      </motion.h2>
      <motion.div
        className="text-left max-w-2xl mx-auto"
        variants={containerVariants}
      >
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            className="mb-8 p-6 border border-gray-600 shadow-md shadow-gray-900 rounded-lg bg-[#161616] transition-shadow duration-300"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold flex items-center text-white">
              {experience.jobTitle}
            </h3>
            <p className="text-gray-500">{experience.company}</p>
            <p className="text-gray-400 mb-4">
              {experience.startDate} - {experience.endDate || "Present"}
            </p>
            <p className="text-gray-300">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
