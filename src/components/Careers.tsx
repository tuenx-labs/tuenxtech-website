"use client";

import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Careers() {
  const previewJobs = [
    {
      title: "Senior Full Stack Engineer",
      dept: "Engineering",
      loc: "Remote"
    },
    {
      title: "AI/ML Research Scientist",
      dept: "Data Science",
      loc: "San Francisco"
    },
    {
      title: "Cloud Solutions Architect",
      dept: "Infrastructure",
      loc: "London / Remote"
    }
  ];

  return (
    <section id="careers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Join the Tuenx Team</h2>
            <p className="text-slate-500 text-lg">Build the future with us. We are always looking for exceptional talent.</p>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewJobs.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6">{job.dept} • {job.loc}</p>
                <Link 
                  href="/careers/apply" 
                  className="text-blue-600 font-bold text-sm hover:underline"
                >
                  Apply Now →
                </Link>
              </div>
            ))}
          </div>

          {/* This link now points to the new full page */}
          <div className="mt-12 text-center">
            <Link 
              href="/careers" 
              className="text-blue-600 font-bold hover:underline transition-all cursor-pointer inline-block text-lg"
            >
              View all 12 open positions →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}