"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import About from '@/components/About';
import Careers from '@/components/Careers';

const heroMetrics = [
  { value: "120+", label: "projects delivered" },
  { value: "12", label: "countries" },
  { value: "99.99%", label: "uptime across managed systems" },
  { value: "24/7", label: "support coverage" },
];

const trustedBy = [
  "Meridian Bank", "Helix Health", "Northwind Mfg", "Vantage Retail", "Orbital Systems", "Crest Capital",
];

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0B1220] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-44 pb-24 md:pt-52 md:pb-28">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8 text-white">
                The systems the world
                <br />
                runs on, <em className="text-slate-300">built properly.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 leading-relaxed">
                Tuenx works with large organisations on AI, cloud infrastructure,
                and the software their operations depend on.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-7 py-3.5 bg-white text-[#0B1220] font-semibold text-sm rounded-md hover:bg-slate-200 transition-colors"
                >
                  Talk to our team
                </button>
                <button
                  onClick={() => scrollTo('services')}
                  className="px-7 py-3.5 border border-white/25 text-white font-semibold text-sm rounded-md hover:border-white/60 transition-colors"
                >
                  What we do
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Metrics */}
          <FadeIn delay={0.4}>
            <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-y-10 border-t border-white/10 pt-10">
              {heroMetrics.map((m) => (
                <div key={m.label} className="pr-8">
                  <div className="text-3xl md:text-4xl font-display text-white">{m.value}</div>
                  <div className="mt-1.5 text-sm text-slate-400 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trusted-by strip */}
      <section className="border-b border-[#E6E9EF] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-9">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12">
              <p className="text-xs text-[#9AA4B4] whitespace-nowrap">Trusted by teams at</p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:justify-between md:flex-1">
                {trustedBy.map((name) => (
                  <span key={name} className="font-display text-lg text-[#9AA4B4] select-none">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <About />
      <Services />
      <Industries />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
