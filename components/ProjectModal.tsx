'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import type { Project } from '@/lib/site-config';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
            aria-label="Close case study"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="glass-panel relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <p
              className={`font-mono text-xs uppercase tracking-[0.2em] ${
                project.accent === 'cyan' ? 'text-cyan' : 'text-gold'
              }`}
            >
              Case Study
            </p>
            <h3
              id="project-modal-title"
              className="mt-2 pr-10 font-display text-2xl text-ink sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted sm:text-base">{project.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/85">{project.summary}</p>

            <div className="mt-6">
              <p className="eyebrow">Architecture</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-obsidian/60 px-3 py-1 text-xs text-ink/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="eyebrow">Key Features</p>
              <ul className="mt-3 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-sm text-ink/85"
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        project.accent === 'cyan' ? 'bg-cyan' : 'bg-gold'
                      }`}
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                project.accent === 'cyan'
                  ? 'bg-cyan text-obsidian hover:bg-cyan-soft'
                  : 'bg-gold text-obsidian hover:bg-gold-soft'
              }`}
            >
              Visit {project.urlLabel}
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
