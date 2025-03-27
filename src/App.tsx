import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

const App = () => {
	return (
		<div className="relative">
			<Header />
			<main>
				<Hero />
				<About />
				<Experience />
				<Skills />
				<Education />
				<Projects />
			</main>
			<Footer />
		</div>
	);
};

export default App;
