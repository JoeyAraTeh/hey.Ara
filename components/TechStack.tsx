import React from 'react';
import { Icon } from '@iconify/react';

export default function TechStack() {
  const coreSkills = [
    { name: "UI/UX", detail: "Figma", icon: "simple-icons:figma" },
    { name: "Canva", detail: "Design", icon: "simple-icons:canva" },
    { name: "HTML", detail: "Markup", icon: "simple-icons:html5" },
    { name: "CSS", detail: "Styling", icon: "simple-icons:css" },
    { name: "React.js", detail: "UI", icon: "simple-icons:react" },
    { name: "Next.js", detail: "Framework", icon: "simple-icons:nextdotjs" },
    { name: "Tailwind", detail: "CSS", icon: "simple-icons:tailwindcss" },
    { name: "WordPress", detail: "CMS", icon: "simple-icons:wordpress" },
  ];

  const additionalKnowledge = [
    { name: "React Native", icon: "simple-icons:react" },
    { name: "PHP", icon: "simple-icons:php" },
    { name: "SQL", icon: "lucide:database" },
    { name: "Laravel Breeze", icon: "simple-icons:laravel" },
  ];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* <div className="mb-12 reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-wide text-base-200 text-glow-champagne">
            My Stack
          </h2>
          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-base-400">
            The design and development tools I use most often, styled like a compact creative workspace.
          </p>
        </div> */}

        <div className="rounded-[2rem] border border-base-300/10 bg-base-950/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-9">
          <div className="mb-10 reveal">
            <h3 className="mb-6 text-sm font-bold tracking-[0.28em] uppercase text-base-300">
              What I Work With
            </h3>
            <div className="grid grid-cols-3 gap-x-5 gap-y-8 sm:grid-cols-4 md:grid-cols-8">
              {coreSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="reveal group flex flex-col items-center text-center"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-base-300/10 bg-base-800/70 shadow-lg shadow-black/25 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-base-300/35 group-hover:bg-base-700/60 group-hover:shadow-base-600/20">
                    <Icon icon={skill.icon} width={34} className="text-base-300" />
                  </div>
                  <span className="mt-3 text-xs font-bold text-base-200">
                    {skill.name}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-wide text-base-400">
                    {skill.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '250ms' }}>
            <h3 className="mb-6 text-sm font-bold tracking-[0.28em] uppercase text-base-300">
              Additional Knowledge
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {additionalKnowledge.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 rounded-2xl border border-base-300/10 bg-base-800/45 px-4 py-4 transition-all duration-500 hover:border-base-300/30 hover:bg-base-800/70"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-base-900/70">
                    <Icon icon={tech.icon} width={24} className="text-base-300" />
                  </div>
                  <span className="text-sm font-medium leading-tight text-base-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
