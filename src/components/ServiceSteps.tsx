export default function ServiceSteps() {
  const steps = [
    {
      number: "01",
      title: "Adaptación de la oferta a tráfico frío",
      description:
        "Analizamos a fondo tu empresa para definir exactamente qué tipo de reformas realizas, en qué zonas trabajas y a partir de qué presupuesto. Adaptamos tu mensaje para que funcione con personas que no te conocen y filtramos desde el inicio a los curiosos, para que solo te contacten clientes que realmente encajan contigo.",
    },
    {
      number: "02",
      title: "Anuncios optimizados + contenido de apoyo",
      description:
        "Creamos y testeamos anuncios en Instagram y Facebook enfocados en atraer personas que quieren reformar ahora. Además, desarrollamos contenido visual (imágenes, carruseles y publicaciones informativas) para mejorar tu perfil, generar confianza y apoyar a las campañas, lo que ayuda a reducir el coste por lead sin necesidad de que grabes vídeos ni crees contenido.",
    },
    {
      number: "03",
      title: "Sistema automatizado de seguimiento",
      description:
        "Implementamos un sistema automático de seguimiento por WhatsApp y mensajes para contactar rápidamente con cada interesado, mantener su atención y evitar que se enfríe o se pierda el contacto. Así maximizamos cada oportunidad sin que tengas que estar pendiente del móvil todo el día.",
    },
    {
      number: "04",
      title: "Cualificación humana de los contactos",
      description:
        "Nuestro equipo contacta personalmente con cada potencial cliente para validar tipo de reforma, presupuesto, zona y urgencia. Solo te enviamos personas realmente interesadas en que les hagas un presupuesto, para que tú te centres en visitar, presupuestar y cerrar obras.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cómo funciona el{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF0088] bg-clip-text text-transparent">
              sistema
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso probado en 4 pasos que genera resultados consistentes
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Número del paso */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF0088] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight pt-2">
                  {step.title}
                </h3>
              </div>

              {/* Descripción */}
              <p className="text-gray-600 leading-relaxed pl-16">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
