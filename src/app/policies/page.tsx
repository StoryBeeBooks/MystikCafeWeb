import Link from 'next/link';

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-[#38761D] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-[#8FCE00] hover:underline text-sm mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Policies</h1>
          <p className="text-white/80 text-lg">Our terms, cancellation policy, and guidelines</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 space-y-12">
        
        {/* Booking Policy */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1a3b0e] mb-4">Booking Policy</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Reservations are required for the Reptile Jungle experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Please arrive 10 minutes before your scheduled time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Late arrivals may result in shortened experience time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Walk-ins are subject to availability</span>
            </li>
          </ul>
        </section>

        {/* Cancellation Policy */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1a3b0e] mb-4">Cancellation Policy</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Full refund for cancellations made 24+ hours in advance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>50% refund for cancellations made 12-24 hours in advance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>No refund for cancellations made less than 12 hours in advance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Rescheduling is available up to 12 hours before your booking</span>
            </li>
          </ul>
        </section>

        {/* Visitor Guidelines */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1a3b0e] mb-4">Visitor Guidelines</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Children under 12 must be accompanied by an adult</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>No outside food or drinks in the Reptile Jungle</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Flash photography is not permitted</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Follow all staff instructions for animal interactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Hand sanitization is required before and after animal handling</span>
            </li>
          </ul>
        </section>

        {/* Privacy Policy */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1a3b0e] mb-4">Privacy Policy</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We respect your privacy and are committed to protecting your personal information. We collect only the information necessary to provide our services and process your bookings.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Your data is never sold to third parties. For questions about our privacy practices, please contact us at <a href="mailto:info@mystikcafe.ca" className="text-[#38761D] hover:underline">info@mystikcafe.ca</a>.
          </p>
        </section>

      </div>
    </main>
  );
}
