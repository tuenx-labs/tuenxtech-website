import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import FadeIn from '@/components/FadeIn';

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen pt-28 flex flex-col relative overflow-hidden">
      <Navbar />
      
      <div className="flex-grow w-full">
        {/* HERO SECTION */}
        <section className="bg-slate-50 py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solutions.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                We deliver end-to-end digital transformation through specialized domains of expertise.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* EXISTING SERVICES COMPONENT (High-Level Overview) */}
        <Services />

        {/* DEEP DIVES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-32">
            
            {/* Generative AI */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="relative rounded-3xl overflow-hidden h-[400px] bg-slate-900 flex items-center justify-center border border-slate-800 shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                   <h3 className="text-4xl font-bold text-white relative z-10 font-mono tracking-widest opacity-20">AI_CORE_SYSTEM</h3>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2 block">01 / Intelligence</span>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">Generative AI & Data</h2>
                  <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                    We don't just use AI; we build custom intelligence layers tailored to your proprietary data. From deploying secure, private Large Language Models (LLMs) to creating real-time predictive analytics pipelines.
                  </p>
                  <ul className="space-y-4">
                    {["Custom LLM Fine-tuning", "Retrieval-Augmented Generation (RAG)", "Enterprise Data Lakes"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Cloud Infrastructure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
              <FadeIn delay={0.2} className="lg:order-2">
                <div className="relative rounded-3xl overflow-hidden h-[400px] bg-blue-50 flex items-center justify-center border border-blue-100 shadow-xl">
                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDA2NkZGIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-50"></div>
                   <h3 className="text-4xl font-bold text-blue-600 relative z-10">Multi-Cloud</h3>
                </div>
              </FadeIn>
              <FadeIn className="lg:order-1">
                <div>
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2 block">02 / Architecture</span>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">Cloud Infrastructure</h2>
                  <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                    Build for scale with resilient, fault-tolerant cloud architectures. We architect systems across AWS, Azure, and Google Cloud, focusing on zero-trust security and infrastructure-as-code (IaC).
                  </p>
                  <ul className="space-y-4">
                    {["Kubernetes Orchestration", "Zero-Trust Security Models", "Serverless Architectures"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Methodology</h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">How we turn complex enterprise requirements into deployed, scalable solutions.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discover", desc: "Deep technical audits and requirement gathering with stakeholders." },
                { step: "02", title: "Design", desc: "System architecture, UI/UX prototyping, and security modeling." },
                { step: "03", title: "Develop", desc: "Agile sprints, rigorous code reviews, and automated testing." },
                { step: "04", title: "Deploy", desc: "CI/CD pipelines, containerization, and continuous monitoring." }
              ].map((phase, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="p-8 border border-slate-700 rounded-3xl bg-slate-800/50 hover:bg-slate-800 transition-colors h-full">
                    <span className="text-blue-400 font-mono text-xl font-bold mb-4 block">{phase.step}</span>
                    <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-slate-400">{phase.desc}</p>
                  </div>
                </FadeIn>
              ))}
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
