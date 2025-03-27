import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
	const scrollToAbout = () => {
		document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 dark:from-primary/10 dark:to-background/0" />
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<span className="label inline-block mb-4">
					Full Stack Web Developer
				</span>
				<h1 className="heading-xl mb-6">
					Building <span className="text-primary">accessible, user-first</span>{" "}
					digital solutions with a focus on innovation and AI
				</h1>
				<p className="paragraph max-w-2xl mx-auto mb-10">
					As a full-stack developer, I specialize in creating inclusive and
					impactful digital experiences. I focus on accessibility, user-centric
					design, and leveraging AI to enhance how users interact with
					technology.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button size="lg" className="px-8 py-6 rounded-full">
						Download CV
					</Button>
				</div>
			</div>

			<div className="absolute bottom-10 left-1/2 -translate-x-1/2">
				<Button
					variant="ghost"
					size="icon"
					className="rounded-full w-10 h-10"
					onClick={scrollToAbout}
					aria-label="Scroll down"
				>
					<ArrowDownIcon className="h-5 w-5" />
				</Button>
			</div>
		</section>
	);
}
