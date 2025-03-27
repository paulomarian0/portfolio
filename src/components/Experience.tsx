import { useState } from "react";
import { cn } from "@/lib/utils";

type ExperienceItem = {
	id: string;
	date: string;
	company: string;
	title: string;
	description: string;
};

const experiences: ExperienceItem[] = [
	{
		id: "exp1",
		date: "April 2024 - March 2025",
		company: "LocX Real Estate",
		title: "Front-End Developer",
		description:
			"Working on internal projects using React, JavaScript, and Redux. Handling integration with internal APIs and services, while also providing occasional back-end support with .NET and Entity Framework. Contributing to planning and sprint reviews, and assisting in project refactoring for improved performance.",
	},
	{
		id: "exp2",
		date: "March 2023 - March 2024",
		company: "ILUMEO",
		title: "Full-Stack Developer",
		description:
			"Developed front-end features using React, JavaScript, and TypeScript, and back-end systems with Node.js, Prisma, and PostgreSQL. Gained experience with AWS for infrastructure management. Contributed to the development of a platform with 500,000 users, focusing on scalability, performance, and security.",
	},
	{
		id: "exp3",
		date: "August 2022 - February 2023",
		company: "Ketra Soluções Inteligentes",
		title: "Front-End Developer",
		description:
			"Developed front-end features using React, JavaScript, and TypeScript for a client project. Worked on API integrations and collaborated with the team to create responsive and efficient user interfaces, while occasionally supporting back-end tasks.",
	},
	{
		id: "exp4",
		date: "June 2021 - August 2022",
		company: "Infosis Consultoria e Sistemas",
		title: "Full-Stack Developer",
		description:
			"Started as an intern, developing back-end solutions with .NET and Entity Framework, and front-end features using ExtJS and React. Gained exposure to agile methodologies and contributed to various projects, improving full-stack development skills.",
	},
];

export function Experience() {
	const [activeId, setActiveId] = useState<string>("exp1");

	return (
		<section id="experience" className="section-container">
			<div>
				<span className="label block mb-2">Career Path</span>
				<h2 className="heading-lg mb-12">Work Experience</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible">
						{experiences.map((exp) => (
							<button
								type="button"
								key={exp.id}
								className={cn(
									"text-left px-4 py-3 rounded-lg whitespace-nowrap md:whitespace-normal",
									activeId === exp.id
										? "bg-primary text-primary-foreground"
										: "hover:bg-muted",
								)}
								onClick={() => setActiveId(exp.id)}
							>
								<span className="block text-sm font-medium">{exp.company}</span>
								<span className="block text-xs opacity-80">{exp.date}</span>
							</button>
						))}
					</div>
				</div>

				<div className="md:col-span-2">
					{experiences.map((exp) => (
						<div
							key={exp.id}
							className={cn(
								"glass p-6 rounded-xl",
								activeId === exp.id ? "block" : "hidden",
							)}
						>
							<h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
							<p className="text-sm text-muted-foreground mb-4">
								{exp.company} · {exp.date}
							</p>
							<p className="paragraph">{exp.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
