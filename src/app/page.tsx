import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Values } from "@/components/sections/Values";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechMarquee />
      <Stats />
      <Services />
      <Values />
      <Projects />
      <WorkProcess />
      <Skills />
      <Experience />
      <BlogPreview />
      <Testimonials />
      <CTABanner />
      <ContactSection />
    </>
  );
}
