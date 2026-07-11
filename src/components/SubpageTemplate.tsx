import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { SubpageContent } from '@/data/subpages';
import Link from 'next/link';

export default function SubpageTemplate({ data }: { data: SubpageContent }) {
  return (
    <main className="bg-white min-h-screen pt-28 flex flex-col relative overflow-hidden">
      <Navbar />
      
      <div className="flex-grow w-full">
        {/* HERO SECTION */}
        <section className="bg-slate-50 py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full uppercase tracking-widest">
                  Overview
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  {data.title}
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed mb-8">
                  {data.subtitle}
                </p>
                <Link href="/contact" className="inline-block px-8 py-4 bg-[#0B1220] text-white font-semibold rounded-md hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-600/20">
                  {data.ctaButtonText}
                </Link>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden h-[400px] bg-[#0B1220] flex items-center justify-center border border-slate-800 shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                   <div className="text-white relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold font-mono tracking-widest opacity-30 uppercase">{data.heroImageLabel.replace(/\s+/g, '_')}</h3>
                   </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Key Capabilities</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.features.map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                  <div className="p-8 border border-slate-200 rounded-3xl bg-white hover:border-blue-500 transition-colors group h-full cursor-default hover:shadow-xl">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-24 bg-[#0B1220] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/20 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6">{data.ctaTitle}</h2>
              <p className="text-xl text-slate-400 mb-10">{data.ctaText}</p>
              <Link href="/contact" className="inline-block px-10 py-4 bg-white text-[#0B1220] font-semibold rounded-md hover:bg-slate-200 transition-all">
                {data.ctaButtonText}
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  );
}
