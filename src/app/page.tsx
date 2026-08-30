import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

/**
 * Temporary foundation-verification screen.
 *
 * This is NOT the landing page. It exists only to confirm tokens,
 * typography, the button system, and Motion are wired correctly before
 * the real Hero / Services / FAQ / CTA sections are built.
 */
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden">
      <div className="gradient-ambient pointer-events-none absolute inset-x-0 top-0 h-[32rem]" />

      <div className="container-page relative flex flex-col items-start gap-6 py-24">
        <Reveal mode="entrance">
          <p className="font-mono text-xs tracking-[0.2em] text-brand-purple-bright uppercase">
            Foundation Preview
          </p>
        </Reveal>

        <Reveal mode="entrance" delay={0.06}>
          <h1 className="max-w-2xl text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl">
            Design system foundation is ready.
          </h1>
        </Reveal>

        <Reveal mode="entrance" delay={0.12}>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Tokens, typography, container, buttons, and Motion are wired up.
            The Hero, Services, FAQ, and CTA sections get built next on top
            of this.
          </p>
        </Reveal>

        <Reveal mode="entrance" delay={0.18}>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button variant="primary" size="lg">
              Book Your Strategy Call
            </Button>
            <Button variant="secondary" size="lg">
              Secondary Action
            </Button>
            <Button variant="ghost" size="lg">
              Ghost
            </Button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}