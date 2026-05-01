import Image from 'next/image';
import Reveal from './Reveal';

export default function Portfolio() {
  return (
    <section className="section-shell mx-auto max-w-7xl py-20" id="work">
      <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-gold-soft">Featured Work</p>
          <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">A portfolio built around emotion and detail.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-text-muted md:text-right">
          The layout stays clean and image-first so the work does the selling. Each tile uses strong contrast, soft overlays, and hover movement to feel polished on every screen.
        </p>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-7 group image-frame rounded-[1.6rem]">
          <Image
            alt="Wedding couple portrait"
            className="h-[520px] w-full object-cover"
            height={520}
            width={800}
            src="https://images.unsplash.com/photo-1523438097201-512ae7d59c95?auto=format&fit=crop&w=1400&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Wedding</p>
              <h3 className="mt-2 font-display text-3xl text-white">Classic ceremonies with cinematic framing.</h3>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5 grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          <div className="group image-frame rounded-[1.4rem]">
            <Image
              alt="Newborn photography"
              className="h-[248px] w-full object-cover"
              height={248}
              width={400}
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 flex items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Newborn</p>
                <h3 className="mt-2 font-display text-2xl text-white">Soft, calm, and beautifully lit.</h3>
              </div>
            </div>
          </div>
          <div className="group image-frame rounded-[1.4rem]">
            <Image
              alt="Commercial and fashion shoot"
              className="h-[248px] w-full object-cover"
              height={248}
              width={400}
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 flex items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Commercial</p>
                <h3 className="mt-2 font-display text-2xl text-white">Campaign-ready imagery with polish.</h3>
              </div>
            </div>
          </div>
          <div className="group image-frame rounded-[1.4rem] sm:col-span-2 md:col-span-1">
            <Image
              alt="Maternity portrait"
              className="h-[248px] w-full object-cover"
              height={248}
              width={400}
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 flex items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Maternity</p>
                <h3 className="mt-2 font-display text-2xl text-white">Graceful portraits with depth.</h3>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-4 flex flex-wrap gap-3">
          {['Wedding', 'Newborn', 'Maternity', 'Fashion', 'Commercial', 'Drone'].map((tag) => (
            <span key={tag} className="rounded-full bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.3em] text-text-muted">
              {tag}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
