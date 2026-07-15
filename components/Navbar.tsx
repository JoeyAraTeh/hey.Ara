"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [activeId, setActiveId] = useState("#home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#featured-works", label: "Project" },
    { href: "#certifications", label: "Certificate" },
    { href: "#contact", label: "Contact" },
  ];

  // 1. Bulletproof Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const triggerOffset = window.innerHeight * 0.4;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href) as HTMLElement;
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerOffset) {
            setActiveId(navItems[i].href);
            return;
          }
        }
      }
      setActiveId(navItems[0].href);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Sliding Indicator (Hides when Contact is active)
  useEffect(() => {
    if (activeId === "#contact") {
      setIndicatorStyle({ opacity: 0, left: "0px", width: "0px" });
      return;
    }

    const activeIndex = navItems.findIndex((item) => item.href === activeId);
    const activeItem = itemRefs.current[activeIndex];
    const nav = navRef.current;

    if (activeItem && nav) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setIndicatorStyle({
        left: `${itemRect.left - navRect.left}px`,
        width: `${itemRect.width}px`,
        opacity: 1,
      });
    }
  }, [activeId]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveId(href);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,620px)]">
      <nav 
        ref={navRef} 
        className="relative flex w-full items-center justify-between gap-0 sm:gap-1 md:gap-2 px-2 sm:px-5 py-2 sm:py-2.5 rounded-full bg-base-900/10 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
      >
        {/* Interactive Sliding Indicator Pill */}
        <span
          className="absolute top-1/2 -translate-y-1/2 h-9 rounded-2xl bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={indicatorStyle}
        />

        {navItems.map((item, index) => {
          const isContact = item.href === "#contact";

          return (
            <React.Fragment key={item.label}>
              {/* Aesthetic Vertical Divider before Contact */}
              {isContact && (
                <div className="w-px h-5 bg-white/10 mx-1 sm:mx-2.5 self-center flex-shrink-0" />
              )}

              <a 
                href={item.href}
                ref={(el) => { itemRefs.current[index] = el; }}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative z-10 group flex items-center justify-center rounded-full transition-all duration-300 ${
                  isContact 
                    ? // Contact CTA Styles: Distinct container, flex-shrink-0 so it doesn't squeeze
                      "flex-shrink-0 px-3 sm:px-4 py-1.5 border border-white/10 bg-white/5 hover:bg-white/10" 
                    : // Normal Item Styles: Spread out evenly
                      "min-w-0 flex-1 px-1.5 sm:px-3 py-2.5 hover:bg-white/0"
                }`}
              >
                <span className={`text-[9px] sm:text-[10px] font-bold tracking-wide sm:tracking-wider uppercase transition-all duration-300 ${
                  isContact 
                    ? // Contact Text & Glow State
                      (activeId === item.href 
                        ? "text-white" 
                        : "text-base-200 group-hover:text-white")
                    : // Normal Text State
                    (activeId === item.href 
                      ? "text-white" 
                      : "text-base-200 group-hover:text-white")
                }`}>
                  {item.label}
                </span>
                
                {/* Subtle active glow ring for Contact */}
                {isContact && activeId === item.href && (
                  <span className="absolute inset-0 rounded-full bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-500" />
                )}
              </a>
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}