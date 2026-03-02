export default function PricingPreview() {
  return (
    <section className="bg-stone-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#950] mb-6">
          Simple & Transparent Pricing
        </h2>

        <p className="text-white/90 mb-16">
          Affordable starting prices with no hidden fees.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Formatting */}
          <div className="border border-[#950]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-[#950] mb-4">
              Computer Formatting
            </h3>

            <p className="text-4xl font-bold mb-6">
              $30
              <span className="text-lg font-normal text-white/80">
                {" "}Starting From
              </span>
            </p>

            <ul className="text-white/90 mb-8 space-y-2">
              <li>✔ Windows Installation</li>
              <li>✔ Virus Removal</li>
              <li>✔ Speed Optimization</li>
            </ul>

            <button className="bg-[#950] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#730040] transition">
              Book Now
            </button>
          </div>

          {/* Keyboard Replacement */}
          <div className="border-2 border-[#950] rounded-2xl p-8 shadow-2xl scale-105">
            <h3 className="text-2xl font-bold text-[#950] mb-4">
              Keyboard Replacement
            </h3>

            <p className="text-4xl font-bold mb-6">
              $40
              <span className="text-lg font-normal text-white/80">
                {" "}Starting From
              </span>
            </p>

            <ul className="text-white/90 mb-8 space-y-2">
              <li>✔ Laptop Keyboard Repair</li>
              <li>✔ External Setup</li>
              <li>✔ Full Testing</li>
            </ul>

            <button className="bg-[#950] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#730040] transition">
              Book Now
            </button>
          </div>

          {/* SSD Upgrade */}
          <div className="border border-[#950]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-[#950] mb-4">
              SSD Upgrade
            </h3>

            <p className="text-4xl font-bold mb-6">
              $60
              <span className="text-lg font-normal text-white/80">
                {" "}Starting From
              </span>
            </p>

            <ul className="text-white/90 mb-8 space-y-2">
              <li>✔ SSD Installation</li>
              <li>✔ Data Transfer</li>
              <li>✔ System Optimization</li>
            </ul>

            <button className="bg-[#950] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#730040] transition">
              Book Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}