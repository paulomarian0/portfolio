import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfileIntro from "@/components/ProfileIntro";
import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <main className="container mx-auto text-center p-16">
        <ProfileIntro />
        <Stacks />
        {/* <Projects /> */}
        <Experiences />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
