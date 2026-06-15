// app/skills/page.jsx

import { Code2, Database, Palette, Cloud, Zap, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/portfolio";

const icons = [Code2, Database, Palette, Brain, Cloud, Zap];

export default function SkillsPage() {
  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Skills & Expertise
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Technical Skills
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and concepts I use for development, problem solving,
              and core CS preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = icons[index] || Code2;

              return (
                <Card
                  key={skill.title}
                  className="hover:shadow-lg transition-shadow duration-300 dark:bg-zinc-900 dark:border-zinc-800"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>

                      <CardTitle className="text-xl dark:text-white">
                        {skill.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}