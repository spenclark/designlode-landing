export default function Hero() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="bg-[#F5F3EF] px-6 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          {/* Main headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1A1814] mb-8 max-w-[800px]"
            style={{
              fontFamily: "Libre Baskerville, serif",
              fontWeight: "400",
              letterSpacing: "-0.02em",
            }}
          >
            Websites for exploration and production companies
          </h1>

          {/* Value proposition */}
          <div className="max-w-[600px] mb-12">
            <p
              className="text-lg md:text-xl text-[#2D2A24] leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Your reputation depends on looking credible to investors,
              regulators, and partners. We build static websites that convey
              competence and stability.
            </p>
            <p
              className="text-lg md:text-xl text-[#2D2A24] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="font-semibold text-[#C9A961]">$5,000 flat.</span>{" "}
              Includes 360 days of hosting, edits, content uploads, and
              maintenance. No hidden fees.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#C9A961] text-[#1A1814] font-semibold text-sm tracking-wide hover:bg-[#B89851] transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            START A PROJECT
          </a>
        </div>
      </section>
    </>
  );
}
