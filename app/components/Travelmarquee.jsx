"use client";

const logos = [
  { name: "Airbnb", color: "#FF5A5F" },
  { name: "Booking.com", color: "#003580" },
  { name: "Expedia", color: "#FFC20E" },
  { name: "Emirates", color: "#C8102E" },
  { name: "TripAdvisor", color: "#34E0A1" },
  { name: "Skyscanner", color: "#0770E3" },
  { name: "Marriott", color: "#AA0000" },
  { name: "Hilton", color: "#00205B" },
  { name: "Klook", color: "#FF5722" },
];

function TravelMarquee() {
  const items = [...logos, ...logos];

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
        Trusted by the world's top travel brands
      </h2>
      <p className="text-center text-gray-500 mb-10 text-sm">
        From booking to boarding — they all rely on us
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-marquee">
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default select-none"
            >
              <span
                className="w-8 h-8 rounded-full flex-shrink-0"
                style={{ backgroundColor: logo.color }}
              />
              <span className="text-gray-700 font-semibold text-sm whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelMarquee