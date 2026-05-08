import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { Container } from "@/components/ui/container";
import { ArrowUpRight } from "lucide-react";

export function Features() {
  return (
    <Section className="pt-14 pb-32 md:pt-18">
      <Container>
        <FadeUp className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.30em] text-primary">
            CORE STRENGTHS
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] md:text-6xl">
            Built for modern
            <span className="block text-primary">digital execution</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Data, automation, and product thinking combined into systems that
            create measurable impact.
          </p>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.title} delay={index * 0.08}>
                <Card
                  className="
                    group relative h-full min-h-[260px] md:min-h-[320px]
                    overflow-hidden rounded-[30px]
                    border border-white/8
                    bg-card/45 backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-primary/30
                    hover:bg-card/70
                    hover:shadow-[0_20px_70px_rgba(0,180,255,0.08)]
                  "
                >
                  {/* ambient glow */}
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-[90px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <CardContent className="relative flex h-full flex-col p-8 md:p-9">
                    {/* top */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/15">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.24em] text-primary/45 transition-all duration-300 group-hover:text-primary">
                        0{index + 1}
                      </span>
                    </div>

                    {/* middle */}
                    <div className="mt-10 flex-1">
                      <h3 className="text-[28px] md:text-[30px] font-bold tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>

                    {/* bottom */}
                    <div className="mt-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-px w-10 bg-primary/30 transition-all duration-500 group-hover:w-20" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </div>
                  </CardContent>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
