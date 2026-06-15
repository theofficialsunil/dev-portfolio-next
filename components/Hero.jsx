// components/Hero.jsx

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Trophy,
  Code2,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { personalInfo, codingProfilesFallback } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 dark:from-black dark:to-zinc-900 px-4 transition-colors pt-24 pb-16">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <div className="space-y-4">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              {personalInfo.name}
            </h1>

            <p className="text-2xl md:text-3xl text-slate-600 dark:text-gray-300">
              Full Stack Developer & Competitive Programmer
            </p>
          </div>

          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            CSE undergraduate at IIIT Surat building full-stack web applications
            and improving algorithmic problem-solving through competitive
            programming. Focused on Next.js, backend systems, databases, and
            scalable software engineering fundamentals.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/coding-profiles">
              <Button size="lg" variant="outline" className="gap-2">
                <Code2 className="w-4 h-4" />
                Coding Profiles
              </Button>
            </Link>

            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border dark:border-zinc-800 bg-white dark:bg-black shadow-2xl p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  Current Focus
                </p>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Building projects + solving hard problems
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <HeroStat
                  icon={Trophy}
                  label="Codeforces"
                  value={`${codingProfilesFallback.codeforces.rating}+`}
                  subValue="Specialist"
                />

                <HeroStat
                  icon={Trophy}
                  label="LeetCode"
                  value={codingProfilesFallback.leetcode.level}
                  subValue={`${codingProfilesFallback.leetcode.rating}+ Rating`}
                />

                <HeroStat
                  icon={Code2}
                  label="Projects"
                  value="3+"
                  subValue="Full-stack/system projects"
                />

                <HeroStat
                  icon={GraduationCap}
                  label="Education"
                  value="IIIT Surat"
                  subValue="CSE 2028"
                />
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900 p-5 border dark:border-zinc-800">
                <p className="text-sm text-slate-500 dark:text-gray-400 mb-3">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "Node.js",
                    "PostgreSQL",
                    "Prisma",
                    "MongoDB",
                    "Redis",
                    "C++",
                    "DSA",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white dark:bg-black border dark:border-zinc-800 text-sm text-slate-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -z-10 -inset-4 bg-blue-500/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ icon: Icon, label, value, subValue }) {
  return (
    <div className="rounded-2xl border dark:border-zinc-800 p-5 bg-slate-50 dark:bg-zinc-900">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>

        <p className="text-sm text-slate-500 dark:text-gray-400">{label}</p>
      </div>

      <p className="text-2xl font-bold text-slate-900 dark:text-white">
        {value}
      </p>

      <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
        {subValue}
      </p>
    </div>
  );
}