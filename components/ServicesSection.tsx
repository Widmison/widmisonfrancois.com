import { siteConfig } from '@/lib/site-config';
import { Reveal } from '@/components/Reveal';

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-24 py-20 sm:py-24"
    >
      <div className="section-wrap section-pad">
        <Reveal>
          <p className="eyebrow text-cyan">Engagements</p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl"
          >
            Services
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Partner with Widmison Francois for platforms that ship, audiences
            that compound, and brands that need both.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <Reveal key={service.id} delay={0.06 * index}>
              <li className="glass-panel flex h-full flex-col rounded-2xl p-6">
                <p
                  className={`font-mono text-xs uppercase tracking-[0.18em] ${
                    service.accent === 'cyan' ? 'text-cyan' : 'text-gold'
                  }`}
                >
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-xl text-ink sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink/85">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          service.accent === 'cyan' ? 'bg-cyan' : 'bg-gold'
                        }`}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
