// app/projects/page.jsx

import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <main className="pt-16 min-h-screen bg-slate-50 dark:bg-zinc-900">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              My Work
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Featured Projects
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Projects that show my full-stack development, backend systems, and
              UI implementation skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-black dark:border-zinc-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="dark:text-white">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="dark:text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="dark:bg-zinc-800 dark:text-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white dark:bg-white dark:text-black px-3 py-2 text-sm font-medium hover:opacity-90 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-200 dark:bg-zinc-800 text-slate-500 dark:text-gray-400 px-3 py-2 text-sm font-medium">
                        <ExternalLink className="w-4 h-4" />
                        Demo Soon
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}