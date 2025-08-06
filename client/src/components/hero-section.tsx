import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in ordering fresh Kienyeji chicken. Please send me more details.");
    window.open(`https://wa.me/254702073507?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-african-brown via-african-peru to-african-orange min-h-screen flex items-center">
      <div className="pattern-overlay absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="geometric-accent absolute -top-6 -left-6"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl leading-tight mb-6" 
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
                Fresh, Free-Range <span className="text-yellow-300">Kienyeji</span> Chicken
              </h1>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-xl md:text-2xl text-white font-medium">
                Naturally Raised, Farm to Table! Order fully grown, organically raised indigenous chicken with rich flavor and unbeatable nutrition.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('order')}
                className="bg-gradient-to-r from-african-red to-african-fire hover:from-african-fire hover:to-red-700 text-white px-8 py-4 text-lg h-auto font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Now
              </Button>
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg h-auto font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button 
                onClick={() => scrollToSection('products')}
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-african-brown px-8 py-4 text-lg h-auto font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                View Price List
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Free-range Kienyeji chickens roaming on African farm" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -right-6 bg-african-cream p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-african-brown">100%</div>
                <div className="text-african-brown font-semibold">Organic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
