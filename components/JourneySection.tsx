import { siteConfig } from '@/lib/site-config';
import { Reveal } from '@/components/Reveal';

export function JourneySection() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative scroll-mt-24 py-20 sm:py-24"
    >
      <div className="section-wrap section-pad">
        <Reveal>
          <p className="eyebrow text-cyan">Timeline</p>
          <h2
            id="journey-heading"
            className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl"
          >
            My Web Dev & Tech Journey
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            From Palm Beach State College to founding Royol Technology and
            shipping Mex509—Widmison Francois builds systems that compound from
            code into culture-scale attention.
          </p>
        </Reveal>

        <ol className="relative mt-12 space-y-0 border-l border-line pl-6 sm:pl-8">
          {siteConfig.timeline.map((item, index) => (
            <Reveal key={item.id} delay={0.06 * index}>
              <li className="relative pb-10 last:pb-0">
                <span
                  className={`absolute -left-[1.9rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 sm:-left-[2.4rem] ${
                    index % 2 === 0
                      ? 'border-cyan bg-cyan/30'
                      : 'border-gold bg-gold/30'
                  }`}
                  aria-hidden
                />
                <p
                  className={`font-mono text-xs uppercase tracking-[0.18em] ${
                    index % 2 === 0 ? 'text-cyan' : 'text-gold'
                  }`}
                >
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
