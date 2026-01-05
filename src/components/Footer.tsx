"use client";

import React from 'react';
import Link from 'next/link'; // Changed from framer-motion to next/link for performance

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'YouTube', href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/#about' },
        { name: 'Careers', href: '/careers' }, // Direct link
        { name: 'News', href: '/news' },
        { name: 'Investors', href: '/investors' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Security', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '/contact' }, // Updated to point to contact page
        { name: 'System Status', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold tracking-tight">Tuenx Technologies</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Engineering the future of enterprise. We build the digital infrastructure that powers the world's leading organizations.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {/* Using Link instead of a tag for faster navigation */}
                    <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            © 2026 Tuenx Technologies. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-500 hover:text-white transition-colors text-sm">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}