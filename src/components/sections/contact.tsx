import { profile } from "@/data/profile";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-border/50 bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <SectionHeading className="text-white mb-6">Let’s build something reliable.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            I am currently looking for Backend Developer internship and entry-level opportunities where I can contribute, learn from real-world engineering practices, and continue growing as a software developer.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={profile.socials.email.url}
              className="w-full sm:w-auto px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white selection:bg-accent/20 selection:text-accent"
            >
              Send Email
            </a>
            <a
              href={profile.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              View GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
