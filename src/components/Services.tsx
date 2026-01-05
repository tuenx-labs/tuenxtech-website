"use client";

import React from 'react';
import FadeIn from './FadeIn';

export default function Services() {
  const services = [
    {
      title: "Artificial Intelligence",
      description: "Custom LLMs, predictive analytics, and intelligent automation for enterprise.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture on AWS and Azure. Secure, fast, and reliable.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Software Engineering",
      description: "Full-cycle development from mobile apps to complex enterprise backends.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
              Driving digital transformation through cutting-edge technology.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2} className="h-full">
              <div className="h-full p-8 border border-slate-200 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-50 hover:bg-white group cursor-default">
                <div className="mb-6 bg-white w-16 h-16 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}