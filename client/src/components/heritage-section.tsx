import africanPatternPath from "@assets/chicken website pattern_1754500049645.jpg";

export default function HeritageSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-african-dark mb-4">
            Rooted in African Heritage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our farming practices honor traditional African agricultural wisdom passed down through generations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-african-cream p-6 rounded-xl">
              <h3 className="font-bold text-xl text-african-dark mb-3">Traditional Methods</h3>
              <p className="text-gray-700">
                We use time-tested indigenous farming techniques that have sustained African communities for centuries.
              </p>
            </div>
            <div className="bg-african-cream p-6 rounded-xl">
              <h3 className="font-bold text-xl text-african-dark mb-3">Cultural Heritage</h3>
              <p className="text-gray-700">
                Our geometric patterns reflect the rich artistic traditions of East African cultures and craftsmanship.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-african-orange to-african-red p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <img 
                src={africanPatternPath}
                alt="Traditional African geometric patterns representing our cultural heritage"
                className="w-full h-64 object-cover rounded-xl opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Authentic African Design</h3>
                <p className="text-sm opacity-90">Celebrating our rich cultural heritage through traditional patterns</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-african-cream p-6 rounded-xl">
              <h3 className="font-bold text-xl text-african-dark mb-3">Natural Harmony</h3>
              <p className="text-gray-700">
                Our chickens live in harmony with nature, following ancient principles of sustainable farming.
              </p>
            </div>
            <div className="bg-african-cream p-6 rounded-xl">
              <h3 className="font-bold text-xl text-african-dark mb-3">Community Values</h3>
              <p className="text-gray-700">
                We honor the communal spirit of African farming, building relationships with our customers and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}