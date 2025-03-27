import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = ["about", "experience", "skills", "education", "projects"];

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("about");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					// If the section is in view (with some buffer for better UX)
					if (rect.top <= 200 && rect.bottom >= 200) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50",
				isScrolled ? "glass py-3" : "bg-transparent py-5",
			)}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				<div className="flex items-center space-x-1">
					<span className="text-xl font-semibold tracking-tight">John Doe</span>
					<span className="text-primary text-2xl">.</span>
				</div>

				<nav className="hidden md:flex items-center space-x-8">
					{sections.map((section) => (
						<a
							key={section}
							href={`#${section}`}
							className={cn(
								"text-sm font-medium relative",
								activeSection === section
									? "text-primary"
									: "text-foreground hover:text-primary",
							)}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
							{activeSection === section && (
								<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
							)}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
