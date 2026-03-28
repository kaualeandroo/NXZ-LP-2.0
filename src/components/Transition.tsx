import { Map, Layers, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Mapeamento Operacional',
    description: 'Mapeamos e entendemos o seu cenário atual para que a NXZ se adeque perfeitamente à realidade da sua operação.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Criação e Estruturação',
    description: 'Criamos e estruturamos um processo de trabalho otimizado, aplicando toda a nossa expertise em logística e gestão.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Implantação Prática',
    description: 'Colocamos a mão na massa para implementar o novo sistema de forma ágil, treinando sua equipe para extrair o máximo da plataforma.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Transição Segura',
    description: 'Acompanhamos a virada de chave de perto, garantindo uma transição tranquila, segura e sem interrupções no seu dia a dia.'
  }
];

export default function Transition() {
  return (
    <section id="transicao" className="py-24 bg-white relative overflow-hidden border-b border-gray-200">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="text-xs font-semibold text-brand-600 tracking-[0.2em] uppercase">
                Implantação & Transição
              </span>
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-display font-medium text-[#000000] tracking-tight leading-[1.2] mb-6">
              Sua operação não pode parar. <span className="text-brand-600">Nós garantimos isso.</span>
            </h2>
            <p className="text-base md:text-lg text-[#555555] leading-[1.6] font-medium mb-8">
              Mudar de sistema não precisa ser um trauma. A NXZ garante uma transição <strong>simples, prática e sob medida</strong> para a sua operação não parar um segundo sequer.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600">
                Junte-se a dezenas de operações que migraram sem dor de cabeça.
              </p>
            </div>
          </motion.div>

          <div className="relative lg:col-span-5 lg:col-start-8">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-200 overflow-hidden rounded-full z-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
              <motion.div
                className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
                animate={{ top: ["-150px", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </div>
            
            <div className="space-y-10 relative">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-6 relative group"
                >
                  <div className="relative z-10 w-14 h-14 shrink-0 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 shadow-sm group-hover:text-brand-600 group-hover:border-brand-200 group-hover:shadow-brand-100 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
