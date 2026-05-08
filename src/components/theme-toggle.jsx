import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-border/70
        bg-muted/60
        text-muted-foreground
        transition-all duration-300
        hover:border-primary
        hover:text-primary
      "
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
