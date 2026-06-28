import { profile } from "@/data/profile";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../ui/reveal";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeading>About Me</SectionHeading>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              {profile.about.split("\n\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed mb-6 last:mb-0 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Location
                  </h4>
                  <p className="font-medium text-foreground">{profile.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Education
                  </h4>
                  <p className="font-medium text-foreground">Bachelor of Software Engineering</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    University
                  </h4>
                  <p className="font-medium text-foreground">Industrial University of Ho Chi Minh City</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    GPA
                  </h4>
                  <p className="font-medium text-foreground">{profile.gpa}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    TOEIC
                  </h4>
                  <p className="font-medium text-foreground">{profile.toeic}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Availability
                  </h4>
                  <p className="font-medium text-foreground text-accent">{profile.availability}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
