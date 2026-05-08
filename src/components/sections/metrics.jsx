import { siteData } from "@/data/site-data";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { Container } from "@/components/ui/container";

export function Metrics() {
  return (
    <Section className="pb-28 pt-0">
      <Container>
        <FadeUp>
          <div
            className="
              relative overflow-hidden rounded-[34px]
              border border-white/10
              bg-card/45
              shadow-[0_20px_80px_rgba(0,0,0,0.22)]
              backdrop-blur-2xl
            "
          >
            {/* subtle ambient */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[90px]" />
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-4">
              {siteData.metrics.map((item, index) => (
                <div
                  key={item.label}
                  className={`
                    group px-6 py-10 text-center
                    transition-all duration-300
                    hover:bg-white/[0.025]
                    md:px-8 md:py-12
                    ${
                      index !== siteData.metrics.length - 1
                        ? "border-b border-white/8 md:border-b-0 md:border-r md:border-white/8"
                        : ""
                    }
                  `}
                >
                  <div className="mx-auto mb-5 h-px w-10 bg-primary/30 transition-all duration-300 group-hover:w-16" />

                  <h3 className="text-4xl font-black text-primary transition-transform duration-300 group-hover:scale-110 md:text-5xl">
                    {item.value}
                  </h3>

                  <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground md:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
