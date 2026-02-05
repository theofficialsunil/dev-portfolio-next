"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Coding Profiles', path: '/coding-profiles' },
  { name: 'Education', path: '/education' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b">
      
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <Link href="/" className="text-xl font-bold">
          SNagar
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-lg ${
                pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-zinc-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col gap-2 bg-white dark:bg-black border rounded-xl p-3 shadow-md">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg transition ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
}
