export default function WhyChooseMe() {
  return (
    <section className="bg-stone-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Me
        </h2>

        {/* Trust Points */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-3">✅ Affordable Pricing</h3>
            <p className="text-sm opacity-90">
              Quality computer repair services at fair and transparent prices.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-3">✅ Fast Same-Day Service</h3>
            <p className="text-sm opacity-90">
              Most repairs completed within the same day.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-3">✅ 100% Satisfaction Guarantee</h3>
            <p className="text-sm opacity-90">
              I make sure your computer works perfectly before delivery.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-3">✅ Free Initial Diagnosis</h3>
            <p className="text-sm opacity-90">
              I check your device and explain the issue before any repair.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-3">✅ 3+ Years Experience</h3>
            <p className="text-sm opacity-90">
              Experienced in hardware upgrades, formatting and repairs.
            </p>
          </div>

        </div>

        {/* Photo + Before After Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          {/* Real Photo */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Professional & Reliable Service
            </h3>
            <p className="opacity-90 mb-6">
              I personally handle every repair to ensure quality and attention to detail.
            </p>
            <img
              src="/your-photo.jpg"
              alt="Technician repairing laptop"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Before / After */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Before & After Results
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/before.jpg"
                alt="Before repair"
                className="rounded-lg shadow-md"
              />
              <img
                src="/after.jpg"
                alt="After repair"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-10">
            What Clients Say
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white text-[#950] p-6 rounded-xl shadow-lg">
              <p className="mb-4">
                "My laptop was very slow. After formatting, it works like new!"
              </p>
              <h4 className="font-semibold">— Ahmed K.</h4>
            </div>

            <div className="bg-white text-[#950] p-6 rounded-xl shadow-lg">
              <p className="mb-4">
                "Fast keyboard replacement and very professional service."
              </p>
              <h4 className="font-semibold">— Sarah M.</h4>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
} 