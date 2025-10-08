import { projects } from "@/data/site-content";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: (typeof projects)[number];
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const ArrowIcon = getIcon("ArrowUpRight");
  const ExternalIcon = getIcon("ExternalLink");

  return (
    <article
      className={cn(
        "group flex-1 flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-background/80 shadow-subtle transition-transform hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative aspect-[5/3] overflow-hidden border-b border-border/60">
        <img
          src={project.thumbnailImage}
          alt={`${project.title} thumbnail`}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 transition-opacity duration-700 group-hover:opacity-0"></div>
      </div>
      <div className="flex flex-1 flex-col gap-6 p-8">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-foreground/70">
            {project.caseStudy.summary}
          </p>
        </div>
        <dl className="grid gap-4 text-xs uppercase tracking-[0.3em] text-foreground/50 sm:grid-cols-2">
          <div className="space-y-1">
            <dt>Role</dt>
            <dd className="text-sm normal-case tracking-normal text-foreground/70">
              {project.caseStudy.role}
            </dd>
          </div>
          <div className="space-y-1">
            <dt>Impact</dt>
            <dd className="text-sm normal-case tracking-normal text-foreground/70">
              {project.caseStudy.metrics}
            </dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-2">
          {project.caseStudy.techUsed.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <a
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-foreground"
          >
            Open Project Overview
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
