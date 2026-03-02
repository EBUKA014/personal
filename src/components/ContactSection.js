"use client";

import { Phone, MessageSquare, MapPin } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name?.value?.trim() || "No name provided";
    const problem = form.elements.problem?.value?.trim() || "No description provided";
    const message = `New Repair Request\n\nName: ${name}\nProblem:\n${problem}\n\nPlease contact me as soon as possible.`;
    const waUrl = `https://wa.me/16812126242?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section className="bg-stone-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* CTA Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Need Help? Let’s Fix Your Computer Today.
          </h2>
          <p className="opacity-90">
            Contact me now for fast and affordable repair services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white text-[#950] p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">
              Book a Repair
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label className="block mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#950]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#950]"
                />
              </div>

              {/* Problem Description */}
              <div>
                <label className="block mb-2 font-semibold">
                  Describe the Problem
                </label>
                <textarea
                  name="problem"
                  rows="4"
                  placeholder="Tell me what's wrong with your computer..."
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#950]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#950] text-white py-3 rounded-lg font-semibold hover:bg-[#730040] transition"
              >
                Submit Request (send via WhatsApp)
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">

            {/* Phone */}
            <div>
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Phone size={20} /> Call Me
              </h4>
              <a
                href="tel:+16812126242"
                className="text-lg underline hover:opacity-80"
              >
                +1 681-212-6242
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare size={20} /> WhatsApp
                </h4>
                <a
                  href="https://wa.me/16812126242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Chat on WhatsApp
                </a>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <MapPin size={20} /> Location
                </h4>
                <p className="text-lg">
                  Morgantown, WV
                </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}