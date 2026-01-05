"use client";

import React from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Let's discuss how Tuenx Tech can help you build the future. 
                Our team of engineers and strategists is ready to partner with you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email us</p>
                    <p className="font-semibold">hello@tuenxtech.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Headquarters</p>
                    <p className="font-semibold">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">Work Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500 py-3 px-4" placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500 py-3 px-4" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}