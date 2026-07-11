"use client";

import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Careers() {
  const previewJobs = [
    { title: "Senior Full Stack Engineer", dept: "Engineering", loc: "Remote", type: "Full-time" },
    { title: "AI/ML Research Scientist", dept: "Data Science", loc: "San Francisco", type: "Full-time" },
    { title: "Cloud Solutions Architect", dept: "Infrastructure", loc: "London / Remote", type: "Full-time" },
  ];

  return (
    <section id="careers" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-5">Careers</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0B1220] leading-[1.12]">
                Work with us.
              </h2>
            </div>
            <p className="text-lg text-[#5B6472] max-w-md leading-relaxed">
              We hire carefully and keep teams small. If that sounds right, have a look at
              what&apos;s open.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-[#E6E9EF]">
          {previewJobs.map((job, index) => (
            <FadeIn key={job.title} delay={index * 0.08}>
              <Link
                href="/careers/apply"
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-[#E6E9EF] hover:bg-[#F5F7FA] transition-colors px-2 -mx-2"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1220] tracking-tight group-hover:text-[#1D4ED8] transition-colors mb-1.5">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-[#5B6472]">
                    <span>{job.dept}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C4CBD6]" />
                    <span>{job.loc}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C4CBD6]" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1D4ED8]">
                  Apply
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-10">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#0B1220] text-[#0B1220] text-sm font-semibold rounded-md hover:bg-[#0B1220] hover:text-white transition-colors"
            >
              All open positions
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
