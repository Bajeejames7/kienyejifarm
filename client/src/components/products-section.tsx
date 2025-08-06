import { Egg, Drumstick, Store, Truck, Smartphone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductsSection() {
  const openWhatsApp = (productType: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in ordering ${productType}. Please send me more details and pricing.`);
    window.open(`https://wa.me/254702073507?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="geometric-accent absolute -top-4 -left-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-african-dark mb-4">Our Premium Products</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of fresh, free-range Kienyeji chickens. All our birds are naturally raised without hormones or antibiotics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Live Chicken */}
          <Card className="bg-african-cream shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-african-orange">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Egg className="h-12 w-12 text-african-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-african-dark mb-2">Live Chicken</h3>
                <p className="text-gray-600">Fresh from the farm, delivered alive to your location</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight Range:</span>
                  <span className="font-semibold text-african-dark">1.5 - 2.5 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per kg:</span>
                  <span className="font-bold text-african-orange text-xl">Ksh 800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Minimum Order:</span>
                  <span className="font-semibold text-african-dark">1 bird</span>
                </div>
              </div>
              <Button 
                onClick={() => openWhatsApp('Live Chicken')}
                className="w-full bg-african-orange hover:bg-african-fire"
              >
                Order Live Chicken
              </Button>
            </CardContent>
          </Card>

          {/* Slaughtered & Cleaned */}
          <Card className="bg-african-cream shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-african-red relative">
            <div className="absolute -top-3 right-4 bg-african-red text-white px-3 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Drumstick className="h-12 w-12 text-african-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-african-dark mb-2">Slaughtered & Cleaned</h3>
                <p className="text-gray-600">Ready-to-cook, professionally cleaned and packed</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight Range:</span>
                  <span className="font-semibold text-african-dark">1.2 - 2.2 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per kg:</span>
                  <span className="font-bold text-african-red text-xl">Ksh 950</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Packaging:</span>
                  <span className="font-semibold text-african-dark">Vacuum sealed</span>
                </div>
              </div>
              <Button 
                onClick={() => openWhatsApp('Slaughtered & Cleaned Chicken')}
                className="w-full bg-african-red hover:bg-african-fire"
              >
                Order Cleaned Chicken
              </Button>
            </CardContent>
          </Card>

          {/* Bulk Orders */}
          <Card className="bg-african-cream shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-african-gold">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Store className="h-12 w-12 text-african-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-african-dark mb-2">Bulk Orders</h3>
                <p className="text-gray-600">Special pricing for hotels, restaurants, and events</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Minimum:</span>
                  <span className="font-semibold text-african-dark">10+ birds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-bold text-african-gold text-xl">Up to 15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery:</span>
                  <span className="font-semibold text-african-dark">Free in Nairobi</span>
                </div>
              </div>
              <Button 
                onClick={() => openWhatsApp('Bulk Order')}
                className="w-full bg-african-gold hover:bg-yellow-600"
              >
                Get Bulk Quote
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Information */}
        <div className="bg-gradient-to-r from-african-brown to-african-peru rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Truck className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Same Day Delivery</h4>
              <p className="text-african-cream">Order before 2 PM for same day delivery in Nairobi</p>
            </div>
            <div>
              <Smartphone className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">M-PESA Payment</h4>
              <p className="text-african-cream">Easy and secure mobile money payments accepted</p>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Quality Guarantee</h4>
              <p className="text-african-cream">100% satisfaction guarantee or money back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
