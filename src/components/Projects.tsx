import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Project = {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	demoUrl: string;
	codeUrl: string;
};

const projects: Project[] = [
	{
		id: "proj1",
		title: "Cover Letter AI Generator",
		description:
			"An application that generates a cover letter based on your attached resume in PDF format, using AI to create the letter.",
		image:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
		technologies: ["React", "TypeScript", "Vercel AI SDK"],
		demoUrl: "https://cover-letter-ai-generator.vercel.app",
		codeUrl: "https://github.com/paulomarian0/cover-letter-generator",
	},
	{
		id: "proj2",
		title: "Weather Forecast App",
		description:
			"A weather prediction application based on the selected location, using AI to make the forecast query.",
		image:
			"https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
		technologies: ["React", "Next.js", "TypeScript", "Vercel AI SDK"],
		demoUrl: "https://vercel-ui-sdk.vercel.app",
		codeUrl: "https://github.com/paulomarian0/vercel-ui-sdk",
	},
];

export function Projects() {
	return (
		<section id="projects" className="section-container">
			<div>
				<span className="label block mb-2">Portfolio</span>
				<h2 className="heading-lg mb-12">Featured Projects</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{projects.map((project) => (
					<div key={project.id} className="glass rounded-2xl overflow-hidden">
						<div className="relative">
							<AspectRatio ratio={16 / 9}>
								<img
									src={project.image}
									alt={project.title}
									className="object-cover w-full h-full"
									loading="lazy"
								/>
							</AspectRatio>
							<div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 opacity-0 hover:opacity-100 flex items-end p-6">
								<div className="flex gap-3">
									<Button size="sm" className="rounded-full" asChild>
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="mr-2 h-4 w-4" />
											Live Demo
										</a>
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="rounded-full"
										asChild
									>
										<a
											href={project.codeUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="mr-2 h-4 w-4" />
											View Code
										</a>
									</Button>
								</div>
							</div>
						</div>
						<div className="p-6">
							<h3 className="heading-sm mb-2">{project.title}</h3>
							<p className="paragraph mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="inline-block px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
