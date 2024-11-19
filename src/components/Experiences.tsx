const experiences = [
  {
    jobTitle: "Lead Software Engineer",
    company: "Google",
    startDate: "Nov 2018",
    endDate: "Present",
    description:
      "As a lead software engineer at Google, I played a pivotal role in developing and maintaining Google's core search technology. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy, user efficiency, and system optimization for millions of users worldwide.",
  },

  {
    jobTitle: "Junior Software Engineer",
    company: "Apple",
    startDate: "Jan 2015",
    endDate: "Dec 2017",
    description:
      "During my tenure at Apple, I took the lead on software architecture, design, and implementation of backend services for multiple iOS applications.",
  },

  {
    jobTitle: "Software Engineer",
    company: "Meta",
    startDate: "Jan 2017",
    endDate: "Dec 2018",
    description:
      "At Meta, I served as a Software Engineer, focusing on the design and implementation of backend services for various social media platforms.",
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

              <p className="text-gray-400">
                {experience.startDate} - {experience.endDate}
              </p>

              <p className="text-gray-400">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
