import { personalInfo } from "@/data/site-content";
import { getIcon } from "@/lib/icons";
import { Link } from "react-router-dom";

export const Hero = () => {
  const ArrowIcon = getIcon("ArrowUpRight");
  const SparklesIcon = getIcon("Sparkles");
  const QuoteIcon = getIcon("Quote");

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mx-auto h-[520px] w-[520px] rounded-full border border-border/60 bg-gradient-to-br from-white/20 via-white/5 to-transparent blur-3xl dark:from-white/10 dark:via-white/5" />
      </div>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
            <SparklesIcon className="h-4 w-4" />
            {personalInfo.title}
          </div>
          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-foreground/70 md:text-lg">
              {personalInfo.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to={{ pathname: "/", hash: "#portfolio" }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              View Work
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              to={{ pathname: "/", hash: "#contact" }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
            >
              Start a Project
            </Link>
          </div>
          <dl className="grid gap-4 md:gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-background/60 px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                Email
              </dt>
              <dd className="mt-3 text-sm font-medium text-foreground/80">
                <a href={`mailto:${personalInfo.email}`} className="transition-colors hover:text-foreground">
                  {personalInfo.email}
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/60 px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                Location
              </dt>
              <dd className="mt-3 text-sm font-medium text-foreground/80">
                {personalInfo.location}
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="relative rounded-3xl border border-border/70 bg-background/80 p-8 shadow-subtle">
            <div className="space-y-4">
              <QuoteIcon className="h-6 w-6 text-foreground/30" />
              <p className="text-sm leading-relaxed text-foreground/70 md:w-[90%]">
                Whether you think you can, or you think you can't you're right.
              </p>
            </div>
            <div className="mt-4 md:mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {personalInfo.socialLinks.map((link) => {
                  const Icon = getIcon(link.icon);
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/80 p-8 shadow-subtle">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
              Availability
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Currently open for collaborative web app development, and full-stack MERN engagements for late Q4.
            </p>
            <Link
              to={{ pathname: "/", hash: "#contact" }}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              Book a Discovery Call
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
