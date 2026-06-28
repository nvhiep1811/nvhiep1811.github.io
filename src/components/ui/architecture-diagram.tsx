import { cn } from "@/lib/utils";

export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 rounded-2xl bg-muted/30 border border-border flex flex-col gap-8 text-sm", className)}>
      {/* Mobile/Admin Clients */}
      <div className="flex justify-center gap-4">
        <div className="px-4 py-2 rounded-lg bg-card border border-border shadow-sm font-medium">
          Mobile Client
        </div>
        <div className="px-4 py-2 rounded-lg bg-card border border-border shadow-sm font-medium">
          Admin Client
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center text-muted-foreground">↓</div>

      {/* API Gateway */}
      <div className="flex justify-center">
        <div className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-bold shadow-md w-full max-w-sm text-center">
          API Gateway
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center text-muted-foreground">↓</div>

      {/* Services */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["User Service", "Catalog Service", "Commerce Service", "Chat Service"].map((service) => (
          <div key={service} className="px-3 py-2 rounded-lg bg-card border border-border shadow-sm font-medium text-center flex items-center justify-center min-h-[3rem]">
            {service}
          </div>
        ))}
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center text-muted-foreground">↓</div>

      {/* Data Layer */}
      <div className="flex flex-wrap justify-center gap-4">
        {["PostgreSQL", "Redis", "Kafka", "External Services"].map((tech) => (
          <div key={tech} className="px-4 py-2 rounded-full bg-muted border border-border text-muted-foreground font-mono text-xs">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
