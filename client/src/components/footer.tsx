import { Egg, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-african-dark text-african-cream py-12 relative overflow-hidden">
      <div className="african-pattern-bg absolute inset-0 opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Egg className="text-african-orange text-2xl mr-2" />
              <span className="font-bold text-xl">Kienyeji Fresh Farm</span>
            </div>
            <p className="text-gray-400 mb-4">
              Bringing you authentic, free-range indigenous chicken with the rich flavor and nutrition you remember. Farm fresh, delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-african-orange hover:text-african-cream transition duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-african-orange hover:text-african-cream transition duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-african-orange hover:text-african-cream transition duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-african-orange hover:text-african-cream transition duration-200">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-african-cream transition duration-200"
                >
                  Live Chicken
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-african-cream transition duration-200"
                >
                  Slaughtered & Cleaned
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-african-cream transition duration-200"
                >
                  Bulk Orders
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-african-cream transition duration-200">Farm Eggs</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-african-cream transition duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-african-cream transition duration-200"
                >
                  Farm Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-african-cream transition duration-200"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-african-cream transition duration-200">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>+254 702 073 507</span>
              </li>
              <li className="flex items-center">
                <span>✉</span>
                <span className="ml-2">orders@kienyejifresh.co.ke</span>
              </li>
              <li className="flex items-center">
                <span>📍</span>
                <span className="ml-2">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Kienyeji Fresh Farm. All rights reserved. | Made with ❤️ for authentic Kenyan flavors
          </p>
        </div>
      </div>
    </footer>
  );
}
