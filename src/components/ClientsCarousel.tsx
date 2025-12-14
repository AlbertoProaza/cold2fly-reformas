"use client";

import Image from "next/image";

export default function ClientsCarousel() {
  const clients = [
    { name: "Cabify", logo: "/clientes/cabify.png" },
    { name: "Hazlegaltuweb", logo: "/clientes/hazlegaltuweb.png" },
    { name: "Hello SEO & SEM", logo: "/clientes/helloseosem.png" },
    { name: "RCO Digital", logo: "/clientes/rcodigital.png" },
    { name: "Wallapop", logo: "/clientes/wallapop.png" },
  ];

  // Duplicar los logos múltiples veces para efecto infinito sin cortes
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="w-full bg-white py-16 overflow-hidden border-t border-gray-100">
      <div className="w-full px-0">
        {/* Título */}
        <h2 className="text-center text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider mb-12">
          Empresas que confían en nosotros
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Gradientes en los bordes para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Carousel animado */}
          <div className="flex">
            <div className="flex animate-scroll-left">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{ width: "180px" }}
                >
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={180}
                    height={80}
                    className="object-contain h-20 w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
