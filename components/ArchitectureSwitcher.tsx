'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Megaphone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

type Mode = 'builder' | 'growth';

export function ArchitectureSwitcher() {
  const [mode, setMode] = useState<Mode>('builder');
  const active =
    mode === 'builder'
      ? siteConfig.architectureModes.builder
      : siteConfig.architectureModes.growth;
  const isCyan = active.accent === 'cyan';

  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl p-5 sm:p-6">
      <div
        className={`pointer-events-none absolute inset-0 opacity-40 ${
          isCyan
            ? 'bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.25),transparent_55%)]'
            : 'bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.22),transparent_55%)]'
        }`}
      />
      <div className="relative">
        <p className="eyebrow mb-3">Architecture Switcher</p>
        <h3 className="font-display text-2xl text-ink sm:text-3xl">
          Builder vs. Growth Marketer
        </h3>
        <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
          Full-stack code and AI distribution are one system—toggle to see how
          Widmison Francois ships platforms and engineers attention together.
        </p>

        <div
          className="mt-5 inline-flex rounded-full border border-line bg-obsidian/70 p-1"
          role="tablist"
          aria-label="Architecture mode"
        >
          {(
            [
              { id: 'builder', icon: Code2, label: 'Builder' },
              { id: 'growth', icon: Megaphone, label: 'Growth Marketer' },
            ] as const
          ).map((tab) => {
            const selected = mode === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setMode(tab.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  selected
                    ? tab.id === 'builder'
                      ? 'text-obsidian'
                      : 'text-obsidian'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="arch-pill"
                    className={`absolute inset-0 rounded-full ${
                      tab.id === 'builder' ? 'bg-cyan' : 'bg-gold'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Icon className="h-4 w-4" aria-hidden />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="mt-6"
            role="tabpanel"
          >
            <p
              className={`font-mono text-xs uppercase tracking-[0.2em] ${
                isCyan ? 'text-cyan' : 'text-gold'
              }`}
            >
              {active.title}
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {active.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-line/80 bg-obsidian/50 px-4 py-3 text-sm text-ink/90"
                >
                  <span
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                      isCyan ? 'bg-cyan shadow-glow' : 'bg-gold shadow-glow-gold'
                    }`}
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
