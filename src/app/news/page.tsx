"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function NewsPage() {
  const articles = [
    { date: "Oct 24, 2025", title: "Tuenx Technologies launches AI-driven cloud platform", category: "Product" },
    { date: "Sep 12, 2025", title: "Quarterly revenue exceeds expectations by 15%", category: "Business" },
    { date: "Aug 05, 2025", title: "Strategic partnership announced with Global Bank", category: "Partnership" },
    { date: "Jul 19, 2025", title: "Opening our new R&D center in Bangalore", category: "Expansion" },
  ];

  return (
    <main className="bg-white min-h-screen pt-96 flex flex-col relative">
      <Navbar />
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-24">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">Newsroom</h1>
            <p className="text-slate-500 text-xl">Latest updates from across the globe.</p>
          </div>
          
          <div className="grid gap-6 w-full">
            {articles.map((article, i) => (
              <div key={i} className="p-8 border border-slate-200 rounded-3xl hover:shadow-2xl transition-all cursor-pointer bg-white group hover:border-blue-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">{article.category}</span>
                  <span className="text-slate-400 text-sm">{article.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{article.title}</h2>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <Footer />
    </main>
  );
}