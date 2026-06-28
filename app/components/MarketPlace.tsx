import { SearchIcon, ChevronDown } from "./icons";
import TravelerCard, { Traveler } from "./TravelerCard";

const travelers: Traveler[] = [
  { initials: "SA", name: "Sara Ahmed", route: "USA → Germany", rating: 4.9, trips: 27, weight: "8kg", days: 3 },
  { initials: "AK", name: "Ali Khan", route: "UAE → Germany", rating: 4.8, trips: 19, weight: "5kg", days: 2 },
  { initials: "RM", name: "Rania M.", route: "KSA → Germany", rating: 5.0, trips: 34, weight: "10kg", days: 5 },
  { initials: "SA", name: "Sana Ali", route: "USA → Germany", rating: 4.9, trips: 27, weight: "8kg", days: 3 },
  { initials: "AK", name: "Asad K.", route: "UAE → Germany", rating: 4.8, trips: 19, weight: "5kg", days: 2 },
  { initials: "RM", name: "Reema M.", route: "KSA → Germany", rating: 5.0, trips: 34, weight: "10kg", days: 5 },
];

function FilterField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 min-w-[140px] px-3">
      <p className="text-[11px] font-semibold text-neutral-400 uppercase">{label}</p>
      <button className="flex items-center justify-between w-full text-sm font-medium text-neutral-800 mt-0.5">
        {value}
        <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
      </button>
    </div>
  );
}

export default function Marketplace() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-wider text-brand">MARKETPLACE</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Find Travelers Already Heading Your Way</h2>
        <p className="mt-3 text-neutral-600">
          Browse verified travelers like Airbnb hosts — filter by route, date, and luggage capacity.
        </p>
      </div>

      <div className="mt-10 bg-white border border-neutral-200 rounded-2xl shadow-sm p-3 flex flex-wrap gap-3 items-center justify-between">
        <FilterField label="From" value="Karachi, Pakistan" />
        <FilterField label="To" value="Karachi, Pakistan" />
        <FilterField label="Date" value="05-09-2026" />
        <FilterField label="Weight" value="8kg" />
        <FilterField label="Price" value="$0-$10" />
        <button className="flex items-center gap-2 bg-brand hover:bg-brand transition-colors text-neutral-900 font-semibold px-6 py-3 rounded-xl">
          <SearchIcon className="w-4 h-4" />
          Search
        </button>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelers.map((t, i) => <TravelerCard key={i} t={t} />)}
      </div>
    </section>
  );
}