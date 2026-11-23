import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="section-wrap section-pad flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-ink">
            <span className="text-cyan">{siteConfig.shortName}</span>{' '}
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap gap-3" aria-label="Social profiles">
          {siteConfig.socials.map((s) => (
            <li key={s.id}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition hover:text-gold-soft"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.organization.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition hover:text-cyan-soft"
            >
              Royol Technology
            </a>
          </li>
        </ul>
      </div>
      <p className="section-wrap section-pad mt-6 text-center text-xs text-muted/80">
        Engineered with Next.js • Deployed on GitHub Pages
      </p>
    </footer>
  );
}
