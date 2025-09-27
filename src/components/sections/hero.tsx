import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "../three-scene";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[100dvh] flex items-center justify-center text-center overflow-hidden">
      <ThreeScene />
      <div className="relative z-10 container flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            John Doe
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Software Engineer & Web Developer
            </p>
        </div>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          Crafting elegant, performant, and user-centric digital experiences from concept to production.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/resume.pdf" target="_blank" download>
                Download CV
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
