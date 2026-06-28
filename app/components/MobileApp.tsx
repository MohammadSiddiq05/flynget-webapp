// app/components/MobileApp.tsx

const PhoneMockup = ({ showLogo = false }: { showLogo?: boolean }) => (
  <div className="relative w-55 h-100 bg-white rounded-[1.6rem] border-[8px] border-gray-900 shadow-xl overflow-hidden flex-shrink-0">
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-gray-900 rounded-b-2xl z-10" />

    {showLogo ? (
      <div className="flex items-center justify-center h-full">
        <span className="text-2xl font-bold text-[#9CCA2D]">FlynGet</span>
      </div>
    ) : (
      <div className="pt-8 px-3 flex flex-col gap-3">
        <div className="flex items-center gap-1.5 mt-1">
          <div className="w-4 h-4 bg-[#f0f7e0] rounded-full" />
          <span className="text-xs font-semibold text-gray-700">Discover</span>
        </div>

        <div className="bg-[#9CCA2D] rounded-xl p-3">
          <p className="text-xs font-semibold text-gray-900">Active delivery</p>
          <p className="text-xs text-gray-800 mt-0.5">iPhone 17 Pro · 2 days</p>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-2 py-1.5">
          <div className="w-5 h-5 bg-[#f0f7e0] rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-2.5 h-2.5 text-[#9CCA2D]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
            </svg>
          </div>
          <span className="text-xs text-gray-600">USA → Germany</span>
        </div>
      </div>
    )}
  </div>
)

export default function MobileApp() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-widest text-[#9CCA2D] uppercase mb-2">Mobile App</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">FlynGet, Right In Your Pocket</h2>
        <p className="text-sm text-gray-500">Request, match, pay and track — a beautifully simple experience on iOS and Android.</p>
      </div>

      {/* All phones in one line, vertically aligned at bottom */}
      <div className="flex items-end justify-center gap-22">
        <PhoneMockup showLogo={true} />
        <PhoneMockup />
        <PhoneMockup />
        <PhoneMockup />
      </div>
    </section>
  )
}