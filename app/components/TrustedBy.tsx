// app/components/TrustedBy.tsx

const flags = [
  <svg viewBox="0 0 60 40" className="w-20 h-14"><rect width="60" height="40" fill="#fff"/><rect width="15" height="40" fill="#D52B1E"/><rect x="45" width="15" height="40" fill="#D52B1E"/><path d="M30 8l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#D52B1E"/></svg>,
  <svg viewBox="0 0 60 40" className="w-20 h-14"><rect width="60" height="40" fill="#8D1B3D"/><rect width="18" height="40" fill="#fff"/><path d="M18 0l-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4H18V0z" fill="#8D1B3D"/></svg>,
  <svg viewBox="0 0 60 40" className="w-20 h-14"><rect width="60" height="40" fill="#B22234"/><rect y="6" width="60" height="5" fill="#fff"/><rect y="15" width="60" height="5" fill="#fff"/><rect y="24" width="60" height="5" fill="#fff"/><rect y="33" width="60" height="5" fill="#fff"/><rect width="25" height="21" fill="#3C3B6E"/></svg>,
  <svg viewBox="0 0 60 40" className="w-20 h-14"><rect width="60" height="40" fill="#fff"/><circle cx="30" cy="20" r="10" fill="#BC002D"/></svg>,
  <svg viewBox="0 0 60 40" className="w-20 h-14"><rect width="60" height="40" fill="#006C35"/><text x="30" y="24" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="Arial">🌙</text></svg>,
  <svg viewBox="0 0 60 40" className="w-20 h-14"><rect width="60" height="40" fill="#003399"/><circle cx="30" cy="20" r="10" fill="none" stroke="#FFCC00" strokeWidth="1"/>{[...Array(12)].map((_,i)=>{const a=(i*30-90)*Math.PI/180;return <circle key={i} cx={30+9*Math.cos(a)} cy={20+9*Math.sin(a)} r="1.5" fill="#FFCC00"/>})}</svg>,
  <svg viewBox="0 0 60 40" className="w-20 h-14"><rect width="60" height="40" fill="#fff"/><rect width="60" height="13" fill="#00732F"/><rect y="27" width="60" height="13" fill="#000"/><rect width="18" height="40" fill="#FF0000"/></svg>,
]

export default function TrustedBy() {
  return (
    <section className="bg-white py-12 px-6">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-10">
        Trusted by Travelers Across the World
      </p>
      <div className="flex items-center justify-center gap-26 flex-wrap">
        {flags.map((flag, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-md border border-gray-100">
            {flag}
          </div>
        ))}
      </div>
    </section>
  )
}