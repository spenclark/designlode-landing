export default function Header() {
  return (
    <header className="bg-[#F5F3EF] border-b border-[#E0DDD6] px-6 py-5">
      <div
        className="max-w-[1100px] mx-auto flex items-center justify-between"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C9A961] rounded-sm"></div>
          <span className="text-[#1A1814] font-serif text-lg font-medium tracking-tight">
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
