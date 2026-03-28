import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Plans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "A Operação",
      description: "Ideal para PDV, KDS e gestão de salão com máxima agilidade.",
      price: "Consulte",
      features: [
        "PDV Ultra-Rápido",
        "KDS Inteligente",
        "Hub de Delivery Nativo",
        "Gestão de Salão e Mesas",
        "Fechamento em 1 Clique",
      ],
      highlight: false,
    },
    {
      name: "Gestão Tática",
      description: "Para franqueados e gerentes que precisam de controle total.",
      price: "Consulte",
      features: [
        "Tudo do plano A Operação",
        "DRE em Tempo Real",
        "IA de Compras (NXZ Brain)",
        "Controle Rigoroso de CMV",
        "Financeiro Automatizado",
        "Gestão de Metas da Equipe",
      ],
      highlight: true,
    },
    {
      name: "Visão Executiva",
      description: "Para franqueadores e donos de rede em expansão.",
      price: "Consulte",
      features: [
        "Tudo do plano Gestão Tática",
        "Visão Consolidada da Rede",
        "Arrecadação de Royalties",
        "Cardápio Centralizado",
        "Auditoria e Padronização",
        "Central de Compras",
      ],
      highlight: false,
    }
  ];

  const featuresTable = [
    {
      category: "Ponto de Venda & Salão",
      items: [
        { name: "PDV Ultra-Rápido", op: true, gestao: true, exec: true },
        { name: "KDS Inteligente", op: true, gestao: true, exec: true },
        { name: "Hub de Delivery", op: true, gestao: true, exec: true },
        { name: "Controle de Mesas", op: true, gestao: true, exec: true },
        { name: "Autoatendimento (Totens)", op: true, gestao: true, exec: true },
      ]
    },
    {
      category: "Gestão & Financeiro",
      items: [
        { name: "DRE em Tempo Real", op: false, gestao: true, exec: true },
        { name: "Controle de CMV", op: false, gestao: true, exec: true },
        { name: "NXZ Brain (IA de Compras)", op: false, gestao: true, exec: true },
        { name: "Conciliação Bancária", op: false, gestao: true, exec: true },
        { name: "Gestão de Metas", op: false, gestao: true, exec: true },
      ]
    },
    {
      category: "Rede & Franquias",
      items: [
        { name: "Dashboards Consolidados", op: false, gestao: false, exec: true },
        { name: "Cálculo de Royalties", op: false, gestao: false, exec: true },
        { name: "Cardápio Centralizado", op: false, gestao: false, exec: true },
        { name: "Auditoria de Qualidade", op: false, gestao: false, exec: true },
        { name: "Central de Compras", op: false, gestao: false, exec: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-gray-900">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="text-xs font-semibold text-brand-600 tracking-[0.2em] uppercase">
              Nossos Planos
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-medium text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            Escolha o plano ideal para o <br className="hidden md:block" />
            <span className="text-brand-600">seu momento de negócio.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Nossas soluções escalam com você. Desde a operação diária até a gestão de uma rede de franquias.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`flex flex-col rounded-3xl p-8 ${
                  plan.highlight 
                    ? 'bg-[#581c87] text-white shadow-xl transform md:-translate-y-4' 
                    : 'bg-white text-gray-900 shadow-sm border border-gray-200'
                }`}
              >
                <h3 className={`text-2xl font-display font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-8 min-h-[40px] ${plan.highlight ? 'text-purple-200' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className={`text-4xl font-display font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <button className={`w-full py-3 px-6 rounded-full font-sans font-semibold transition-all duration-200 mb-8 ${
                  plan.highlight 
                    ? 'bg-white text-[#581c87] hover:bg-gray-100' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Falar com Consultor
                </button>
                <div className="space-y-4 flex-grow">
                  <p className={`text-sm font-semibold uppercase tracking-wider ${plan.highlight ? 'text-purple-200' : 'text-gray-900'}`}>
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-purple-300' : 'text-brand-600'}`} />
                        <span className={`text-sm ${plan.highlight ? 'text-purple-100' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparative Table */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Comparativo de Funcionalidades
            </h2>
            <p className="text-gray-600">
              Veja em detalhes o que cada plano oferece para a sua operação.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 border-b-2 border-gray-200 bg-gray-50/50 w-2/5"></th>
                  <th className="py-4 px-6 border-b-2 border-gray-200 bg-gray-50/50 text-center font-display font-bold text-gray-900 w-1/5">A Operação</th>
                  <th className="py-4 px-6 border-b-2 border-brand-600 bg-brand-50/30 text-center font-display font-bold text-brand-700 w-1/5">Gestão Tática</th>
                  <th className="py-4 px-6 border-b-2 border-gray-200 bg-gray-50/50 text-center font-display font-bold text-gray-900 w-1/5">Visão Executiva</th>
                </tr>
              </thead>
              <tbody>
                {featuresTable.map((category, idx) => (
                  <React.Fragment key={idx}>
                    <tr>
                      <td colSpan={4} className="py-6 px-6 font-sans font-bold text-gray-900 bg-gray-50 border-b border-gray-200 uppercase tracking-wider text-sm">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-6 border-b border-gray-100 text-gray-700 font-medium">
                          {item.name}
                        </td>
                        <td className="py-4 px-6 border-b border-gray-100 text-center">
                          {item.op ? <Check className="w-5 h-5 text-brand-600 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                        </td>
                        <td className="py-4 px-6 border-b border-gray-100 text-center bg-brand-50/10">
                          {item.gestao ? <Check className="w-5 h-5 text-brand-600 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                        </td>
                        <td className="py-4 px-6 border-b border-gray-100 text-center">
                          {item.exec ? <Check className="w-5 h-5 text-brand-600 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
