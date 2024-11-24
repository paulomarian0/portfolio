const experiences = [
  {
    jobTitle: "Front-End Developer",
    company: "LocX Real Estate",
    startDate: "03/2023",
    description:
      "At LocX, I joined as a frontend developer, where I primarily focused on maintaining the company's three internal projects using React and Redux. I also contributed to backend tasks using .NET, supporting the team when needed. My role involved ensuring the smooth functioning and updates of the applications, while occasionally assisting with backend development to enhance team productivity and project delivery.",
  },
  {
    jobTitle: "Full-Stack Developer",
    company: "ILUMEO",
    startDate: "03/2023",
    endDate: "02/2024",
    description:
      "At Ilumeo, I worked as a full-stack developer, with a stronger focus on frontend development using React. On the backend, I utilized Node.js alongside TypeScript to build and maintain robust solutions. This role also introduced me to AWS cloud services, where I gained experience creating and managing buckets on the platform. It was a well-rounded experience that deepened my frontend expertise while expanding my knowledge of backend development and cloud infrastructure.",
  },
  {
    jobTitle: "Front-End Developer",
    company: "Ketra Soluções Inteligentes",
    startDate: "09/2022",
    endDate: "01/2023",
    description:
      "At Ketra, I worked on a project for a local company, using .NET for the backend, React, and TypeScript for the frontend. I was fully responsible for the frontend development, crafting user interfaces and ensuring responsiveness and usability. While I focused on the frontend, I collaborated closely with a teammate who managed the backend development. This experience enhanced my ability to work in tandem with others, dividing responsibilities effectively to deliver a successful project.",
  },
  {
    jobTitle: "Full-Stack Developer",
    company: "Infosis Consultoria e Sistemas",
    startDate: "06/2021",
    endDate: "09/2022",
    description:
      "At Infosis, I had my first experience as a full-stack developer, gaining hands-on knowledge in modern technologies such as ExtJs, .NET, React, and TypeScript. My responsibilities included developing and maintaining web applications, creating interactive and responsive user interfaces, and collaborating on backend APIs and systems. This role provided me with a strong foundation in both frontend and backend development, along with teamwork and problem-solving skills.",
  },
];

export default function Experiences() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-blue-500 mb-8">EXPERIENCE</h2>
      <div className="text-left max-w-2xl mx-auto">
        <div className="mb-8">
          {experiences.map((experience) => (
            <div className="mb-8">
              <h3 className="text-xl font-bold">
                <i className="fab fa-google text-2xl" /> {experience.jobTitle}
              </h3>

              <p className="text-gray-400 mb-4">
                {experience.startDate} - {experience.endDate || "Present"}
              </p>

              <p className="text-gray-500">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
