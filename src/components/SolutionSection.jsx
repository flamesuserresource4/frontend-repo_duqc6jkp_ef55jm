import React from 'react';
import { Calendar, Clock, Shield, Mic, Sparkles } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">The Hub That Thinks About Your Focus.</h2>
          <p className="mt-3 text-white/70">
            FocusPoint is built on Calm Technology principles—clear, glanceable, and always on your side.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon={<Clock className="h-5 w-5" />}
            title="Glanceable Focus Screen"
            feature="A non-touch, high-contrast display. Based on Calm Technology principles."
            benefit="See your day's agenda, your next task, and your focus time at a glance. No ads. No popups. Just your plan."
          />
          <FeatureCard
            icon={<Calendar className="h-5 w-5" />}
            title="The AI Scheduling Engine"
            feature="Syncs your tasks from Notion, Asana, and To-Do."
            benefit="Stop calendar blocking. FocusPoint finds the perfect time for every task and auto-schedules it in your Google or Outlook calendar. Adapts in real time."
          />
          <FeatureCard
            icon={<Shield className="h-5 w-5" />}
            title="The Focus Shield"
            feature="Automatic, bi-directional API sync."
            benefit="Start a focus session with a tap; FocusPoint sets Slack to DND, updates your status, and blocks your calendar. It's a do-not-disturb sign for the internet."
          />
          <FeatureCard
            icon={<Mic className="h-5 w-5" />}
            title="Context-Aware Voice"
            feature="An AI assistant that understands your work."
            benefit="Ask, “What’s my priority?” and get answers from your own tasks and calendar. Say, “Add ‘Finish report’ to Project X,” and it updates your Notion."
          />
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex items-center gap-2 text-emerald-400">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">How it feels</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold">Your Brain, Secured by Ours.</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-black/40 p-6 ring-1 ring-white/10">
              <h4 className="font-semibold">The AI</h4>
              <p className="mt-2 text-white/70">
                FocusPoint doesn't just know your schedule; it learns your work habits. By sensing app usage—like tab switching or stalled edits—it learns when you're in flow and when you're distracted. It then gently nudges you back on track.
              </p>
            </div>
            <div className="rounded-2xl bg-black/40 p-6 ring-1 ring-white/10">
              <h4 className="font-semibold">The Privacy</h4>
              <p className="mt-2 text-white/70">
                This is sensitive data. Built on a privacy-first foundation using Federated Learning, your personal signals never leave your device. All processing happens locally. We only receive anonymized model improvements. We cannot see your data. Period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, feature, benefit }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-2 text-emerald-400">
        <div className="h-9 w-9 grid place-items-center rounded-lg bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
          {icon}
        </div>
        <span className="text-sm font-medium">Feature</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/80">{feature}</p>
      <div className="mt-4 rounded-xl bg-black/40 p-4 text-white/70 ring-1 ring-white/10">
        <span className="text-sm font-semibold text-white">Benefit</span>
        <p className="mt-1">{benefit}</p>
      </div>
    </div>
  );
}
