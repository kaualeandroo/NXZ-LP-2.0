import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "A transição de sistema vai paralisar minha operação durante o rush?",
    answer: "De forma alguma. Tratamos a migração como um projeto de engenharia, não como uma simples instalação de TI. Nosso processo de Onboarding inclui a 'Virada de Chave Assistida', onde sua equipe recebe treinamento prévio em um ambiente de simulação. Quando a loja vira a chave, todos já estão operando 100% no novo padrão, garantindo que o faturamento não pare nem por um minuto."
  },
  {
    question: "Como a Nexuz ajuda a convencer meus franqueados a adotarem o sistema?",
    answer: "Nós mudamos o ângulo da conversa: de 'custo de software' para 'investimento em recuperação de margem'. Apresentamos cases reais e projeções mostrando como o franqueado pode pagar a mensalidade da Nexuz apenas com o dinheiro que ele deixa de perder em furos de estoque, desperdício e taxas duplicadas logo no primeiro mês de uso."
  },
  {
    question: "O sistema continua funcionando se a internet da loja cair?",
    answer: "Sim. Sabemos que no food service, parar não é uma opção. Nosso PDV possui arquitetura híbrida (Offline First). Se a conexão cair, você continua tirando pedidos, emitindo cupons (em contingência) e operando o KDS normalmente. Assim que a internet retorna, todos os dados são sincronizados automaticamente com a nuvem e com o dashboard da franqueadora."
  },
  {
    question: "Como funciona a integração com iFood e totens de autoatendimento?",
    answer: "A Nexuz possui um Hub de Delivery nativo. Isso significa que os pedidos do iFood, Rappi e do seu site próprio caem diretamente no PDV e no KDS da cozinha, sem necessidade de redigitar nada. Além disso, integramos perfeitamente com totens de autoatendimento, centralizando toda a esteira de produção e o financeiro em uma única tela."
  },
  {
    question: "Consigo ter uma visão consolidada de todas as minhas lojas em tempo real?",
    answer: "Absolutamente. O plano 'Visão Executiva' foi desenhado exatamente para isso. Você acessa um dashboard centralizado onde pode ver o faturamento, CMV, ticket médio e performance de cada unidade em tempo real. Além disso, permite a gestão centralizada de cardápio, alterando preços e produtos em toda a rede com apenas um clique."
  },
  {
    question: "Como a inteligência artificial (NXZ Brain) ajuda na redução do CMV?",
    answer: "O NXZ Brain analisa o histórico de vendas, sazonalidade e até o clima para prever a demanda da sua loja. Com base nisso, ele sugere listas de compras precisas, evitando tanto a ruptura (falta de insumos) quanto o desperdício por validade. Ele também cruza as fichas técnicas com o estoque real para apontar exatamente onde estão ocorrendo os desvios e furtos."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#F5F5F7] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[48px] font-display font-medium text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            Perguntas Frequentes
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200/80 border-y border-gray-200/80">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="py-2"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <h3 className={`text-[17px] font-sans font-medium pr-8 transition-colors ${
                    isOpen ? 'text-brand-600' : 'text-gray-900 group-hover:text-brand-600'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-brand-100 text-brand-600' : 'bg-gray-200/50 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700'
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-6 pr-12 text-gray-600 leading-relaxed font-sans text-[15px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
