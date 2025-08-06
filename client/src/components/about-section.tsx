export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-african-cream relative">
      <div className="african-pattern-bg absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative inline-block mb-8">
              <div className="geometric-accent absolute -top-4 -left-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-african-dark">Our Story</h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                At Kienyeji Fresh Farm, we're passionate about bringing you the authentic taste of traditional Kenyan chicken. Our pure indigenous Kienyeji chickens roam freely on pesticide-free pasture, resulting in healthy, lean, and flavorful meat just like the old days.
              </p>
              <p>
                Located in the fertile highlands outside Nairobi, our farm follows strict ethical practices with no hormones, no antibiotics, and a completely free-range system that allows our chickens to live naturally and happily.
              </p>
              <p>
                With over 8 years of experience in organic poultry farming, we've built a reputation for delivering the highest quality indigenous chicken directly from our farm to your table.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-african-orange mb-2">8+</div>
                <div className="text-gray-600 font-semibold">Years Experience</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-african-red mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Happy Customers</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-african-gold mb-2">100%</div>
                <div className="text-gray-600 font-semibold">Organic Feed</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">24hr</div>
                <div className="text-gray-600 font-semibold">Fresh Delivery</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Traditional African farm landscape with rolling hills" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-sm">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">"Best kienyeji I've had in years – juicy and firm just the way I remember!"</p>
              <p className="text-african-brown font-semibold text-sm">- Mary K., Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
