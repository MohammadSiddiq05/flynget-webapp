// app/components/CTA.tsx

export default function CTA() {
  return (
    <section className="px-6 py-6 bg-white">
      <div className="max-w-6xl mx-auto bg-[#9CCA2D] rounded-2xl px-10 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
          The Future of Global Shopping Is <br /> Already Flying.
        </h2>
        <p className="text-sm text-gray-800 mb-8">
          Join thousands of travelers and shoppers making <br />
          international delivery faster, cheaper, and more human.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-white text-gray-900 font-medium text-sm px-5 py-2.5 rounded-full hover:bg-gray-100">
            Request a Product
          </button>
          <button className="bg-gray-900 text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-black">
            Become a Traveler
          </button>
        </div>
      </div>
    </section>
  );
}
