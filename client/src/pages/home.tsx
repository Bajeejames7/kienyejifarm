import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import HeritageSection from "@/components/heritage-section";
import ProductsSection from "@/components/products-section";
import AboutSection from "@/components/about-section";
import OrderSection from "@/components/order-section";
import TestimonialsSection from "@/components/testimonials-section";
import GallerySection from "@/components/gallery-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HeritageSection />
      <ProductsSection />
      <AboutSection />
      <OrderSection />
      <TestimonialsSection />
      <GallerySection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
