"use client";

import React, { useState } from "react";

const categories = [
  "All",
  "UI/UX Design",
  "WordPress Dev",
  "Front-End Dev",
  "Laravel Dev",
] as const;

type Category = (typeof categories)[number];
type WorkCategory = Exclude<Category, "All">;

const works: {
  title: string;
  category: WorkCategory;
  imageSeed: string;
  accent: "light" | "dark";
}[] = [
  {
    title: "Neon Interface",
    category: "UI/UX Design",
    imageSeed: "burgundy-uiux-1",
    accent: "dark",
  },
  {
    title: "Mobile Rewards Flow",
    category: "UI/UX Design",
    imageSeed: "burgundy-uiux-2",
    accent: "light",
  },
  {
    title: "Editorial CMS",
    category: "WordPress Dev",
    imageSeed: "burgundy-wordpress-1",
    accent: "dark",
  },
  {
    title: "Studio Landing Page",
    category: "WordPress Dev",
    imageSeed: "burgundy-wordpress-2",
    accent: "light",
  },
  {
    title: "Cyber Dashboard",
    category: "Front-End Dev",
    imageSeed: "burgundy-frontend-1",
    accent: "light",
  },
  {
    title: "Synth Theme",
    category: "Front-End Dev",
    imageSeed: "burgundy-frontend-2",
    accent: "dark",
  },
  {
    title: "Admin Portal",
    category: "Laravel Dev",
    imageSeed: "burgundy-laravel-1",
    accent: "dark",
  },
  {
    title: "Booking System",
    category: "Laravel Dev",
    imageSeed: "burgundy-laravel-2",
    accent: "light",
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
            A curated collection of interfaces, websites, and digital products.
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
              className="group neon-morphic rounded-2xl overflow-hidden cursor-pointer reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${work.imageSeed}/400/400.jpg`}
                  alt={work.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
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
                  <button
                    className={`px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase rounded-md transition-colors ${
                      work.accent === "light"
                        ? "bg-base-300 text-base-900 hover:bg-base-100"
                        : "bg-base-700 text-base-200 hover:bg-base-600 border border-base-600/50"
                    }`}
                  >
                    View Work
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
