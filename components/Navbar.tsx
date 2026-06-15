"use client";

import React from 'react';

export default function Navbar() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#featured-works", label: "Project" },
    { href: "#certifications", label: "Certificate" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    // Fixed at the bottom center of the screen
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,620px)]">
      {/* Floating Pill Container with Glassmorphism */}
      <nav className="flex w-full items-center justify-between gap-1 md:gap-2 px-5 py-2.5 rounded-full bg-base-900/10 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20">
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            // Padding and hover background for the pill effect on each item
            className="group flex min-w-0 flex-1 items-center justify-center px-3 py-2.5 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-[10px] font-bold tracking-wider uppercase text-base-200 group-hover:text-base-200 transition-colors duration-300">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
