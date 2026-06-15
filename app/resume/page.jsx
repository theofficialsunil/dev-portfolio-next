// app/resume/page.jsx

"use client";

import { Download, FileText, Printer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, education, projects, resumeSections } from "@/data/portfolio";

export default function ResumePage() {
  function handlePrint() {
    window.print();
  }

  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-black">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 print:hidden">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Professional Summary
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Resume
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              View, print, or download my resume.
            </p>

            <div className="flex gap-4 justify-center pt-4 flex-wrap">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-medium hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
              >
                <Printer className="w-5 h-5" />
                Print Resume
              </button>
            </div>
          </div>

          <Card className="dark:bg-zinc-900 dark:border-zinc-800 mb-8 print:shadow-none print:border-none">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8 pb-8 border-b dark:border-zinc-800">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {personalInfo.name}
                </h2>

                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                  {personalInfo.title}
                </p>

                <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-600 dark:text-gray-400">
                  <span>{personalInfo.email}</span>
                  <span>•</span>
                  <span>{personalInfo.phone}</span>
                  <span>•</span>
                  <span>{personalInfo.location}</span>
                </div>

                <div className="flex flex-wrap justify-center gap-3 text-sm text-blue-600 dark:text-blue-400 mt-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                  <span>•</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a
                    href={personalInfo.codeforces}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Codeforces
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Summary
                </h3>

                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                  {resumeSections.summary}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Technical Skills
                </h3>

                <div className="grid md:grid-cols-2 gap-3 text-slate-600 dark:text-gray-400">
                  {resumeSections.skills.map((skill) => (
                    <p key={skill} className="text-sm">
                      • {skill}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Projects
                </h3>

                <div className="space-y-6">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.title}>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {project.title}
                          </p>

                          <p className="text-sm text-blue-600 dark:text-blue-400">
                            {project.tags.join(" • ")}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Education
                </h3>

                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex justify-between items-start gap-4"
                  >
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {edu.degree}
                      </p>

                      <p className="text-blue-600 dark:text-blue-400">
                        {edu.institution}
                      </p>

                      <p className="text-sm text-slate-600 dark:text-gray-400">
                        {edu.gpa}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-gray-400">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Competitive Programming
                </h3>

                <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
                  <li>• Codeforces Specialist</li>
                  <li>• CodeChef 3 Star</li>
                  <li>• Active DSA practice on LeetCode</li>
                  <li>• Primary language for CP: C++</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}