import { MonitorSmartphone, Bike, Package, LayoutGrid, BrainCircuit, Store, SmartphoneNfc, Calculator, ClipboardCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="plataforma" className="py-24 bg-[#FAFAFA] relative overflow-hidden border-b border-gray-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/60 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center w-full mx-auto px-4">
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">
              O ECOSSISTEMA
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-display font-medium text-[#000000] tracking-tight leading-[1.3] mb-6 w-full">
            Construa uma <span className="text-brand-600">Operação à Prova de Falhas</span>.
          </h2>
          <p className="text-base md:text-lg text-[#555555] leading-[1.6] font-medium max-w-3xl mx-auto">
            Nossas soluções foram criadas para lidar com múltiplas unidades, rateio de custos e padronização em larga escala.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto relative border-l border-t border-gray-300"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent), linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent), linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskComposite: 'intersect'
          }}
        >
          <motion.div variants={itemVariants} className="group p-4 sm:p-6 hover:bg-white/50 transition-colors duration-300 flex flex-col items-center text-center lg:order-1 relative z-10 bg-transparent border-r border-b border-gray-300 h-full cursor-pointer aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-gray-100 shadow-sm group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-brand-200 transition-all duration-300">
                  <MonitorSmartphone className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-gray-900 tracking-wide mb-2">
                  PDV Blindado
                </h4>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span className="text-brand-600 font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                  Explorar módulo <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group p-4 sm:p-6 hover:bg-white/50 transition-colors duration-300 flex flex-col items-center text-center lg:order-2 relative z-10 bg-transparent border-r border-b border-gray-300 h-full cursor-pointer aspect-square">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-gray-100 shadow-sm group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-brand-200 transition-all duration-300">
                  <Bike className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-gray-900 tracking-wide mb-2">
                  Hub de Delivery
                </h4>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span className="text-brand-600 font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                  Explorar módulo <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group p-4 sm:p-6 hover:bg-white/50 transition-colors duration-300 flex flex-col items-center text-center lg:order-3 relative z-10 bg-transparent border-r border-b border-gray-300 h-full cursor-pointer aspect-square">
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-gray-100 shadow-sm group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-brand-200 transition-all duration-300">
                  <Package className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-gray-900 tracking-wide mb-2">
                  Estoque Preciso
                </h4>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span className="text-brand-600 font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                  Explorar módulo <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group p-4 sm:p-6 hover:bg-white/50 transition-colors duration-300 flex flex-col items-center text-center lg:order-4 relative z-10 bg-transparent border-r border-b border-gray-300 h-full cursor-pointer aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-gray-100 shadow-sm group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-brand-200 transition-all duration-300">
                  <LayoutGrid className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-gray-900 tracking-wide mb-2">
                  KDS Inteligente
                </h4>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span className="text-brand-600 font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                  Explorar módulo <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative order-first lg:order-5 z-30 h-full cursor-pointer group col-span-2 md:col-span-3 lg:col-span-1 aspect-[2/1] md:aspect-[3/1] lg:aspect-square flex items-center justify-center border-r border-b border-gray-300">
            <div className="w-full h-full p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-brand-500/90 to-brand-700/90 backdrop-blur-2xl border border-white/40 rounded-2xl shadow-2xl shadow-brand-500/60 transform lg:scale-105 transition-all duration-300 hover:scale-[1.02] lg:hover:scale-110 hover:shadow-brand-500/80 hover:border-white/60 z-10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
              
              {/* Inner radial gradient for depth */}
              <div className="absolute inset-0 bg-radial-gradient from-white/30 to-transparent opacity-50"></div>

              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-white/30 shadow-sm group-hover:scale-110 group-hover:shadow-white/50 transition-all duration-300 backdrop-blur-sm relative">
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md opacity-70"></div>
                    <BrainCircuit className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-md relative z-10" />
                  </div>
                  <h4 className="font-sans font-semibold text-[18px] sm:text-[22px] text-white tracking-wide mb-2">
                    NXZ Brain
                  </h4>
                </div>
                
                <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                  <span className="text-white font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                    Conhecer a IA <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group p-4 sm:p-6 hover:bg-white/50 transition-colors duration-300 flex flex-col items-center text-center lg:order-6 relative z-10 bg-transparent border-r border-b border-gray-300 h-full cursor-pointer aspect-square">
            <div className="absolute inset-0 bg-gradient-to-l from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-gray-100 shadow-sm group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-brand-200 transition-all duration-300">
                  <Store className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-gray-900 tracking-wide mb-2">
                  Central de Cardápios
                </h4>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span className="text-brand-600 font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                  Explorar módulo <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group p-4 sm:p-6 hover:bg-white/50 transition-colors duration-300 flex flex-col items-center text-center lg:order-7 relative z-10 bg-transparent border-r border-b border-gray-300 h-full cursor-pointer aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-gray-100 shadow-sm group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-brand-200 transition-all duration-300">
                  <SmartphoneNfc className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-gray-900 tracking-wide mb-2">
                  Autoatendimento
                </h4>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span className="text-brand-600 font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                  Explorar módulo <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group p-4 sm:p-6 hover:bg-white/50 transition-colors duration-300 flex flex-col items-center text-center lg:order-8 relative z-10 bg-transparent border-r border-b border-gray-300 h-full cursor-pointer aspect-square">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-gray-100 shadow-sm group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-brand-200 transition-all duration-300">
                  <Calculator className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-gray-900 tracking-wide mb-2">
                  ERP e DRE Real-time
                </h4>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span className="text-brand-600 font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                  Explorar módulo <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group p-4 sm:p-6 hover:bg-white/50 transition-colors duration-300 flex flex-col items-center text-center lg:order-9 relative z-10 bg-transparent border-r border-b border-gray-300 h-full cursor-pointer aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tl from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="transform transition-all duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-3 sm:mb-5 border border-gray-100 shadow-sm group-hover:text-brand-600 group-hover:scale-110 group-hover:shadow-brand-200 transition-all duration-300">
                  <ClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-sans font-semibold text-[14px] sm:text-[16px] text-gray-900 tracking-wide mb-2">
                  Auditoria e Previsão
                </h4>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span className="text-brand-600 font-semibold text-[11px] sm:text-[13px] flex items-center gap-1.5 uppercase tracking-wide">
                  Explorar módulo <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
