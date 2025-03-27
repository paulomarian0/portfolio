import {
	SiCss3,
	SiDotnet,
	SiJavascript,
	SiNextdotjs,
	SiGit,
	SiRedux,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

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

const icons = [
	{ id: 1, Icon: SiReact, name: "React" },
	{ id: 2, Icon: SiJavascript, name: "Javascript" },
	{ id: 3, Icon: SiTypescript, name: "Typescript" },
	{ id: 4, Icon: SiNextdotjs, name: "NextJS" },
	{ id: 5, Icon: FaNode, name: "NodeJs" },
	{ id: 6, Icon: SiPostgresql, name: "Postgresql" },
	{ id: 7, Icon: SiTailwindcss, name: "Tailwindcss" },
	{ id: 8, Icon: SiCss3, name: "CSS" },
	{ id: 9, Icon: SiGit, name: "Git" },
	{ id: 10, Icon: SiDotnet, name: ".NET" },
	{ id: 11, Icon: SiVercel, name: "Vercel" },
	{ id: 12, Icon: SiRedux, name: "Redux" },
];

export function Skills() {
	return (
		<section id="skills" className="section-container">
			<div>
				<span className="label block mb-2">Expertise</span>
				<h2 className="heading-lg mb-12">Technical Skills</h2>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-20">
				{icons.map(({ Icon, name }) => (
					<div key={name} className="flex items-center justify-center flex-col">
						<Icon className="text-5xl" />
						<p className="opacity-20 mt-2">{name}</p>
					</div>
				))}
			</div>
		</section>
	);
}
