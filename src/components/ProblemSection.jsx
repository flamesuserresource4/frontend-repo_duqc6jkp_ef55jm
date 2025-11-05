import React, { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const CARDS = [
  {
    title: 'Collaboration Overload',
    text:
      "70% of open-office interactions are now digital. Your 'collaboration' hub is a distraction factory.",
  },
  {
    title: 'Context Switching',
    text:
      'The average professional switches apps over 1,200 times a day. Context-switching is costing you 40% of your productive time.',
  },
  {
    title: 'Smart Speakers, Dumb Incentives',
    text:
      'Tools like Alexa and Google Nest are built to distract you with media and shopping. They are part of the problem.',
  },
];

export default function ProblemSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % CARDS.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Your Attention Is Under Attack.</h2>
          <p className="mt-3 text-white/70">
            We built FocusPoint because the modern work stack is noisy by default. Here are the facts.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 transition-all ${
                index === i ? 'ring-2 ring-emerald-400/60' : 'opacity-80'
              }`}
            >
              <div className="flex items-center gap-2 text-emerald-400">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-medium">Signal, not noise</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-white/70">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
