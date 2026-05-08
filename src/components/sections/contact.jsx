import { Container } from "@/components/ui/container";

export function Contact() {
  return (
    <section className="py-24">
      <Container className="rounded-3xl border border-border bg-card/80 p-10 text-center backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-primary">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Let&apos;s build something great
        </h2>

        <p className="mt-4 text-muted-foreground">
          Open for analytics, automation, and product collaborations.
        </p>
      </Container>
    </section>
  );
}
