import { X, Home, FolderKanban, User, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import { siteData } from "@/data/site-data";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
];

export function Sidebar() {
  const { sidebarOpen, closeSidebar } = useAppStore();
  const location = useLocation();
  const { brand, socials, profile } = siteData;

  const socialProfiles = [
    { icon: FaGithub, href: socials.github },
    { icon: FaLinkedinIn, href: socials.linkedin },
    { icon: FaXTwitter, href: socials.x },
    { icon: FaInstagram, href: socials.instagram },
  ];

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* overlay */}
          <motion.div
            onClick={closeSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          {/* drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-y-0 right-0 z-50 w-[86%] max-w-sm border-l border-border/60 bg-background/96 px-6 py-7 backdrop-blur-xl"
          >
            <div className="flex h-full flex-col">
              {/* header */}
              <div className="flex items-start justify-between border-b border-border/60 pb-7">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    {brand.name}
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground uppercase tracking-[0.18em]">
                    {brand.tagline}
                  </p>
                </div>

                <button
                  onClick={closeSidebar}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <X size={18} />
                </button>
              </div>

              {/* nav */}
              <nav className="mt-8 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeSidebar}
                      className={`
                        flex items-center gap-3 rounded-2xl px-4 py-3.5
                        transition-all duration-300
                        ${
                          active
                            ? "border border-border/70 bg-muted/70 text-primary"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        }
                      `}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* socials */}
              <div className="mt-10 border-t border-border/60 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Connect
                </p>

                <div className="mt-5 flex gap-3">
                  {socialProfiles.map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                      >
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto border-t border-border/60 pt-8">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button className="h-12 w-full rounded-full text-sm font-semibold shadow-lg hover:shadow-primary/25">
                    View Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
