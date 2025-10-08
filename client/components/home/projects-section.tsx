import { projects } from "@/data/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/portfolio/project-card";

export const ProjectsSection = () => {
  return (
    <section id="portfolio" className="space-y-12">
      <SectionHeading
        eyebrow="Selected Work"
        title={<span>Building purposeful interfaces and intelligent systems.</span>}
        description="A curated showcase of web applications and digital experiences that merge human-centered design, visual precision."
      />
      <div className="flex flex-col md:flex-row gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
