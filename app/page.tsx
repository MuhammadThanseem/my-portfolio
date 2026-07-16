import { About } from "./components/About";
import { AuroraBackground } from "./components/AuroraBackground";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { LiveShowcase } from "./components/LiveShowcase";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <LiveShowcase />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
