import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

const App = () => {
	return (
		<div className="relative">
			<Header />
			<main>
				<Hero />

				<div id="about" className="section-container">
					<span className="label block mb-2">Introduction</span>
					<h2 className="heading-lg mb-8">About Me</h2>
					<p className="paragraph mb-6">
						I'm a passionate web developer with over 5 years of experience
						creating modern, responsive, and user-friendly applications. My
						journey in web development started with a curiosity about how
						websites work, which led me to pursue formal education in computer
						science and web development.
					</p>
					<p className="paragraph mb-6">
						I specialize in building full-stack web applications using modern
						JavaScript frameworks and libraries. My approach to development
						focuses on writing clean, maintainable code that creates seamless
						user experiences. I enjoy solving complex problems and continuously
						learning new technologies to stay at the forefront of web
						development.
					</p>
					<p className="paragraph">
						When I'm not coding, you can find me exploring new hiking trails,
						reading science fiction, or experimenting with new cooking recipes.
						I believe that diverse experiences contribute to creative
						problem-solving in technology.
					</p>
				</div>

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
