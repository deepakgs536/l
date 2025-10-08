import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/site-content";
import { getIcon } from "@/lib/icons";

const CaseStudyPlaceholder = () => {
  const { projectId } = useParams();
  const ArrowIcon = getIcon("ArrowLeft");

  const project = projects.find((item) => item.id === projectId);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <section className="mx-auto max-w-3xl space-y-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {"Page Not Found"}
        </h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 self-center rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
        >
          <ArrowIcon className="h-4 w-4" />
          Return Home
        </Link>
        {/* <p className="text-base leading-relaxed text-foreground/70">
          We're crafting a detailed narrative for this project. Request the case study
          in your next prompt, and we'll generate a full deep-dive with visuals,
          outcomes, and behind-the-scenes process tailored to your needs.
        </p> */}
      </section>
    </div>
  );
};

export default CaseStudyPlaceholder;
