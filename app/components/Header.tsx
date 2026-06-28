import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import logo from "../../public/logo-06-removebg-preview.png";

export default function Header() {
  const links = ["How it works", "Verified prices", "Trust & safety", "For travelers"];
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur border-b border-neutral-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5 text-lg font-bold">
          <Image src={logo} alt="Flynget logo" className="h-20 w-auto" priority />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm font-medium">
          <ThemeToggle />
          <a href="#" className="hidden sm:inline text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Sign in</a>
          <a href="#" className="bg-brand hover:opacity-90 transition-opacity text-neutral-900 font-semibold px-4 py-2 rounded-full">
            Request a product
          </a>
        </div>
      </div>
    </header>
  );
}