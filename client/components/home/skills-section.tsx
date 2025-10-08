import { skills } from "@/data/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { getIcon, type IconName } from "@/lib/icons";

interface SkillColumnProps {
  heading: string;
  items: { name: string; icon: IconName }[];
}

const SkillColumn = ({ heading, items }: SkillColumnProps) => {
  return (
    <div className="rounded-3xl border border-border/70 bg-background/80 p-8 shadow-subtle">
      <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
        {heading}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <li
              key={item.name}
              className="flex items-center justify-between gap-4 rounded-full border border-border/70 px-4 py-3 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
            >
              <span>{item.name}</span>
              <Icon className="h-4 w-4" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section className="space-y-12">
      <SectionHeading
        eyebrow="Skills"
        title="Bridging design intent with scalable frontend systems."
        description="Equal fluency in design systems thinking and production-grade engineering ensures a seamless handoff from ideation to deployment."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <SkillColumn heading={skills.design.heading} items={skills.design.items} />
        <SkillColumn
          heading={skills.development.heading}
          items={skills.development.items}
        />
      </div>
    </section>
  );
};
