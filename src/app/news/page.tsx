"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function NewsPage() {
  const articles = [
    { date: "Oct 24, 2025", title: "Tuenx Technologies launches AI-driven cloud platform", category: "Product", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
    { date: "Sep 12, 2025", title: "Quarterly revenue exceeds expectations by 15%", category: "Business", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
    { date: "Aug 05, 2025", title: "Strategic partnership announced with Global Bank", category: "Partnership", image: "https://images.unsplash.com/photo-1559526324-4b87b5ae7259?auto=format&fit=crop&w=800&q=80" },
    { date: "Jul 19, 2025", title: "Opening our new R&D center in Bangalore", category: "Expansion", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <main className="bg-[#F5F7FA] min-h-screen pt-28 flex flex-col">
      <Navbar />

      <div className="flex-grow w-full max-w-5xl mx-auto px-6 pb-24">
        <FadeIn>
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold text-[#1D4ED8] bg-[#1D4ED8]/8 rounded-full">
              Newsroom
            </div>
            <h1 className="text-5xl font-bold text-[#0B1220] mb-4 tracking-tight">Latest Updates</h1>
            <p className="text-lg text-[#5B6472]">Company announcements, product launches, and industry insights.</p>
          </div>

          {/* Featured Article */}
          <div className="mb-16 group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[21/9] mb-6">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#1D4ED8] text-white text-xs font-bold rounded-full uppercase tracking-wider">{articles[0].category}</span>
                  <span className="text-white/70 text-sm">{articles[0].date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight group-hover:text-white/90 transition-colors">{articles[0].title}</h2>
              </div>
            </div>
          </div>

          {/* Article List */}
          <div className="grid gap-4">
            {articles.slice(1).map((article, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-2xl border border-[#E6E9EF] hover:border-[#1D4ED8]/30 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <img src={article.image} alt={article.title} className="w-full sm:w-48 h-32 sm:h-28 rounded-xl object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#1D4ED8] font-bold text-xs uppercase tracking-widest">{article.category}</span>
                    <span className="w-1 h-1 bg-[#E6E9EF] rounded-full" />
                    <span className="text-[#5B6472] text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#1D4ED8] transition-colors">{article.title}</h3>
                </div>
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[#E6E9EF] group-hover:bg-[#1D4ED8] group-hover:border-[#1D4ED8] group-hover:text-white text-[#5B6472] transition-all flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}
