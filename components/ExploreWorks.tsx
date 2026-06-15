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
    title: "Surigao RSP Mockup",
    category: "UI/UX Design",
    imageSrc: "/fw2.png",
    imageWidth: 1024,
    imageHeight: 945,
    link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1825-21045&p=f&t=r102swKGgE6JSqDl-1&scaling=contain&content-scaling=fixed&page-id=1825%3A17483&starting-point-node-id=1825%3A21045",
  },
  {
    title: "Rewards System Mockup",
    category: "UI/UX Design",
    imageSrc: "/fww2.png",
    imageWidth: 1027,
    imageHeight: 945,
    link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1777-32087&p=f&t=tkVRzwPrT0aJzSxz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1777%3A32070&show-proto-sidebar=1",
  },
  {
    title: "Rewards System Admin Mockup",
    category: "UI/UX Design",
    imageSrc: "/RewardsAdmin.png",
    imageWidth: 1024,
    imageHeight: 945,
    link: "https://www.figma.com/proto/lj2HzlFKI3SqwI8irkP30v/My-Recent-Projecs?node-id=1813-18022&p=f&t=CXYmPxIlcVh0QzZN-1&scaling=contain&content-scaling=fixed&page-id=1813%3A15142&starting-point-node-id=1813%3A18022",
  },
  {
    title: "UP Mindanao",
    category: "WordPress Dev",
    imageSrc: "/UPMindanao.png",
    imageWidth: 1024,
    imageHeight: 946,
    link: "https://upmin.edu.ph/",
  },
  {
    title: "Provincial Government of Davao Occidental",
    category: "WordPress Dev",
    imageSrc: "/DavaoOcc.png",
    imageWidth: 1024,
    imageHeight: 948,
    link: "https://davaooccidental.gov.ph/",
  },
  {
    title: "Explore Camiguin",
    category: "WordPress Dev",
    imageSrc: "/ExploreCamiguin.png",
    imageWidth: 1024,
    imageHeight: 982,
    link: "https://explorecamiguin.poolreno.com/",
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
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide text-base-200 text-glow-champagne">
            Explore My Work
          </h2>
          <p className="text-sm text-base-400 mt-4 max-w-md mx-auto font-light">
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
                className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWorks.map((work, index) => (
            <div
              key={work.title}
              className="group neon-morphic rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={work.imageSrc}
                  alt={work.title}
                  width={work.imageWidth}
                  height={work.imageHeight}
                  className="h-auto w-full bg-base-900/50 object-contain transition-all duration-700 brightness-90 group-hover:scale-110 group-hover:brightness-100"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-base-400">
                  {work.category}
                </p>
                <h4 className="font-serif text-lg font-semibold text-base-200 truncate">
                  {work.title}
                </h4>
                <div className="flex items-center justify-between mt-4">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-base-300 transition-colors duration-300 hover:text-base-100"
                  >
                    View Project
                    <span className="h-px w-7 bg-base-300/50 transition-all duration-300 group-hover:w-12 group-hover:bg-base-200" />
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
