"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export default function CareersPage() {
  const jobCategories = [
    {
      name: "Engineering",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      ),
      jobs: [
        { title: "Senior Full Stack Engineer", location: "Remote", type: "Full-time" },
        { title: "Frontend Developer (Next.js)", location: "San Francisco", type: "Full-time" },
        { title: "DevOps Engineer", location: "Remote / London", type: "Contract" },
      ]
    },
    {
      name: "Data & AI",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
      jobs: [
        { title: "AI/ML Research Scientist", location: "San Francisco", type: "Full-time" },
        { title: "Data Engineer", location: "Remote", type: "Full-time" },
      ]
    },
    {
      name: "Product & Infrastructure",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
      ),
      jobs: [
        { title: "Cloud Solutions Architect", location: "London / Remote", type: "Full-time" },
        { title: "Product Manager", location: "New York", type: "Full-time" },
        { title: "Senior UX Designer", location: "Remote", type: "Full-time" },
      ]
    }
  ];

  return (
    <main className="bg-[#F5F7FA] min-h-screen pt-28 flex flex-col">
      <Navbar />

      <div className="flex-grow w-full max-w-5xl mx-auto px-6 pb-24">
        <FadeIn>
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold text-[#1D4ED8] bg-[#1D4ED8]/8 rounded-full">
              Careers
            </div>
            <h1 className="text-5xl font-bold text-[#0B1220] mb-4 tracking-tight">Join the Tuenx Team</h1>
            <p className="text-lg text-[#5B6472] max-w-2xl">
              Engineering the future of enterprise requires exceptional talent. Explore our open positions and help us build the digital infrastructure of tomorrow.
            </p>
          </div>

          {/* Job Categories */}
          <div className="space-y-16">
            {jobCategories.map((category) => (
              <div key={category.name}>
                <h2 className="text-xl font-bold text-[#0B1220] mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#1D4ED8]/8 text-[#1D4ED8] flex items-center justify-center">{category.icon}</span>
                  {category.name}
                  <span className="text-[#5B6472] text-sm font-normal ml-2">({category.jobs.length} open roles)</span>
                </h2>

                <div className="grid gap-3">
                  {category.jobs.map((job, index) => (
                    <div
                      key={index}
                      className="group p-5 bg-white rounded-xl border border-[#E6E9EF] hover:border-[#1D4ED8]/30 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#0B1220] group-hover:text-[#1D4ED8] transition-colors">{job.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-[#5B6472] text-sm">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {job.location}
                          </span>
                          <span className="px-2 py-0.5 bg-[#EDF0F4] rounded-full text-xs font-medium uppercase tracking-wider">{job.type}</span>
                        </div>
                      </div>

                      <Link href={`/careers/apply?track=${encodeURIComponent(job.title)}`} className="flex-shrink-0">
                        <button className="px-6 py-2.5 bg-[#1D4ED8] text-white text-sm font-semibold rounded-full hover:bg-[#163DBC] hover:shadow-md hover:shadow-[#1D4ED8]/20 transition-all">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* General Application CTA */}
          <div className="mt-20 p-12 bg-[#0B1220] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Don&apos;t see the right role?</h3>
            <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              We&apos;re always looking for brilliant minds. Send us your CV and we&apos;ll keep you in mind for future openings.
            </p>
            <Link href="/careers/apply?track=General+Application">
              <button className="px-10 py-3.5 bg-white text-[#0B1220] font-bold rounded-full hover:bg-[#EDF0F4] transition-all shadow-lg">
                Submit General Application
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}
