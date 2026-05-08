import ReactECharts from "echarts-for-react";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { Container } from "@/components/ui/container";

const option = {
  tooltip: {
    trigger: "axis",
    backgroundColor: "#08111f",
    borderColor: "rgba(0,255,255,.12)",
    textStyle: {
      color: "#fff",
    },
  },

  grid: {
    left: 10,
    right: 10,
    top: 20,
    bottom: 10,
    containLabel: true,
  },

  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: "rgba(255,255,255,.45)",
      fontSize: 12,
    },
  },

  yAxis: {
    type: "value",
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: "rgba(255,255,255,.35)",
      fontSize: 11,
    },
    splitLine: {
      lineStyle: {
        color: "rgba(255,255,255,.06)",
      },
    },
  },

  series: [
    {
      data: [120, 210, 180, 280, 240, 380],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        width: 4,
      },
      areaStyle: {
        opacity: 0.14,
      },
    },
    {
      data: [90, 160, 140, 220, 210, 300],
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        width: 2,
        opacity: 0.45,
      },
      areaStyle: {
        opacity: 0,
      },
    },
  ],
};

export function AnalyticsPreview() {
  const stats = [
    {
      label: "Revenue Growth",
      value: "+38%",
      color: "text-emerald-400",
    },
    {
      label: "Conversion",
      value: "12.4%",
      color: "text-primary",
    },
    {
      label: "Retention",
      value: "87%",
      color: "text-primary",
    },
  ];

  return (
    <Section className="py-24">
      <Container>
        {/* heading */}
        <FadeUp className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            INSIGHTS
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] md:text-6xl">
            Analytics that
            <span className="block text-primary">speak clearly</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Dashboards engineered to surface clarity, trends, and business
            momentum.
          </p>
        </FadeUp>

        {/* unified analytics showcase */}
        <FadeUp delay={0.12}>
          <div className="grid gap-6 rounded-[32px] border border-white/8 bg-card/45 p-6 backdrop-blur-xl md:grid-cols-[320px_1fr] md:p-8">
            {/* left stats */}
            <div className="space-y-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/6 bg-background/30 px-5 py-4"
                >
                  <p className="text-sm text-muted-foreground">{item.label}</p>

                  <h3
                    className={`mt-2 text-3xl md:text-4xl font-black ${item.color}`}
                  >
                    {item.value}
                  </h3>

                  <div className="mt-4 h-px w-12 bg-primary/30" />
                </div>
              ))}
            </div>

            {/* chart */}
            <div className="rounded-3xl border border-white/6 bg-background/20 p-6">
              <ReactECharts option={option} style={{ height: 340 }} />
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
