export default function HeroBanner() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-5xl mx-auto">
          En menos de 14 días te instalamos un{" "}
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF0088] bg-clip-text text-transparent">
            sistema automatizado
          </span>{" "}
          que genera entre 10 y 20 solicitudes de presupuesto{" "}
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF0088] bg-clip-text text-transparent">
             reales
          </span>{" "}
          cada mes.
        </h1>

        {/* Garantía */}
        <div className="mb-8 flex items-center justify-center gap-2 text-base md:text-lg text-gray-700">
          <span className="text-2xl">🔥</span>
          <p>
            Si no lo consigues, trabajamos 1:1 contigo{" "}
            <span className="font-bold text-[#00D4FF]">GRATIS</span> hasta que lo consigas
          </p>
          <span className="text-2xl">🔥</span>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-8 shadow-lg border-4 border-gray-200">
          <iframe
            src="https://player.vimeo.com/video/1146566181?badge=0&autopause=0&player_id=0&app_id=58479"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Video VSL"
          ></iframe>
        </div>

        {/* Botón CTA */}
        <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out rounded-full overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105">
          {/* Gradiente de fondo */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#FF0088] via-[#FF0088] to-[#00D4FF] group-hover:from-[#00D4FF] group-hover:to-[#FF0088] transition-all duration-500"></span>
          
          {/* Efecto de brillo animado */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:translate-x-full transition-all duration-700"></span>
          
          {/* Texto del botón */}
          <span className="relative flex items-center gap-2">
            Agendar Llamada
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
