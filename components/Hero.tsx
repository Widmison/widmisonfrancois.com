'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { ArchitectureSwitcher } from '@/components/ArchitectureSwitcher';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade opacity-[0.35]"
        style={{ backgroundSize: '48px 48px' }}
      />
      <div className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-[22rem] w-[22rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="section-wrap section-pad relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-glass/70 px-3 py-1.5 text-xs text-muted backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden />
            {siteConfig.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-[2.35rem] leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
          >
            <span className="block text-ink">{siteConfig.name}</span>
            <span className="mt-3 block text-balance text-[0.72em] font-normal text-ink/85 sm:mt-4">
              {siteConfig.headline}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-obsidian transition hover:bg-cyan-soft"
            >
              View Web Dev Projects
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#ai-growth"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold-dim px-5 py-3 text-sm font-semibold text-gold-soft transition hover:border-gold hover:bg-gold/20"
            >
              See How I Scaled to 1M+ With AI
            </a>
          </div>
        </motion.div>

        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Hero proof metrics"
        >
          {siteConfig.heroProof.map((item, i) => (
            <li
              key={item.id}
              className="glass-panel rounded-xl px-4 py-3.5"
            >
              <p
                className={`font-mono text-lg font-semibold tracking-tight ${
                  i % 2 === 0 ? 'text-cyan' : 'text-gold'
                }`}
              >
                {item.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted">{item.label}</p>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="mt-10"
        >
          <ArchitectureSwitcher />
        </motion.div>
      </div>
    </section>
  );
}
