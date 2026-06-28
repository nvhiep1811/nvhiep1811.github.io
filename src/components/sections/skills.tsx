import { skillsData, highlightedSkills } from "@/data/skills";
import { SectionHeading } from "../ui/section-heading";
import { SkillCard } from "../ui/skill-card";
import { Reveal } from "../ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading>Core Skills</SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mb-16">
          <div className="flex flex-wrap gap-3">
            {highlightedSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-bold shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <Reveal key={category.title} delay={0.1 + index * 0.1}>
              <SkillCard
                title={category.title}
                skills={category.skills}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
