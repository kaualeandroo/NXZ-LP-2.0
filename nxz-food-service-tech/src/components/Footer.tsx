import { Layers, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-2.5 cursor-pointer mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-brand-400/50">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[24px] font-logo font-black text-white tracking-tight uppercase">
                NXZ
              </span>
            </div>
            <p className="text-[#999999] text-[14px] font-sans font-normal mb-8 max-w-sm leading-[1.6]">
              A plataforma All-in-One definitiva para orquestrar processos e escalar redes de franquias de food service no Brasil com total previsibilidade e controle.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white hover:border-brand-400 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white hover:border-brand-400 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white hover:border-brand-400 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-semibold text-white mb-6 uppercase text-[13px] tracking-wider">
              Soluções
            </h4>
            <ul className="space-y-4 text-[14px] font-sans text-[#999999]">
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  PDV Frente de Loja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  KDS Inteligente
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  ERP & Financeiro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  Gestão de Estoque
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  Delivery Integrado
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-semibold text-white mb-6 uppercase text-[13px] tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-4 text-[14px] font-sans text-[#999999]">
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  Casos de Sucesso
                </a>
              </li>
              <li>
                <Link to="/planos" className="hover:text-brand-400 transition-colors">
                  Nossos Planos
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  Blog & Materiais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Newsletter - Moved to bottom */}
        <div className="border-t border-white/10 pt-12 pb-8 mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-md w-full">
            <h4 className="font-sans font-semibold text-white mb-2 uppercase text-[13px] tracking-wider">
              Fique por Dentro
            </h4>
            <p className="text-[#999999] text-[14px] font-sans mb-6 leading-[1.6]">
              Receba insights semanais sobre gestão e expansão de franquias.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 w-full transition-all"
              />
              <button 
                type="submit"
                className="bg-brand-600 hover:bg-brand-500 text-white rounded-xl px-4 py-2.5 flex items-center justify-center transition-colors shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[14px] font-sans text-[#999999]">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-400 shrink-0" />
              <span>contato@nexuz.com.br</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-400 shrink-0" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Av. Paulista, 1000 - São Paulo, SP</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-sans text-[#666666]">
          <div>&copy; {new Date().getFullYear()} NXZ Food Service Tech. Todos os direitos reservados.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
