import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { siteData } from "@/data/site-data";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();
  const { brand, socials } = siteData;

  const links = [
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialProfiles = [
    { icon: FaGithub, href: socials.github },
    { icon: FaLinkedinIn, href: socials.linkedin },
    { icon: FaXTwitter, href: socials.x },
    { icon: FaInstagram, href: socials.instagram },
  ];

  return (
    <footer className="relative mt-28 overflow-hidden border-t border-white/8 pt-20 pb-10">
      {/* glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* ambient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent" />

      <Container className="relative z-10">
        {/* top */}
        <div className="grid gap-14 md:grid-cols-[1.6fr_.8fr_.9fr]">
          {/* brand block */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-4xl font-black tracking-tight"
            >
              <span className="transition-colors duration-300 group-hover:text-primary">
                {brand.name}
              </span>

              <span className="text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                ✦
              </span>
            </Link>

            <p className="mt-6 max-w-lg text-lg leading-9 text-muted-foreground">
              Systems engineered where{" "}
              <span className="text-foreground">data</span>,{" "}
              <span className="text-foreground">automation</span>, and{" "}
              <span className="text-foreground">AI</span> compound business
              leverage.
            </p>

            <div className="mt-7 inline-flex rounded-full border border-primary/10 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {brand.tagline}
            </div>
          </div>

          {/* explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Explore
            </p>

            <div className="mt-6 space-y-4">
              {links.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block w-fit text-lg text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Connect
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialProfiles.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-card/50 text-lg text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-primary hover:shadow-[0_0_25px_rgba(0,180,255,0.18)]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* bottom strip */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>

          <p className="text-xs uppercase tracking-[0.22em] text-primary/70">
            Built with intent
          </p>
        </div>
      </Container>
    </footer>
  );
}
