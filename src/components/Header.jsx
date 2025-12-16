export default function Header() {
  return (
    <header className="bg-[#F5F3EF] border-b border-[#E0DDD6] px-6 py-5">
      <div
        className="max-w-[1100px] mx-auto flex items-center justify-between"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 64 64"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="veinGoldHeader" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7e6b5" />
                <stop offset="45%" stopColor="#e6c46b" />
                <stop offset="100%" stopColor="#c08f2f" />
              </linearGradient>
              <filter id="veinGlowHeader" x="-10%" y="-10%" width="120%" height="120%">
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
              stroke="url(#veinGoldHeader)"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#veinGlowHeader)"
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
          <span className="text-[#1A1814] text-lg font-medium tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
            Designlode
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-[#2D2A24] text-sm hover:text-[#C9A961] transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#guarantee"
            className="text-[#2D2A24] text-sm hover:text-[#C9A961] transition-colors font-medium"
          >
            Guarantee
          </a>
          <a
            href="#contact"
            className="text-[#2D2A24] text-sm hover:text-[#C9A961] transition-colors font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu */}
        <button className="md:hidden text-[#2D2A24]">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
