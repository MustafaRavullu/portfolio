import Link from "next/link";
import Navbar from "./navbar";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Typewriter from "./typewriter";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href={"/"}>Mustafa Ravullu</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Developer
        </h2>
        <Typewriter />
        <Navbar />
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs shrink-0">
          <Link
            href={"https://github.com/MustafaRavullu"}
            target="_blank"
            rel="norefferer noopener"
            title="Github"
          >
            <span className="sr-only">Github</span>
            <SiGithub className="h-6 w-6" />
          </Link>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <Link
            href={
              "https://www.linkedin.com/in/muhammed-mustafa-ravullu-810852200/"
            }
            target="_blank"
            rel="norefferer noopener"
            title="Linkedin"
          >
            <span className="sr-only">Linkedin</span>
            <SiLinkedin className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
