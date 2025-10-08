import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      id={id}
      className={cn(
        "flex flex-col gap-4",
        className,
        align === "center" && "text-center",
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
          {eyebrow}
        </span>
      )}
      <div className="space-y-4">
        <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </div>
        {description && (
          <p
            className={cn(
              "text-base leading-relaxed text-foreground/70",
              align === "center" && "mx-auto max-w-2xl",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
