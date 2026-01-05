"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="bg-white min-h-screen pt-80 flex flex-col items-center">
        <Navbar />
        <FadeIn>
          <div className="text-center p-16 bg-slate-50 rounded-[3rem] border border-slate-100 max-w-2xl mx-auto shadow-2xl">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/30">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Application Received</h1>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Your profile has been sent to our talent acquisition team. We typically review engineering and internship applications within 4 business days.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all"
            >
              Return to Homepage
            </button>
          </div>
        </FadeIn>
        <div className="mt-auto w-full"><Footer /></div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-48 flex flex-col relative overflow-hidden">
      <Navbar />
      
      {/* Background Decor to match the site vibe */}
      <div className="absolute top-0 left-0 w-full h-96 bg-slate-900 -z-10" />

      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-32">
        <FadeIn>
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Info Panel (Professional Context) */}
            <div className="lg:w-1/3 bg-slate-50 p-12 border-r border-slate-100">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">New Application</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Join the Network</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                You are applying for a position at Tuenx Technologies. We look for builders who are passionate about scaling infrastructure and solving complex problems.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">1</div>
                  <p className="text-xs text-slate-600 font-medium">Personal Information</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[10px] font-bold">2</div>
                  <p className="text-xs text-slate-400 font-medium">Experience & CV</p>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:w-2/3 p-12 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input required type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all" placeholder="email@company.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">LinkedIn / Portfolio URL</label>
                  <input type="url" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all" placeholder="https://linkedin.com/in/..." />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Resume / CV</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer group bg-slate-50">
                    <svg className="w-10 h-10 text-slate-300 mx-auto mb-4 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    <p className="text-sm font-bold text-slate-600 mb-1">Click to upload CV</p>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">PDF or DOCX up to 10MB</p>
                    <input type="file" className="hidden" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Why Tuenx Technologies?</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all resize-none" placeholder="Briefly describe your motivation..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98]">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}