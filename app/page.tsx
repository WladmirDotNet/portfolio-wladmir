import { Navigation } from "@/components/Navigation/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import { Experience } from "@/components/Experience/Experience";
import { Projects } from "@/components/Projects/Projects";
import { Differentials } from "@/components/Differentials/Differentials";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Differentials />
      <Contact />
      <Footer />
    </main>
  );
}
