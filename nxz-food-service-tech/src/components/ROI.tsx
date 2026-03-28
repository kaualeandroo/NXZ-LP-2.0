import { Quote, ArrowUpRight, ArrowDownRight, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ROI() {
  return (
    <section id="roi" className="py-24 md:py-32 bg-[#0a0a0c] relative border-b border-gray-800 overflow-clip">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] h-[150%] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-semibold text-brand-400 tracking-[0.2em] uppercase">
                ROI & Resultados
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[48px] lg:text-[56px] font-display font-medium text-white tracking-tight leading-[1.1] mb-6"
            >
              A tecnologia que <span className="text-brand-400">transforma</span> o caos.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button className="inline-flex items-center justify-center rounded-[24px] glass-btn-light px-8 py-3.5 sm:py-3 text-[15px] font-sans font-semibold active:scale-95 w-full sm:w-auto">
                Agendar Demonstração
              </button>
            </motion.div>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card-dark p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <ArrowUpRight className="w-10 h-10 text-white" />
              </div>
              <div className="text-[56px] md:text-[72px] font-display font-bold text-white leading-none mb-4 tracking-tighter">+18%</div>
              <p className="text-[15px] text-gray-400 font-sans font-medium">
                Aumento Real e Comprovado de Lucro
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card-dark p-8 rounded-3xl relative overflow-hidden bg-brand-900/10 border-brand-500/20 group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <ArrowDownRight className="w-10 h-10 text-brand-400" />
              </div>
              <div className="text-[56px] md:text-[72px] font-display font-bold text-brand-400 leading-none mb-4 tracking-tighter">-10%</div>
              <p className="text-[15px] text-brand-200/60 font-sans font-medium">
                Fim da Hemorragia de Estoque
              </p>
            </motion.div>

            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card-dark p-8 rounded-3xl md:col-span-2 relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5" />
              <p className="text-[18px] md:text-[20px] text-gray-200 font-serif font-normal mb-8 leading-[1.5] relative z-10">
                "Antes da NXZ, gerenciar nossas 12 lojas era pilotar no escuro. Fechar a DRE levava dias. Hoje, bato o olho no celular e sei exatamente qual unidade está fugindo da ficha técnica e desperdiçando insumo. <strong className="text-white font-semibold">O sistema se pagou logo no primeiro mês</strong> só com a economia na cozinha."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative w-12 h-12 overflow-hidden rounded-full border border-white/20 shrink-0">
                  <img src="https://i.pravatar.cc/100?img=11" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium font-sans text-white text-[15px]">Roberto Almeida</h4>
                  <p className="text-[12px] text-gray-400 uppercase tracking-[1px] font-medium mt-0.5">
                    COO, SmashBurger Co.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card-dark p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-[48px] md:text-[56px] font-display font-bold text-white leading-none mb-4 tracking-tighter">Zero</div>
              <p className="text-[15px] text-gray-400 font-sans font-medium">
                Caos na troca de sistema. Virada de chave 100% assistida sem parar sua operação.
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card-dark p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-[48px] md:text-[56px] font-display font-bold text-white leading-none mb-4 tracking-tighter">15 min</div>
              <p className="text-[15px] text-gray-400 font-sans font-medium">
                Para treinar um novo caixa. PDV intuitivo que anula o impacto do alto turnover.
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass-card-dark p-8 rounded-3xl md:col-span-2 relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5" />
              <p className="text-[18px] md:text-[20px] text-gray-200 font-serif font-normal mb-8 leading-[1.5] relative z-10">
                "Meu maior trauma era trocar sistema e parar a operação no final de semana. A implantação da NXZ foi incrivelmente segura. Mas o melhor foi o PDV: a galera do balcão aprende em minutos. O alto turnover parou de ser um gargalo de treinamento."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative w-12 h-12 overflow-hidden rounded-full border border-white/20 shrink-0">
                  <img src="https://i.pravatar.cc/100?img=9" alt="Franqueado" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium font-sans text-white text-[15px]">Carla Mendes</h4>
                  <p className="text-[12px] text-gray-400 uppercase tracking-[1px] font-medium mt-0.5">
                    Franqueada Multi-unidades
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
