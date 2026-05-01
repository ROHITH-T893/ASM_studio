export default function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-black shadow-soft transition-transform hover:scale-[1.02]"
      href="https://wa.me/919842574766?text=Hi%20ASM%20Photography%2C%20I%20want%20to%20book%20a%20shoot."
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp booking"
    >
      <span className="material-symbols-outlined text-[20px]">chat</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
