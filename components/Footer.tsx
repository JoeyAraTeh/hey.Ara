import React from 'react';
import { Icon } from '@iconify/react'; // <-- Import the React component

export default function Footer() {
  const socialLinks = [
    { icon: "lucide:github", href: "#", label: "GitHub" },
    { icon: "lucide:linkedin", href: "#", label: "LinkedIn" },
    { icon: "lucide:dribbble", href: "#", label: "Dribbble" },
  ];

  return (
    <footer id="contact" className="py-24 md:py-32 relative border-t border-base-300/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_center,_rgba(109,41,50,0.15)_0%,_transparent_70%)] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="reveal">
          {/* Updated Icon syntax */}
          <Icon icon="lucide:wifi" width={40} className="text-base-300 text-glow-champagne mb-6 inline-block" />
        </div>
        
        <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-wide text-base-200 text-glow-champagne reveal" style={{ transitionDelay: '100ms' }}>
          CONNECT WITH ME
        </h2>
        
        <p className="mt-4 text-base-400 text-sm max-w-md mx-auto font-light reveal" style={{ transitionDelay: '200ms' }}>
          Ready to collaborate on the next high-value digital asset?
        </p>
        
        <div className="mt-8 reveal" style={{ transitionDelay: '300ms' }}>
          <a href="mailto:hello@yourdomain.com" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-base-700 to-base-500 text-base-200 font-serif text-sm font-semibold tracking-wider uppercase rounded-full hover:shadow-[0_0_50px_rgba(109,41,50,0.3)] transition-all duration-500 border border-base-600/30">
            <Icon icon="lucide:wallet" width={20} /> {/* Updated */}
            Connect Wallet
          </a>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-6 reveal" style={{ transitionDelay: '400ms' }}>
          {socialLinks.map((social) => (
            <a 
              key={social.label}
              href={social.href} 
              className="w-10 h-10 rounded-full border border-base-300/10 flex items-center justify-center text-base-400 hover:text-base-200 hover:border-base-300/30 hover:shadow-[0_0_15px_rgba(199,183,163,0.1)] transition-all duration-500"
              aria-label={social.label}
            >
              <Icon icon={social.icon} width={18} /> {/* Updated */}
            </a>
          ))}
        </div>
        
        <p className="mt-16 text-[10px] tracking-widest uppercase text-base-400/30">
          © 2025 YourName. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}