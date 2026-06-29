// app/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-13 h-16 border-b border-gray-100 bg-white">
      <a href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#9CCA2D] rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 fill-gray-900" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
          </svg>
        </div>
        <span className="text-lg font-bold tracking-tight text-gray-900">FlynGet</span>
      </a>

      <ul className="flex items-center gap-8">
        {["How it works", "Market place", "Trust & safety", "For travelers"].map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">{link}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-4 py-2 hover:border-gray-500">
          Sign in
        </button>
        <button className="text-sm font-semibold text-gray-900 bg-[#9CCA2D] rounded-md px-4 py-2 hover:bg-[#8ab826]">
          Request a product
        </button>
      </div>
    </nav>
  )
}