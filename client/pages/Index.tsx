import { useEffect } from "react";
import { Hero } from "@/components/home/hero";
import { ProjectsSection } from "@/components/home/projects-section";
import { AboutSection } from "@/components/home/about-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Index() {
  const sections = [
    { id: "home", component: <Hero /> },
    { id: "portfolio", component: <ProjectsSection /> },
    { id: "about", component: <AboutSection /> },
    { id: "skills", component: <SkillsSection /> },
    { id: "contact", component: <ContactSection /> },
  ];

  useEffect(() => {
    let lastHash = window.location.hash;

    const scrollToCurrentHash = () => {
      const hash = window.location.hash || "#home";
      if (hash && hash !== lastHash) {
        lastHash = hash;
        const element = document.querySelector(hash);
        console.log("Scrolling to", element);
        if (element) {
          const navbarOffset = 165; // adjust for your fixed navbar height
          const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    };

    // Polling interval to constantly check URL hash changes
    const interval = setInterval(scrollToCurrentHash, 100);

    // Scroll on initial load
    scrollToCurrentHash();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-28 md:space-y-32">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          {section.component}
        </section>
      ))}
    </div>
  );
}
