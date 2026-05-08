import { Link } from "react-router-dom";
import { siteData } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Container } from "@/components/ui/container";

export function ProjectsPreview() {
  const projects = siteData.projects.slice(0, 2);

  return (
    <Section className="py-28">
      <Container>
        {/* heading */}
        <FadeUp className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.30em] text-primary">
            FEATURED WORK
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] md:text-6xl">
            Projects that turn
            <span className="block text-primary">ideas into products</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            From analytics dashboards to scalable systems — crafted with
            execution, clarity, and product thinking.
          </p>
        </FadeUp>

        {/* showcase cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.08}>
              <div
                className="
                  group relative h-full min-h-[420px]
                  overflow-hidden rounded-[32px]
                  border border-white/8
                  bg-card/45 p-8 md:p-9
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:bg-card/65
                  hover:shadow-[0_20px_70px_rgba(0,180,255,0.08)]
                "
              >
                {/* ambient glow */}
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-[100px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* top row */}
                <div className="relative flex items-center justify-between">
                  <span className="rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {project.category}
                  </span>

                  <span className="text-xs font-semibold tracking-[0.24em] text-primary/45">
                    0{index + 1}
                  </span>
                </div>

                {/* content */}
                <div className="relative mt-10">
                  <h3 className="max-w-sm text-[32px] font-bold leading-tight tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* tech */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/8 bg-background/40 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* bottom */}
                <div className="relative mt-10 flex flex-wrap items-center gap-3">
                  <Link to="/projects">
                    <Button className="h-11 gap-2 rounded-full px-6 shadow-none">
                      Case Study
                      <ArrowRight size={15} />
                    </Button>
                  </Link>

                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="h-11 gap-2 rounded-full px-5 hover:border-primary hover:text-primary"
                    >
                      <FaGithub />
                      Code
                      <ExternalLink size={13} />
                    </Button>
                  </a>
                </div>

                {/* bottom accent */}
                <div className="relative mt-10 flex items-center gap-2">
                  <div className="h-px w-10 bg-primary/30 transition-all duration-500 group-hover:w-20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.2} className="mt-10 text-center">
          <Link to="/projects">
            <Button
              variant="outline"
              className="h-11 rounded-full px-7 font-medium hover:border-primary hover:text-primary"
            >
              View All Projects
            </Button>
          </Link>
        </FadeUp>
      </Container>
    </Section>
  );
}
