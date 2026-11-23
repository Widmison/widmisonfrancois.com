import { siteConfig } from '@/lib/site-config';
import { Reveal } from '@/components/Reveal';
import {
  Cable,
  Code2,
  LineChart,
  Waves,
} from 'lucide-react';

const icons = {
  engineering: Code2,
  marketing: LineChart,
  fiber: Cable,
  audio: Waves,
} as const;

export function BeyondCodeSection() {
  return (
    <section
      id="beyond-code"
      aria-labelledby="beyond-heading"
      className="relative scroll-mt-24 py-20 sm:py-24"
    >
      <div className="section-wrap section-pad">
        <Reveal>
          <p className="eyebrow text-gold">Ecosystem</p>
          <h2
            id="beyond-heading"
            className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl"
          >
            Full-Spectrum Advantage
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Engineering depth, growth systems, physical network craft, and AI
            creative direction—one operator stack.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteConfig.bento.map((item, index) => {
            const Icon = icons[item.id as keyof typeof icons] ?? Code2;
            const wide = item.span === 'wide';
            return (
              <Reveal
                key={item.id}
                delay={0.05 * index}
                className={wide ? 'md:col-span-2' : ''}
              >
                <article
                  className={`glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-7 ${
                    wide ? 'md:flex md:items-center md:justify-between md:gap-8' : ''
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-50 ${
                      item.accent === 'cyan'
                        ? 'bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.16),transparent_55%)]'
                        : 'bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.14),transparent_55%)]'
                    }`}
                  />
                  <div className="relative">
                    <div
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${
                        item.accent === 'cyan'
                          ? 'border-cyan/30 bg-cyan-dim text-cyan'
                          : 'border-gold/30 bg-gold-dim text-gold'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-xl text-ink sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed text-muted ${wide ? 'max-w-xl' : ''}`}>
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
