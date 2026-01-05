"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export default function InsightsPage() {
  const featuredPost = {
    category: "Artificial Intelligence",
    date: "Oct 12, 2025",
    title: "The Future of Generative AI in Enterprise Architecture",
    excerpt: "How large language models are reshaping the way organizations build, deploy, and scale their internal software infrastructure.",
    author: "Sarah Chen, CTO",
    readTime: "8 min read"
  };

  const recentPosts = [
    {
      category: "Cloud Computing",
      date: "Sep 28, 2025",
      title: "Migrating Legacy Systems to Hybrid Cloud: A Strategic Guide",
      readTime: "5 min read"
    },
    {
      category: "Cybersecurity",
      date: "Sep 15, 2025",
      title: "Zero Trust Architecture: Beyond the Buzzword",
      readTime: "6 min read"
    },
    {
      category: "Sustainability",
      date: "Aug 30, 2025",
      title: "Reducing Carbon Footprint in Data Centers",
      readTime: "4 min read"
    },
    {
      category: "Engineering Culture",
      date: "Aug 12, 2025",
      title: "Building Resilient Teams in Remote Environments",
      readTime: "7 min read"
    },
    {
      category: "FinTech",
      date: "Jul 22, 2025",
      title: "The Next Wave of Digital Payments in Southeast Asia",
      readTime: "5 min read"
    },
    {
      category: "Machine Learning",
      date: "Jul 10, 2025",
      title: "Optimizing Neural Networks for Edge Devices",
      readTime: "9 min read"
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-48 flex flex-col relative">
      <Navbar />
      
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 pb-32">
        <FadeIn>
          {/* Header */}
          <div className="mb-20 max-w-3xl">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Insights & Perspectives</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Deep dives into technology, innovation, and the future of business. Read the latest thoughts from our engineers and leadership.
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-24 group cursor-pointer">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-[21/9] mb-8">
              {/* Abstract Background for Featured Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full md:w-2/3">
                <div className="flex items-center gap-4 text-white/80 text-sm font-bold uppercase tracking-widest mb-4">
                  <span className="text-blue-400">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span>By {featuredPost.author}</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-500 max-w-4xl leading-relaxed">
              {featuredPost.excerpt}
            </p>
          </div>

          {/* Filter / Categories Bar */}
          <div className="flex flex-wrap gap-4 mb-16 border-b border-slate-100 pb-8">
            {['All', 'Artificial Intelligence', 'Cloud', 'Security', 'Engineering', 'Design'].map((tag, i) => (
              <button 
                key={tag}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Recent Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {recentPosts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-slate-50 rounded-2xl mb-6 overflow-hidden relative border border-slate-100">
                  <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-3 text-slate-400">
                  <span className="text-blue-600">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <span className="text-slate-400 text-sm">{post.date}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-32 p-12 bg-slate-50 rounded-[3rem] text-center border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Stay ahead of the curve</h3>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              Join 15,000+ engineers and leaders who get our latest insights delivered to their inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-full border border-slate-200 outline-none focus:border-blue-600 bg-white"
              />
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </FadeIn>
      </div>
      <Footer />
    </main>
  );
}