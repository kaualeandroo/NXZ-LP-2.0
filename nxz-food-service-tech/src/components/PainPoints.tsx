import { Network, ShieldCheck, Building2, Plus, Minus, ClipboardCheck, Clock, Camera, Thermometer, TrendingUp, AlertCircle, CheckCircle2, Zap, ChevronDown, Activity, AlertTriangle, BarChart3, PieChart, Store, Package, Timer, ArrowUpRight, ArrowDownRight, MoreHorizontal, CheckCircle, XCircle } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import AllInOne from './AllInOne';

export default function PainPoints() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const errorsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: introScroll } = useScroll({
    target: introRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: errorsScroll } = useScroll({
    target: errorsRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: entranceScroll } = useScroll({
    target: errorsRef,
    offset: ["start end", "start start"]
  });

  useMotionValueEvent(errorsScroll, "change", (latest) => {
    if (isMobile) return;
    if (latest < 0.33) setActiveIndex(0);
    else if (latest < 0.66) setActiveIndex(1);
    else setActiveIndex(2);
  });

  const scrollToSection = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? -1 : index);
      return;
    }

    if (errorsRef.current) {
      const top = errorsRef.current.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;
      window.scrollTo({
        top: top + (vh * index),
        behavior: 'smooth'
      });
    }
  };

  const bgScale = useTransform(introScroll, [0, 1], [0.85, 1]);
  const bgBorderRadius = useTransform(introScroll, [0, 1], ["40px", "0px"]);
  
  const imageScale = useTransform(entranceScroll, [0, 1], [0.6, 1]);
  const imageRadius = useTransform(entranceScroll, [0, 1], ["64px", "0px"]);

  const imgScale = useTransform(introScroll, [0, 1], [1.8, 1]);
  const imgOpacity = 1; // Always fully visible

  const y1 = useTransform(introScroll, [0, 1], [-200, 0]);
  const x1 = useTransform(introScroll, [0, 1], [-150, 0]);
  const r1 = useTransform(introScroll, [0, 1], [-60, -6]);

  const y2 = useTransform(introScroll, [0, 1], [-180, 0]);
  const x2 = useTransform(introScroll, [0, 1], [200, 0]);
  const r2 = useTransform(introScroll, [0, 1], [70, 4]);

  const y3 = useTransform(introScroll, [0, 1], [250, 0]);
  const x3 = useTransform(introScroll, [0, 1], [-200, 0]);
  const r3 = useTransform(introScroll, [0, 1], [-90, 8]);

  const y4 = useTransform(introScroll, [0, 1], [200, 0]);
  const x4 = useTransform(introScroll, [0, 1], [180, 0]);
  const r4 = useTransform(introScroll, [0, 1], [80, -5]);

  const y5 = useTransform(introScroll, [0, 1], [-50, 0]);
  const x5 = useTransform(introScroll, [0, 1], [-250, 0]);
  const r5 = useTransform(introScroll, [0, 1], [-120, 12]);

  const y6 = useTransform(introScroll, [0, 1], [50, 0]);
  const x6 = useTransform(introScroll, [0, 1], [250, 0]);
  const r6 = useTransform(introScroll, [0, 1], [120, -10]);

  const y7 = useTransform(introScroll, [0, 1], [-250, 0]);
  const x7 = useTransform(introScroll, [0, 1], [-80, 0]);
  const r7 = useTransform(introScroll, [0, 1], [-45, -15]);

  const y8 = useTransform(introScroll, [0, 1], [-220, 0]);
  const x8 = useTransform(introScroll, [0, 1], [100, 0]);
  const r8 = useTransform(introScroll, [0, 1], [50, 15]);

  const y9 = useTransform(introScroll, [0, 1], [280, 0]);
  const x9 = useTransform(introScroll, [0, 1], [-100, 0]);
  const r9 = useTransform(introScroll, [0, 1], [-70, 20]);

  const y10 = useTransform(introScroll, [0, 1], [240, 0]);
  const x10 = useTransform(introScroll, [0, 1], [120, 0]);
  const r10 = useTransform(introScroll, [0, 1], [60, -20]);

  const floatingImages = [
    { src: "/imgs/bag.png", className: "top-[15%] left-[2%] md:top-[10%] md:left-[8%] w-16 md:w-20 lg:w-28", y: y1, x: x1, rotate: r1 },
    { src: "/imgs/plant.png", className: "top-[18%] right-[2%] md:top-[12%] md:right-[10%] w-12 md:w-16 lg:w-24", y: y2, x: x2, rotate: r2 },
    { src: "/imgs/open.png", className: "bottom-[15%] left-[5%] md:bottom-[10%] md:left-[12%] w-20 md:w-24 lg:w-32", y: y3, x: x3, rotate: r3 },
    { src: "/imgs/hand-phone.png", className: "bottom-[18%] right-[2%] md:bottom-[12%] md:right-[8%] w-16 md:w-20 lg:w-28", y: y4, x: x4, rotate: r4 },
    { src: "/imgs/bag.png", className: "hidden md:block top-[45%] left-[4%] w-14 lg:w-20", y: y5, x: x5, rotate: r5 },
    { src: "/imgs/plant.png", className: "hidden md:block top-[40%] right-[4%] w-14 lg:w-20", y: y6, x: x6, rotate: r6 },
    { src: "/imgs/open.png", className: "hidden md:block top-[5%] left-[30%] w-16 lg:w-24", y: y7, x: x7, rotate: r7 },
    { src: "/imgs/hand-phone.png", className: "hidden md:block top-[8%] right-[30%] w-16 lg:w-24", y: y8, x: x8, rotate: r8 },
    { src: "/imgs/bag.png", className: "hidden md:block bottom-[8%] left-[30%] w-16 lg:w-20", y: y9, x: x9, rotate: r9 },
    { src: "/imgs/plant.png", className: "hidden md:block bottom-[5%] right-[30%] w-18 lg:w-24", y: y10, x: x10, rotate: r10 },
  ];

  const Mockup1 = () => {
    const [hoveredStore, setHoveredStore] = useState<number | null>(null);

    const stores = [
      { id: 1, name: "SP - Av. Paulista", score: 98, royalties: "R$ 12.4k", status: "excellent", trend: "+2%" },
      { id: 2, name: "RJ - Copacabana", score: 82, royalties: "R$ 8.2k", status: "warning", trend: "-5%" },
      { id: 3, name: "MG - Savassi", score: 95, royalties: "R$ 10.1k", status: "good", trend: "+1%" },
      { id: 4, name: "PR - Batel", score: 91, royalties: "R$ 9.5k", status: "good", trend: "+4%" },
    ];

    return (
      <div className="w-full h-full flex flex-col relative font-sans scale-[0.95] sm:scale-100 origin-top">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/60 flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b border-gray-100 p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Network className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base tracking-tight">Painel da Franquia</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Visão Global • 32 Unidades</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition-colors">
                Exportar Relatório
              </button>
            </div>
          </div>
          
          <div className="p-4 sm:p-5 flex-1 flex flex-col gap-5 bg-gray-50/30">
            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-50 rounded-md">
                      <PieChart className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Padrão da Rede</span>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">92<span className="text-lg text-gray-400 font-bold">%</span></span>
                  <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md">
                    <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                    <span className="text-[10px] font-bold text-emerald-700">4.2%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-50 rounded-md">
                      <BarChart3 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Royalties (Mês)</span>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight"><span className="text-lg text-gray-400 font-bold mr-1">R$</span>142<span className="text-lg text-gray-400 font-bold">k</span></span>
                  <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md">
                    <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                    <span className="text-[10px] font-bold text-emerald-700">12%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Store List */}
            <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col overflow-hidden">
              <div className="bg-gray-50/80 px-4 py-3 grid grid-cols-12 gap-3 border-b border-gray-100">
                <span className="col-span-5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Unidade</span>
                <span className="col-span-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">Score</span>
                <span className="col-span-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Royalties</span>
              </div>
              <div className="flex-1 overflow-y-auto">
                {stores.map((store) => (
                  <motion.div 
                    key={store.id}
                    onHoverStart={() => setHoveredStore(store.id)}
                    onHoverEnd={() => setHoveredStore(null)}
                    className="px-4 py-3 grid grid-cols-12 gap-3 border-b border-gray-50 items-center hover:bg-blue-50/30 cursor-pointer transition-colors relative group"
                  >
                    <div className="col-span-5 flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full shadow-sm ${store.status === 'excellent' ? 'bg-emerald-500 shadow-emerald-500/40' : store.status === 'warning' ? 'bg-orange-500 shadow-orange-500/40' : 'bg-blue-500 shadow-blue-500/40'}`} />
                      <span className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{store.name}</span>
                    </div>
                    <div className="col-span-3 flex justify-center">
                      <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${store.score >= 90 ? 'bg-emerald-50 text-emerald-700' : 'bg-orange-50 text-orange-700'}`}>
                        <span className="text-[11px] sm:text-xs font-bold">{store.score}</span>
                        <span className="text-[9px] font-medium opacity-70">/100</span>
                      </div>
                    </div>
                    <div className="col-span-4 flex items-center justify-end gap-2">
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{store.royalties}</span>
                      <span className={`text-[10px] font-bold ${store.trend.startsWith('+') ? 'text-emerald-500' : 'text-orange-500'}`}>{store.trend}</span>
                    </div>
                    
                    {/* Hover Action */}
                    <AnimatePresence>
                      {hoveredStore === store.id && (
                        <motion.div 
                          key={`hover-action-${store.id}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 shadow-lg shadow-blue-600/20 rounded-lg px-3 py-1.5 flex items-center gap-1.5"
                        >
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider">Auditar</span>
                          <ArrowUpRight className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-2 right-2 sm:-bottom-4 sm:-right-2 lg:-bottom-6 lg:-right-6 bg-slate-900 text-white p-4 sm:p-5 rounded-xl shadow-2xl max-w-[220px] sm:max-w-[280px] z-30 border border-slate-700/50 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div className="p-1 bg-blue-500/20 rounded">
              <Network className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-blue-400 tracking-widest uppercase">Visão do Franqueador</span>
          </div>
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300">
            Audite royalties e <span className="text-white font-bold bg-blue-500/20 px-1 rounded">controle o padrão</span> da sua marca em tempo real.
          </p>
        </motion.div>
      </div>
    );
  };

  const Mockup2 = () => {
    const [activeTab, setActiveTab] = useState('dre');

    return (
      <div className="w-full h-full flex flex-col relative font-sans scale-[0.95] sm:scale-100 origin-top">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/60 flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b border-gray-100 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base tracking-tight">DRE Consolidado</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Análise de Rentabilidade</p>
              </div>
            </div>
            <div className="flex bg-gray-100/80 p-1 rounded-lg border border-gray-200/50">
              <button onClick={() => setActiveTab('dre')} className={`px-3 py-1.5 text-[11px] font-bold rounded-md transition-all ${activeTab === 'dre' ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200/50' : 'text-gray-500 hover:text-gray-700'}`}>DRE</button>
              <button onClick={() => setActiveTab('custos')} className={`px-3 py-1.5 text-[11px] font-bold rounded-md transition-all ${activeTab === 'custos' ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200/50' : 'text-gray-500 hover:text-gray-700'}`}>Custos</button>
            </div>
          </div>
          
          <div className="p-4 sm:p-5 flex-1 flex flex-col gap-4 bg-gray-50/30">
            {/* Alert Banner */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200/60 rounded-xl p-3 sm:p-4 flex gap-3 items-start shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <div className="bg-white p-2 rounded-lg shadow-sm border border-red-100 shrink-0">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-red-900 mb-1">Gargalo Logístico Detectado</h4>
                <p className="text-[11px] sm:text-xs text-red-700/80 leading-relaxed">
                  Custo de frete <span className="font-bold text-red-800">14% acima da média</span> na Loja Sul devido a compras descentralizadas.
                </p>
              </div>
            </motion.div>

            {/* Chart Area */}
            <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 sm:p-5 flex flex-col shadow-sm">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 tracking-tight">Margem de Contribuição</h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Comparativo entre unidades (%)</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Média da Rede</span>
                  <span className="text-lg font-black text-emerald-600">22.4%</span>
                </div>
              </div>
              
              <div className="flex-1 flex items-end justify-around gap-4 pt-4 border-b border-gray-100 pb-2 relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                  <div className="border-t-2 border-dashed border-gray-900 w-full"></div>
                  <div className="border-t-2 border-dashed border-gray-900 w-full"></div>
                  <div className="border-t-2 border-dashed border-gray-900 w-full"></div>
                </div>

                {/* Bars */}
                <div className="flex flex-col items-center gap-3 z-10 group cursor-pointer w-full max-w-[60px]">
                  <div className="w-full h-24 bg-emerald-50 rounded-t-lg relative group-hover:bg-emerald-100 transition-colors border border-emerald-100 border-b-0">
                    <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-emerald-600 to-emerald-500 rounded-t-lg shadow-sm"></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                      24% Margem
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-600">Norte</span>
                </div>
                
                <div className="flex flex-col items-center gap-3 z-10 group cursor-pointer w-full max-w-[60px]">
                  <div className="w-full h-20 bg-orange-50 rounded-t-lg relative group-hover:bg-orange-100 transition-colors border border-orange-100 border-b-0">
                    <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg shadow-sm"></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                      8% Margem
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-600">Sul</span>
                </div>

                <div className="flex flex-col items-center gap-3 z-10 group cursor-pointer w-full max-w-[60px]">
                  <div className="w-full h-28 bg-emerald-50 rounded-t-lg relative group-hover:bg-emerald-100 transition-colors border border-emerald-100 border-b-0">
                    <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-emerald-600 to-emerald-500 rounded-t-lg shadow-sm"></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                      28% Margem
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-600">Leste</span>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded bg-emerald-500 shadow-sm"></div>
                  <span className="text-[10px] sm:text-[11px] text-gray-600 font-bold uppercase tracking-wider">Lucro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded bg-gray-100 border border-gray-200"></div>
                  <span className="text-[10px] sm:text-[11px] text-gray-600 font-bold uppercase tracking-wider">Custos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-2 right-2 sm:-bottom-4 sm:-right-2 lg:-bottom-6 lg:-right-6 bg-slate-900 text-white p-4 sm:p-5 rounded-xl shadow-2xl max-w-[220px] sm:max-w-[280px] z-30 border border-slate-700/50 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div className="p-1 bg-orange-500/20 rounded">
              <Building2 className="w-3.5 h-3.5 text-orange-400" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-orange-400 tracking-widest uppercase">Controle de Rede</span>
          </div>
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300">
            Descubra a <span className="text-white font-bold bg-orange-500/20 px-1 rounded">rentabilidade exata</span> e elimine gargalos operacionais.
          </p>
        </motion.div>
      </div>
    );
  };

  const Mockup3 = () => {
    const [isLive, setIsLive] = useState(true);
    const [orders, setOrders] = useState(14);
    const [time, setTime] = useState(18);

    useEffect(() => {
      if (!isLive) return;
      const interval = setInterval(() => {
        setOrders(prev => Math.max(5, Math.min(25, prev + Math.floor(Math.random() * 3 - 1))));
        setTime(prev => Math.max(12, Math.min(35, prev + Math.floor(Math.random() * 3 - 1))));
      }, 3000);
      return () => clearInterval(interval);
    }, [isLive]);

    return (
      <div className="w-full h-full flex flex-col relative font-sans scale-[0.95] sm:scale-100 origin-top">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/60 flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b border-gray-100 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base tracking-tight">KDS • Gestão à Vista</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Loja Centro • Turno Manhã</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsLive(!isLive)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all border cursor-pointer ${isLive ? 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm' : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'}`}
            >
              {isLive ? (
                <>
                  <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="tracking-wider">AO VIVO</span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="tracking-wider">PAUSADO</span>
                </>
              )}
            </button>
          </div>
          
          <div className="p-4 sm:p-5 flex-1 flex flex-col gap-4 sm:gap-5 bg-gray-50/30">
            {/* Big Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors"></div>
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Pedidos na Fila</span>
                </div>
                <motion.div 
                  key={orders}
                  initial={{ scale: 1.1, color: '#3b82f6' }}
                  animate={{ scale: 1, color: '#111827' }}
                  className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter"
                >
                  {orders}
                </motion.div>
              </div>
              
              <div className={`bg-white border rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden transition-all ${time > 25 ? 'border-red-200 shadow-[0_0_15px_rgba(239,68,68,0.05)]' : 'border-gray-100 hover:shadow-md'}`}>
                <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl transition-colors ${time > 25 ? 'bg-red-50' : 'bg-emerald-50'}`}></div>
                <div className="flex items-center gap-2 mb-3">
                  <Timer className={`w-4 h-4 ${time > 25 ? 'text-red-500' : 'text-emerald-500'}`} />
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Tempo Médio</span>
                </div>
                <motion.div 
                  key={time}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className={`text-4xl sm:text-5xl font-black tracking-tighter ${time > 25 ? 'text-red-600' : 'text-gray-900'}`}
                >
                  {time}<span className="text-2xl sm:text-3xl text-gray-400 font-bold ml-1">m</span>
                </motion.div>
              </div>
            </div>

            {/* Live Feed */}
            <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 flex flex-col shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                <h4 className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Alertas da Operação
                </h4>
                <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-md">Hoje</span>
              </div>
              
              <div className="space-y-3 flex-1 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {time > 25 && (
                    <motion.div 
                      key="alert-time"
                      initial={{ opacity: 0, x: -20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: 'auto' }}
                      exit={{ opacity: 0, scale: 0.9, height: 0 }}
                      className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-start gap-3"
                    >
                      <div className="bg-red-100 p-1.5 rounded-md shrink-0">
                        <Timer className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-red-900 mb-0.5">Atraso Crítico na Cozinha</p>
                        <p className="text-[10px] sm:text-xs text-red-700/80 font-medium">3 pedidos passaram de 30 min. Necessário realocar equipe para a praça de grelhados.</p>
                      </div>
                    </motion.div>
                  )}
                  
                  <motion.div 
                    key="alert-stock"
                    layout
                    className="bg-gray-50 border border-gray-100 rounded-lg p-3 flex items-start gap-3"
                  >
                    <div className="bg-orange-100 p-1.5 rounded-md shrink-0">
                      <Package className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">Estoque Baixo: Embalagem G</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Restam apenas 12 unidades. Solicitar reposição imediata ao almoxarifado.</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-2 right-2 sm:-bottom-4 sm:-right-2 lg:-bottom-6 lg:-right-6 bg-slate-900 text-white p-4 sm:p-5 rounded-xl shadow-2xl max-w-[220px] sm:max-w-[280px] z-30 border border-slate-700/50 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div className="p-1 bg-emerald-500/20 rounded">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-emerald-400 tracking-widest uppercase">Gestão da Unidade</span>
          </div>
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300">
            <span className="text-white font-bold bg-emerald-500/20 px-1 rounded">Gestão à vista infalível</span> para operar no máximo sem morar no operacional.
          </p>
        </motion.div>
      </div>
    );
  };

  const sections = [
    {
      id: "rede",
      title: "Franqueadores",
      description: "Retome o controle do padrão da sua marca nas pontas. Audite royalties com transparência, expanda de forma agressiva e controle todos os seus processos e padrões em um só lugar.",
      icon: <Network className="w-6 h-6" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      mockupComponent: <Mockup1 />,
      reverse: false
    },
    {
      id: "governanca",
      title: "Donos de Redes (Lojas Próprias)",
      description: "Organize todo o seu negócio em um único lugar. Descubra a rentabilidade exata de cada unidade (DRE por loja). Elimine compras descentralizadas, custos ocultos de logística e identifique gargalos operacionais entre filiais.",
      icon: <Building2 className="w-6 h-6" />,
      color: "orange",
      image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=1000&auto=format&fit=crop",
      mockupComponent: <Mockup2 />,
      reverse: true
    },
    {
      id: "enterprise",
      title: "Franqueados",
      description: "Gestão à vista infalível para que sua loja opere no máximo da rentabilidade, sem que você precise morar dentro do operacional.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "green",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000&auto=format&fit=crop",
      mockupComponent: <Mockup3 />,
      reverse: false
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-100/80 text-red-600 border-red-200/50';
      case 'orange': return 'bg-orange-100/80 text-orange-600 border-orange-200/50';
      case 'brand': return 'bg-brand-100/80 text-brand-600 border-brand-200/50';
      default: return 'bg-gray-100/80 text-gray-600 border-gray-200/50';
    }
  };

  return (
    <div id="desafios" ref={containerRef} className="relative w-full">
      {/* Intro Section Wrapper */}
      <div ref={introRef} id="empatia" className="relative w-full h-[150vh] bg-transparent z-10">
        <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
          <motion.div 
            className="w-full h-full bg-white relative overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            style={{
              scale: bgScale,
              borderRadius: bgBorderRadius,
            }}
          >
            {/* Flex container for text and scattered images */}
            <div className="w-full h-full flex items-center justify-center relative">
              
              {/* Floating Parallax Images */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                {floatingImages.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img.src}
                    alt=""
                    className={`absolute object-contain ${img.className}`}
                    style={{ 
                      y: img.y, 
                      x: img.x, 
                      rotate: img.rotate,
                      scale: imgScale,
                      opacity: imgOpacity
                    }}
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>

              {/* Text Area - Centered */}
              <div className="flex items-center justify-center px-6 sm:px-10 lg:px-12 z-20">
                <div className="text-center max-w-4xl mx-auto relative">
                  <h2 className="relative text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-display font-medium text-brand-600 tracking-tight leading-[1.1] sm:leading-[1.1]">
                    Profissionalize a gestão da sua rede em um só lugar.
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AllInOne />

      {/* Combined Operational Errors Section */}
      <div ref={errorsRef} className="relative w-full h-auto lg:h-[300vh] bg-white z-20 py-12 lg:py-0">
        <div className="relative lg:sticky top-0 h-auto lg:h-[100dvh] w-full flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Side - Text & Accordion */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center bg-white relative z-10">
            <div className="w-full max-w-xl mx-auto px-6 lg:px-16 py-12 lg:py-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">
                  Perfis de Gestão
                </span>
              </div>
              <h2 className="text-[32px] md:text-[40px] font-display font-medium text-gray-900 leading-[1.1] mb-8 tracking-tight">
                Feito para cada perfil de gestão
              </h2>
              
              <div className="flex flex-col border-t border-gray-200">
                {sections.map((section, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div 
                      key={section.id} 
                      className="border-b border-gray-200 flex flex-col"
                    >
                      <button 
                        className="w-full py-5 lg:py-6 flex items-center justify-between text-left cursor-pointer"
                        onClick={() => scrollToSection(index)}
                      >
                        <div className="flex items-center gap-3 lg:gap-4">
                          <div className="text-black shrink-0">
                            {section.icon}
                          </div>
                          <h4 className={`text-[16px] lg:text-[20px] font-sans font-medium transition-colors duration-500 ${isActive ? 'text-black' : 'text-gray-500'}`}>
                            {section.title}
                          </h4>
                        </div>
                        <div className="shrink-0 ml-4 transition-transform duration-500">
                          {isActive ? (
                            <Minus className="w-5 h-5 text-black" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </button>
                      <motion.div 
                        initial={false}
                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 lg:pb-6 pr-0 lg:pr-12">
                          <p className="text-[14px] lg:text-[16px] font-sans font-normal text-gray-600 leading-[1.6]">
                            {section.description}
                          </p>
                          {/* Mobile/Tablet Image Inside Accordion */}
                          <div className="block lg:hidden w-full relative mt-8 mb-4 rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
                            <img 
                              src={section.image} 
                              alt={section.title}
                              className="absolute inset-0 w-full h-full object-cover object-center scale-110 blur-[3px] opacity-80"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 pointer-events-none"></div>
                            <div className="relative z-20 p-3 sm:p-8 min-h-[480px] sm:min-h-[560px] flex items-center justify-center">
                              <div className="w-full h-full max-w-md mx-auto">
                                {section.mockupComponent}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 md:mt-12">
                <button className="inline-flex items-center justify-center rounded-[24px] glass-btn-dark px-8 py-3.5 sm:py-3 text-[15px] font-sans font-semibold text-white active:scale-95 transition-all duration-200 w-full sm:w-auto">
                  Agendar Demonstração
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Sticky Image Crossfade (Desktop Only) */}
          <motion.div 
            className="hidden lg:block w-1/2 h-full relative bg-gray-100 overflow-hidden"
            style={{
              scale: imageScale,
              borderRadius: imageRadius,
              transformOrigin: "center center"
            }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                initial={false}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  zIndex: activeIndex === index ? 10 : 0
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Background Image */}
                <motion.img 
                  src={section.image} 
                  alt={section.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  initial={false}
                  animate={{ 
                    scale: activeIndex === index ? 1.05 : 1.15,
                    filter: activeIndex === index ? 'blur(4px)' : 'blur(12px)',
                  }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

                {/* Mockup Image */}
                <motion.div
                  className="relative w-[90%] lg:w-[80%] max-w-lg aspect-[3/4] md:aspect-square lg:aspect-[4/3] z-20"
                  initial={false}
                  animate={{ 
                    y: activeIndex === index ? 0 : 40,
                    opacity: activeIndex === index ? 1 : 0,
                    scale: activeIndex === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {section.mockupComponent}
                </motion.div>
              </motion.div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none z-30"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
