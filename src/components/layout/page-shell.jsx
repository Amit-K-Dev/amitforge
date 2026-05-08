import { FadeUp } from "@/components/ui/motion";

export function PageShell({ children, className = "", compact = false }) {
  return (
    <FadeUp>
      <section
        className={`
          px-6
          ${compact ? "pt-28 pb-16" : "pt-32 pb-24"}
          ${className}
        `}
      >
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>
    </FadeUp>
  );
}
