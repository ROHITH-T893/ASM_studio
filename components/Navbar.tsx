'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-2xl">
      <div className="section-shell mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between gap-3 py-3 md:gap-6 md:py-4">
          <Link className="flex min-w-0 items-center gap-3 text-white" href="#home" aria-label="ASM Photography home" onClick={closeMenu}>
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/5 text-gold shadow-[0_0_0_1px_rgba(255,255,255,0.05)] md:h-10 md:w-10">
              <span className="material-symbols-outlined text-[19px] md:text-[20px]">photo_camera</span>
            </span>
            <div className="min-w-0">
              <div className="truncate font-display text-[1.05rem] font-bold tracking-wide md:text-2xl">ASM Photography</div>
              <div className="text-[0.58rem] uppercase tracking-[0.28em] text-text-dim md:text-[0.65rem] md:tracking-[0.35em]">
                Namakkal, Tamil Nadu
              </div>
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

          <div className="flex items-center gap-2 md:gap-3">
            <a
              className="gold-gradient inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-black shadow-glow transition-transform duration-300 hover:scale-[1.02] sm:px-5 sm:py-3 sm:text-sm"
              href="tel:+919842574766"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span className="hidden sm:inline">Book Your Shoot</span>
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="material-symbols-outlined text-[24px]">{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${
            menuOpen ? 'max-h-96 translate-y-0 opacity-100' : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
          }`}
        >
          <div className="glass-panel mb-4 rounded-[1.5rem] border border-white/8 p-4 shadow-soft">
            <div className="grid gap-2">
              <a
                className="rounded-2xl border border-white/6 bg-white/3 px-4 py-3 text-sm uppercase tracking-[0.24em] text-text-muted transition-colors hover:border-gold/30 hover:bg-gold/8 hover:text-white"
                href="#work"
                onClick={closeMenu}
              >
                Portfolio
              </a>
              <a
                className="rounded-2xl border border-white/6 bg-white/3 px-4 py-3 text-sm uppercase tracking-[0.24em] text-text-muted transition-colors hover:border-gold/30 hover:bg-gold/8 hover:text-white"
                href="#services"
                onClick={closeMenu}
              >
                Services
              </a>
              <a
                className="rounded-2xl border border-white/6 bg-white/3 px-4 py-3 text-sm uppercase tracking-[0.24em] text-text-muted transition-colors hover:border-gold/30 hover:bg-gold/8 hover:text-white"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                className="rounded-2xl border border-white/6 bg-white/3 px-4 py-3 text-sm uppercase tracking-[0.24em] text-text-muted transition-colors hover:border-gold/30 hover:bg-gold/8 hover:text-white"
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </div>
            <a
              className="gold-gradient mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black shadow-glow transition-transform duration-300 hover:scale-[1.01]"
              href="tel:+919842574766"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Book Your Shoot
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
