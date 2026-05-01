import Reveal from './Reveal';

interface Service {
  icon: string;
  title: string;
  description: string;
  detail: string;
}

const services: Service[] = [
  {
    icon: 'church',
    title: 'Wedding Photography',
    description: 'Full-day coverage, candid moments, highlight edits, and elegant storytelling that keeps the emotion intact.',
    detail: 'Starting from customized packages',
  },
  {
    icon: 'child_care',
    title: 'Newborn Photography',
    description: 'Gentle styling, soft tones, and a safe studio approach designed for timeless family keepsakes.',
    detail: 'Add-ons for albums and frames',
  },
  {
    icon: 'pregnant_woman',
    title: 'Maternity Shoots',
    description: 'Editorial portraits with flattering light, graceful posing, and a calm experience from start to finish.',
    detail: 'Styled indoor and outdoor sessions',
  },
  {
    icon: 'styler',
    title: 'Fashion Photography',
    description: 'High-impact visual direction for portraits, lookbooks, and personal branding with premium retouching.',
    detail: 'Studio and location shoots',
  },
  {
    icon: 'storefront',
    title: 'Commercial Shoots',
    description: 'Brand imagery, product storytelling, and campaign visuals engineered to look sharp across every channel.',
    detail: 'Usage rights available',
  },
  {
    icon: 'flight',
    title: 'Drone Photography',
    description: 'Wide-angle storytelling for venues, outdoor events, and destination coverage with cinematic aerial perspective.',
    detail: 'Ideal for weddings and venues',
  },
];

export default function Services() {
  return (
    <section className="section-shell mx-auto max-w-7xl py-20" id="services">
      <Reveal className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-gold-soft">Services</p>
        <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">Six core offerings, presented with premium clarity.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
          Pricing and package details stay easy to scan, with strong CTA placement so couples and families can move from browsing to booking without friction.
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={index} className="soft-card rounded-[1.4rem] p-7 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/6">
            <span className="material-symbols-outlined text-gold text-3xl">{service.icon}</span>
            <h3 className="mt-5 font-display text-3xl text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">{service.description}</p>
            <p className="mt-5 text-xs uppercase tracking-[0.28em] text-gold-soft">{service.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
