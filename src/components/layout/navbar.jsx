import { ThemeToggle } from "@/components/theme-toggle";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { siteData } from "@/data/site-data";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const { toggleSidebar } = useAppStore();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { brand } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-1/2 z-50
        w-[94%] max-w-5xl
        -translate-x-1/2 rounded-full
        border border-white/10
        bg-background/72
        shadow-[0_12px_50px_rgba(0,0,0,0.28)]
        backdrop-blur-3xl
        transition-all duration-500
        ${scrolled ? "top-3 scale-[0.985]" : "top-5 scale-100"}
      `}
    >
      {/* subtle ring */}
      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/5" />

      <div className="relative flex items-center justify-between px-4 py-2.5 md:px-7">
        {/* brand */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2 text-base font-black tracking-tight md:text-lg"
        >
          <span className="transition-all duration-300 group-hover:text-primary">
            {brand.name}
          </span>

          <span className="text-primary transition-all duration-500 group-hover:rotate-180 group-hover:scale-110">
            ✦
          </span>
        </Link>

        {/* right side */}
        <div className="flex items-center gap-2">
          {/* desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path}>
                  <button
                    className={`
                      rounded-full px-4 py-2 text-sm font-medium
                      transition-all duration-300
                      ${
                        active
                          ? "bg-primary/12 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.12),inset_0_0_0_1px_hsl(var(--primary)/0.18)]"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground hover:scale-[1.03]"
                      }
                    `}
                  >
                    {item.name}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* always visible */}
          <ThemeToggle />

          {/* menu */}
          <Button
            onClick={toggleSidebar}
            aria-label="Sidebar Menu"
            className="
              h-10 gap-2 rounded-full px-4 md:h-11 md:px-5
              font-medium
              shadow-[0_0_25px_hsl(var(--primary)/0.22)]
              transition-all duration-300
              hover:scale-[1.04]
              hover:shadow-[0_0_35px_hsl(var(--primary)/0.35)]
            "
          >
            <span className="hidden sm:inline">Menu</span>
            <Menu size={17} />
          </Button>
        </div>
      </div>
    </header>
  );
}
