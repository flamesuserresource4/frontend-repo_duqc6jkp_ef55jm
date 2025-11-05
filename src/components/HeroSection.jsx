import { Rocket, Shield, CheckCircle, Calendar } from 'lucide-react';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              Productivity shield. Calm by design.
            </div>
            <h1 className="font-semibold leading-tight tracking-tight text-4xl md:text-6xl">
              End Digital Distraction. Reclaim Your Focus.
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl">
              Meet FocusPoint, the first AI-powered desk hub designed to protect your attention, not compete for it.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#reserve"
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                <Rocket className="h-5 w-5" />
                Reserve for $1 & Lock In $99 Price
              </a>
              <p className="text-sm text-white/60">
                The intelligent focus tool for pros at Google, students at Stanford, and remote workers everywhere.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            {/* Device mockup */}
            <div className="relative mx-auto aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-4 ring-1 ring-white/10 shadow-2xl">
              {/* LED ring */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="h-2 w-24 rounded-full bg-emerald-400/70 blur-[2px]" />
              </div>
              {/* Screen */}
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-black/60 px-6 py-6 ring-1 ring-white/10">
                <div className="mb-4 flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="h-4 w-4" />
                  Focus Session
                </div>
                <div className="text-6xl font-bold tracking-tight">45:00</div>
                <div className="mt-4 flex items-center gap-2 text-white/70">
                  <Calendar className="h-4 w-4" />
                  Next: Deep Work — Strategy Draft at 11:00
                </div>
                <div className="mt-6 h-1.5 w-2/3 rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-white/60">FocusPoint Hub on a minimalist desk</div>
          </div>
        </div>
      </div>
    </section>
  );
}
