// app/components/Footer.tsx

const company = ["About", "How it works", "Trust & safety", "Blog"];
const forYou = ["Become a traveler", "FAQs", "Trust & safety", "Contact"];
const legal = ["Privacy policy", "Terms & conditions"];

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center text-gray-500 hover:border-gray-500 cursor-pointer">
    {children}
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-10 pt-12 pb-6">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & Desc */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[#9CCA2D] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 fill-gray-900" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">FlynGet</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              The peer-to-peer global delivery marketplace. Buy anything from
              abroad, delivered by trusted travelers.
            </p>
            <div className="flex gap-2">
              <SocialIcon>
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h7v-7h-2v-3h2V9a3 3 0 013-3h3v3h-2c-.6 0-1 .4-1 1v2h3l-.5 3H15v7h4a2 2 0 002-2V5a2 2 0 00-2-2z" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.131 4.602.43 3.635 1.397 2.668 2.364 2.369 3.537 2.31 4.815 2.252 6.095 2.238 6.503 2.238 12c0 5.497.014 5.905.072 7.185.059 1.278.358 2.451 1.325 3.418.967.967 2.14 1.266 3.418 1.325C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.059 2.451-.358 3.418-1.325.967-.967 1.266-2.14 1.325-3.418.058-1.28.072-1.688.072-7.185 0-5.497-.014-5.905-.072-7.185-.059-1.278-.358-2.451-1.325-3.418C19.398.43 18.225.131 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-800"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For You */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              For You
            </h4>
            <ul className="flex flex-col gap-2.5">
              {forYou.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-800"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {legal.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-800"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-400">
            © 2026 Bring. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Made for a more connected, borderless world.
          </p>
        </div>
      </div>
    </footer>
  );
}
