import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

type EducationItem = {
	id: string;
	degree: string;
	institution: string;
	date: string;
};

const educationItems: EducationItem[] = [
	{
		id: "edu1",
		degree: "Master of Science in Computer Science",
		institution: "Stanford University",
		date: "2016 - 2018",
	},
	{
		id: "edu2",
		degree: "Bachelor of Science in Web Development",
		institution: "University of California",
		date: "2012 - 2016",
	},
];

export function Education() {
	return (
		<section id="education" className="section-container">
			<div>
				<span className="label block mb-2">Academic Background</span>
				<h2 className="heading-lg mb-12">Education</h2>
			</div>

			<div className="max-w-3xl">
				{educationItems.map((item) => (
					<div key={item.id} className="flex items-start gap-6 mb-12 last:mb-0">
						<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
							<GraduationCap className="w-6 h-6 text-primary" />
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
							<p className="text-muted-foreground mb-2">{item.institution}</p>
							<p className="text-sm">{item.date}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
