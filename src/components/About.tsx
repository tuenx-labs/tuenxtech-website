"use client";

import React from 'react';
import FadeIn from './FadeIn';

export default function About() {
  const stats = [
    { label: "Global Clients", value: "50+" },
    { label: "Projects Delivered", value: "120+" },
    { label: "Team Members", value: "45+" },
    { label: "Countries Served", value: "12" },
  ];

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <FadeIn>
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Who We Are
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                Architects of the Digital Age.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2024, Tuenx Tech emerged with a singular mission: to bridge the gap between complex enterprise needs and agile digital solutions.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just write code; we engineer outcomes. From Wall Street financial systems to healthcare diagnostics, our footprint is expanding across industries that demand precision, security, and scale.
              </p>
              
              <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Image/Graphic Area */}
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 h-[500px] border border-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100"></div>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent text-white">
                <p className="font-medium text-lg">"Innovation is not about ideas. It is about making ideas happen."</p>
                <p className="text-sm text-slate-300 mt-2">— The Tuenx Philosophy</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}