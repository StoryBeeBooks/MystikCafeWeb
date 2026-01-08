import Link from 'next/link';

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-[#38761D] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-[#8FCE00] hover:underline text-sm mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Your Safety</h1>
          <p className="text-white/80 text-lg">Your wellbeing and the animals' safety are our top priorities</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 space-y-12">
        
        {/* Safety Introduction */}
        <section className="text-center">
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            At Mystik Cafe, we maintain the highest safety standards to ensure a memorable and secure experience for all guests. Our trained animal ambassadors are always present to guide interactions.
          </p>
        </section>

        {/* Animal Interaction Safety */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">🦎</span>
            <h2 className="text-2xl font-bold text-[#1a3b0e]">Animal Interaction Guidelines</h2>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Always wait for staff permission before touching any animal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Use gentle, slow movements around animals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Support animals properly as instructed by staff</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Never feed the animals without staff supervision</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Keep voices low to avoid startling the animals</span>
            </li>
          </ul>
        </section>

        {/* Hygiene Protocols */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">🧼</span>
            <h2 className="text-2xl font-bold text-[#1a3b0e]">Hygiene Protocols</h2>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Hand sanitization stations are available throughout the venue</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Hand washing is required before and after animal interactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Animal enclosures are cleaned and sanitized regularly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold text-xl">✓</span>
              <span>Common surfaces are disinfected throughout the day</span>
            </li>
          </ul>
        </section>

        {/* Health Considerations */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">⚕️</span>
            <h2 className="text-2xl font-bold text-[#1a3b0e]">Health Considerations</h2>
          </div>
          <div className="space-y-4 text-slate-600">
            <p className="leading-relaxed">
              <strong className="text-[#1a3b0e]">Allergies:</strong> Please inform staff if you have any known allergies to animals or animal dander before your visit.
            </p>
            <p className="leading-relaxed">
              <strong className="text-[#1a3b0e]">Immune Concerns:</strong> Guests with compromised immune systems should consult their healthcare provider before visiting.
            </p>
            <p className="leading-relaxed">
              <strong className="text-[#1a3b0e]">Pregnancy:</strong> Pregnant guests can enjoy viewing the animals but should avoid direct contact as a precaution.
            </p>
            <p className="leading-relaxed">
              <strong className="text-[#1a3b0e]">First Aid:</strong> A first aid kit is available on-site and staff are trained in basic first aid procedures.
            </p>
          </div>
        </section>

        {/* Emergency Procedures */}
        <section className="bg-[#1a3b0e] text-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">🚨</span>
            <h2 className="text-2xl font-bold">Emergency Procedures</h2>
          </div>
          <p className="text-white/80 mb-6 leading-relaxed">
            In case of emergency, please follow staff instructions immediately. Emergency exits are clearly marked throughout the venue. Staff members are trained in emergency protocols and will guide you to safety.
          </p>
          <p className="text-white/80">
            <strong className="text-[#8FCE00]">Emergency Contact:</strong> If you experience any issues during your visit, please alert a staff member immediately or call our front desk.
          </p>
        </section>

      </div>
    </main>
  );
}
