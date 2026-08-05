"use client";

import Image from "next/image";
import React, { useState } from "react";

const categories = [
  "All",
  "UI/UX Design",
  "WordPress Dev",
] as const;

type Category = (typeof categories)[number];
type WorkCategory = Exclude<Category, "All">;

const works: {
  title: string;
  category: WorkCategory;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
}[] = [
  {
    title: "Mizu Matcha Mockup",
    category: "UI/UX Design",
    imageSrc: "/Mizu.png",
    imageWidth: 1555,
    imageHeight: 1024,
    link: "https://www.figma.com/proto/0YclueoBl1CHpTN6XhFCKQ/Untitled?node-id=2018-164&p=f&t=ioQuFthQjaevTRfw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Surigao RSP Mockup",
    category: "UI/UX Design",
    imageSrc: "/RSP.png",
    imageWidth: 1555,
    imageHeight: 1024,
    link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1825-21045&p=f&t=r102swKGgE6JSqDl-1&scaling=contain&content-scaling=fixed&page-id=1825%3A17483&starting-point-node-id=1825%3A21045",
  },
  {
    title: "Rewards System Mockup",
    category: "UI/UX Design",
    imageSrc: "/MobileApp.png",
    imageWidth: 1555,
    imageHeight: 1024,
    link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1777-32087&p=f&t=tkVRzwPrT0aJzSxz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1777%3A32070&show-proto-sidebar=1",
  },
  {
    title: "Rewards System Admin Mockup",
    category: "UI/UX Design",
    imageSrc: "/Admin.png",
    imageWidth: 1555,
    imageHeight: 1024,
    link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1813-18022&p=f&t=CXYmPxIlcVh0QzZN-1&scaling=contain&content-scaling=fixed&page-id=1813%3A15142&starting-point-node-id=1813%3A18022",
  },
  {
    title: "UP Mindanao",
    category: "WordPress Dev",
    imageSrc: "/UP.png",
    imageWidth: 1555,
    imageHeight: 1024,
    link: "https://upmin.edu.ph/",
  },
  {
    title: "Provincial Government of Davao Occidental",
    category: "WordPress Dev",
    imageSrc: "/DavOcc.png",
    imageWidth: 1555,
    imageHeight: 1024,
    link: "https://davaooccidental.gov.ph/",
  },
  {
    title: "Explore Camiguin",
    category: "WordPress Dev",
    imageSrc: "/ExploreCamiguin.png",
    imageWidth: 1555,
    imageHeight: 1024,
    link: "https://explorecamiguin.com/",
  },
];

export default function ExploreWorks() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="collection" className="py-24 md:py-32 bg-base-950/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10 reveal">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-base-200 text-glow-champagne">
            Explore My Work
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xs sm:max-w-md mx-auto text-xs sm:text-sm text-base-400 font-light leading-relaxed px-2 sm:px-0">
            A showcase of projects that demonstrates my ability to create clean, functional, and user-centered digital experiences.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-3 py-2 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "border-base-300 bg-base-300 text-base-950 shadow-lg shadow-base-300/10"
                    : "border-base-300/15 text-base-300 hover:border-base-300/50 hover:text-base-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredWorks.map((work, index) => (
            <div
              key={work.title}
              className="group neon-morphic w-full max-w-[280px] sm:max-w-none mx-auto rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: `${work.imageWidth} / ${work.imageHeight}` }}
              >
                <Image
                  src={work.imageSrc}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 brightness-90 group-hover:scale-110 group-hover:brightness-100"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="mb-2 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.24em] text-base-400">
                  {work.category}
                </p>
                <h4 className="font-serif text-base sm:text-lg font-semibold text-base-200 leading-snug line-clamp-2">
                  {work.title}
                </h4>
                <div className="flex items-center justify-between mt-4">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.24em] text-base-300 transition-colors duration-300 hover:text-base-100"
                  >
                    View Project
                    <span className="h-px w-5 sm:w-7 bg-base-300/50 transition-all duration-300 group-hover:w-10 sm:group-hover:w-12 group-hover:bg-base-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
