"use client";

import React from 'react';
import FadeIn from './FadeIn';

const inputClasses = "w-full rounded-md bg-[#F5F7FA] border border-[#E6E9EF] text-[#0B1220] placeholder:text-[#9AA4B4] focus:border-[#1D4ED8] focus:bg-white focus:ring-2 focus:ring-[#1D4ED8]/10 py-3 px-4 outline-none transition-colors text-sm";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#F5F7FA] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden border border-[#E6E9EF]">
            {/* Left: dark panel */}
            <div className="bg-[#0B1220] text-white p-10 md:p-14">
              <p className="eyebrow !text-slate-500 mb-5">Contact</p>
              <h2 className="font-display text-3xl md:text-4xl mb-6 leading-[1.15]">
                Start a conversation.
              </h2>
              <p className="text-slate-300 mb-12 leading-relaxed max-w-md">
                Tell us what you&apos;re working on. You&apos;ll hear back from an engineer,
                not a sales script.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-xs text-slate-500 mb-1.5">Email</p>
                  <a href="mailto:hello@tuenxtech.com" className="text-lg text-white hover:text-slate-300 transition-colors">
                    hello@tuenxtech.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1.5">Headquarters</p>
                  <p className="text-lg text-white">San Francisco, CA</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1.5">Regional hubs</p>
                  <p className="text-lg text-white">London · Bangalore</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white p-10 md:p-14">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0B1220] mb-2">Full name</label>
                    <input type="text" id="name" className={inputClasses} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#0B1220] mb-2">Company</label>
                    <input type="text" id="company" className={inputClasses} placeholder="Acme Corp" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0B1220] mb-2">Work email</label>
                  <input type="email" id="email" className={inputClasses} placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0B1220] mb-2">How can we help?</label>
                  <textarea id="message" rows={5} className={`${inputClasses} resize-none`} placeholder="A few lines about your project, timeline, and goals."></textarea>
                </div>
                <button type="button" className="w-full bg-[#0B1220] text-white font-semibold text-sm py-4 px-6 rounded-md hover:bg-[#1D4ED8] transition-colors">
                  Send message
                </button>
                <p className="text-xs text-[#9AA4B4] leading-relaxed">
                  We&apos;ll reply within one business day.
                </p>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
