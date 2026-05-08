import { useMemo, useState } from "react";
import { siteData } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { PageShell } from "@/components/layout/page-shell";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const filters = ["All", "Analytics", "Product", "Automation"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = siteData?.projects || [];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <PageShell>
      <Section
        badge="Featured Work"
        title={
          <>
            Projects built
            <span className="block text-primary">with data & code</span>
          </>
        }
        subtitle="Analytics, automation, dashboards, and digital products focused on performance, usability, and business impact."
      >
        {/* filters */}
        <FadeUp delay={0.08}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filters.map((tag) => {
              const active = activeFilter === tag;

              return (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "border-border bg-card/60 hover:border-primary hover:text-primary"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                {/* dynamic glow */}
                <div
                  className={`absolute inset-0 opacity-40 bg-gradient-to-br ${project.gradient}`}
                />

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="relative z-10 p-8">
                  {/* image */}
                  <div className="mb-7 overflow-hidden rounded-2xl border border-border bg-background/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-64 md:h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* top meta */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </div>

                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {project.year} •{" "}
                      <span className="text-primary">{project.status}</span>
                    </div>
                  </div>

                  {/* title */}
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h2 className="text-3xl font-bold leading-tight">
                      {project.title}
                    </h2>

                    <span className="shrink-0 text-xs font-medium text-primary/60">
                      0{index + 1}
                    </span>
                  </div>

                  {/* desc */}
                  <p className="mt-5 leading-8 text-muted-foreground">
                    {project.description}
                  </p>

                  {/* project metrics */}
                  {!!project.metrics?.length && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* tech */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {(project.tech || []).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background/50 px-3 py-1 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* action buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <Button className="gap-2 rounded-full px-6 shadow-lg hover:shadow-primary/30">
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      </a>
                    )}

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Button
                          variant="outline"
                          className="gap-2 rounded-full px-6 hover:border-primary hover:text-primary"
                        >
                          <FaGithub className="text-base" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* empty */}
        {filteredProjects.length === 0 && (
          <FadeUp>
            <p className="mt-20 text-center text-lg text-muted-foreground">
              No matching work in this category.
            </p>
          </FadeUp>
        )}
      </Section>
    </PageShell>
  );
}
