import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AdditionalProjects } from "@/components/sections/additional-projects";
import { Education } from "@/components/sections/education";
import { LearningFocus } from "@/components/sections/learning-focus";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <AdditionalProjects />
      <Education />
      <LearningFocus />
      <Contact />
    </div>
  );
}
