import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Industries from '@/components/Industries';
import FadeIn from '@/components/FadeIn';

export default function IndustriesPage() {
  return (
    <main className="bg-white min-h-screen pt-28 flex flex-col relative overflow-hidden">
      <Navbar />
      
      <div className="flex-grow w-full">
        {/* HERO SECTION */}
        <section className="bg-slate-50 py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Transforming <span className="text-blue-600">Global Industries.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                From Wall Street to smart factories, we engineer custom technology solutions that give our partners a definitive competitive edge.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* EXISTING INDUSTRIES COMPONENT */}
        <Industries />

        {/* SPECIALIZED DOMAINS */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Specialized Domains</span>
                <h2 className="text-4xl font-bold text-slate-900">Niche Expertise</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Aerospace & Defense", desc: "Top-secret clearance engineering, secure comms networks, and flight data analytics systems.", icon: "✈️" },
                { title: "Education Tech", desc: "Scalable virtual learning platforms handling millions of concurrent users globally.", icon: "🎓" },
                { title: "Communications", desc: "5G rollout analytics, billing system modernization, and network fault prediction models.", icon: "📡" }
              ].map((niche, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="p-8 border border-slate-200 rounded-3xl bg-white hover:border-blue-500 transition-colors group cursor-default h-full">
                    <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{niche.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{niche.title}</h3>
                    <p className="text-slate-500">{niche.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Proven Impact</h2>
                <p className="text-slate-400 text-lg">Measurable results delivered for Fortune 500 partners.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <FadeIn>
                <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Global Bank</span>
                    <span className="text-emerald-400 font-bold text-2xl">-$50M</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Legacy Mainframe Migration</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    We successfully migrated a 40-year-old monolithic banking system to a distributed cloud microservices architecture without a single minute of downtime.
                  </p>
                  <div className="text-sm font-semibold text-blue-400">Outcome: Reduced annual operating costs by $50M.</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Auto Manufacturer</span>
                    <span className="text-emerald-400 font-bold text-2xl">+40%</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">IoT Predictive Maintenance</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Deployed thousands of IoT edge sensors across 12 factories, feeding data into a centralized ML pipeline to predict machine failures before they happen.
                  </p>
                  <div className="text-sm font-semibold text-blue-400">Outcome: Increased manufacturing uptime by 40%.</div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  );
}
