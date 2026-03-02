export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Computer Formatting",
      description: ["Windows installation", "Virus removal", "Speed optimization"],
    },
    {
      icon: "⌨️",
      title: "Keyboard Replacement",
      description: ["Laptop keyboard repair", "External keyboard setup"],
    },
    {
      icon: "🔧",
      title: "Hardware Repair",
      description: ["RAM upgrades", "SSD installation", "Motherboard issues"],
    },
    {
      icon: "⚡",
      title: "Performance Upgrade",
      description: ["SSD upgrade", "System cleaning", "Thermal paste replacement"],
    },
  ];

  return (
    <section className="bg-stone-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform transition hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <ul className="mb-6 text-sm space-y-2 text-white/90">
                {service.description.map((item, i) => (
                  <li key={i} className="">
                    {item}
                  </li>
                ))}
              </ul>

              <button className="bg-white text-stone-950 px-4 py-2 rounded-md font-semibold">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}