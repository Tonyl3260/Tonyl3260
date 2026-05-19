import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <ProjectGrid />
      <Skills />
      <Footer />
    </main>
  );
}
