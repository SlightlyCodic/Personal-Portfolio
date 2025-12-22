import { useRef } from 'react';
import { useSparkles } from '../hooks/useSparkles';

const FOOTER_LINKS = [
  { href: 'mailto:chiragj831@gmail.com', icon: 'fa-solid fa-envelope', label: 'Mail', tooltip: 'chiragj831@gmail.com' },
  { href: 'https://github.com/SlightlyCodic', icon: 'fa-brands fa-github', label: 'Github', tooltip: '@ChiragJoshi' },
  { href: 'www.linkedin.com/in/chiragbharatjoshi', icon: 'fa-brands fa-linkedin', label: 'LinkedIn', tooltip: '@chiragjoshi' },
  { href: 'https://leetcode.com/u/SlightlyAcidic/', icon: 'fa-solid fa-code', label: 'LeetCode', tooltip: '@chiragjoshi' },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  
  useSparkles(footerRef, {
    minSize: 0.4,
    maxSize: 1,
    particleDensity: 1200,
    particleColor: '#FFFFFF',
    opacity: 0.5,
  });

  return (
    <footer
      ref={footerRef}
      id="siteFooter"
      className="relative bg-[var(--bg-color)] py-10 px-6 mt-[60px] transition-colors duration-300 overflow-hidden
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-screen before:border-t before:border-dashed before:border-[var(--edge)] before:h-0 before:pointer-events-none before:z-0 before:transition-colors before:duration-300
        max-md:py-8 max-md:px-5 max-md:mt-10
        max-sm:py-7 max-sm:px-4 max-sm:mt-8"
    >
      <div className="max-w-[640px] mx-auto flex flex-col items-center gap-6 relative z-[1] max-md:gap-5">
        {/* Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center max-md:gap-5 max-sm:gap-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip={link.tooltip}
              className="inline-flex items-center gap-2 text-[var(--text-color)] opacity-70 text-sm font-medium transition-all duration-300 py-1 hover:opacity-100 hover:-translate-y-0.5 hover:text-[var(--accent-color)]
                max-md:text-[13px]
                max-sm:[&>span]:hidden max-sm:[&>i]:text-lg"
            >
              <i className={`${link.icon} text-base text-[var(--text-color)] opacity-70 transition-opacity duration-300 group-hover:opacity-100 max-md:text-[15px]`} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-[var(--border-color)] opacity-30 w-full max-w-[600px] max-sm:pt-3">
          <p className="text-[13px] text-[var(--text-color)] opacity-60 font-normal max-md:text-xs max-sm:text-[11px]">
            © 2025 Chirag Joshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
