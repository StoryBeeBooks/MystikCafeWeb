import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Mystik Cafe?",
      answer: "Mystik Cafe is North America's first reptile café, located in Toronto's Kensington Market. We offer a unique experience combining a café atmosphere with the opportunity to interact with various reptiles in a safe, educational environment."
    },
    {
      question: "Do I need a reservation?",
      answer: "Reservations are highly recommended for the Reptile Jungle experience. Walk-ins are not guaranteed. The Ocean Café is available with any café purchase."
    },
    {
      question: "What are your hours of operation?",
      answer: "We are open 11AM - 6:30PM for Ocean Café and 11AM - 6:00PM for Reptile Jungle. We are closed on Wednesdays. Last entry is 30 minutes before closing. Hours may vary on holidays."
    },
    {
      question: "Is it safe for children?",
      answer: "Yes! Our experiences are designed to be safe and educational for all ages. Our trained animal ambassadors guide all interactions and ensure both guest and animal safety."
    },
    {
      question: "Can I take photos with the animals?",
      answer: "Absolutely! We encourage photos during your visit. Our staff can help you capture the perfect moment with our reptile friends."
    },
    {
      question: "What should I wear?",
      answer: "We recommend comfortable clothing. Avoid loose jewelry or accessories that animals might grab. Closed-toe shoes are recommended."
    },
    {
      question: "Do you serve food and drinks?",
      answer: "Yes! Our Ocean Café offers a variety of beverages including specialty cold brews, coffee, and snacks. Entry to the café area is complimentary with any purchase."
    },
    {
      question: "How do I book a Reptile Jungle experience?",
      answer: "You can book online through our website. Select your preferred date and time, and complete your reservation. You'll receive a confirmation email with all the details."
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-[#38761D] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-[#8FCE00] hover:underline text-sm mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 text-lg">Everything you need to know about your Mystik adventure</p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#1a3b0e] mb-3">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-[#1a3b0e] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-white/80 mb-6">Our team is happy to help!</p>
          <a href="mailto:info@mystikcafe.ca" className="inline-block bg-[#8FCE00] text-[#1a3b0e] font-bold py-3 px-8 rounded-full hover:-translate-y-1 transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
