import Reveal from './Reveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#101010]">
      <div className="section-shell mx-auto max-w-7xl py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <Reveal>
            <div className="font-display text-4xl font-bold text-white">ASM Photography</div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-text-muted">
              Premium wedding, newborn, maternity, fashion, commercial, and drone photography from Namakkal, Tamil Nadu.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-text-dim">© {currentYear} ASM Photography. All rights reserved.</p>
          </Reveal>

          <Reveal className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-5 text-sm uppercase tracking-[0.3em] text-text-muted">
              <a className="transition-colors hover:text-gold" href="#work">
                Portfolio
              </a>
              <a className="transition-colors hover:text-gold" href="#services">
                Services
              </a>
              <a className="transition-colors hover:text-gold" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-gold" href="#contact">
                Contact
              </a>
            </div>
            <div className="text-right text-sm leading-7 text-text-muted">
              Namakkal, Tamil Nadu
              <br />
              Phone: +91 98425 74766
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
