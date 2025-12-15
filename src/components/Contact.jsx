"use client";

import { useState } from "react";

export default function Contact() {
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
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

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
                className="text-base text-[#5A5650] leading-relaxed mb-8"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Tell us about your company and what you need. We'll respond
                within 24 hours with next steps.
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
                  className="w-full px-8 py-4 bg-[#C9A961] text-[#1A1814] font-semibold text-sm tracking-wide hover:bg-[#B89851] transition-colors disabled:opacity-50"
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
                    Failed to send message. Please try again or email us
                    directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
