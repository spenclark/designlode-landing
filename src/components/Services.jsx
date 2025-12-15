export default function Services() {
  const services = [
    {
      title: "Static Websites",
      price: "$5,000",
      description:
        "A complete website for your exploration or production company. Designed to convey credibility to investors, regulators, and partners. Includes 360 days of hosting, edits, content uploads, and maintenance.",
      details: [
        "Custom design built for your company",
        "Optimized for all devices",
        "Fast, secure, and reliable",
        "360 days of support included",
      ],
      primary: true,
    },
    {
      title: "Front-End Development",
      price: "By project",
      description:
        "Interface work for applications and internal tools. Clean code, clear documentation, delivered on time.",
      details: [
        "React and modern frameworks",
        "Integration with existing systems",
        "Responsive and accessible",
      ],
    },
    {
      title: "Deck Design",
      price: "By project",
      description:
        "Presentation design for financings, investor updates, and regulatory submissions. Professional, clear, and effective.",
      details: [
        "Financial presentations",
        "Investor decks",
        "Technical reports",
      ],
    },
    {
      title: "Social Media Profiles",
      price: "By project",
      description:
        "Professional LinkedIn and company profiles that make your business look established and legitimate.",
      details: [
        "LinkedIn company pages",
        "Executive profiles",
        "Consistent branding",
      ],
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section id="services" className="bg-white px-6 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          {/* Section heading */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl text-[#1A1814] mb-4"
              style={{
                fontFamily: "Libre Baskerville, serif",
                letterSpacing: "-0.02em",
              }}
            >
              What we do
            </h2>
            <p
              className="text-base text-[#5A5650] max-w-[600px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We specialize in the mineral, mining, and energy industries. No
              fluff, no complexity, no wasted time.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`border p-8 ${
                  service.primary
                    ? "border-[#C9A961] bg-[#FDFCFA]"
                    : "border-[#E0DDD6] bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className="text-xl font-medium text-[#1A1814]"
                    style={{ fontFamily: "Libre Baskerville, serif" }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="text-lg font-semibold text-[#C9A961]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {service.price}
                  </span>
                </div>

                <p
                  className="text-sm text-[#2D2A24] leading-relaxed mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-[#5A5650] flex items-start"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <span className="text-[#C9A961] mr-2">—</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
