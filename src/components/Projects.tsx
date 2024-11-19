export default function Projects() {
	return (
		<>
			<section className="mb-16">
				<h2 className="text-2xl font-bold text-orange-500 mb-8">PROJECTS</h2>
				<div className="flex justify-center space-x-8">
					<div className="bg-gray-800 p-4 rounded-lg">
						<img
							src="https://placehold.co/300x200"
							alt="Project 1 thumbnail"
							className="rounded mb-4"
						/>
						<h3 className="text-xl font-bold">POWER OF HTML</h3>
						<p className="text-gray-400">HTML TUTORIAL</p>
					</div>
					<div className="bg-gray-800 p-4 rounded-lg">
						<img
							src="https://placehold.co/300x200"
							alt="Project 2 thumbnail"
							className="rounded mb-4"
						/>
						<h3 className="text-xl font-bold">UNLOCK CSS MAGIC</h3>
						<p className="text-gray-400">CSS TUTORIAL</p>
					</div>
				</div>
			</section>
		</>
	);
}
