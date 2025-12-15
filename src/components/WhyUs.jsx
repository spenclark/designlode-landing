export default function WhyUs() {
  const reasons = [
    {
      title: "We understand your industry",
      description:
        "We work exclusively with mineral, mining, and energy companies. We know what investors and regulators expect. We know what conveys credibility.",
    },
    {
      title: "No complexity",
      description:
        "You don't need a complicated CMS, analytics dashboard, or integrations you'll never use. You need a website that works and makes you look professional.",
    },
    {
      title: "Clear pricing",
      description:
        "$5,000 flat for a static website. 360 days of support included. No surprises, no upsells, no hidden fees.",
    },
    {
      title: "Long horizons",
      description:
        "We build for companies that think in terms of years and decades, not quarters and campaigns. The work is timeless, not trendy.",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="bg-[#F5F3EF] px-6 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#1A1814] mb-16"
            style={{
              fontFamily: "Libre Baskerville, serif",
              letterSpacing: "-0.02em",
            }}
          >
            Why work with us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reasons.map((reason, idx) => (
              <div key={idx}>
                <h3
                  className="text-xl font-medium text-[#1A1814] mb-3"
                  style={{ fontFamily: "Libre Baskerville, serif" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-base text-[#5A5650] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
