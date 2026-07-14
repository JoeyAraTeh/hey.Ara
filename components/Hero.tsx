import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative px-6 pt-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[min(760px,90vw)] h-[min(760px,90vw)] bg-base-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="mx-auto w-full max-w-5xl relative z-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          
          <div className="relative z-20 py-16 md:py-0 text-center max-w-4xl">
            <h1 className="reveal font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-base-200 text-glow-champagne" style={{ transitionDelay: '100ms' }}>
              Hello,<br/>
              <span className="whitespace-nowrap">I'm <span className="italic text-base-300">Joey Ara Teh.</span></span><br/>
              <span className="block text-xl sm:text-4xl md:text-5xl lg:text-5xl mt-2 text-base-400">
                Web Designer & Developer.
              </span>
            </h1>

            <p className="reveal mt-6 sm:mt-8 mx-auto max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg font-light text-base-400 leading-relaxed px-2 sm:px-0"style={{ transitionDelay: '200ms' }}>
              UI/UX Designer and Front-End Developer focused on building intuitive, responsive, and visually appealing web experiences. Dedicated to creating interfaces that balance functionality, usability, and design.
            </p>
 
            <div className="reveal mt-10 flex justify-center" style={{ transitionDelay: '300ms' }}>
              <a href="#collection" className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-base-700 to-base-500 text-base-200 text-[10px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase rounded-full hover:shadow-[0_0_40px_rgba(109,41,50,0.3)] transition-all duration-500 flex items-center gap-2 border border-base-600/50">
                View My Work <Icon icon="lucide:arrow-right" width={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
