import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 outline-none select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]",

        outline:
          "border border-border bg-card/60 text-foreground backdrop-blur-xl hover:border-primary hover:text-primary hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/15 active:scale-[0.98]",

        ghost:
          "text-foreground hover:bg-primary/10 hover:text-primary hover:scale-[1.02] active:scale-[0.98]",

        soft:
          "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 hover:scale-[1.03] active:scale-[0.98]",
      },

      size: {
        sm: "h-10 px-5 text-sm",
        default: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "size-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };