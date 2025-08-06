import { useState } from "react";
import { Menu, X, Egg } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-african-dark text-white shadow-lg sticky top-0 z-50 relative overflow-hidden">
      <div className="african-pattern-bg absolute inset-0 opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Egg className="text-african-orange text-2xl mr-2" />
              <span className="font-bold text-xl">Kienyeji Fresh Farm</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-african-orange transition duration-200">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:text-african-orange transition duration-200">
              Products
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-african-orange transition duration-200">
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-african-orange transition duration-200">
              Reviews
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-african-orange transition duration-200">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-african-orange transition duration-200">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-african-orange hover:bg-african-fire"
            >
              Order Now
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="outline-none"
            >
              {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-african-dark pb-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block py-2 px-4 text-sm hover:text-african-orange w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="block py-2 px-4 text-sm hover:text-african-orange w-full text-left"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block py-2 px-4 text-sm hover:text-african-orange w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block py-2 px-4 text-sm hover:text-african-orange w-full text-left"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block py-2 px-4 text-sm hover:text-african-orange w-full text-left"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block py-2 px-4 text-sm hover:text-african-orange w-full text-left"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('order')}
              className="mx-4 mt-2 bg-african-orange hover:bg-african-fire text-sm"
            >
              Order Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
