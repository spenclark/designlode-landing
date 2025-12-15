export default function Guarantee() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section id="guarantee" className="bg-[#1A1814] px-6 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[700px]">
            <h2
              className="text-3xl md:text-4xl text-[#F5F3EF] mb-8"
              style={{
                fontFamily: "Libre Baskerville, serif",
                letterSpacing: "-0.02em",
              }}
            >
              Our guarantee
            </h2>

            <div className="space-y-6">
              <p
                className="text-lg text-[#E0DDD6] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                If we miss a deadline, drop the ball on a meeting, or get
                something wrong late in the process,{" "}
                <span className="text-[#C9A961] font-semibold">
                  we refund $500
                </span>
                . No debate. No forms to fill out.
              </p>

              <p
                className="text-lg text-[#E0DDD6] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Your time is valuable. Your capital is finite. Your reputation
                is everything. We take that seriously.
              </p>

              <p
                className="text-base text-[#C9A961] leading-relaxed border-l-2 border-[#C9A961] pl-6 mt-8"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                This is not marketing. This is accountability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
