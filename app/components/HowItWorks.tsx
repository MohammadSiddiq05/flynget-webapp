import { ComponentType, SVGProps } from "react";
import { PostIcon, HandshakeIcon, ShieldIcon, BoxCheckIcon } from "./icons";

interface Step {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: PostIcon, title: "Post Request", desc: "Tell us the desired product, packaging, and destination." },
  { icon: HandshakeIcon, title: "Traveler Accept", desc: "A verified traveler heading your way accepts the request." },
  { icon: ShieldIcon, title: "Escrow Payment", desc: "Funds are securely held until delivery is confirmed." },
  { icon: BoxCheckIcon, title: "Delivery Completed", desc: "Confirm receipt and complete the transaction." },
];

export default function HowItWorks() {
  return (
    <section className="bg-brand py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-wider text-neutral-900/70">HOW IT WORKS</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-neutral-900">
          From request to doorstep in 4 steps
        </h2>
        <p className="mt-3 text-neutral-900/70 max-w-xl mx-auto">
          A transparent flow designed around trust and speed — every step protected by escrow.
        </p>

        <div className="mt-14 relative grid grid-cols-4 gap-10">
          <svg
            className="hidden lg:block absolute left-0 top-8 w-full h-10 pointer-events-none"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="
      M 125 40
      C 180 70, 195 70, 250 40
      S 320 10, 375 40
      S 445 70, 500 40
      S 570 10, 625 40
      S 695 70, 750 40
      S 820 10, 875 40
    "
              stroke="rgba(23,23,23,0.45)"
              strokeWidth="2"
              strokeDasharray="4 8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md z-10">
                  <Icon className="w-7 h-7 text-neutral-900" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-900/70 max-w-[180px]">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}