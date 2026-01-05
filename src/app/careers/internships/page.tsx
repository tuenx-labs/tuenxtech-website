"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

// --- Data Configuration ---
const INTERNSHIP_TRACKS = [
  {
    title: "Software Engineering",
    desc: "Work on production code across our AI, Cloud, or Security teams. Learn modern stacks including Next.js, Go, and Python.",
    skills: ["React", "Node.js", "Cloud Fundamentals"]
  },
  {
    title: "Data Science & AI",
    desc: "Help build and fine-tune LLMs and predictive models that power our enterprise intelligence platforms.",
    skills: ["Python", "PyTorch", "Data Visualization"]
  },
  {
    title: "Product Design (UX/UI)",
    desc: "Craft intuitive interfaces for complex data systems. Work closely with product managers and engineers.",
    skills: ["Figma", "Design Systems", "User Research"]
  }
];

const TIMELINE_STEPS = [
  { date: "September", title: "Applications Open", desc: "Submit your resume and portfolio via our portal." },
  { date: "Oct - Jan", title: "Interviews", desc: "Technical assessment and behavioral culture fit." },
  { date: "February", title: "Offers Extended", desc: "Final decisions sent out to all interviewed candidates." },
  { date: "May / June", title: "Program Begins", desc: "Welcome to the team! Onboarding starts." }
];

const HIGHLIGHTS = [
  { number: "01", title: "Real Impact", desc: "No 'intern projects.' You'll contribute to tools used by Fortune 500 companies daily." },
  { number: "02", title: "Mentorship", desc: "Paired 1:1 with a senior mentor to guide your technical and professional growth." },
  { number: "03", title: "Global Network", desc: "Connect with interns and leaders across our 12 global tech hubs." }
];

export default function InternshipsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col relative overflow-hidden">
      
      <Navbar />
      
      {/* Main Content Container */}
      <div className="relative z-10 flex-grow w-full max-w-7xl mx-auto px-6 pt-32 pb-32">
        <FadeIn>
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Future Leaders Program
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Start your career at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                edge of innovation.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
              Our 12-week summer internship offers elite mentorship, hands-on project ownership, and a direct path to full-time roles.
            </p>
          </div>

          {/* Program Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-slate-100 py-16 mb-32 bg-white/60 backdrop-blur-sm">
            {HIGHLIGHTS.map((item, index) => (
              <div key={index} className="space-y-4 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Internship Tracks - ATTRACTIVE & PRO UPGRADE */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight">Available Tracks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INTERNSHIP_TRACKS.map((track, i) => (
                <div key={i} className="flex flex-col h-full bg-white border border-slate-200 rounded-[2rem] hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group relative overflow-hidden">
                  
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/0 group-hover:to-blue-50/30 transition-all duration-500"></div>

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full p-8">
                    
                    {/* Top Section */}
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">{track.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{track.desc}</p>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="mt-auto">
                      {/* Pro Badges: White bg, shadow, border */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {track.skills.map(skill => (
                          <span key={skill} className="whitespace-nowrap px-3 py-1.5 bg-white border border-slate-100 shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wide text-slate-600 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Button with Animated Arrow */}
                      <Link href="/careers/apply" className="block w-full">
                        <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl group-hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                          Apply for Track
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
             {/* Decorative Background Blob */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Application Timeline</h2>

               <div className="relative">
                 {/* Visual Connector Line (Desktop Only) */}
                 <div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

                 <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                   {TIMELINE_STEPS.map((step, index) => (
                     <div key={index} className="relative z-10">
                       {/* Timeline Dot */}
                       <div className="w-8 h-8 bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center mb-4 md:-mt-4">
                          <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-500 animate-pulse' : 'bg-slate-500'}`}></div>
                       </div>
                       
                       <div className="text-blue-400 font-bold mb-1 tracking-wide text-sm">{step.date}</div>
                       <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                       <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          </div>

        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}