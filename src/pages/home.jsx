import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Features } from "@/components/sections/features";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { AnalyticsPreview } from "@/components/sections/analytics-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Features />
      <ProjectsPreview />
      <AnalyticsPreview />
    </>
  );
}
