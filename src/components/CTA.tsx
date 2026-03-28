export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover grayscale opacity-30"
          alt="Dono de restaurante focado"
          referrerPolicy="no-referrer"
        />
        <div className="texture-grain"></div>
        <div className="absolute inset-0 bg-[#0a0a0c]/80 mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-600/40 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto glass-card-dark p-10 sm:p-16 rounded-3xl">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-display font-medium text-white tracking-tight leading-[1.2] mb-10 drop-shadow-lg">
          Pronto para tornar a gestão amadora obsoleta?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center justify-center rounded-[24px] glass-btn-light px-8 py-3 text-[15px] font-sans font-semibold active:scale-95 w-full sm:w-auto">
            Agendar Demonstração
          </button>
        </div>
      </div>
    </section>
  );
}
