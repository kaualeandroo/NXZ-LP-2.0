import { Flame, Pizza, Leaf, Coffee, UtensilsCrossed, Beef, Croissant, CupSoda } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <section id="inicio" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2500&auto=format&fit=crop"
          className="w-full h-full object-cover object-center scale-105"
          alt="Cozinha de restaurante em movimento"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-black/70 to-[#0a0a0c] sm:from-[#0a0a0c]/80 sm:via-black/50"></div>
        <div className="absolute inset-0 bg-brand-900/10 mix-blend-color"></div>
        <div className="texture-grain"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-12 max-w-5xl mx-auto w-full pt-28 sm:pt-32 md:pt-24 lg:pt-32 pb-8">
        <h1 className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[64px] font-display font-medium text-white tracking-tight leading-[1.2] sm:leading-[1.1] mb-8 sm:mb-10 drop-shadow-2xl">
          Sua rede inteira. Sob controle. Em um só lugar.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
          <button className="inline-flex items-center justify-center rounded-[24px] glass-btn-dark px-8 py-3.5 sm:py-3 text-[15px] font-sans font-semibold text-white active:scale-95 transition-all duration-200 w-full sm:w-auto">
            Explorar Recursos
          </button>
          <button className="inline-flex items-center justify-center rounded-[24px] btn-brand-glass px-8 py-3.5 sm:py-3 text-[15px] font-sans font-semibold text-white active:scale-95 w-full sm:w-auto">
            Agendar Demonstração
          </button>
        </div>
      </div>

      <div className="relative w-full z-20 pb-8 pt-12 sm:pb-10 sm:pt-16 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent mt-auto overflow-hidden">
        <div className="max-w-[100rem] mx-auto relative">
          <p className="text-center text-[11px] font-bold text-white uppercase tracking-[1px] mb-8">
            Redes que escalam com a NXZ
          </p>

          <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-scroll-left text-white transition-all cursor-default">
              {[1, 2].map((groupIndex) => (
                <div key={`logo-group-${groupIndex}`} className="flex gap-12 sm:gap-16 pr-12 sm:pr-16 items-center">
                  {[
                    { icon: Flame, name: "FireGrill" },
                    { icon: Pizza, name: "Nonna's" },
                    { icon: Leaf, name: "FreshBowl" },
                    { icon: Coffee, name: "BrewCo" },
                    { icon: UtensilsCrossed, name: "Gourmet" },
                    { icon: Beef, name: "SteakHouse" },
                    { icon: Croissant, name: "Bakery" },
                    { icon: CupSoda, name: "Refresh" },
                    { icon: Flame, name: "FireGrill" },
                    { icon: Pizza, name: "Nonna's" },
                    { icon: Leaf, name: "FreshBowl" },
                    { icon: Coffee, name: "BrewCo" },
                    { icon: UtensilsCrossed, name: "Gourmet" },
                    { icon: Beef, name: "SteakHouse" },
                    { icon: Croissant, name: "Bakery" },
                    { icon: CupSoda, name: "Refresh" },
                  ].map((logo, index) => {
                    const Icon = logo.icon;
                    return (
                      <div key={`logo-${groupIndex}-${index}`} className="flex items-center gap-2 opacity-100">
                        <Icon className="w-8 h-8 text-white" />
                        <span className="text-xl font-display font-bold text-white tracking-widest uppercase">{logo.name}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#0a0a0c] py-16 sm:py-24 border-b border-white/5 relative z-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center justify-center w-full sm:w-auto"
            >
              <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-3 tracking-tight drop-shadow-lg">+250</div>
              <div className="text-xs sm:text-sm font-sans font-medium text-gray-400 uppercase tracking-[0.2em] text-center">Redes Gerenciadas</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "48px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="hidden sm:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center w-full sm:w-auto"
            >
              <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-3 tracking-tight drop-shadow-lg">1.200+</div>
              <div className="text-xs sm:text-sm font-sans font-medium text-gray-400 uppercase tracking-[0.2em] text-center">Unidades Ativas</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "48px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="hidden sm:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center w-full sm:w-auto"
            >
              <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-3 tracking-tight drop-shadow-lg">+1M</div>
              <div className="text-xs sm:text-sm font-sans font-medium text-gray-400 uppercase tracking-[0.2em] text-center">Pedidos Processados</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
