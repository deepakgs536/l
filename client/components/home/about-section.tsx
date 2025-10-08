import { aboutContent, personalInfo } from "@/data/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { getIcon } from "@/lib/icons";

export const AboutSection = () => {
  const ArrowIcon = getIcon("ArrowUpRight");

  return (
    <section id="about" className="space-y-12">
      <SectionHeading
        eyebrow="About"
        title={aboutContent.heading}
        description={aboutContent.subheading}
      />
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-foreground/5 via-transparent to-transparent shadow-subtle">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.1),_transparent_65%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_65%)]" />
            <div className="absolute inset-10 rounded-3xl border border-border/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
          src='https://res.cloudinary.com/dn2jwfo0s/image/upload/v1759938105/profileImage_djuenh.jpg'
          alt={`Profile Image`}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
            </div>
          </div>
        </div>
        <div className="space-y-8 text-base leading-relaxed text-foreground/70">
          <p>{aboutContent.bioParagraph1}</p>
          <p>{aboutContent.bioParagraph2}</p>
          <div className="rounded-3xl border border-border/70 bg-background/70 p-6 shadow-subtle">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
              Manifesto
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              {aboutContent.callToAction}
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              Collaborate with Alex
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
