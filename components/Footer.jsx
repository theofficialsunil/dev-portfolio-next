"use client";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 dark:text-gray-400 py-12 px-4 transition-colors border-t dark:border-zinc-900">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">SNagar</h3>
            <p className="text-slate-400 dark:text-gray-500">
              Full Stack Developer and Competitive Programmer who enjoys solving problems and building impactful web applications.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="/skills" className="hover:text-blue-400">Skills</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/theofficialsunil" target="_blank">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/sunil-n-03b163320/" target="_blank">
                <Linkedin />
              </a>
              <a href="mailto:sunilnagar682@gmail.com">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-zinc-900 pt-8 text-center">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" />
            by SNagar © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
