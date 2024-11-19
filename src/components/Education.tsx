const educations = [
  {
    institution: "UVV - Universidade Vila Velha",
    date: "02/2019 - 11/2022",
    title: "Bachelor's Degree in Computer Science",
  },
  {
    title: "Postgraduate in Software Engineering",
    institution: "Descomplica Faculdade Digital",
    date: "06/2023 - 01/2024",
  },
];

export default function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-blue-500 mb-8">EDUCATION</h2>
      <div className="text-left max-w-2xl mx-auto">
        <div className="mb-8">
          {educations.map((education) => (
            <div className="mb-8">
              <h3 className="text-xl font-bold">
                <i className="fab fa-google text-2xl" /> {education.institution}
              </h3>
              <p className="text-gray-400 mb-4">{education.date}</p>
              <p className="text-gray-500">{education.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
