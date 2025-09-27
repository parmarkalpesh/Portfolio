import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative aspect-square max-w-md mx-auto">
          <Image
            src="https://picsum.photos/seed/profile/600/600"
            alt="John Doe"
            fill
            className="rounded-lg object-cover shadow-lg"
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</h2>
          <p className="text-muted-foreground md:text-lg">
            I'm a passionate software engineer with a knack for creating beautiful, functional, and accessible web experiences. With over 5 years in the industry, I specialize in modern frontend technologies and thrive on solving complex problems. 
          </p>
          <p className="text-muted-foreground md:text-lg">
            My goal is to build products that not only look good but also provide a seamless and intuitive user experience. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
        </div>
      </div>
    </section>
  );
}
