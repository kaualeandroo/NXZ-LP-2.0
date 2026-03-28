import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import Features from '../components/Features';
import Transition from '../components/Transition';
import Solutions from '../components/Solutions';
import ROI from '../components/ROI';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingIndex from '../components/FloatingIndex';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-200">
      <Navbar />
      <FloatingIndex />
      <main>
        <Hero />
        <PainPoints />
        <ROI />
        <Features />
        <Transition />
        <Solutions />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
