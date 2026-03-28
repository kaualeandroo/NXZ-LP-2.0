import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    id: 1,
    title: 'Operação Transparente',
    description: 'Fim das "caixas-pretas". Detecte furos de estoque, desperdícios, cancelamentos suspeitos e divergências de caixa em tempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Padronização Rigorosa',
    description: 'Visibilidade total com auditoria digital sobre a aplicação dos checklists de abertura, fechamento e higiene em todas as franquias.',
    image: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Ação Proativa',
    description: 'Antecipe demandas operacionais, preveja a falta de insumos críticos e planeje compras com base em algoritmos de consumo real.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Aumento de Lucro',
    description: 'Corte desperdícios, reduza o tempo de mesa e precifique corretamente para aumentar a margem líquida do seu negócio.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  }
];

export default function AllInOne() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white relative z-20 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:pr-12">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">
                Plataforma de Gestão All-in-One
              </span>
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-[28px] md:text-[36px] lg:text-[40px] font-display font-medium text-[#000000] tracking-tight leading-[1.3] mb-0 md:max-w-[70%]"
            >
              O sistema de gestão definitivo para Redes e Franquias.
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          >
            <a 
              href="#plataforma" 
              className="inline-flex items-center justify-center rounded-[24px] glass-btn-dark px-8 py-3.5 sm:py-3 text-[15px] font-sans font-semibold text-white active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Explorar Recursos
            </a>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 hover:scale-110 active:scale-95 transition-all focus:outline-none"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 hover:scale-110 active:scale-95 transition-all focus:outline-none"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="w-[85vw] max-w-[920px] sm:w-[575px] lg:w-[690px] flex-shrink-0 snap-start flex flex-col group cursor-pointer"
            >
              <div className="w-full h-[400px] sm:h-[320px] glass-card-light rounded-2xl overflow-hidden relative flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Card Background Blob */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                  <div className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] bg-purple-300/30 rounded-full blur-[60px]"></div>
                  <div className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] bg-violet-300/30 rounded-full blur-[50px]"></div>
                </div>
                
                {/* Left side: Text and CTA */}
                <div className="w-full sm:w-1/2 h-1/2 sm:h-full p-6 sm:p-8 md:p-10 flex flex-col justify-center z-10 relative order-2 sm:order-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.6] mb-6 sm:mb-8 line-clamp-3 sm:line-clamp-none">
                    {feature.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-auto flex items-center gap-2 text-brand-600 font-semibold transition-colors duration-300">
                    <span className="text-[13px] sm:text-[14px] uppercase tracking-wider border-b border-brand-600/40 pb-0.5 group-hover:border-brand-600">
                      Saiba mais
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Right side: Image */}
                <div className="w-full sm:w-1/2 h-1/2 sm:h-full relative overflow-hidden order-1 sm:order-2">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
