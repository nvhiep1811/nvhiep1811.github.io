import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionHeading({ children, className, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8 md:mb-12",
        className
      )}
    >
      {children}
    </h2>
  );
}
