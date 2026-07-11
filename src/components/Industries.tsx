"use client";

import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Industries() {
  const industries = [
    {
      name: "Financial services",
      href: "/industries/banking",
      description: "Core banking modernisation, trading systems, and payments infrastructure with regulatory-grade controls.",
      tags: ["Core banking", "Capital markets", "Payments"],
    },
    {
      name: "Healthcare and life sciences",
      href: "/industries/healthcare",
      description: "Clinical platforms and HIPAA-compliant cloud environments for patient care and research.",
      tags: ["Clinical platforms", "HIPAA cloud", "Diagnostics"],
    },
    {
      name: "Manufacturing",
      href: "/industries/manufacturing",
      description: "Digital twins and predictive maintenance for smart factories running around the clock.",
      tags: ["Digital twins", "Predictive maintenance", "IIoT"],
    },
    {
      name: "Retail and consumer",
      href: "/industries/retail",
      description: "Commerce platforms and personalisation engines built to survive peak season.",
      tags: ["Omnichannel", "Personalisation", "Supply chain"],
    },
  ];

  return (
    <section id="industries" className="py-28 bg-[#0B1220] text-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow !text-slate-500 mb-5">Industries</p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.12]">
                Where we work.
              </h2>
            </div>
            <Link href="/industries" className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors whitespace-nowrap">
              All industries
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </FadeIn>

        <div className="border-t border-white/10">
          {industries.map((industry, index) => (
            <FadeIn key={industry.name} delay={index * 0.08}>
              <Link
                href={industry.href}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-10 border-b border-white/10 hover:bg-white/[0.03] transition-colors px-2 -mx-2 rounded-sm"
              >
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-[1.75rem] text-white group-hover:text-slate-300 transition-colors">
                    {industry.name}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-slate-400 leading-relaxed text-[0.9375rem] mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <span key={tag} className="text-xs text-slate-400 border border-white/15 rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 flex md:justify-end pt-1.5">
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0B1220] group-hover:border-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
