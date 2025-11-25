const services = [
  { title: "Brand Identity", desc: "Logos, visual systems & strategy" },
  { title: "Web Design", desc: "Beautiful, high-converting websites" },
  { title: "Development", desc: "React, Next.js, custom solutions" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="bg-white shadow-xl hover:shadow-2xl transition-shadow rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
