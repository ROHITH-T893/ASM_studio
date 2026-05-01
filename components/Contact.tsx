'use client';

import { useState } from 'react';
import Reveal from './Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shootType: 'Wedding Photography',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      shootType: 'Wedding Photography',
      date: '',
      message: '',
    });
  };

  return (
    <section className="section-shell mx-auto max-w-7xl py-20" id="contact">
      <div className="editorial-grid gap-y-10">
        <Reveal className="col-span-12 lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.45em] text-gold-soft">Contact</p>
          <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">Ready to book your shoot?</h2>
          <p className="mt-5 max-w-xl text-sm leading-8 text-text-muted sm:text-base">
            Phone and WhatsApp are the fastest way to secure a date. If you prefer the form, send the shoot type and preferred date and the team can follow up quickly.
          </p>

          <div className="mt-8 space-y-4">
            <a
              className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4 transition-colors hover:bg-white/8"
              href="tel:+919842574766"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black">
                <span className="material-symbols-outlined">call</span>
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-text-dim">Phone</div>
                <div className="text-lg font-semibold text-white">+91 98425 74766</div>
              </div>
            </a>
            <a
              className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4 transition-colors hover:bg-white/8"
              href="https://wa.me/919842574766?text=Hi%20ASM%20Photography%2C%20I%20would%20like%20to%20book%20a%20shoot."
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black">
                <span className="material-symbols-outlined">chat</span>
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-text-dim">WhatsApp</div>
                <div className="text-lg font-semibold text-white">Instant booking inquiry</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-7 lg:pl-6">
          <div className="grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
            <form className="rounded-[1.75rem] glass-panel p-6 sm:p-8" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-text-dim">Name</span>
                  <input
                    className="w-full rounded-2xl border-0 bg-white/5 px-4 py-4 text-white placeholder:text-text-dim focus:ring-2 focus:ring-gold/70"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your name"
                    type="text"
                    value={formData.name}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-text-dim">Phone</span>
                  <input
                    className="w-full rounded-2xl border-0 bg-white/5 px-4 py-4 text-white placeholder:text-text-dim focus:ring-2 focus:ring-gold/70"
                    name="phone"
                    onChange={handleChange}
                    placeholder="Phone number"
                    type="tel"
                    value={formData.phone}
                  />
                </label>
              </div>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-text-dim">Shoot Type</span>
                  <select
                    className="w-full rounded-2xl border-0 bg-white/5 px-4 py-4 text-white focus:ring-2 focus:ring-gold/70"
                    name="shootType"
                    onChange={handleChange}
                    value={formData.shootType}
                  >
                    <option>Wedding Photography</option>
                    <option>Newborn Photography</option>
                    <option>Maternity Shoots</option>
                    <option>Fashion Photography</option>
                    <option>Commercial Shoots</option>
                    <option>Drone Photography</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-text-dim">Preferred Date</span>
                  <input
                    className="w-full rounded-2xl border-0 bg-white/5 px-4 py-4 text-white focus:ring-2 focus:ring-gold/70"
                    name="date"
                    onChange={handleChange}
                    type="date"
                    value={formData.date}
                  />
                </label>
              </div>
              <label className="mt-5 block space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-text-dim">Message</span>
                <textarea
                  className="min-h-[140px] w-full rounded-2xl border-0 bg-white/5 px-4 py-4 text-white placeholder:text-text-dim focus:ring-2 focus:ring-gold/70"
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell us about your shoot"
                  value={formData.message}
                ></textarea>
              </label>
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full gold-gradient px-6 py-4 font-semibold text-black transition-transform duration-300 hover:scale-[1.01]" type="submit">
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Send Inquiry</span>
              </button>
            </form>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[1.75rem] glass-panel p-3">
                <div className="relative flex h-[280px] items-end overflow-hidden rounded-[1.35rem] bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.28),_transparent_35%),linear-gradient(135deg,_#1b1b1b,_#101010_55%,_#0b0b0b)] p-6">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%))]"></div>
                  <div className="relative z-10 max-w-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Google Maps</p>
                    <h3 className="mt-3 font-display text-3xl text-white">Namakkal, Tamil Nadu</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">
                      Visit or schedule a call, and we'll help you choose the right shoot style and timing for your session.
                    </p>
                    <a
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                      href="https://www.google.com/maps/search/?api=1&query=Namakkal%2C%20Tamil%20Nadu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="soft-card rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Fast response</p>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  For the quickest reply, use the floating WhatsApp button or tap the call button in the header. Both stay visible for easy booking on mobile.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
