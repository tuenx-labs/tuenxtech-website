"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FadeIn from '@/components/FadeIn';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-24">
      <Navbar />
      
      <div className="flex-grow max-w-5xl w-full mx-auto px-6 py-12">
        <FadeIn>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Account Settings</h1>
            <p className="text-slate-500 mt-2">Manage your profile details and security preferences.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Left Sidebar Navigation */}
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <nav className="flex flex-col p-2">
                  <button 
                    onClick={() => setActiveTab('general')}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'general' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                  >
                    General Profile
                  </button>
                  <button 
                    onClick={() => setActiveTab('security')}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'security' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                  >
                    Login & Security
                  </button>
                  <button 
                    onClick={() => setActiveTab('notifications')}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'notifications' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                  >
                    Notifications
                  </button>
                </nav>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-grow">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                
                {/* GENERAL TAB */}
                {activeTab === 'general' && (
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Profile Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                        <input type="text" defaultValue="Jane" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                        <input type="text" defaultValue="Doe" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Bio / Headline</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="Senior Software Engineer passionate about AI."></textarea>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </form>
                )}

                {/* SECURITY TAB */}
                {activeTab === 'security' && (
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Security</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Current Email</label>
                      <input type="email" defaultValue="jane@example.com" disabled className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                        <input type="password" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                        <input type="password" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-lg hover:bg-black transition-colors">
                        Update Password
                      </button>
                    </div>
                  </form>
                )}

                {/* NOTIFICATIONS TAB */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Notification Preferences</h2>
                    
                    {[
                      { title: "Application Updates", desc: "Receive emails when your application status changes." },
                      { title: "New Job Alerts", desc: "Get notified when new roles match your profile." },
                      { title: "Marketing & News", desc: "Receive updates about Tuenx Technologies products." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-slate-900">{item.title}</h3>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={i < 2} className="sr-only peer" />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </main>
  );
}