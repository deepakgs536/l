import { personalInfo, sections } from "@/data/site-content";
import { getIcon } from "@/lib/icons";
import { Link } from "react-router-dom";

const contactItems = [
  {
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "Mail" as const,
  },
  {
    label: personalInfo.location,
    href: undefined,
    icon: "MapPin" as const,
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-background/90 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-lg space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
              {personalInfo.name}
            </p>
            <p className="text-2xl font-semibold tracking-tight text-foreground">
              {personalInfo.tagline}
            </p>
            <p className="text-sm text-foreground/70">
              {personalInfo.title}
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                Navigation
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      to={
                        section.id === "home"
                          ? "/"
                          : ({ pathname: "/", hash: `#${section.id}` } as const)
                      }
                      className="transition-colors hover:text-foreground"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                Connect
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                {contactItems.map((item) => {
                  const Icon = getIcon(item.icon);
                  const content = (
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </div>
                  );

                  if (!item.href) {
                    return <li key={item.label}>{content}</li>;
                  }

                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center gap-3 transition-colors hover:text-foreground"
                      >
                        {content}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
              Social
            </h4>
            <div className="flex gap-3">
              {personalInfo.socialLinks.map((link) => {
                const Icon = getIcon(link.icon);
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:-translate-y-1 hover:border-foreground hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                    <span className="sr-only">{link.name}</span>
                  </a>
                );
              })}
            </div>
            <a
              href={personalInfo.resumeURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border/80 px-4 py-2 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
            >
              {"Download Resume"}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
