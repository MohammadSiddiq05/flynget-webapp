// app/components/WhyBetter.tsx

const features = [
  {
    label: "Price",
    flynget: "Up to 70% cheaper",
    courier: "Expensive fees & duties",
    type: "text",
  },
  {
    label: "Delivery Time",
    flynget: "1–3 days",
    courier: "1–4 weeks",
    type: "text",
  },
  { label: "Traveler Matching", flynget: true, courier: false, type: "icon" },
  { label: "Buy & Bring", flynget: true, courier: false, type: "icon" },
  { label: "Escrow Protection", flynget: true, courier: false, type: "icon" },
  { label: "Ratings", flynget: true, courier: false, type: "icon" },
  { label: "Tracking", flynget: true, courier: true, type: "icon" },
];

const Check = () => (
  <div className="w-7 h-7 rounded-full border-2 border-[#9CCA2D] flex items-center justify-center mx-auto">
    <svg
      className="w-3.5 h-3.5 text-[#9CCA2D]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const Cross = () => (
  <div className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto">
    <svg
      className="w-3.5 h-3.5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
);

export default function WhyBetter() {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xs font-semibold tracking-widest text-[#9CCA2D] uppercase mb-2">
          Why Flynget
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          Why Bring is Better
        </h2>
      </div>

      {/* Table */}
      <div className="max-w-2xl mx-auto border border-gray-200 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3">
          <div className="py-4 text-center text-sm text-gray-500 border-b border-gray-200">
            Features
          </div>
          <div className="py-4 text-center text-sm font-semibold text-[#9CCA2D] bg-[#f5faeb] border-b border-gray-200">
            Flynget
          </div>
          <div className="py-4 text-center text-sm text-gray-500 border-b border-gray-200">
            Traditional Couriers
          </div>
        </div>

        {/* Rows */}
        {features.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 ${i !== features.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div className="py-4 text-center text-sm text-gray-600">
              {row.label}
            </div>
            <div className="py-4 text-center text-sm font-medium text-gray-800 bg-[#f5faeb]">
              {row.type === "text" ? row.flynget : <Check />}
            </div>
            <div className="py-4 text-center text-sm text-gray-600">
              {row.type === "text" ? (
                row.courier
              ) : row.courier ? (
                <Check />
              ) : (
                <Cross />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
