'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0f0f0f]/75 backdrop-blur-2xl">
      <div className="section-shell mx-auto flex w-full max-w-7xl items-center justify-between gap-6 py-4">
        <Link className="flex items-center gap-3 text-white" href="#home" aria-label="ASM Photography home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gold shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
          </span>
          <div>
            <div className="font-display text-2xl font-bold tracking-wide">ASM Photography</div>
            <div className="text-[0.65rem] uppercase tracking-[0.35em] text-text-dim">Namakkal, Tamil Nadu</div>
          </div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a className="nav-link text-sm uppercase tracking-[0.28em] text-text-muted transition-colors hover:text-white" href="#work">
            Portfolio
          </a>
          <a className="nav-link text-sm uppercase tracking-[0.28em] text-text-muted transition-colors hover:text-white" href="#services">
            Services
          </a>
          <a className="nav-link text-sm uppercase tracking-[0.28em] text-text-muted transition-colors hover:text-white" href="#about">
            About
          </a>
          <a className="nav-link text-sm uppercase tracking-[0.28em] text-text-muted transition-colors hover:text-white" href="#contact">
            Contact
          </a>
        </div>
        <a
          className="gold-gradient inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black shadow-glow transition-transform duration-300 hover:scale-[1.02]"
          href="tel:+919842574766"
        >
          <span className="material-symbols-outlined text-[18px]">call</span>
          <span>Book Your Shoot</span>
        </a>
      </div>
    </nav>
  );
}
