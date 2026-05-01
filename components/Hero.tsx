import Image from 'next/image';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="section-shell relative mx-auto max-w-7xl pb-12 pt-28 md:pt-32" id="home">
      <div className="editorial-grid items-end">
        <Reveal className="col-span-12 lg:col-span-7">
          <p className="cta-chip mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            Premium photography for life's defining moments
          </p>
          <h1 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-[7rem]">
            Timeless stories,
            <span className="block text-gold">captured beautifully.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            ASM Photography creates elegant wedding, newborn, maternity, fashion, commercial, and drone visuals with 24+ years of experience in Namakkal, Tamil Nadu. The focus is simple: premium imagery that feels emotional, modern, and built to convert interest into bookings.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="gold-gradient inline-flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-black shadow-glow transition-transform duration-300 hover:scale-[1.02]"
              href="https://wa.me/919842574766?text=Hi%20ASM%20Photography%2C%20I%20would%20like%20to%20book%20a%20shoot."
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
              <span>WhatsApp Booking</span>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white/6 px-6 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              href="tel:+919842574766"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Now</span>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-4 font-semibold text-text-muted transition-colors duration-300 hover:text-white"
              href="#work"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              <span>View Featured Work</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-5 lg:pl-6">
          <div className="glass-panel image-frame overflow-hidden rounded-[1.75rem] p-3">
            <div className="relative overflow-hidden rounded-[1.4rem]">
              <Image
                alt="Premium wedding couple portrait"
                className="h-[420px] w-full object-cover object-center"
                height={420}
                width={500}
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-6">
                <div className="max-w-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Featured Story</p>
                  <h2 className="mt-2 font-display text-3xl text-white">Wedding cinema with a soft editorial finish.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="soft-card rounded-2xl px-4 py-5">
              <div className="font-display text-3xl text-gold">24+</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-text-dim">Years</div>
            </div>
            <div className="soft-card rounded-2xl px-4 py-5">
              <div className="font-display text-3xl text-gold">500+</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-text-dim">Shoots</div>
            </div>
            <div className="soft-card rounded-2xl px-4 py-5">
              <div className="font-display text-3xl text-gold">6</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-text-dim">Services</div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8 grid gap-4 md:grid-cols-4">
        <div className="soft-card rounded-2xl px-5 py-5">
          <div className="text-sm uppercase tracking-[0.3em] text-text-dim">Wedding</div>
          <p className="mt-2 text-sm text-text-muted">Candid, cinematic, and timeless coverage.</p>
        </div>
        <div className="soft-card rounded-2xl px-5 py-5">
          <div className="text-sm uppercase tracking-[0.3em] text-text-dim">Newborn</div>
          <p className="mt-2 text-sm text-text-muted">Gentle studio portraits with clean styling.</p>
        </div>
        <div className="soft-card rounded-2xl px-5 py-5">
          <div className="text-sm uppercase tracking-[0.3em] text-text-dim">Maternity</div>
          <p className="mt-2 text-sm text-text-muted">Elegant sessions that feel warm and refined.</p>
        </div>
        <div className="soft-card rounded-2xl px-5 py-5">
          <div className="text-sm uppercase tracking-[0.3em] text-text-dim">Commercial</div>
          <p className="mt-2 text-sm text-text-muted">Brand visuals that sell with clarity.</p>
        </div>
      </Reveal>
    </section>
  );
}
