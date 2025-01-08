"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    jobTitle: "Front-End Developer",
    company: "LocX Real Estate",
    startDate: "03/2023",
    description: [
      "Front-end development for internal projects, using React, JavaScript, and Redux.",
      "Integration with internal APIs and services, ensuring communication between front-end and back-end.",
      "Occasional support in back-end development, working with .NET and Entity Framework, as needed to assist the team.",
      "Participation in planning and sprint review meetings, contributing to project evolution.",
      "Assistance in project refactoring to improve performance and maintainability.",
    ],
  },
  {
    id: 2,
    jobTitle: "Full-Stack Developer",
    company: "ILUMEO",
    startDate: "03/2023",
    endDate: "02/2024",
    description: [
      "Front-end development for various company projects, using JavaScript, React, Context API, and TypeScript.",
      "Back-end development with Node.js, TypeScript, Prisma, and PostgreSQL",
      "Experience with AWS platform, configuring and managing infrastructure and services.",
      "Developed a platform with around 500,000 registered users, ensuring scalability and efficiency.",
      "Contributed to the evolution and maintenance of large-scale systems, focusing on performance and security.",
    ],
  },
  {
    id: 3,
    jobTitle: "Front-End Developer",
    company: "Ketra Soluções Inteligentes",
    startDate: "09/2022",
    endDate: "01/2023",
    description: [
      "Responsible for front-end development of a project for another company, using React, JavaScript, and TypeScript.",
      "Collaborated with the team to create an efficient and responsive interface.",
      "Ensured integration with external APIs and services, maintaining good system communication.",
      "Occasional back-end changes to support the team as needed.",
    ],
  },
  {
    id: 4,
    jobTitle: "Full-Stack Developer",
    company: "Infosis Consultoria e Sistemas",
    startDate: "06/2021",
    endDate: "09/2022",
    description: [
      "First professional contact with programming as an intern.",
      "Learned and developed back-end using .NET and Entity Framework.",
      "Front-end development with ExtJS and React.",
      "Contributed to various projects, improving full-stack development skills.",
      "First exposure to agile methodologies, working with Scrum.",
    ],
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

  const isMobile = typeof window !== "undefined" && window.innerWidth < 436;

  return (
    <motion.section
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={!isMobile ? containerVariants : undefined}
    >
      <motion.h2
        className="text-2xl font-bold text-gray-200 mb-8"
        variants={!isMobile ? itemVariants : undefined}
      >
        EXPERIENCE
      </motion.h2>
      <motion.div
        className="text-left max-w-2xl mx-auto"
        variants={!isMobile ? containerVariants : undefined}
      >
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            className="mb-8 p-6 border border-gray-600 shadow-md shadow-gray-900 rounded-lg bg-[#161616] transition-shadow duration-300 overflow-auto"
          >
            <h3 className="text-xl font-bold flex items-center text-white">
              {experience.jobTitle}
            </h3>
            <p className="text-gray-500">{experience.company}</p>
            <p className="text-gray-400 mb-4">
              {experience.startDate} - {experience.endDate || "Present"}
            </p>
            <ol className="text-gray-300 list-disc pl-6">
              {experience.description.map((item) => (
                <li className="mb-2" key={item}>
                  {item}
                </li>
              ))}
            </ol>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
