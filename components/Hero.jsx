import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 dark:from-black dark:to-zinc-900 px-4 transition-colors pt-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-blue-600 dark:text-blue-400 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
              Sunil Nagar
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 dark:text-gray-300">
              Full Stack Developer & Designer
            </p>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
            I craft beautiful, functional digital experiences. Specializing in modern web applications, 
            UI/UX design, and turning complex problems into elegant solutions.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <Link href={'/Projects'}>
                <Button size="lg" className="gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
                </Button>
            </Link>
            <Link href={'/contact'}>
                <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-4 h-4" /> Get In Touch
                </Button>
            </Link>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a href="https://github.com" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:alex@example.com" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
          </div>
        </div>
      </div>
    </section>
  );
}