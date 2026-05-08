import { siteData } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";

import {
  MapPin,
  Download,
  Mail,
  Sparkles,
  Database,
  Code2,
  BrainCircuit,
  Wrench,
} from "lucide-react";

const capabilityIcons = {
  analytics: Database,
  frontend: Code2,
  backend: Wrench,
  ai: BrainCircuit,
  tools: Sparkles,
};

const capabilityTitles = {
  analytics: "Data Intelligence",
  frontend: "Frontend Engineering",
  backend: "Backend Systems",
  ai: "AI Automation",
  tools: "Tooling & Infra",
};

export default function About() {
  const { profile, skills, timeline } = siteData;

  return (
    <PageShell>
      {/* HERO */}
      <Section className="pb-16">
        <Container>
          <FadeUp className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
              About AmitForge
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Building systems that
              <span className="block text-primary">create leverage</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              I work at the intersection of analytics, automation, engineering,
              and product thinking — turning ideas into scalable digital
              systems.
            </p>

            <div className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border bg-card/60 px-6 py-3 backdrop-blur-xl">
              <span className="text-sm font-medium text-primary">
                Data Driven
              </span>
              <span className="text-border">•</span>
              <span className="text-sm font-medium text-primary">
                System First
              </span>
              <span className="text-border">•</span>
              <span className="text-sm font-medium text-primary">
                Built To Scale
              </span>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* PROFILE CARD */}
      <Section className="py-0">
        <Container>
          <FadeUp>
            <div className="overflow-hidden rounded-[32px] border border-border bg-card/60 backdrop-blur-xl">
              <div className="grid gap-10 p-8 md:grid-cols-[220px_1fr] md:p-10">
                {/* avatar */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative h-40 w-40 rounded-[30px] border border-primary/20 bg-background/60 p-3">
                    <div className="absolute inset-0 rounded-[30px] bg-primary/10 blur-2xl" />

                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="relative z-10 h-full w-full rounded-[22px] object-cover"
                    />
                  </div>
                </div>

                {/* content */}
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                    Founder
                  </p>

                  <h2 className="mt-3 text-4xl font-black md:text-5xl">
                    {profile.name}
                  </h2>

                  <p className="mt-3 text-lg text-muted-foreground">
                    {profile.role}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-sm">
                      <MapPin size={15} className="text-primary" />
                      {profile.location}
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-sm">
                      <Mail size={15} className="text-primary" />
                      {profile.email}
                    </div>
                  </div>

                  <p className="mt-7 max-w-2xl leading-8 text-muted-foreground">
                    I don’t just build websites — I build systems. Dashboards,
                    automations, AI workflows, and digital products engineered
                    for long-term leverage.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href={profile.resume} target="_blank" rel="noreferrer">
                      <Button className="gap-2 rounded-full px-6">
                        <Download size={16} />
                        Resume
                      </Button>
                    </a>

                    <a href={`mailto:${profile.email}`}>
                      <Button
                        variant="outline"
                        className="gap-2 rounded-full px-6 hover:border-primary hover:text-primary"
                      >
                        <Mail size={16} />
                        Contact
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* CAPABILITIES */}
      <Section className="pt-20">
        <Container>
          <FadeUp className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Core Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Built across
              <span className="block text-primary">multiple disciplines</span>
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([key, list], index) => {
              const Icon = capabilityIcons[key] || Sparkles;
              const title = capabilityTitles[key] || key;

              return (
                <FadeUp key={key} delay={index * 0.08}>
                  <div className="group h-full rounded-[30px] border border-border bg-card/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h3 className="text-2xl font-bold">{title}</h3>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {list.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-background/50 px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* JOURNEY */}
      <Section className="pt-20">
        <Container>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Journey
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Building forward
            </h2>
          </FadeUp>

          <div className="mx-auto mt-16 max-w-3xl">
            {timeline.map((item, index) => (
              <FadeUp key={item.year} delay={index * 0.08}>
                <div className="relative border-l border-primary/30 pl-8 pb-12 last:pb-0">
                  <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(0,200,255,0.8)]" />

                  <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
                    {item.year}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-8 text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
