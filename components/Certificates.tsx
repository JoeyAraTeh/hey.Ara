import React from "react";
import { Icon } from "@iconify/react";

const certifications = [
  {
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    icon: "lucide:milestone",
  },
  {
    title: "Build Complete CMS Blog in PHP MySQL Bootstrap & PDO",
    issuer: "Udemy",
    icon: "lucide:badge-check",
  },
   {
    title: "Front-End Development",
    issuer: "Meta",
    icon: "lucide:badge-check",
  },
];

export default function Certificates() {
  return (
    <section id="certifications" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="reveal mb-12 text-center font-serif text-4xl font-semibold tracking-wide text-base-200 text-glow-champagne md:text-6xl">
          Certifications
        </h2>

        <div className="relative overflow-hidden bg-transparent">
          <div className="absolute inset-x-10 bottom-0 h-28 rounded-[999px] bg-gradient-to-t from-base-950/70 via-base-900/25 to-transparent blur-xl md:inset-x-20" />
          <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base-900/80 to-transparent pointer-events-none md:w-28" />
          <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base-900/80 to-transparent pointer-events-none md:w-28" />

          <div className="relative grid gap-0 md:grid-cols-3">
            {certifications.map((certificate, index) => (
              <article
                key={certificate.title}
                className="reveal group relative min-h-44 px-7 py-8 transition-all duration-500 hover:bg-base-800/10 md:px-9 md:py-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-base-400 transition-colors duration-500 group-hover:text-base-300">
                    <Icon icon={certificate.icon} width={24} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-serif text-lg font-semibold leading-tight tracking-wide text-base-200">
                      {certificate.title}
                    </p>
                    <p className="mt-2 text-xs font-light leading-relaxed text-base-400">
                      Certified credential from {certificate.issuer}.
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-base-300 transition-colors duration-300 hover:text-base-100"
                    >
                      View Cert
                      <span className="h-px w-7 bg-base-300/50 transition-all duration-300 group-hover:w-12 group-hover:bg-base-200" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
