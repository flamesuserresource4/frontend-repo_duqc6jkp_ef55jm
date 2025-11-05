import React from 'react';
import { Lock, Rocket } from 'lucide-react';

export default function PricingCTASection() {
  return (
    <section id="reserve" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A Model That Puts You First.</h2>
          <p className="mt-3 text-white/70">Transparent pricing. No tricks.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">The Hardware</h3>
            <p className="mt-1 text-sm text-white/70">FocusPoint Hub — $149 MSRP</p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Pay once, own it forever. No subscriptions required.</li>
              <li>Includes FocusOS Basic: Glanceable Calendar, Manual Pomodoro Timer, Manual "Busy Light."</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">The AI</h3>
            <p className="mt-1 text-sm text-white/70">FocusPoint Pro — $9.99/mo</p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Unlock the full power of the AI brain.</li>
              <li>Includes FocusOS Pro: AI Scheduling Engine, Focus Shield (Slack/Cal Sync), Context-Aware Voice, Privacy-First Behavioral Sensing, and all Pro Integrations.</li>
              <li>Kickstarter backers get 6 months of Pro free.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-4 h-12 w-12 grid place-items-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-3xl font-semibold">Be the First to Reclaim Your Focus.</h3>
            <p className="mt-3 text-white/80">
              The $149 FocusPoint Hub is launching on Kickstarter. Reserve your spot for $1 today and lock in the Super Early Bird price of just $99.
            </p>
            <p className="mt-2 text-sm text-white/60">The $1 deposit is 100% refundable and guarantees your discount. Spots are limited.</p>
            <div className="mt-6 flex justify-center">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                <Rocket className="h-5 w-5" />
                Reserve for $1 & Lock In $99 Price
              </a>
            </div>
            <p className="mt-3 text-xs text-white/50">Spots are limited. Join the focus revolution.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
