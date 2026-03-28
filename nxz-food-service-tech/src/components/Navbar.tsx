import { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isLightMode = location.pathname === '/planos';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] top-0 transition-all duration-300 ${
        scrolled ? 'pt-3 px-4 pb-3' : 'p-0'
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 border ${
          scrolled
            ? isLightMode 
              ? 'max-w-[80rem] bg-white/80 backdrop-blur-xl border-gray-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-full px-4 sm:px-6 py-2'
              : 'max-w-[80rem] bg-[#0a0a0c]/80 backdrop-blur-xl border-white/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-full px-4 sm:px-6 py-2'
            : 'max-w-[90rem] bg-transparent border-transparent rounded-none px-4 sm:px-6 lg:px-8 py-4'
        }`}
      >
        <div className="flex justify-between items-center h-12">
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white shadow-md border border-brand-400/50">
              <Layers className="w-5 h-5" />
            </div>
            <span className={`text-[24px] font-logo font-black tracking-tight uppercase ${isLightMode && !scrolled ? 'text-gray-900' : isLightMode ? 'text-gray-900' : 'text-white'}`}>
              NXZ
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-[14px] font-medium transition-colors ${isLightMode ? 'text-gray-600 hover:text-brand-600' : 'text-gray-300 hover:text-white'}`}>
              Início
            </Link>
            <Link to="/#times" className={`text-[14px] font-medium transition-colors ${isLightMode ? 'text-gray-600 hover:text-brand-600' : 'text-gray-300 hover:text-white'}`}>
              Soluções
            </Link>
            <Link to="/planos" className={`text-[14px] font-medium transition-colors ${isLightMode ? 'text-brand-600' : 'text-gray-300 hover:text-white'}`}>
              Planos
            </Link>
            <Link to="/#faq" className={`text-[14px] font-medium transition-colors ${isLightMode ? 'text-gray-600 hover:text-brand-600' : 'text-gray-300 hover:text-white'}`}>
              FAQ
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-6">
            <a
              href="#"
              className={`hidden sm:block font-normal transition-colors text-[14px] ${isLightMode ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}
            >
              Login
            </a>

            <a
              href="#"
              className={`inline-flex items-center justify-center rounded-[24px] px-6 py-2.5 text-[14px] font-sans font-semibold active:scale-95 transition-all ${
                isLightMode 
                  ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md' 
                  : 'btn-brand-glass text-white'
              }`}
            >
              Agendar Demonstração
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
