import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    FigmaIcon, NextJSIcon, NodeJSIcon, ReactIcon, TailwindIcon, TypeScriptIcon
} from "@/components/icons";

const iconMap = {
    typescript: TypeScriptIcon,
    react: ReactIcon,
    nextjs: NextJSIcon,
    nodejs: NodeJSIcon,
    tailwind: TailwindIcon,
    figma: FigmaIcon,
};

export function TechStack() {
  return (
    <section id="tech-stack">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Tech Stack</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                The tools and technologies I use to bring ideas to life.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill) => {
                const Icon = iconMap[skill.icon as keyof typeof iconMap];
                return (
                    <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-transform hover:scale-105 hover:shadow-lg">
                        <Icon className="h-12 w-12 mb-4 text-primary" />
                        <p className="font-semibold">{skill.name}</p>
                    </Card>
                );
            })}
        </div>
      </div>
    </section>
  );
}
