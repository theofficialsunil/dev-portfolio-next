// app/education/page.jsx

import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/portfolio";

const learningFocus = [
  "Competitive Programming",
  "Full Stack Development",
  "System Design Basics",
  "Machine Learning Basics",
];

export default function EducationPage() {
  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Academic Background
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Education
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey, coursework, and current learning focus.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Degree
            </h2>

            {education.map((edu) => (
              <Card
                key={edu.degree}
                className="dark:bg-zinc-900 dark:border-zinc-800 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl dark:text-white">
                        {edu.degree}
                      </CardTitle>

                      <div className="flex flex-col gap-2">
                        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {edu.institution}
                        </span>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>

                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {edu.gpa}
                          </span>

                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-slate-600 dark:text-gray-400">
                    {edu.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Key Coursework
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge
                          key={course}
                          variant="secondary"
                          className="dark:bg-zinc-800 dark:text-gray-300"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Highlights
                    </h4>

                    <ul className="space-y-2">
                      {edu.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-slate-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">
                            •
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Current Learning Focus
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningFocus.map((item) => (
                <Card
                  key={item}
                  className="dark:bg-zinc-900 dark:border-zinc-800 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg dark:text-white">
                      {item}
                    </CardTitle>

                    <CardDescription className="dark:text-gray-400">
                      Active learning area
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}