"use client";

import React from 'react';
import FadeIn from './FadeIn';

export default function Industries() {
  const industries = [
    {
      name: "Financial Services",
      description: "Modernizing banking infrastructure with secure, high-frequency trading algorithms and blockchain integration.",
      color: "bg-blue-900"
    },
    {
      name: "Healthcare & Life Sciences",
      description: "AI-driven diagnostics and HIPAA-compliant cloud platforms for next-gen patient care.",
      color: "bg-teal-900"
    },
    {
      name: "Manufacturing",
      description: "IoT digital twins and predictive maintenance systems for Industry 4.0 smart factories.",
      color: "bg-indigo-900"
    },
    {
      name: "Retail & E-commerce",
      description: "Omnichannel experiences and personalized recommendation engines powered by machine learning.",
      color: "bg-violet-900"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Industries We Transform
            </h2>
            <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className={`group relative overflow-hidden rounded-2xl p-8 h-80 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.02] ${industry.color}`}>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-slate-200 text-lg leading-relaxed opacity-90">
                    {industry.description}
                  </p>
                  <div className="mt-6 flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}