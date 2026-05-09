import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-5 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full border border-white/10
        bg-background/80 backdrop-blur-2xl
        text-primary
        shadow-[0_0_30px_hsl(var(--primary)/0.25)]
        transition-all duration-300
        hover:scale-110
        hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      <ChevronUp size={20} />
    </button>
  );
}
