import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export function Section({
  badge,
  title,
  subtitle,
  children,
  centered = true,
  className = "",
}) {
  return (
    <section className={cn("relative py-24 md:py-32", className)}>
      {(badge || title || subtitle) && (
        <FadeUp
          className={centered ? "mx-auto mb-14 max-w-3xl text-center" : "mb-14"}
        >
          {badge && (
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              {badge}
            </p>
          )}

          {title && (
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {subtitle}
            </p>
          )}
        </FadeUp>
      )}

      {children}
    </section>
  );
}
