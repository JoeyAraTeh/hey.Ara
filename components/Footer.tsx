"use client";

import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import React, { type FormEvent, useRef, useState } from "react";

export default function Footer() {
  const contactEmail = "tjoeyara@gmail.com";
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");
  
  const contactLinks = [
    {
      icon: "lucide:map-pin",
      label: "Address",
      value: "Brgy 9-A, Marfori Heights Subdivision, Davao City, Davao Del Sur",
      href: "https://maps.google.com/?q=Brgy+9-A+Marfori+Heights+Subdivision+Davao+City",
    },
    {
      icon: "lucide:phone",
      label: "Phone",
      value: "+63 998 909 9129",
      href: undefined,
    },
    {
      icon: "lucide:mail",
      label: "Email",
      value: contactEmail,
      href: undefined,
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_e01yc3k";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ytintb4";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "zWyatEIuM-qsCypEI";

    if (!serviceId || !templateId || !publicKey || !formRef.current) {
      setStatus("error");
      setStatusMessage("EmailJS is not configured yet.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const form = formRef.current;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.from_name.value,
          reply_to: form.reply_to.value,
          subject: form.subject.value,
          message: form.message.value,
        },
        {
          publicKey,
        }
      );

      formRef.current.reset();
      setStatus("sent");
      setStatusMessage("Message sent successfully!");
    } catch (error) {
      const emailError = error as { text?: string; message?: string };

      setStatus("error");
      setStatusMessage(
        emailError.text || emailError.message || "Unable to send message."
      );
    }
  };

  // Reset status and hide the indicator when the user clicks back into the form
  const handleFormInteraction = () => {
    if (status !== "idle" && status !== "sending") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  return (
    <footer id="contact" className="relative border-t border-white/5 py-24 md:py-32">
      <div className="absolute bottom-0 left-1/2 -z-10 h-96 w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(109,41,50,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left Column */}
          <div className="text-left lg:sticky lg:top-32">
            <h2
              className="reveal font-serif text-4xl font-semibold tracking-wide text-base-200 text-glow-champagne md:text-6xl"
              style={{ transitionDelay: "100ms" }}
            >
              GET IN TOUCH
            </h2>

            <p
              className="reveal mt-4 max-w-md text-base font-light leading-relaxed text-base-400"
              style={{ transitionDelay: "200ms" }}
            >
              Ready to collaborate on the next high-value digital asset? Let&apos;s connect and build something exceptional.
            </p>

            <div
              className="reveal mt-12 flex flex-col gap-3"
              style={{ transitionDelay: "400ms" }}
            >
              {contactLinks.map((item) => {
                const isClickable = !!item.href;
                
                const innerContent = (
                  <>
                    <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 ${isClickable ? "group-hover:border-champagne/20 group-hover:bg-champagne/5" : ""}`}>
                      <Icon icon={item.icon} width={18} className={`text-base-300 transition-colors duration-300 ${isClickable ? "group-hover:text-champagne" : ""}`} />
                    </span>

                    <div className="flex flex-col pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-base-400/60">
                        {item.label}
                      </span>
                      <span className={`text-sm font-medium leading-relaxed text-base-200 transition-colors duration-300 ${isClickable ? "group-hover:text-white" : ""}`}>
                        {item.value}
                      </span>
                    </div>
                  </>
                );

                if (isClickable) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-3 -ml-3 rounded-2xl transition-all duration-300 hover:bg-white/5"
                    >
                      {innerContent}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-3 -ml-3 rounded-2xl"
                  >
                    {innerContent}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            onFocus={handleFormInteraction} // <-- ADDED: Triggers when user clicks any input
            className="reveal rounded-2xl border border-white/10 bg-base-900/40 backdrop-blur-xl p-6 shadow-2xl shadow-black/10 md:p-8"
            style={{ transitionDelay: "250ms" }}
          >
            <input type="hidden" name="to_email" value={contactEmail} />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.24em] text-base-400/80">
                  Name
                </span>
                <input
                  name="from_name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-base-400/30 hover:border-white/20 focus:border-champagne/30 focus:bg-white/[0.08] focus:ring-1 focus:ring-champagne/20"
                  placeholder="John Doe"
                />
              </label>

              <label className="block">
                <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.24em] text-base-400/80">
                  Email
                </span>
                <input
                  name="reply_to"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-base-400/30 hover:border-white/20 focus:border-champagne/30 focus:bg-white/[0.08] focus:ring-1 focus:ring-champagne/20"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.24em] text-base-400/80">
                Subject
              </span>
              <input
                name="subject"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-base-400/30 hover:border-white/20 focus:border-champagne/30 focus:bg-white/[0.08] focus:ring-1 focus:ring-champagne/20"
                placeholder="Project Inquiry"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.24em] text-base-400/80">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-base-400/30 hover:border-white/20 focus:border-champagne/30 focus:bg-white/[0.08] focus:ring-1 focus:ring-champagne/20"
                placeholder="Tell me about your project..."
              />
            </label>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-champagne/20 bg-champagne/5 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-champagne/80 transition-all duration-300 hover:border-champagne/30 hover:bg-champagne/10 hover:text-champagne disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Icon 
                  icon={status === "sending" ? "lucide:loader-2" : "lucide:send"} 
                  width={14} 
                  className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${status === "sending" ? "animate-spin" : ""}`}
                />
              </button>

              {/* Aesthetic Success / Error Notification */}
              {statusMessage ? (
                <div 
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium backdrop-blur-md transition-all duration-500 ${
                    status === "sent" 
                      ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400" 
                      : "border border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  <Icon 
                    icon={status === "sent" ? "lucide:check-circle-2" : "lucide:alert-circle"} 
                    width={14} 
                  />
                  {statusMessage}
                </div>
              ) : null}
            </div>
          </form>
        </div>

        <div className="mt-24 border-t border-white/5 pt-8">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-base-400/30">
            &copy; 2025 Ara. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}