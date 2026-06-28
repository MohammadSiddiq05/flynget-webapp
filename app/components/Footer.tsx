import Image from "next/image";
import logo from "../../public/logo-06-removebg-preview.png";

const company: string[] = ["About", "How it works", "FAQs", "Blog"];
const forYou: string[] = ["Become a traveler", "Trust & safety", "Privacy policy", "Terms & conditions"];

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white mb-3">{title}</p>
      <ul className="space-y-2 text-sm text-neutral-400">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a className="flex items-center gap-1.5 -ml-1 cursor-pointer">
            <Image src={logo} alt="Flynget logo" className="h-12 w-auto" priority />
          </a>
          <p className="mt-1 text-sm text-neutral-400 max-w-xs">
            The peer-to-peer global delivery marketplace. Buy anything from anywhere, delivered by trusted travelers.
          </p>
          <div className="mt-4 flex gap-3">
            {["X", "in", "f", "ig"].map((s) => (
              <span key={s} className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs">{s}</span>
            ))}
          </div>
        </div>
        <FooterCol title="Company" links={company} />
        <FooterCol title="For You" links={forYou} />
        <FooterCol title="Legal" links={["Privacy policy", "Terms & conditions", "Cookie policy"]} />
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-neutral-800 text-xs text-neutral-500 flex flex-wrap justify-between gap-2">
        <span>© 2026 FlynGet. All rights reserved.</span>
        <span>Made for travelers worldwide.</span>
      </div>
    </footer>
  );
}