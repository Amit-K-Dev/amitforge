import { Button } from "@/components/ui/button";
import { siteData } from "@/data/site-data";
import { Section } from "@/components/ui/section";
import { FadeUp, FadeIn, ScaleIn } from "@/components/ui/motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";

export function Hero() {
  const { brand, profile, metrics, stack } = siteData;

  return (
    <Section className="relative overflow-hidden pb-24 pt-44 md:pb-28 md:pt-52">
      {/* cinematic ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/12 blur-[180px]" />
        <div className="absolute left-20 top-32 h-64 w-64 rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-primary/5 blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <Container className="text-center">
        {/* proof badge */}
        <FadeIn className="mt-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-card/55 px-6 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
            <Sparkles size={14} className="text-primary" />

            {metrics.slice(0, 3).map((item, i) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-sm font-bold text-primary">
                  {item.value}
                </span>

                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </span>

                {i < 2 && <span className="ml-1 text-border">•</span>}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* headline */}
        <FadeUp delay={0.08}>
          <h1 className="mx-auto mt-9 max-w-3xl text-[44px] font-black leading-[0.93] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">{brand.headline}</span>

            <span className="mt-2 block bg-gradient-to-r from-primary via-sky-100 to-primary bg-clip-text text-transparent opacity-90">
              Built with intent.
            </span>
          </h1>
        </FadeUp>

        {/* subheadline */}
        <FadeUp delay={0.16}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-xl">
            {brand.subheadline}
          </p>
        </FadeUp>

        {/* identity */}
        <FadeUp delay={0.24}>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/8 bg-card/30 px-5 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />

            <p className="text-sm font-medium text-muted-foreground">
              {profile.name} • {profile.role}
            </p>
          </div>
        </FadeUp>

        {/* CTA */}
        <ScaleIn delay={0.32}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/projects" aria-label="Explore Work">
              <Button
                size="lg"
                className="
                  h-12 gap-2 rounded-full px-8 font-medium
                  shadow-[0_0_30px_hsl(var(--primary)/0.22)]
                  hover:scale-[1.03]
                  transition-all duration-300
                "
              >
                Explore Work
                <ArrowRight size={16} />
              </Button>
            </Link>

            <Link to="/contact" aria-label="Get in Touch">
              <Button
                size="lg"
                variant="outline"
                className="
                  h-12 rounded-full px-8 font-medium
                  hover:border-primary hover:text-primary
                  hover:bg-primary/5
                  transition-all duration-300
                "
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </ScaleIn>

        {/* stack strip */}
        <FadeUp delay={0.4}>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/8 pt-8">
            {(stack || []).map((item) => (
              <span
                key={item}
                className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
