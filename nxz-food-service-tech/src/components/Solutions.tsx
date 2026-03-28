import { Link } from 'react-router-dom';
import { Check, Building2, Users, ChefHat, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Solutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="times" className="py-24 bg-[#F5F5F7] relative border-b border-gray-200 overflow-clip">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-xs font-semibold text-brand-600 tracking-[0.2em] uppercase">
              Visão 360º da Operação
            </span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-display font-medium text-[#000000] tracking-tight leading-[1.2] mb-6"
          >
            A ferramenta exata para <span className="text-brand-600">cada nível</span> da sua operação.
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 items-stretch"
        >
          {/* Card 1: Franqueados & Gerentes */}
          <motion.div variants={itemVariants} className="flex flex-col glass-card-light rounded-3xl transition-all duration-300 relative group">
            <div className="p-8 pb-6 border-b border-gray-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/80 text-gray-700 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-[13px] text-brand-600 font-sans font-semibold uppercase tracking-[0.1em]">
                  Gestão Tática
                </p>
              </div>
              <h3 className="text-[28px] font-display font-bold text-gray-900 tracking-tight mb-6 leading-tight min-h-[72px]">
                Franqueados & Gerentes
              </h3>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full glass-btn-dark px-6 py-2.5 text-[14px] font-sans font-semibold text-white active:scale-95 transition-all duration-200 w-full"
              >
                Agendar Demonstração
              </a>
            </div>

            <div className="p-8 pt-6 pb-10 flex-grow">
              <ul className="space-y-5 text-[15px] text-gray-600 leading-[1.6]">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">DRE em Tempo Real</strong>
                    Visibilidade total de margem de lucro, custos e despesas da unidade.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">IA de Compras (NXZ Brain)</strong>
                    Sugestões de reposição baseadas em histórico para zerar rupturas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">Controle Rigoroso de CMV</strong>
                    Fichas técnicas precisas com baixa automática e auditoria de estoque.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">Prevenção de Perdas</strong>
                    Blindagem completa contra desvios, furtos e ineficiências na operação.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">Financeiro Automatizado</strong>
                    Conciliação bancária, DFC e gestão de contas a pagar e receber.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">Gestão de Metas</strong>
                    Acompanhamento de performance da equipe e atingimento de metas diárias.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Franqueador e Dono de rede (Highlight) */}
          <motion.div variants={itemVariants} className="flex flex-col glass-card-brand rounded-3xl transition-all duration-300 relative z-10 transform md:scale-105">
            <div className="p-8 pb-6 border-b border-purple-400/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/30 text-purple-100 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-md">
                  <Building2 className="w-5 h-5" />
                </div>
                <p className="text-[13px] text-purple-200 font-sans font-semibold uppercase tracking-[0.1em]">
                  Visão Executiva
                </p>
              </div>
              <h3 className="text-[28px] font-display font-bold text-white tracking-tight mb-6 leading-tight min-h-[72px]">
                Franqueador e Dono de rede
              </h3>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full glass-btn-light px-6 py-2.5 text-[14px] font-sans font-semibold active:scale-95 transition-all duration-200 w-full"
              >
                Agendar Demonstração
              </a>
            </div>

            <div className="p-8 pt-6 pb-10 flex-grow">
              <ul className="space-y-5 text-[15px] text-purple-100/90 leading-[1.6]">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/30 rounded-full p-1 border border-purple-400/20">
                    <Check className="w-3.5 h-3.5 text-purple-200" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold block mb-0.5">Visão Consolidada</strong>
                    Dashboards executivos com o DRE e indicadores de todas as lojas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/30 rounded-full p-1 border border-purple-400/20">
                    <Check className="w-3.5 h-3.5 text-purple-200" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold block mb-0.5">Arrecadação de Royalties</strong>
                    Cálculo automático e transparente baseado no faturamento real (D-1).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/30 rounded-full p-1 border border-purple-400/20">
                    <Check className="w-3.5 h-3.5 text-purple-200" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold block mb-0.5">Cardápio Centralizado</strong>
                    Atualize preços, produtos e promoções em toda a rede com um clique.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/30 rounded-full p-1 border border-purple-400/20">
                    <Check className="w-3.5 h-3.5 text-purple-200" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold block mb-0.5">Auditoria e Padronização</strong>
                    Monitoramento de conformidade e checklists de qualidade das franquias.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/30 rounded-full p-1 border border-purple-400/20">
                    <Check className="w-3.5 h-3.5 text-purple-200" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold block mb-0.5">Central de Compras</strong>
                    Gestão de fornecedores homologados para garantir padrão e reduzir custos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-purple-500/30 rounded-full p-1 border border-purple-400/20">
                    <Check className="w-3.5 h-3.5 text-purple-200" />
                  </div>
                  <span>
                    <strong className="text-white font-semibold block mb-0.5">Inteligência de Expansão</strong>
                    Identifique as unidades mais rentáveis e replique o modelo de sucesso.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: A Operação */}
          <motion.div variants={itemVariants} className="flex flex-col glass-card-light rounded-3xl transition-all duration-300 relative group">
            <div className="p-8 pb-6 border-b border-gray-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/80 text-gray-700 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                  <ChefHat className="w-5 h-5" />
                </div>
                <p className="text-[13px] text-brand-600 font-sans font-semibold uppercase tracking-[0.1em]">
                  Caixa e Cozinha
                </p>
              </div>
              <h3 className="text-[28px] font-display font-bold text-gray-900 tracking-tight mb-6 leading-tight min-h-[72px]">
                A Operação
              </h3>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full glass-btn-dark px-6 py-2.5 text-[14px] font-sans font-semibold text-white active:scale-95 transition-all duration-200 w-full"
              >
                Agendar Demonstração
              </a>
            </div>

            <div className="p-8 pt-6 pb-10 flex-grow">
              <ul className="space-y-5 text-[15px] text-gray-600 leading-[1.6]">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">PDV Ultra-Rápido</strong>
                    Interface intuitiva que reduz o treinamento de novos caixas para horas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">KDS Inteligente</strong>
                    Roteamento de pedidos por praça (grelha, bebida) sincronizando a entrega.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">Hub de Delivery Nativo</strong>
                    Pedidos do iFood e app próprio integrados direto no caixa e na cozinha.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">Autoatendimento (Totens)</strong>
                    Integração fluida com totens e pedidos via QR Code na mesa.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">Gestão de Salão</strong>
                    Mapa de mesas visual, divisão de contas fácil e controle de comandas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-gray-100 rounded-full p-1">
                    <Check className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                  <span>
                    <strong className="text-gray-900 font-semibold block mb-0.5">Fechamento em 1 Clique</strong>
                    Conciliação automática de cartões (TEF) sem dor de cabeça no fim do turno.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Link to Plans Page */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link 
            to="/planos" 
            className="inline-flex items-center gap-2 text-brand-600 font-sans font-semibold hover:text-brand-700 transition-colors group text-lg"
          >
            Ver Detalhes dos Planos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
