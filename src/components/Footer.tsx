import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400 mb-4">paulomariano2501@gmail.com</p>
        <div className="flex justify-center space-x-4">
          <FaGithub className="text-4xl" />
          <FaLinkedin className="text-4xl" />
        </div>
      </div>
    </footer>
  );
}
