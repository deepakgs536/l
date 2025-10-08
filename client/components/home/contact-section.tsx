import { contactForm, personalInfo } from "@/data/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { getIcon } from "@/lib/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { send } from "@emailjs/browser";

const INITIAL_STATE = contactForm.fields.reduce<Record<string, string>>((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {});

type FeedbackState = { type: "success" | "error"; message: string } | null;

export const ContactSection = () => {
  const [formValues, setFormValues] = useState<Record<string, string>>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState>(null);

  const handleChange = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setFeedback(null);

  const missing = contactForm.fields.filter(
    (field) => field.required && !formValues[field.name].trim()
  );

  if (missing.length > 0) {
    setFeedback({
      type: "error",
      message: `Please complete the required fields: ${missing
        .map((field) => field.name)
        .join(", ")}`,
    });
    // Hide error after 5 seconds
    setTimeout(() => setFeedback(null), 5000);
    return;
  }

  // Construct the mailto link
  const subject = encodeURIComponent("New message from your portfolio");
  const body = encodeURIComponent(
    `Name: ${formValues.name}\nEmail: ${formValues.email}\nMessage: ${formValues.message}`
  );
  const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

  // Open the default email client
  window.location.href = mailtoLink;

  setFormValues(INITIAL_STATE);
  setFeedback({
    type: "success",
    message: "Email client opened! Please send your message.",
  });
  // Hide error after 5 seconds
    setTimeout(() => setFeedback(null), 5000);
};

  const ArrowIcon = getIcon("ArrowRight");

  return (
    <section id="contact" className="space-y-12">
      <SectionHeading
        eyebrow="Contact"
        title={contactForm.title}
        description="Share context on your team, timelines, and success metrics. Each engagement starts with clarity on user needs and business objectives."
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border/70 bg-background/90 p-8 shadow-subtle"
        >
          <div className="grid gap-6">
            {contactForm.fields.map((field) => {
              const id = `contact-${field.name.toLowerCase().replace(/\s+/g, "-")}`;
              const isTextArea = field.type === "textarea";
              const sharedProps = {
                id,
                name: field.name,
                required: field.required,
                value: formValues[field.name],
                onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                  handleChange(field.name, event.target.value),
                className:
                  "w-full rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-foreground/80 placeholder:text-foreground/40 focus:border-foreground focus:outline-none",
              } as const;

              return (
                <div key={field.name} className="space-y-2">
                  <label
                    htmlFor={id}
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60"
                  >
                    {field.name}
                    {field.required ? " *" : ""}
                  </label>
                  {isTextArea ? (
                    <textarea rows={5} {...sharedProps} />
                  ) : (
                    <input type={field.type} {...sharedProps} />
                  )}
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-elevated disabled:cursor-not-allowed disabled:border-border disabled:bg-border disabled:text-foreground/60"
          >
            {isSubmitting ? "Sending..." : contactForm.submitButtonText}
            {!isSubmitting && <ArrowIcon className="h-4 w-4" />}
          </button>
          {feedback && (
            <p
              role="status"
              className={`mt-4 rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                feedback.type === "success"
                  ? "border-foreground/40 bg-background/80 text-foreground/80"
                  : "border-red-500/50 bg-red-500/10 text-red-500"
              }`}
            >
              {feedback.message}
            </p>
          )}
        </form>
        <div className="space-y-8">
          <div className="rounded-3xl border border-border/70 bg-background/90 p-8 shadow-subtle">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
              Direct Contact
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-foreground/70">
              <li>
                <span className="block text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Location
                </span>
                <p className="mt-2 text-sm font-semibold text-foreground/70">
                  {personalInfo.location}
                </p>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-border/70 bg-background/60 p-8 text-sm leading-relaxed text-foreground/70">
            Deepak specializes in full-stack product development, scalable design systems, 
            and seamless end-to-end delivery. Each project begins with a structured discovery 
            phase to define clear objectives, success metrics, and timelines, ensuring every 
            build aligns with user needs and business goals.
          </div>
        </div>
      </div>
    </section>
  );
};
