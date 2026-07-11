"use client";

import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Services() {
  const services = [
    {
      title: "AI and intelligent systems",
      description: "LLM platforms, predictive analytics, and automation that hold up under real enterprise governance.",
      href: "/services/ai-analytics",
    },
    {
      title: "Cloud and platform engineering",
      description: "Cloud architecture on AWS and Azure, from migration planning through day-to-day operations.",
      href: "/services/cloud-transformation",
    },
    {
      title: "Software product engineering",
      description: "Full product development, from mobile apps to the backend systems behind them.",
      href: "/services/software-product-engineering",
    },
    {
      title: "Enterprise security",
      description: "Zero-trust architecture, threat modelling, and compliance work for regulated industries.",
      href: "/services/enterprise-security",
    },
    {
      title: "Data and analytics",
      description: "Data platforms and governance that turn raw signals into decisions people trust.",
      href: "/services/ai-analytics",
    },
    {
      title: "Digital strategy",
      description: "Technology strategy, operating-model design, and honest advice on what to build first.",
      href: "/services/digital-strategy",
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#F5F7FA] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-5">Services</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0B1220] leading-[1.12]">
                What we do.
              </h2>
            </div>
            <p className="text-lg text-[#5B6472] max-w-md leading-relaxed">
              Six practices that cover the full life of an enterprise system, from first
              conversation to production support.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E6E9EF] border border-[#E6E9EF] rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05} className="h-full">
              <Link
                href={service.href}
                className="group flex flex-col h-full p-8 lg:p-10 bg-white hover:bg-[#FBFCFD] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#0B1220] mb-3 tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5B6472] leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1D4ED8]">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
