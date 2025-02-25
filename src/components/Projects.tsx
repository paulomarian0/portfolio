"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
	return (
		<motion.section className="mb-16" initial="hidden" animate="visible">
			<motion.h2 className="text-2xl font-bold text-orange-500 mb-8 text-center">
				PROJECTS
			</motion.h2>

			<motion.div className="flex justify-center space-x-8">
				<motion.div 
					className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-6 rounded-xl max-w-sm shadow-lg border border-gray-700"
					whileHover={{ scale: 1.02 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<a
						href="https://vercel-ui-sdk.vercel.app"
						target="_blank"
						rel="noreferrer"
						className="block"
					>
						<div className="flex items-center justify-center gap-2 mb-4">
							<h3 className="text-2xl font-bold text-white hover:text-orange-500 transition-colors duration-300 text-start">
								Weather AI
							</h3>
							<FiExternalLink className="text-orange-500 text-xl" />
						</div>
						<p className="text-gray-300 leading-relaxed text-start">
							An intelligent weather application powered by Vercel AI SDK and OpenAI. 
							Get detailed weather forecasts with natural language responses, 
							temperature trends, and weather conditions for any city. Experience 
							weather forecasting enhanced by AI.
						</p>
					</a>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
