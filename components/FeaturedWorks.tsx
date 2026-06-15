"use client";

import React, { useState } from 'react';

export default function FeaturedWorks() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle card active

  const featuredProjects = [
    {
      id: 1,
      title: "Surigao RSP Mockup",
      category: "UI/UX Design",
      imageSrc: "/fw2.png",
      imageSeed: "Surigao RSP Mockup",
      link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1825-21045&p=f&t=r102swKGgE6JSqDl-1&scaling=contain&content-scaling=fixed&page-id=1825%3A17483&starting-point-node-id=1825%3A21045"
    },
    {
      id: 2,
      title: "Rewards System Mockup",
      category: "UI/UX Design",
      imageSrc: "/fww2.png",
      imageSeed: "Rewards System Mockup",
      link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1777-32087&p=f&t=tkVRzwPrT0aJzSxz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1777%3A32070&show-proto-sidebar=1"
    },
    {
      id: 3,
      title: "Rewards System Admin Mockup",
      category: "UI/UX Design",
      imageSrc: "/RewardsAdmin.png",
      imageSeed: "moody-dashboard",
      link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1813-18022&p=f&t=CXYmPxIlcVh0QzZN-1&scaling=contain&content-scaling=fixed&page-id=1813%3A15142&starting-point-node-id=1813%3A18022"
    },
    {
      id: 4,
      title: "UP Mindanao",
      category: "Wordpress Development",
      imageSrc: "/UPMindanao.png",
      imageSeed: "velvet-orbit-brand",
      link: "https://upmin.edu.ph/"
    },
    {
      id: 5,
      title: "Provincial Government of Davao Occidental",
      category: "Wordpress Development",
      imageSrc: "/DavaoOcc.png",
      imageSeed: "noir-atlas-site",
      link: "https://davaooccidental.gov.ph/"
    },
    {
      id: 6,
      title: "Explore Camiguin",
      category: "Wordpress Development",
      imageSrc: "/ExploreCamiguin.png",
      imageSeed: "rose-circuit-app",
      link: "https://explorecamiguin.poolreno.com/"
    },
  ];

  const getCardClass = (index: number) => {
    if (index === activeIndex) {
      return "z-30 scale-100 opacity-100 translate-x-0 shadow-2xl shadow-black/50";
    } else if (index === activeIndex - 1 || (activeIndex === 0 && index === featuredProjects.length - 1)) {
      return "z-20 scale-[0.85] opacity-50 -translate-x-[60%] blur-[1px]";
    } else if (index === activeIndex + 1 || (activeIndex === featuredProjects.length - 1 && index === 0)) {
      return "z-20 scale-[0.85] opacity-50 translate-x-[60%] blur-[1px]";
    } else {
      return "z-10 scale-[0.7] opacity-0 translate-x-0";
    }
  };

  return (
    <section id="featured-works" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="relative flex items-center justify-between mb-9 md:mb-14">
          
          <h2 className="absolute inset-0 flex items-center justify-center font-serif text-5xl md:text-7xl lg:text-8xl font-semibold tracking-widest uppercase text-base-300/45 pointer-events-none select-none z-0">
            Projects
          </h2>

          <div className="relative z-10 reveal">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-base-300">
              Featured <br></br> Work
            </span>
          </div>

          <div className="relative z-10 text-right max-w-[200px] md:max-w-xs reveal" style={{ transitionDelay: '100ms' }}>
            <p className="text-sm font-light text-base-400 leading-relaxed">
              A few of my recent <br></br> works I&apos;m proud of!
            </p>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[600px] flex items-center justify-center">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => setActiveIndex(index)}
              className={`
                absolute 
                w-[260px] md:w-[420px] 
                aspect-[1024/945] 
                rounded-2xl 
                overflow-hidden 
                cursor-pointer 
                group
                neon-morphic 
                transition-all 
                duration-700 
                ease-in-out
                ${getCardClass(index)}
              `}
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={project.imageSrc ?? `https://picsum.photos/seed/${project.imageSeed}/800/1000.jpg`} 
                  alt={project.title} 
                  className="w-full h-full object-cover brightness-85 group-hover:brightness-90 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/10 to-transparent"></div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col gap-4">
                <div>
                  <h4 className="font-serif text-3xl md:text-4xl font-semibold tracking-wide text-base-200 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-base-300 flex items-center gap-2">
                    {project.category}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-base-300/10">
                  <a
                    href={project.link || undefined}
                    aria-disabled={!project.link}
                    onClick={(event) => {
                      event.stopPropagation();

                      if (!project.link) {
                        event.preventDefault();
                      }
                    }}
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-base-300 transition-colors duration-300 hover:text-base-100">
                    View Project
                    <span className="h-px w-7 bg-base-300/50 transition-all duration-300 group-hover:w-12 group-hover:bg-base-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator */}
        <div className="flex items-center justify-center gap-3 -mt-15">
          {featuredProjects.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-base-300 w-6' : 'bg-base-300/30 hover:bg-base-300/50'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
