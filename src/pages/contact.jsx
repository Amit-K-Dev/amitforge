import { Button } from "@/components/ui/button";
import { siteData } from "@/data/site-data";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";

import {
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  Briefcase,
  Workflow,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

export default function Contact() {
  const { profile, socials } = siteData;

  const collaboration = [
    {
      icon: Briefcase,
      title: "Analytics Projects",
      desc: "Dashboards, reporting systems, KPI tracking, and business intelligence.",
    },
    {
      icon: Workflow,
      title: "Automation Systems",
      desc: "Workflow automation, AI systems, and scalable operational pipelines.",
    },
    {
      icon: Sparkles,
      title: "Product Builds",
      desc: "Digital products engineered with clean UX, architecture, and performance.",
    },
  ];

  const socialsList = [
    {
      name: "GitHub",
      href: socials.github,
      icon: FaGithub,
      primary: true,
    },
    {
      name: "LinkedIn",
      href: socials.linkedin,
      icon: FaLinkedinIn,
    },
    {
      name: "X / Twitter",
      href: socials.x,
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      href: socials.instagram,
      icon: FaInstagram,
    },
  ];

  return (
    <PageShell>
      {/* HERO */}
      <Section className="pb-14">
        <Container>
          <FadeUp className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">
              Contact
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Let’s build something
              <span className="block text-primary">that creates impact</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              Open to analytics systems, automation workflows, AI execution, and
              product collaborations built for scale.
            </p>

            <div className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border bg-card/60 px-6 py-3 backdrop-blur-xl">
              <span className="text-sm font-medium text-primary">
                Data Systems
              </span>
              <span className="text-border">•</span>
              <span className="text-sm font-medium text-primary">
                Automation
              </span>
              <span className="text-border">•</span>
              <span className="text-sm font-medium text-primary">
                Product Engineering
              </span>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* WHAT I BUILD */}
      <Section className="py-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {collaboration.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeUp key={item.title} delay={index * 0.08}>
                  <div className="group h-full rounded-[30px] border border-border bg-card/60 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                      {item.desc}
                    </p>

                    <div className="mt-6 h-px w-14 bg-primary/30 transition-all duration-300 group-hover:w-24" />
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CONTACT PANEL */}
      <Section className="pt-16">
        <Container>
          <FadeUp>
            <div className="overflow-hidden rounded-[34px] border border-border bg-card/60 backdrop-blur-xl">
              <div className="grid gap-10 p-8 md:grid-cols-[1.15fr_.85fr] md:p-10">
                {/* left */}
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                    Reach Out
                  </p>

                  <h2 className="mt-4 text-4xl font-black md:text-5xl">
                    {profile.name}
                  </h2>

                  <p className="mt-3 text-lg text-muted-foreground">
                    {profile.role}
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/50 px-5 py-3 text-sm">
                      <Mail size={16} className="text-primary" />
                      <span>{profile.email}</span>
                    </div>

                    <div className="block">
                      <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/50 px-5 py-3 text-sm">
                        <MapPin size={16} className="text-primary" />
                        <span>{profile.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-8 max-w-xl leading-8 text-muted-foreground">
                    If you're building something meaningful and need analytics,
                    automation, or product execution — there’s room to build
                    something strong together.
                  </p>

                  <a href={`mailto:${profile.email}`} className="inline-block">
                    <Button className="mt-8 gap-2 rounded-full px-7 shadow-lg hover:shadow-primary/30">
                      Start Conversation
                      <ArrowRight size={16} />
                    </Button>
                  </a>
                </div>

                {/* right */}
                <div className="grid gap-4">
                  {socialsList.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          variant={item.primary ? "default" : "outline"}
                          className={`w-full justify-between rounded-2xl px-6 py-7 ${
                            !item.primary
                              ? "hover:border-primary hover:text-primary"
                              : "shadow-lg hover:shadow-primary/30"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <Icon className="text-lg" />
                            {item.name}
                          </span>

                          <ArrowRight size={16} />
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>
    </PageShell>
  );
}
