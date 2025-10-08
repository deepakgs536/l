import { personalInfo, sections } from "@/data/site-content";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = sections.map((section) => ({
  id: section.id,
  label: section.title,
  to:
    section.id === "home"
      ? "/"
      : ({ pathname: "/", hash: `#${section.id}` } as const),
}));

const getHash = (value: string | null | undefined) =>
  typeof value === "string" ? value : "";

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeHash = getHash(location.hash);
  const pathname = location.pathname;

  const resolveActive = (id: string) => {
    if (id === "home") {
      return pathname === "/" && (!activeHash || activeHash === "#home");
    }
    return activeHash === `#${id}`;
  };

  const MenuIcon = getIcon("Menu");
  const CloseIcon = getIcon("X");
  const ArrowIcon = getIcon("ArrowRight");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-foreground/80 transition-colors hover:text-foreground"
        >
          {personalInfo.name}
        </Link>
        <nav className="hidden gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                resolveActive(item.id) && "text-foreground",
              )}
            >
              {item.label}
              {resolveActive(item.id) && (
                <span className="absolute inset-x-4 -bottom-1 h-[2px] rounded-full bg-foreground" />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeURL}
            className="hidden items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground md:flex"
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <ArrowIcon className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:text-foreground md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-40 bg-background/95 px-5 py-5 opacity-0 transition-opacity duration-300 md:hidden",
          isMenuOpen && "pointer-events-auto opacity-100 bg-background",
        )}
      >
        <div className="mx-auto flex w-full flex-col gap-6 bg-background/95 backdrop-blur-2xl rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 ml-auto">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:text-foreground md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          </div>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-2xl font-semibold text-foreground/80 transition-colors hover:text-foreground",
                resolveActive(item.id) && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={personalInfo.resumeURL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center gap-3 mb-5 text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Download Resume
            <ArrowIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};
