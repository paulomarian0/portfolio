export default function Header() {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex justify-end items-center">
        <nav>
          <ul className="flex space-x-8 justify-center">
            <li>
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#experiences" className="text-white">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
