"use client";

import React from 'react';
import FadeIn from './FadeIn';

export default function About() {
  const stats = [
    { label: "global clients", value: "50+" },
    { label: "projects delivered", value: "120+" },
    { label: "engineers and strategists", value: "45+" },
    { label: "countries served", value: "12" },
  ];

  const pillars = [
    { title: "Senior teams only", desc: "Small groups of experienced engineers, not layers of account managers." },
    { title: "Accountable for outcomes", desc: "We commit to results you can measure, not hours on a timesheet." },
    { title: "There for the long run", desc: "Most of our clients have been with us since their first project." },
  ];

  return (
    <section id="about" className="py-28 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6">
            <FadeIn>
              <p className="eyebrow mb-5">About</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0B1220] mb-8 leading-[1.12]">
                Built by engineers,
                <br />
                run like a partnership.
              </h2>
              <p className="text-lg text-[#5B6472] mb-5 leading-relaxed">
                Tuenx started in 2024 with a small team and a simple frustration:
                enterprise software takes too long to build and fails too often in production.
              </p>
              <p className="text-lg text-[#5B6472] mb-12 leading-relaxed">
                Our work now runs in banks, hospitals, and factories. Environments where
                mistakes are expensive and reliability is not optional.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[#E6E9EF]">
                {stats.map((stat) => (
                  <div key={stat.label} className="pt-7 pr-6">
                    <div className="font-display text-3xl text-[#0B1220]">{stat.value}</div>
                    <div className="text-xs text-[#5B6472] mt-1.5 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn delay={0.2}>
              <div className="rounded-lg bg-[#0B1220] text-white p-10 md:p-12 mb-6">
                <p className="font-display italic text-2xl md:text-[1.75rem] leading-snug text-slate-100">
                  &ldquo;Innovation is not about ideas. It is about making ideas happen
                  reliably, securely, and at scale.&rdquo;
                </p>
                <p className="text-sm text-slate-400 mt-6">The Tuenx philosophy</p>
              </div>
            </FadeIn>

            <div className="divide-y divide-[#E6E9EF] border-y border-[#E6E9EF]">
              {pillars.map((p, i) => (
                <FadeIn key={p.title} delay={0.25 + i * 0.08}>
                  <div className="py-6">
                    <h3 className="font-semibold text-[#0B1220] mb-1">{p.title}</h3>
                    <p className="text-sm text-[#5B6472] leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
