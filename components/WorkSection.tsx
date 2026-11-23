'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import {
  siteConfig,
  type Project,
  type ProjectCategory,
} from '@/lib/site-config';
import { Reveal } from '@/components/Reveal';
import { ProjectModal } from '@/components/ProjectModal';

export function WorkSection() {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [active, setActive] = useState<Project | null>(null);

  const projects = useMemo(() => {
    if (filter === 'all') return siteConfig.projects;
    return siteConfig.projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-24 py-20 sm:py-24"
    >
      <div className="section-wrap section-pad">
        <Reveal>
          <p className="eyebrow text-cyan">Primary Focus</p>
          <h2
            id="work-heading"
            className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl"
          >
            Featured Web Development Case Studies
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Production platforms engineered by Widmison Francois—logistics
            engines, agency hubs, client portals, and AI studio tools built to
            ship and scale.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Project filters"
          >
            {siteConfig.projectFilters.map((item) => {
              const selected = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(item.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selected
                      ? 'border-cyan/50 bg-cyan-dim text-cyan-soft'
                      : 'border-line bg-glass/50 text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={0.05 * index}>
              <li className="glass-panel group flex h-full flex-col rounded-2xl p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${
                      project.accent === 'cyan'
                        ? 'border-cyan/30 bg-cyan-dim text-cyan'
                        : 'border-gold/30 bg-gold-dim text-gold'
                    }`}
                  >
                    <Layers className="h-5 w-5" aria-hidden />
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted transition hover:text-ink"
                  >
                    {project.urlLabel}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>

                <h3 className="mt-4 font-display text-xl text-ink sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.subtitle}</p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Architecture badges">
                  {project.architecture.slice(0, 3).map((badge) => (
                    <li
                      key={badge}
                      className="rounded-md border border-line bg-obsidian/50 px-2.5 py-1 text-[11px] text-ink/80"
                    >
                      {badge}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className={`rounded-full px-2.5 py-0.5 text-[11px] ${
                        project.accent === 'cyan'
                          ? 'bg-cyan-dim text-cyan-soft'
                          : 'bg-gold-dim text-gold-soft'
                      }`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink underline-offset-4 transition hover:underline"
                >
                  Open deep-dive
                </button>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
