"use client";

import { useState } from "react";

function Header() {
  return (
    <header className="bg-[#F5F3EF] border-b border-[#E0DDD6] px-6 py-5">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">
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

function Hero() {
  return (
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
            className="text-lg md:text-xl text-[#2D2A24] leading-relaxed mb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            For mineral, mining, and energy operators.
          </p>
          <p
            className="text-lg md:text-xl text-[#2D2A24] leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Complete company sites from{" "}
            <span className="font-semibold text-[#C9A961]">$5,000</span>.
          </p>
        </div>

        {/* CTA - now outline style */}
        <a
          href="#contact"
          className="inline-block px-8 py-4 border-2 border-[#C9A961] text-[#C9A961] font-semibold text-sm tracking-wide hover:bg-[#C9A961] hover:text-[#1A1814] transition-colors"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          START A PROJECT
        </a>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Static websites",
      price: "From $5,000",
      description:
        "Complete company sites for exploration and production operators. Static builds. No logins. No moving parts.",
      details: [
        "Custom design for your company",
        "Works on desktop and mobile",
        "360 days of support included",
        "Larger builds scoped as needed",
      ],
      primary: true,
    },
    {
      title: "Front-end development",
      price: "By project",
      description:
        "Front-end work for companies that need more than a standard site. Investor portals, internal tools, and larger web builds. Clean code. Clear documentation. Delivered as agreed.",
      details: [
        "Larger builds beyond the base site",
        "Modern frameworks when appropriate",
        "Integration with existing systems",
        "Desktop and mobile support",
      ],
    },
    {
      title: "Deck design",
      price: "By project",
      description:
        "Investor and board materials for financings and transactions. Structure, slides, and light video edits handled in-house. Focused on what capital providers actually look for. Prepared by our in-house financial team.",
      details: [
        "Financing and transaction decks",
        "Investor and board presentations",
        "Short video edits from existing footage",
      ],
    },
    {
      title: "Social media profiles",
      price: "By project",
      description:
        "Professional company and executive profiles. Built to look established and legitimate.",
      details: [
        "LinkedIn company pages",
        "Executive profiles",
        "Consistent presentation",
      ],
    },
  ];

  return (
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
            Work for mineral, mining, and energy companies.
            <br />
            Clear scope. Simple process.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`border p-8 ${
                service.primary
                  ? "border-[#D4B976] bg-[#FDFCFA]"
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
                {/* Softer price styling */}
                <span
                  className="text-base font-medium text-[#C9A961]"
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
  );
}

function Guarantee() {
  return (
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

          <div className="space-y-4">
            <p
              className="text-lg text-[#E0DDD6] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Missed deadlines, missed meetings, or late errors trigger a{" "}
              <span className="text-[#C9A961] font-semibold">$500 refund</span>.
            </p>

            <p
              className="text-lg text-[#E0DDD6] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We respect your time, capital, and reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      title: "Industry context",
      description:
        "Work focused on mineral, mining, and energy companies. Built to meet the expectations of investors, regulators, and partners.",
    },
    {
      title: "No complexity",
      description:
        "Static sites without unnecessary systems or tooling. Sites that work, load quickly, and present cleanly.",
    },
    {
      title: "Clear pricing",
      description:
        "$5,000 is the floor for a straightforward company site. Larger projects are scoped and priced before work begins.",
    },
    {
      title: "Long horizons",
      description:
        "Work designed to hold up over years, not quarters. Timeless by default.",
    },
  ];

  return (
    <section className="bg-[#F5F3EF] px-6 py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto">
        <h2
          className="text-3xl md:text-4xl text-[#1A1814] mb-16"
          style={{
            fontFamily: "Libre Baskerville, serif",
            letterSpacing: "-0.02em",
          }}
        >
          How we work
        </h2>

        <div className="space-y-10 max-w-[700px]">
          {reasons.map((reason, idx) => (
            <div key={idx}>
              <h3
                className="text-lg font-medium text-[#1A1814] mb-2"
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
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    projectDescription: "",
    timeline: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        projectDescription: "",
        timeline: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-white px-6 py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column - Info */}
          <div>
            <h2
              className="text-3xl md:text-4xl text-[#1A1814] mb-6"
              style={{
                fontFamily: "Libre Baskerville, serif",
                letterSpacing: "-0.02em",
              }}
            >
              Start a project
            </h2>
            <p
              className="text-base text-[#5A5650] leading-relaxed mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Tell us about your company and what you need.
            </p>
            <p
              className="text-base text-[#5A5650] leading-relaxed mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We&apos;ll respond within 24 hours with next steps.
            </p>
            <p
              className="text-sm text-[#5A5650] leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Minimum engagement: <span className="font-semibold">$5,000</span>.
              Larger projects are priced from that floor after review.
            </p>

            <div className="space-y-4">
              <div>
                <p
                  className="text-sm text-[#2D2A24] font-medium mb-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@designlode.com"
                  className="text-sm text-[#C9A961] hover:underline"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  hello@designlode.com
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-[#2D2A24] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Company name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E0DDD6] bg-white text-[#1A1814] focus:outline-none focus:border-[#C9A961]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              <div>
                <label
                  htmlFor="contactPerson"
                  className="block text-sm font-medium text-[#2D2A24] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E0DDD6] bg-white text-[#1A1814] focus:outline-none focus:border-[#C9A961]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2D2A24] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E0DDD6] bg-white text-[#1A1814] focus:outline-none focus:border-[#C9A961]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              <div>
                <label
                  htmlFor="projectDescription"
                  className="block text-sm font-medium text-[#2D2A24] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Brief project description
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E0DDD6] bg-white text-[#1A1814] focus:outline-none focus:border-[#C9A961] resize-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-[#2D2A24] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Preferred timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g. Within 3 months"
                  className="w-full px-4 py-3 border border-[#E0DDD6] bg-white text-[#1A1814] focus:outline-none focus:border-[#C9A961]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-3.5 border-2 border-[#C9A961] text-[#C9A961] font-semibold text-sm tracking-wide hover:bg-[#C9A961] hover:text-[#1A1814] transition-colors disabled:opacity-50"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status === "success" && (
                <p
                  className="text-sm text-[#5A5650]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Message sent. We'll respond within 24 hours.
                </p>
              )}

              {status === "error" && (
                <p
                  className="text-sm text-red-700"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Failed to send message. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#F5F3EF] border-t border-[#E0DDD6] px-6 py-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left - Logo and tagline */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 bg-[#C9A961] rounded-sm"></div>
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
  );
}

export default function HomePage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />

        <Services />
        <Guarantee />
        <WhyUs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
