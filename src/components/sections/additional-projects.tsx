import { projects } from "@/data/projects";
import { Reveal } from "../ui/reveal";
import { ExternalLink } from "../ui/external-link";

export function AdditionalProjects() {
  const additional = projects.filter((p) => !p.featured);

  return (
    <section className="py-24 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-12">
            Additional Projects
          </h3>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additional.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <div className="flex flex-col h-full p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h4 className="text-lg font-bold tracking-tight mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium mb-4">
                    {project.role} | {project.date}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ExternalLink href={project.repository} className="text-sm">
                    View Repository
                  </ExternalLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
