import { AnchorHTMLAttributes } from "react";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  hideIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className,
  hideIcon = false,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 font-medium hover:text-accent transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm",
        className
      )}
      {...props}
    >
      {children}
      {!hideIcon && <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />}
    </a>
  );
}
