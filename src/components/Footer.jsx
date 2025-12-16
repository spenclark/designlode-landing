export default function Footer() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <footer className="bg-[#F5F3EF] border-t border-[#E0DDD6] px-6 py-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left - Logo and tagline */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <linearGradient id="veinGoldFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f7e6b5" />
                      <stop offset="45%" stopColor="#e6c46b" />
                      <stop offset="100%" stopColor="#c08f2f" />
                    </linearGradient>
                    <filter id="veinGlowFooter" x="-10%" y="-10%" width="120%" height="120%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M10 50 C18 46 22 38 28 36 C34 34 40 26 54 14
                       M24 46 C30 42 34 34 36 26
                       M36 40 C42 36 48 28 50 20"
                    fill="none"
                    stroke="url(#veinGoldFooter)"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#veinGlowFooter)"
                  />
                  <path
                    d="M12 48 C20 44 24 38 30 34 C36 32 42 24 52 16"
                    fill="none"
                    stroke="#fff7d6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                </svg>
                <span className="text-[#1A1814] font-serif text-base font-medium tracking-tight">
                  Designlode
                </span>
              </div>
              <p
                className="text-xs text-[#5A5650]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Web design for mineral, mining, and energy companies
              </p>
            </div>

            {/* Right - Copyright */}
            <div>
              <p
                className="text-xs text-[#5A5650]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                © {new Date().getFullYear()} Designlode. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
