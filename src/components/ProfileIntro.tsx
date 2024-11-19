import { differenceInYears } from "date-fns";
import Image from "next/image";

export default function ProfileIntro() {
  const birthDate = new Date(2001, 3, 25);
  const currentDate = new Date();
  const age = differenceInYears(currentDate, birthDate);

  return (
    <div id="home" className="px-4 sm:px-8">
      <div className="w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] relative m-auto">
        <Image
          src="/computer.gif"
          alt="Profile picture of a person with a laptop"
          fill
          className="rounded-full m-auto object-cover"
        />
      </div>

      <h1 className="text-2xl sm:text-4xl font-bold my-6 sm:my-10">
        Hi, I'm <span className="text-purple-500">Paulo Mariano</span>, a
        Fullstack Developer.
      </h1>
      <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
        I'm {age} years old, a fullstack developer with a Bachelor's in Computer
        Science. I create web applications using React, Node.js, and TypeScript.
        I love exploring new tech, contributing to open-source, and reading
        books.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <button type="button" className="bg-white text-black py-2 px-4 rounded">
          Get In Touch
        </button>
        <button type="button" className="border border-white py-2 px-4 rounded">
          Download CV
        </button>
      </div>
    </div>
  );
}
