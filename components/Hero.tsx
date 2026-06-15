import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative px-6 pt-20 overflow-hidden">
      {/* Background glow - shifted slightly left to sit behind the text */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[min(760px,90vw)] h-[min(760px,90vw)] bg-base-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Changed to a 2-column grid layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[80vh]">
          
          {/* ============================================
              LEFT COLUMN: Text & Buttons
          ============================================ */}
          <div className="relative z-20 py-16 text-left md:py-0">
            <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-base-200 text-glow-champagne" style={{ transitionDelay: '100ms' }}>
              Hello,<br/>
              <span className="whitespace-nowrap">I'm <span className="italic text-base-300">Joey Ara Teh.</span></span><br/>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-2 text-base-400">
                Web Designer & Developer.
              </span>
            </h1>

            <p className="reveal mt-8 max-w-xl text-base md:text-lg font-light text-base-400 leading-relaxed" style={{ transitionDelay: '200ms' }}>
              UI/UX Designer and Front-End Developer focused on building intuitive, responsive, and visually appealing web experiences. Dedicated to creating interfaces that balance functionality, usability, and design.
            </p>

            <div className="reveal mt-10 flex flex-col sm:flex-row items-start justify-start gap-4" style={{ transitionDelay: '300ms' }}>
              <a href="#collection" className="px-8 py-4 bg-gradient-to-r from-base-700 to-base-500 text-base-200 text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:shadow-[0_0_40px_rgba(109,41,50,0.3)] transition-all duration-500 flex items-center gap-2 border border-base-600/50">
                View My Work <Icon icon="lucide:arrow-right" width={16} />
              </a>
            </div>
          </div>

          {/* ============================================
              RIGHT COLUMN: Your Portrait Image
          ============================================ */}
          <div className="relative reveal" style={{ transitionDelay: '400ms' }}>
            <div className="relative h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-base-300/10">
              <Image 
                src="/Me.jpg" 
                alt="Joey Ara Teh" 
                fill={true}
                className="object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out"
                priority 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
