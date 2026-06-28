import { projects } from "@/data/projects";
import { SectionHeading } from "../ui/section-heading";
import { ProjectCard } from "../ui/project-card";
import { Reveal } from "../ui/reveal";
import { ArchitectureDiagram } from "../ui/architecture-diagram";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading>Featured Projects</SectionHeading>
        </Reveal>

        <div className="flex flex-col gap-16 md:gap-24">
          {featured.map((project, index) => {
            const isFirst = index === 0;

            return (
              <div key={project.title} className="flex flex-col gap-8">
                <ProjectCard project={project} index={index} className="w-full" />
                
                {/* Specifically rendering the architecture diagram for the first project as requested */}
                {isFirst && (
                  <Reveal delay={0.2}>
                    <div className="mt-4">
                      <h4 className="text-lg font-bold tracking-tight mb-6">System Architecture</h4>
                      <ArchitectureDiagram />
                      
                      <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
                        <h5 className="font-semibold mb-4">Event Flow (Outbox Pattern)</h5>
                        <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-muted-foreground">
                          <span className="bg-muted px-3 py-1.5 rounded-md text-foreground">Business Transaction</span>
                          <span>→</span>
                          <span className="bg-muted px-3 py-1.5 rounded-md text-foreground">Outbox Table</span>
                          <span>→</span>
                          <span className="bg-muted px-3 py-1.5 rounded-md text-foreground">Debezium</span>
                          <span>→</span>
                          <span className="bg-muted px-3 py-1.5 rounded-md text-foreground">Kafka</span>
                          <span>→</span>
                          <span className="bg-muted px-3 py-1.5 rounded-md text-foreground">Event Consumers</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
