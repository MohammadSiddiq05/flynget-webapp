import { StarIcon } from "./icons";

interface Testimonial {
  name: string;
  country: string;
  quote: string;
}

const items: Testimonial[] = [
  { name: "Sarah Johnson", country: "USA", quote: "Got my shopping haul in 3 days for a fraction of the shipping cost. The traveler was verified and super friendly." },
  { name: "Ahmed Khan", country: "Pakistan", quote: "As a traveler, this is by far the easiest way to earn extra cash on flights I was already taking." },
  { name: "Maria Lopez", country: "Spain", quote: "Escrow payment made me feel safe the whole time. Will definitely use Bring again." },
  { name: "James Carter", country: "UK", quote: "Found someone flying my exact route within hours. The whole process felt secure and transparent." },
  { name: "Fatima Noor", country: "UAE", quote: "Saved almost 60% compared to international shipping. Highly recommend it to everyone." },
  { name: "David Kim", country: "South Korea", quote: "Smooth communication, verified profile, and on-time delivery. Exactly what I needed." },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-brand">TESTIMONIALS</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-black">Loved by Shoppers and Travelers Worldwide</h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-neutral-100">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, idx) => <StarIcon key={idx} className="w-4 h-4" />)}
              </div>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand text-neutral-900 text-xs font-bold flex items-center justify-center">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-xs font-semibold">{t.name}</p>
                  <p className="text-[11px] text-neutral-400">{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}