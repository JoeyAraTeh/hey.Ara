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
    icon: "lucide:phone",
    label: "Phone",
    value: "+63 998 909 9129",
    href: "tel:+639989099129",
  },
  {
    icon: "lucide:mail",
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
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
      setStatusMessage("Message sent.");
    } catch (error) {
      const emailError = error as { text?: string; message?: string };

      setStatus("error");
      setStatusMessage(
        emailError.text || emailError.message || "Unable to send message."
      );
    }
  };

  return (
    <footer id="contact" className="relative border-t border-base-300/5 py-24 md:py-32">
      <div className="absolute bottom-0 left-1/2 -z-10 h-96 w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(109,41,50,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="text-left">
            <h2
              className="reveal font-serif text-4xl font-semibold tracking-wide text-base-200 text-glow-champagne md:text-6xl"
              style={{ transitionDelay: "100ms" }}
            >
              GET IN TOUCH
            </h2>

            <p
              className="reveal mt-4 max-w-md text-sm font-light text-base-400"
              style={{ transitionDelay: "200ms" }}
            >
              Ready to collaborate on the next high-value digital asset?
            </p>

            <div
              className="reveal mt-12 flex flex-col gap-4"
              style={{ transitionDelay: "400ms" }}
            >
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-base-400 transition-all duration-300 hover:text-base-200"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-base-300/10">
                    <Icon icon={item.icon} width={18} />
                  </span>

                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-base-300">
                      {item.label}
                    </span>
                    <span className="text-sm text-base-200">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="reveal neon-morphic rounded-2xl p-6 md:p-8"
            style={{ transitionDelay: "250ms" }}
          >
            <input type="hidden" name="to_email" value={contactEmail} />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-base-400">
                  Name
                </span>
                <input
                  name="from_name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-base-300/10 bg-base-950/40 px-4 py-3 text-sm text-base-200 outline-none transition-colors duration-300 placeholder:text-base-400/40 focus:border-base-300/40"
                  placeholder="Recruiter name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-base-400">
                  Email
                </span>
                <input
                  name="reply_to"
                  type="email"
                  required
                  className="w-full rounded-lg border border-base-300/10 bg-base-950/40 px-4 py-3 text-sm text-base-200 outline-none transition-colors duration-300 placeholder:text-base-400/40 focus:border-base-300/40"
                  placeholder="recruiter@company.com"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-base-400">
                Subject
              </span>
              <input
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-base-300/10 bg-base-950/40 px-4 py-3 text-sm text-base-200 outline-none transition-colors duration-300 placeholder:text-base-400/40 focus:border-base-300/40"
                placeholder="Portfolio inquiry"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.24em] text-base-400">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full resize-none rounded-lg border border-base-300/10 bg-base-950/40 px-4 py-3 text-sm text-base-200 outline-none transition-colors duration-300 placeholder:text-base-400/40 focus:border-base-300/40"
                placeholder="Write your message"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-base-300 transition-colors duration-300 hover:text-base-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending" : "Send Message"}
              <span className="h-px w-7 bg-base-300/50 transition-all duration-300 group-hover:w-12 group-hover:bg-base-200" />
            </button>

            {statusMessage ? (
              <p
                className={`mt-4 text-xs ${
                  status === "sent" ? "text-base-300" : "text-base-400"
                }`}
                role="status"
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>

        <p className="mt-16 text-center text-[10px] uppercase tracking-widest text-base-400/30">
          @2025 Ara. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}