import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { useTheme } from "./theme-provider";

export type ThemeToggleProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, ...props }, ref) => {
    const { theme, toggleTheme } = useTheme();
    const Icon = theme === "light" ? getIcon("Moon") : getIcon("Sun");
    const label = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

    return (
      <button
        ref={ref}
        type="button"
        onClick={toggleTheme}
        aria-label={label}
        aria-pressed={theme === "dark"}
        className={cn(
          "group inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/50 text-foreground transition-all duration-200 hover:border-foreground/60 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        {...props}
      >
        <Icon className="h-4 w-4 transition-transform duration-300 group-active:scale-90" />
      </button>
    );
  },
);

ThemeToggle.displayName = "ThemeToggle";
