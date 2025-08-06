import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "We offer same-day delivery for orders placed before 2 PM within Nairobi. For surrounding counties, delivery typically takes 24-48 hours. We'll confirm the exact delivery time when you place your order."
  },
  {
    question: "Do you sell to hotels or bulk buyers?",
    answer: "Yes! We offer special bulk pricing for restaurants, hotels, and catering services. Minimum order is 10 birds with discounts up to 15%. Contact us for a custom quote based on your requirements."
  },
  {
    question: "Can I visit the farm?",
    answer: "Absolutely! We welcome farm visits by appointment. You can see our free-range setup, meet our chickens, and pick up your order directly from the farm. Please call ahead to schedule your visit."
  },
  {
    question: "Are your chickens vaccinated?",
    answer: "Yes, all our chickens receive essential vaccinations as recommended by veterinary guidelines. However, we don't use growth hormones or routine antibiotics. Our focus is on natural, healthy rearing practices."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept M-PESA (most popular), bank transfers, and cash on delivery. M-PESA is our preferred method as it's quick and secure. Our M-PESA number will be provided when you place your order."
  },
  {
    question: "How do I know the chicken is fresh?",
    answer: "We slaughter chickens fresh upon order - nothing is pre-killed and stored. For live delivery, chickens are transported in proper ventilated crates. We provide a 100% freshness guarantee or your money back."
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-african-cream relative">
      <div className="african-pattern-bg absolute inset-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="geometric-accent absolute -top-4 -left-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-african-dark mb-4">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here are the most common questions our customers ask.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button 
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-african-orange"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-african-dark">{faq.question}</h3>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-african-orange" />
                  ) : (
                    <Plus className="h-5 w-5 text-african-orange" />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
