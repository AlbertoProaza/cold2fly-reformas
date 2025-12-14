"use client";

import { useState } from "react";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Carlos Martínez",
      position: "Director General",
      company: "",
      text: "En solo 3 semanas empezamos a recibir solicitudes de presupuesto reales. El sistema de cualificación es increíble, solo me llegan clientes que realmente están listos para contratar. Hemos cerrado 4 reformas importantes en los últimos 2 meses.",
    },
    {
      name: "Laura García",
      position: "Propietaria",
      company: "",
      text: "Lo que más valoro es que no tengo que estar pendiente del móvil todo el día. El sistema automático me envía solo los leads cualificados y yo me dedico a lo que mejor sé hacer: presupuestar y reformar. El ROI ha sido espectacular.",
    },
    {
      name: "Miguel Ángel Torres",
      position: "Socio Fundador",
      company: "",
      text: "Antes probé con otras agencias y solo conseguía curiosos que nunca contrataban. Con este sistema, los leads vienen pre-cualificados con presupuesto y zona confirmados. La tasa de cierre ha mejorado un 300%.",
    },
    {
      name: "Ana Rodríguez",
      position: "CEO",
      company: "",
      text: "El contenido que crean para las campañas es de altísima calidad. No tengo que grabar vídeos ni preocuparme por las redes sociales, ellos se encargan de todo y los resultados hablan por sí solos. 100% recomendable.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF0088] bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Empresas de reformas que ya están generando leads consistentes
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[320px] flex flex-col justify-between">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg
                className="w-12 h-12 text-[#00D4FF] opacity-50"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="border-t border-gray-200 pt-6">
              <p className="font-bold text-gray-900 text-xl">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-[#00D4FF] font-semibold">
                {testimonials[currentIndex].position}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 group"
            aria-label="Testimonio anterior"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-[#00D4FF] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 group"
            aria-label="Siguiente testimonio"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-[#FF0088] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-gradient-to-r from-[#00D4FF] to-[#FF0088]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
