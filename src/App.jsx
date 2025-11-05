import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PricingCTASection from './components/PricingCTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingCTASection />
      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-white/60">
          © {new Date().getFullYear()} FocusPoint. Calm technology for deep work.
        </div>
      </footer>
    </div>
  );
}
