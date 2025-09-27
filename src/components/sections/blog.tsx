import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">From My Blog</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Insights, tutorials, and thoughts on web development and technology.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="p-0">
                    <div className="relative aspect-video">
                        <Image
                            src={article.image.imageUrl}
                            alt={article.title}
                            fill
                            className="object-cover"
                            data-ai-hint={article.image.imageHint}
                        />
                    </div>
                </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline mb-2">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 h-auto font-semibold">
                  <Link href={article.url}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
