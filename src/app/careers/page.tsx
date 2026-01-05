"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function CareersPage() {
  // JOB DATA TEMPLATE
  // You can easily add more categories or jobs to this list later.
  const jobCategories = [
    {
      name: "Engineering",
      jobs: [
        { title: "Senior Full Stack Engineer", location: "Remote", type: "Full-time" },
        { title: "Frontend Developer (Next.js)", location: "San Francisco", type: "Full-time" },
        { title: "DevOps Engineer", location: "Remote / London", type: "Contract" },
      ]
    },
    {
      name: "Data & AI",
      jobs: [
        { title: "AI/ML Research Scientist", location: "San Francisco", type: "Full-time" },
        { title: "Data Engineer", location: "Remote", type: "Full-time" },
      ]
    },
    {
      name: "Product & Infrastructure",
      jobs: [
        { title: "Cloud Solutions Architect", location: "London / Remote", type: "Full-time" },
        { title: "Product Manager", location: "New York", type: "Full-time" },
        { title: "Senior UX Designer", location: "Remote", type: "Full-time" },
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-96 flex flex-col relative">
      <Navbar />
      
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-24">
        <FadeIn>
          {/* Header Section */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
              Join the Tuenx Team
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Engineering the future of enterprise requires exceptional talent. 
              Explore our open positions and help us build the digital infrastructure of tomorrow.
            </p>
          </div>

          {/* Job Listings Template */}
          <div className="space-y-20">
            {jobCategories.map((category) => (
              <div key={category.name} className="w-full">
                {/* Category Title */}
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  {category.name}
                </h2>
                
                {/* Jobs Grid */}
                <div className="grid gap-4">
                  {category.jobs.map((job, index) => (
                    <div 
                      key={index} 
                      className="group p-8 border border-slate-200 rounded-3xl hover:border-blue-500 hover:shadow-2xl transition-all bg-white flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-slate-500 font-medium">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {job.location}
                          </span>
                          <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                          <span className="bg-slate-100 px-3 py-1 rounded-full text-xs uppercase tracking-wider text-slate-600">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      
                      <button className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md active:scale-95">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* General Application Section */}
          <div className="mt-24 p-12 bg-slate-950 rounded-[3rem] text-center text-white border border-slate-800 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Don't see the right role?</h3>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              We're always looking for brilliant minds to join our mission. Send us your CV and we'll keep you in mind for future openings.
            </p>
            <button className="px-12 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
              Submit General Application
            </button>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}