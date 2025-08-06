import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mary K.",
    location: "Nairobi",
    rating: 5,
    comment: "Best kienyeji I've had in years – juicy and firm just the way I remember! The delivery was prompt and the chicken was fresh. Will definitely order again.",
    initial: "M",
    color: "bg-african-orange"
  },
  {
    name: "John M.",
    location: "Westlands",
    rating: 5,
    comment: "Ordered for my restaurant and customers loved the authentic taste. Great quality and reliable service. The bulk pricing was very reasonable.",
    initial: "J",
    color: "bg-african-red"
  },
  {
    name: "Anne W.",
    location: "Karen",
    rating: 5,
    comment: "Amazing service! Ordered through WhatsApp and got my chicken the same day. The meat was so tender and flavorful. Highly recommend!",
    initial: "A",
    color: "bg-african-gold"
  },
  {
    name: "Paul K.",
    location: "Kileleshwa",
    rating: 5,
    comment: "Finally found authentic kienyeji chicken in Nairobi! The difference in taste is remarkable. My family loves it and we're now regular customers.",
    initial: "P",
    color: "bg-african-brown"
  },
  {
    name: "Sarah L.",
    location: "Lavington",
    rating: 5,
    comment: "Great value for money. The chickens are healthy, well-raised, and the delivery service is excellent. Professional team and great communication.",
    initial: "S",
    color: "bg-african-peru"
  },
  {
    name: "David M.",
    location: "Kasarani",
    rating: 5,
    comment: "Ordered for a family event and everyone was impressed with the quality. The meat was so rich in flavor. Thank you for bringing back authentic taste!",
    initial: "D",
    color: "bg-green-600"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-african-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="geometric-accent absolute -top-4 -left-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-african-dark mb-4">What Our Customers Say</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our Kienyeji chickens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">5.0</span>
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold">{testimonial.initial}</span>
                  </div>
                  <div>
                    <p className="font-bold text-african-dark">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
