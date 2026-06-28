import { educationData, certificationData } from "@/data/education";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../ui/reveal";

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading>Education & Certification</SectionHeading>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <Reveal delay={0.1}>
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                Education
              </h3>
              <h4 className="text-2xl font-bold tracking-tight mb-2">
                {educationData.degree}
              </h4>
              <p className="text-lg text-foreground font-medium mb-4">
                {educationData.institution}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-muted-foreground">
                <span>{educationData.period}</span>
                <span className="font-semibold text-accent mt-2 sm:mt-0">GPA: {educationData.gpa}</span>
              </div>
            </div>
          </Reveal>

          {/* Certification */}
          <Reveal delay={0.2}>
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                Certification
              </h3>
              <h4 className="text-2xl font-bold tracking-tight mb-2">
                {certificationData.name}
              </h4>
              <p className="text-lg text-muted-foreground font-medium mb-4">
                Issued: {certificationData.date}
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent font-bold w-fit">
                Score: {certificationData.score}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
