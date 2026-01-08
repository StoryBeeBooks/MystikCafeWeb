import Link from 'next/link';

export default function CodeOfConductPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-[#38761D] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-[#8FCE00] hover:underline text-sm mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Code of Conduct</h1>
          <p className="text-white/80 text-lg">Creating a safe and respectful environment for all</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 space-y-12">
        
        {/* Introduction */}
        <section className="text-center">
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Mystik Cafe is committed to providing a welcoming, inclusive, and safe experience for all guests, animals, and staff. We ask that all visitors adhere to the following code of conduct.
          </p>
        </section>

        {/* Respect for Animals */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1a3b0e] mb-4 flex items-center gap-3">
            <span className="text-3xl">🐢</span> Respect for Animals
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Treat all animals with kindness and gentleness</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Never tap on glass enclosures or make loud noises to get animals' attention</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Follow staff instructions for all animal interactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Do not attempt to enter enclosures or reach over barriers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Report any concerns about animal welfare to staff immediately</span>
            </li>
          </ul>
        </section>

        {/* Respect for Others */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1a3b0e] mb-4 flex items-center gap-3">
            <span className="text-3xl">🤝</span> Respect for Others
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Be courteous and respectful to staff and fellow visitors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Share space and viewing areas with other guests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Keep noise levels reasonable to maintain a calm environment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Harassment or discrimination of any kind will not be tolerated</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Supervise children at all times</span>
            </li>
          </ul>
        </section>

        {/* General Rules */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1a3b0e] mb-4 flex items-center gap-3">
            <span className="text-3xl">📋</span> General Rules
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>No smoking, vaping, or alcohol on premises</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>No outside food or beverages in the Reptile Jungle area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>No flash photography</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Personal belongings must be secured during animal interactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Mystik Cafe reserves the right to refuse service or ask guests to leave for violations</span>
            </li>
          </ul>
        </section>

        {/* Photography Policy */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1a3b0e] mb-4 flex items-center gap-3">
            <span className="text-3xl">📸</span> Photography Policy
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Personal photography and videos are welcome (no flash)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Be mindful of other guests when taking photos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Commercial photography requires prior approval</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#38761D] font-bold">•</span>
              <span>Please ask permission before photographing other guests</span>
            </li>
          </ul>
        </section>

        {/* Enforcement */}
        <section className="bg-[#1a3b0e] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Enforcement</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Mystik Cafe staff are empowered to address code of conduct violations. Depending on the severity, consequences may include:
          </p>
          <ul className="space-y-2 text-white/80">
            <li>• Verbal warning</li>
            <li>• Request to leave the premises</li>
            <li>• Ban from future visits</li>
            <li>• Legal action if laws are broken</li>
          </ul>
          <p className="text-white/80 mt-6 leading-relaxed">
            By visiting Mystik Cafe, you agree to abide by this code of conduct. Thank you for helping us create a positive experience for everyone!
          </p>
        </section>

      </div>
    </main>
  );
}
