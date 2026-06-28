import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../ui/reveal";

const focusAreas = [
  "Advanced Spring Boot and Spring Cloud",
  "Distributed transactions and reliable messaging",
  "PostgreSQL performance optimization",
  "AWS architecture, monitoring, and security",
  "Automated testing and performance testing",
  "Observability and production readiness",
];

export function LearningFocus() {
  return (
    <section className="py-24 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <Reveal>
          <SectionHeading className="mb-6">Current Learning Focus</SectionHeading>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="text-muted-foreground text-lg mb-12">
            I am actively expanding my knowledge in these areas to become a more effective and reliable software engineer.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {focusAreas.map((area, index) => (
            <Reveal key={index} delay={0.1 + index * 0.05}>
              <div className="px-6 py-4 rounded-xl bg-card border border-border shadow-sm text-foreground font-medium">
                {area}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
