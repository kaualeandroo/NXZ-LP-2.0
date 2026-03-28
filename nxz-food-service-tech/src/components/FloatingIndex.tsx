import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'desafios', label: 'Desafios' },
  { id: 'roi', label: 'ROI' },
  { id: 'plataforma', label: 'Plataforma' },
  { id: 'transicao', label: 'Transição' },
  { id: 'times', label: 'Times' },
  { id: 'faq', label: 'FAQ' },
];

export default function FloatingIndex() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -70% 0px',
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-[100] flex-col gap-5 mix-blend-difference">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end w-8 h-8 focus:outline-none"
            aria-label={`Ir para ${section.label}`}
          >
            {/* Label */}
            <span 
              className={`
                absolute right-10 px-3 py-1.5 rounded-md text-xs font-sans font-semibold whitespace-nowrap
                transition-all duration-300 pointer-events-none
                ${isActive 
                  ? 'opacity-100 translate-x-0 text-white bg-white/10 backdrop-blur-md border border-white/20' 
                  : 'opacity-0 translate-x-4 text-gray-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white group-hover:bg-white/5 group-hover:backdrop-blur-sm'
                }
              `}
            >
              {section.label}
            </span>
            
            {/* Dot Container */}
            <div className="relative flex items-center justify-center w-full h-full">
              {/* The actual dot */}
              <div 
                className={`
                  rounded-full transition-all duration-300
                  ${isActive 
                    ? 'w-2.5 h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                    : 'w-1.5 h-1.5 bg-white/40 group-hover:bg-white/80 group-hover:scale-150'
                  }
                `}
              />
              
              {/* Active Ring */}
              {isActive && (
                <motion.div
                  layoutId="activeDotRing"
                  className="absolute w-5 h-5 rounded-full border border-white/60"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
