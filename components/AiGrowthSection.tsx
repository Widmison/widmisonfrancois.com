'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { CountUp } from '@/components/CountUp';
import { Reveal } from '@/components/Reveal';

type PlaybookId = (typeof siteConfig.playbook)[number]['id'];

export function AiGrowthSection() {
  const [activeStep, setActiveStep] = useState<PlaybookId>(siteConfig.playbook[0].id);

  return (
    <section
      id="ai-growth"
      aria-labelledby="ai-growth-heading"
      className="relative scroll-mt-24 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="section-wrap section-pad">
        <Reveal>
          <p className="eyebrow text-gold">Secondary Power Pillar</p>
          <h2
            id="ai-growth-heading"
            className="mt-3 max-w-3xl font-display text-3xl tracking-tight text-ink sm:text-4xl"
          >
            Scaling Royol Technology to 1M+ Followers Using AI
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Widmison Francois didn&apos;t just write code in a vacuum—he grew
            Royol Technology to{' '}
            <span className="text-gold-soft">{siteConfig.totalAudience.display}</span>{' '}
            combined followers with AI video/audio pipelines, retention data, and
            cross-platform syndication.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.socials.map((platform, i) => (
            <Reveal key={platform.id} delay={0.05 * i}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group flex h-full flex-col rounded-2xl p-5 transition hover:border-gold/40 hover:shadow-glow-gold"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted">{platform.label}</p>
                  <ExternalLink className="h-3.5 w-3.5 text-muted opacity-0 transition group-hover:opacity-100" />
                </div>
                <CountUp
                  value={platform.followers}
                  className="mt-3 font-display text-3xl text-gold-soft"
                />
                <p className="mt-1 text-xs text-muted">
                  {platform.metricLabel} · {platform.handle}
                </p>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.22}>
            <div className="glass-panel relative flex h-full flex-col overflow-hidden rounded-2xl border-gold/30 p-5 shadow-glow-gold">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_60%)]" />
              <p className="relative text-sm text-muted">Total Reach</p>
              <CountUp
                value={siteConfig.totalAudience.value}
                className="relative mt-3 font-display text-3xl text-gold"
                formatter={(n) =>
                  n >= 1_000_000
                    ? `${(n / 1_000_000).toFixed(2).replace(/\.?0+$/, '')}M+`
                    : `${Math.round(n).toLocaleString()}+`
                }
              />
              <p className="relative mt-1 text-xs text-muted">
                {siteConfig.totalAudience.label}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14" delay={0.08}>
          <p className="eyebrow">Interactive Playbook</p>
          <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
            How the 1M+ AI Growth Engine Works
          </h3>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-2" role="tablist" aria-label="Growth playbook steps">
            {siteConfig.playbook.map((step) => {
              const selected = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveStep(step.id)}
                  className={`rounded-xl border px-4 py-4 text-left transition ${
                    selected
                      ? 'border-gold/40 bg-gold-dim'
                      : 'border-line bg-glass/40 hover:border-line hover:bg-glass/70'
                  }`}
                >
                  <span className="font-mono text-xs text-gold">{step.step}</span>
                  <span className="mt-1 block font-medium text-ink">{step.title}</span>
                </button>
              );
            })}
          </div>

          <div className="glass-panel rounded-2xl p-6 sm:p-8" role="tabpanel">
            {siteConfig.playbook.map((step) =>
              step.id === activeStep ? (
                <div key={step.id}>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                    Step {step.step}
                  </p>
                  <h4 className="mt-3 font-display text-2xl text-ink">{step.title}</h4>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
