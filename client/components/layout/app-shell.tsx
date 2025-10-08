import { type ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const AppShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05)_0,_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      </div>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
