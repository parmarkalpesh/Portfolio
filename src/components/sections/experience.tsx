import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Work Experience</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                My professional journey and key accomplishments.
            </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 flex items-start">
              {/* Dot on the timeline */}
              <div className="absolute left-4 md:left-1/2 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Briefcase className="h-4 w-4" />
              </div>
              
              <div className={`w-full pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <p className="font-semibold text-lg">{exp.role}</p>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
