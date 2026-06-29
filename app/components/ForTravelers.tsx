// app/components/ForTravelers.tsx

const routes = [
  { from: "USA", to: "Germany", earned: "$35 Earned" },
  { from: "UK", to: "Germany", earned: "$55 Earned" },
  { from: "Karachi", to: "UAE", earned: "$35 Earned" },
]

const PlaneIcon = () => (
  <div className="w-7 h-7 bg-[#f0f7e0] rounded-full flex items-center justify-center">
    <svg className="w-3.5 h-3.5 text-[#9CCA2D]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
    </svg>
  </div>
)

export default function ForTravelers() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left */}
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-widest text-[#9CCA2D] uppercase mb-3">For Travelers</p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
            Turn Every Flight Into Extra Income
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Use your unused luggage allowance to deliver products and earn on routes you already fly.
          </p>
          <button className="bg-[#9CCA2D] hover:bg-[#8ab826] text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-md">
            Become a Traveler
          </button>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full">
          <p className="text-sm text-gray-500 mb-1">Monthly Earnings</p>
          <div className="flex items-center justify-between mb-5">
            <span className="text-4xl font-bold text-[#9CCA2D]">$450</span>
            <span className="text-xs font-semibold text-[#9CCA2D] bg-[#f0f7e0] px-2 py-1 rounded-full">↗ +28%</span>
          </div>

          <div className="flex flex-col gap-3">
            {routes.map((r, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5">
                <div className="flex items-center gap-2.5">
                  <PlaneIcon />
                  <span className="text-sm text-gray-700">{r.from} → {r.to}</span>
                </div>
                <span className="text-sm font-semibold text-[#9CCA2D]">{r.earned}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}