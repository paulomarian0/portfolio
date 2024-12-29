import dynamic from "next/dynamic";

const Education = dynamic(() => import("@/components/Education"));
const Experiences = dynamic(() => import("@/components/Experiences"));
const Footer = dynamic(() => import("@/components/Footer"));
const ProfileIntro = dynamic(() => import("@/components/ProfileIntro"));
const Projects = dynamic(() => import("@/components/Projects"));
const Stacks = dynamic(() => import("@/components/Stacks"));

export default function Home() {
  return (
    <div>
      <main className="container mx-auto text-center p-16">
        <ProfileIntro />
        <Stacks />
        <Projects />
        <Experiences />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
