import LogoMark from "./LogoMark";

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
                <LogoMark size={26} />
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
