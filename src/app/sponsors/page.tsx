import Link from 'next/link';

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-[#38761D] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-[#8FCE00] hover:underline text-sm mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sponsors & Partners</h1>
          <p className="text-white/80 text-lg">The amazing organizations that support our mission</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Mystik Cafe is made possible through the generous support of our sponsors and partners who share our passion for wildlife education and conservation.
          </p>
        </div>

        {/* Sponsor Placeholders */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-slate-300 text-4xl">🤝</span>
              </div>
              <h3 className="font-semibold text-[#1a3b0e]">Partner Logo</h3>
              <p className="text-slate-400 text-sm mt-2">Coming Soon</p>
            </div>
          ))}
        </div>

        {/* Become a Partner */}
        <div className="bg-[#1a3b0e] text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in partnering with Mystik Cafe? We offer various sponsorship opportunities including event sponsorships, educational program partnerships, and brand collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:partnerships@mystikcafe.ca" className="inline-block bg-[#8FCE00] text-[#1a3b0e] font-bold py-3 px-8 rounded-full hover:-translate-y-1 transition-all">
              Contact Us
            </a>
            <a href="mailto:partnerships@mystikcafe.ca" className="inline-block border-2 border-[#8FCE00] text-[#8FCE00] font-bold py-3 px-8 rounded-full hover:bg-[#8FCE00] hover:text-[#1a3b0e] transition-all">
              Download Media Kit
            </a>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#1a3b0e] mb-4">🎯 Brand Visibility</h3>
            <p className="text-slate-600 leading-relaxed">
              Reach thousands of visitors and families through on-site branding, digital presence, and event collaborations.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#1a3b0e] mb-4">🌿 Conservation Impact</h3>
            <p className="text-slate-600 leading-relaxed">
              Support wildlife education and conservation efforts while making a positive impact in your community.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#1a3b0e] mb-4">🎉 Exclusive Events</h3>
            <p className="text-slate-600 leading-relaxed">
              Access to private events, corporate team-building experiences, and VIP animal encounters.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#1a3b0e] mb-4">📱 Social Reach</h3>
            <p className="text-slate-600 leading-relaxed">
              Tap into our engaged social media community and share your brand story with wildlife enthusiasts.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
