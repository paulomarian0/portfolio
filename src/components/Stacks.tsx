import { SiNextdotjs } from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";

export default function Stacks() {
	return (
		<div className="mb-16">
			<h2 className="text-xl font-bold mb-4">EXPERIENCE WITH</h2>
			<div className="grid grid-cols-5 gap-8 justify-items-center">
				<FaReact className="text-4xl" />
				<SiJavascript className="text-4xl" />
				<SiTypescript className="text-4xl" />
				<SiNextdotjs className="text-4xl" />
				<FaNodeJs className="text-4xl" />
				<BiLogoPostgresql className="text-4xl" />
				<RiTailwindCssFill className="text-4xl" />
				<IoLogoCss3 className="text-4xl" />
				<FaGitAlt className="text-4xl" />
				<AiOutlineDotNet className="text-4xl" />
			</div>
		</div>
	);
}
