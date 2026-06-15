// app/about/page.jsx

import { aboutStats, personalInfo } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/im1.avif"
                alt="Workspace"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  About Me
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                  Building software with problem-solving at the core
                </h1>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                <p>
                  I am {personalInfo.name}, a Computer Science undergraduate at
                  IIIT Surat. My main focus areas are full-stack development,
                  data structures and algorithms, and competitive programming.
                </p>

                <p>
                  I build web applications using Next.js, JavaScript, Node.js,
                  PostgreSQL, Prisma, Redis, and Tailwind CSS. I also spend
                  consistent time improving my algorithmic problem-solving
                  through Codeforces, CodeChef, and LeetCode.
                </p>

                <p>
                  My current goal is to become stronger in software engineering
                  fundamentals, build resume-grade projects, and improve contest
                  performance for internships and placements.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </p>
                    <p className="text-slate-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}