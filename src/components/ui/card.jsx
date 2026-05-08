import { cn } from "@/lib/utils";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card/60 backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={cn("p-8", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={cn("p-8 pb-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }) {
  return (
    <h3
      className={cn("text-2xl font-bold tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className = "",
  children,
  ...props
}) {
  return (
    <p
      className={cn("mt-3 leading-8 text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardFooter({ className = "", children, ...props }) {
  return (
    <div className={cn("px-8 pb-8", className)} {...props}>
      {children}
    </div>
  );
}