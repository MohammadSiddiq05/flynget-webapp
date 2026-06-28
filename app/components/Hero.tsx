import Image from "next/image";
import { CheckIcon } from "./icons";
import heroimg from "../../public/heroing.png";
import worldmap from "../../public/mapimg.png";

export default function Hero() {
  const features = ["Up to 60% cheaper", "Delivery in 3-7 days", "Verified travelers", "Escrow protected"];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand bg-black px-3 py-1 rounded-full mb-5">
          ✦ The new peer-to-peer global delivery network
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Buy Anything <span className="text-brand">From Abroad.</span> Delivered by Trusted Travelers.
        </h1>

        <p className="mt-5 text-neutral-400 text-lg max-w-md">
          Skip expensive international shipping. Connect with verified travelers.
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-3 max-w-md">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm font-medium text-neutral-400">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand/20 text-brand shrink-0">
                <CheckIcon className="w-3 h-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#" className="bg-brand hover:bg-brand transition-colors text-neutral-900 font-semibold px-6 py-3 rounded-full">
            Request a product
          </a>
          <a href="#" className="border border-neutral-300 hover:bg-white hover:text-black transition-colors font-semibold px-6 py-3 rounded-full">
            Become a traveler
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-100">
          <Image
            src={heroimg}
            alt="Travelers meeting"
            className="w-full h-full object-cover"
            placeholder="blur"
          />
        </div>

        <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-white rounded-2xl shadow-xl p-3.5 w-56">
          <div className="h-36 rounded-lg relative overflow-hidden border border-neutral-100">
            <Image
              src={worldmap}
              alt="World map"
              fill
              className="object-cover"
            />

            <svg viewBox="0 0 220 140" className="absolute inset-0 w-full h-full" fill="none">
              <path d="M 28 35 Q 80 30, 132 80" stroke="#FACC15" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              <circle cx="28" cy="35" r="2.5" fill="#FACC15" />
              <circle cx="132" cy="80" r="3" fill="#171717" />
              <line x1="129" y1="77" x2="135" y2="83" stroke="white" strokeWidth="0.8" />
              <line x1="135" y1="77" x2="129" y2="83" stroke="white" strokeWidth="0.8" />
            </svg>
            <span className="absolute left-8 top-3.5 text-[9px] font-medium text-neutral-900 bg-white/85 px-1 rounded">
              New York
            </span>
            <span className="absolute left-[118px] top-[90px] text-[9px] font-medium text-neutral-900 bg-white/85 px-1 rounded">
              Karachi, PK
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-2">New York → Karachi</p>
        </div>
      </div>
    </section>
  );
}