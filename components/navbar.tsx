"use client";

import { useActiveSectionContext } from "@/contexts/active-section-context";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const { active, setActive, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className="group flex items-center py-3"
              href={link.link}
              onClick={() => {
                setActive(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              <span
                className={cn(
                  "nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                  link.name === active && "w-16 bg-slate-200"
                )}
              ></span>
              <span
                className={cn(
                  "nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                  link.name === active && "text-slate-200"
                )}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
