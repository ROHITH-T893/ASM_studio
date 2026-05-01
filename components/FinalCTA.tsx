import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <section className="section-shell mx-auto max-w-7xl py-20">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,rgba(212,175,55,0.92),rgba(240,214,138,0.88))] px-6 py-14 text-black sm:px-10 sm:py-16">
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/70">Let's make it official</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">Book your shoot with confidence.</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-4 font-semibold text-white transition-transform hover:scale-[1.02]"
              href="tel:+919842574766"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Call Now</span>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-black transition-transform hover:scale-[1.02]"
              href="https://wa.me/919842574766?text=Hi%20ASM%20Photography%2C%20I%27d%20like%20to%20book%20a%20shoot."
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 select-none text-black/10">
          <span className="absolute -bottom-10 left-0 text-[8rem] font-display font-bold uppercase tracking-[0.3em] sm:text-[10rem] lg:text-[12rem]">
            Capture
          </span>
        </div>
      </Reveal>
    </section>
  );
}
