import Image from 'next/image';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section className="section-shell mx-auto max-w-7xl py-20 bg-white/[0.015]" id="process">
      <div className="editorial-grid items-center gap-y-10">
        <Reveal className="col-span-12 lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.45em] text-gold-soft">How we work</p>
          <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">A smooth process that keeps the focus on the client experience.</h2>

          <div className="mt-10 space-y-7">
            {[
              {
                num: '01',
                title: 'Consultation & planning',
                desc: 'We align on the shoot type, mood, references, and timing so the session feels effortless.',
              },
              {
                num: '02',
                title: 'Shoot day direction',
                desc: 'Every pose, frame, and light setup is handled to keep people comfortable and the visuals premium.',
              },
              {
                num: '03',
                title: 'Retouching & delivery',
                desc: 'Images are refined with a clean editorial finish and delivered for easy sharing and printing.',
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-5">
                <span className="font-display text-4xl text-gold/40">{step.num}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-7 lg:pl-6">
          <div className="relative overflow-hidden rounded-[1.75rem] glass-panel image-frame">
            <Image
              alt="Editing workflow and camera setup"
              className="h-[560px] w-full object-cover"
              height={560}
              width={800}
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 rounded-2xl bg-gold px-5 py-4 text-black shadow-glow">
              <div className="font-display text-4xl font-bold">+150%</div>
              <div className="text-[0.65rem] uppercase tracking-[0.3em]">Booking enquiries</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
