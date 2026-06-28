import { profile } from "@/data/profile";
import { assetPath } from "@/lib/base-path";
import { Reveal } from "../ui/reveal";
import { MagneticButton } from "../ui/magnetic-button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none flex items-center justify-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
          <Reveal>
            <div>
              <p className="font-mono text-accent font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
                {profile.name}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                {profile.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0">
                Building secure, reliable, and maintainable backend systems.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Software Engineering student with project-based experience in Java, Spring Boot, RESTful APIs, distributed workflows, cloud deployment, automated testing, performance testing, and full-stack application development.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="inline-flex items-center bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-foreground px-4 py-2 rounded-full text-sm font-medium border border-accent/20 w-fit mx-auto lg:mx-0 text-left">
              <span className="relative flex h-2 w-2 mr-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Open to Backend Developer internships and entry-level opportunities
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
              <MagneticButton
                as="a"
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                View Projects
              </MagneticButton>
              <MagneticButton
                as="a"
                href={assetPath("CV_NguyenVoHiep_BackendDeveloper.pdf")}
                download
                className="w-full sm:w-auto px-8 py-4 bg-card text-foreground border border-border font-semibold rounded-lg hover:bg-muted transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Download CV
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Abstract Technical Graphic */}
        <Reveal delay={0.5} direction="left" className="flex-1 w-full max-w-md mx-auto lg:max-w-full">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-border bg-card shadow-sm flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent z-0" />
            <svg
              className="w-full h-full text-accent opacity-80 z-10"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central Node */}
              <rect x="40" y="40" width="20" height="20" rx="4" fill="currentColor" />
              
              {/* Outer Nodes */}
              <rect x="20" y="15" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="2" />
              <rect x="65" y="15" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="2" />
              <rect x="15" y="70" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="2" />
              <rect x="70" y="70" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="2" />
              <rect x="10" y="42.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="2" />
              <rect x="75" y="42.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="2" />

              {/* Connecting Lines */}
              <path d="M 50 40 L 27.5 30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M 50 40 L 72.5 30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M 50 60 L 22.5 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M 50 60 L 77.5 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M 40 50 L 25 50" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 60 50 L 75 50" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Data Flow Particles */}
              <circle cx="35" cy="35" r="2" fill="currentColor">
                <animate attributeName="cx" values="27.5;50" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" values="30;40" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
