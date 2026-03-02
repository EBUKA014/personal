export default function Hero() {
  return (
    <section className="bg-stone-950 text-white min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fast & Affordable Computer Repair Services
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Keyboard replacement, Windows formatting, hardware upgrades &amp; more.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-stone-950 px-6 py-3 rounded-md font-semibold">
            Book a Repair
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-md font-semibold">
            Get Free Diagnosis
          </button>

          <button className="bg-white text-stone-950 px-6 py-3 rounded-md font-semibold">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}