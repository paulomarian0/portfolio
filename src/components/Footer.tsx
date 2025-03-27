import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
	return (
		<footer className="py-12 border-t border-border">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div>
						<div className="flex items-center space-x-1 mb-2">
							<span className="text-xl font-semibold tracking-tight">
								John Doe
							</span>
							<span className="text-primary text-2xl">.</span>
						</div>
						<p className="text-sm text-muted-foreground">
							Web Developer & Designer
						</p>
					</div>

					<div className="flex flex-col items-center md:items-end gap-4">
						<div className="flex space-x-4">
							<a
								href="https://www.github.com/paulomarian0"
								target="_blank"
								className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
								rel="noreferrer"
							>
								<Github className="h-5 w-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/paulomarian0/"
								className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
								aria-label="LinkedIn"
								target="_blank"
								rel="noreferrer"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								href="mailto:paulomariano2501@gmail.com"
								className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
								aria-label="Email"
							>
								<Mail className="h-5 w-5" />
							</a>
						</div>
						<p className="text-sm text-muted-foreground">
							&copy; {new Date().getFullYear()} John Doe. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
