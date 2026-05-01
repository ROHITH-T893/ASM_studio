import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section-shell mx-auto max-w-7xl py-20" id="about">
      <div className="editorial-grid items-center gap-y-10">
        <Reveal className="col-span-12 lg:col-span-6 relative">
          <div className="image-frame overflow-hidden rounded-[1.75rem]">
            <Image
              alt="Photographer portrait in studio"
              className="h-[620px] w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              height={620}
              width={500}
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
          <div className="pointer-events-none absolute left-6 top-6 hidden text-[8rem] font-display font-bold uppercase tracking-[0.2em] text-white/10 md:block">
            Story
          </div>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-5 lg:pl-8">
          <p className="text-xs uppercase tracking-[0.45em] text-gold-soft">About ASM</p>
          <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">24 years of experience, built around trust and consistency.</h2>
          <p className="mt-6 text-sm leading-8 text-text-muted sm:text-base">
            ASM Photography has spent more than two decades helping families, couples, and brands tell their stories with refined visuals. Based in Namakkal, Tamil Nadu, the studio combines calm direction, premium lighting, and a clean post-production style that keeps the images timeless.
          </p>
          <p className="mt-5 text-sm leading-8 text-text-muted sm:text-base">
            The experience is designed around comfort and conversion: clear communication, quick inquiry paths, and strong CTA placement so visitors can move straight into a booking conversation.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="soft-card rounded-2xl px-4 py-5 text-center">
              <div className="font-display text-3xl text-gold">24+</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-text-dim">Years</div>
            </div>
            <div className="soft-card rounded-2xl px-4 py-5 text-center">
              <div className="font-display text-3xl text-gold">Namakkal</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-text-dim">Tamil Nadu</div>
            </div>
            <div className="soft-card rounded-2xl px-4 py-5 text-center">
              <div className="font-display text-3xl text-gold">High-end</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-text-dim">Visual style</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
