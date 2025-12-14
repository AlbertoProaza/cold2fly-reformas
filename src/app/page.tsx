import HeroBanner from "@/components/HeroBanner";
import ClientsCarousel from "@/components/ClientsCarousel";
import ServiceSteps from "@/components/ServiceSteps";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner />
      <ClientsCarousel />
      <ServiceSteps />
      <TestimonialsCarousel />
    </main>
  );
}
