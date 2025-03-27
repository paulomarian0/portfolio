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
		date: "2022 - Present",
		company: "Tech Innovations Inc.",
		title: "Senior Front-end Developer",
		description:
			"Led the development of a complex SaaS application using React, TypeScript, and GraphQL. Implemented state-of-the-art UI components and optimized performance, resulting in a 40% improvement in load times.",
	},
	{
		id: "exp2",
		date: "2020 - 2022",
		company: "Digital Solutions",
		title: "Full Stack Developer",
		description:
			"Developed and maintained multiple client websites and web applications. Worked with Node.js, Express, MongoDB, and React. Collaborated with design teams to implement responsive and accessible interfaces.",
	},
	{
		id: "exp3",
		date: "2018 - 2020",
		company: "Creative Web Agency",
		title: "Junior Developer",
		description:
			"Assisted in building and maintaining client websites. Learned and implemented modern front-end technologies including React, CSS preprocessing, and responsive design techniques.",
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
