import { cn } from "@/lib/utils";

type Skill = {
	category: string;
	items: string[];
};

const skills: Skill[] = [
	{
		category: "Frontend",
		items: [
			"React",
			"TypeScript",
			"Next.js",
			"TailwindCSS",
			"HTML5",
			"CSS3",
			"JavaScript",
		],
	},
	{
		category: "Backend",
		items: ["Node.js", "Express", "GraphQL", "REST APIs", "Firebase"],
	},
	{
		category: "Tools & Platforms",
		items: ["Git", "GitHub", "VS Code", "Figma", "AWS", "Vercel", "Netlify"],
	},
	{
		category: "Methodologies",
		items: [
			"Responsive Design",
			"CI/CD",
			"Test-Driven Development",
			"Agile/Scrum",
		],
	},
];

export function Skills() {
	return (
		<section id="skills" className="section-container">
			<div>
				<span className="label block mb-2">Expertise</span>
				<h2 className="heading-lg mb-12">Technical Skills</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{skills.map((skill) => (
					<div key={skill.category} className="glass p-6 rounded-xl">
						<h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
						<div className="flex flex-wrap gap-2">
							{skill.items.map((item) => (
								<span
									key={item}
									className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
								>
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
