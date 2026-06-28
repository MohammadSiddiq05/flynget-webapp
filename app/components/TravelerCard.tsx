import { CheckIcon, StarIcon } from "./icons";

export interface Traveler {
  initials: string;
  name: string;
  route: string;
  rating: number;
  trips: number;
  weight: string;
  days: number;
}

export default function TravelerCard({ t }: { t: Traveler }) {
  return (
    <div className="border border-neutral-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-brand text-neutral-900 font-bold flex items-center justify-center">
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-sm flex items-center gap-1">
            {t.name}
            <span className="text-green-500"><CheckIcon className="w-3.5 h-3.5" /></span>
          </p>
          <p className="text-xs text-neutral-500">{t.route}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 text-center text-xs">
        <div>
          <p className="font-bold flex items-center justify-center gap-0.5">
            <StarIcon className="w-3.5 h-3.5 text-brand" />
            {t.rating}
          </p>
          <p className="text-neutral-400">Rating</p>
        </div>
        <div className="border-x border-neutral-100">
          <p className="font-bold">{t.trips}</p>
          <p className="text-neutral-400">Trips</p>
        </div>
        <div>
          <p className="font-bold">{t.weight}</p>
          <p className="text-neutral-400">Capacity</p>
        </div>
      </div>

      <div className="mt-4 h-1.5 rounded-full bg-neutral-100 overflow-hidden">
        <div className="h-full bg-brand w-2/3 rounded-full" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-neutral-500">Fly in {t.days} days</span>
        <a href="#" className="text-xs font-semibold text-brand hover:text-brand">Profile →</a>
      </div>
    </div>
  );
}