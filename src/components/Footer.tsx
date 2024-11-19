export default function Footer() {
	return (
		<footer className="bg-black py-8">
			<div className="container mx-auto text-center">
				<h2 className="text-xl font-bold mb-4">Contact</h2>
				<p className="text-gray-400 mb-4">
					Seasoned Full Stack Software Engineer with over 8 years of hands-on
					experience in designing and implementing scalable web applications.
				</p>
				<p className="text-gray-400 mb-4">devcontacthub@gmail.com</p>
				<div className="flex justify-center space-x-4">
					<a href="#" className="text-white">
						<i className="fab fa-twitter text-2xl"></i>
					</a>
					<a href="#" className="text-white">
						<i className="fab fa-linkedin text-2xl"></i>
					</a>
					<a href="#" className="text-white">
						<i className="fab fa-github text-2xl"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}
