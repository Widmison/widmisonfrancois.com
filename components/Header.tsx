'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open
          ? 'border-b border-line/80 bg-obsidian/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="section-wrap section-pad flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="font-display text-xl tracking-tight text-cyan transition group-hover:text-cyan-soft">
            {siteConfig.shortName}
          </span>
          <span className="hidden font-sans text-sm font-medium text-ink sm:inline">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-glass hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <span className="inline-flex max-w-[16rem] items-center gap-2 rounded-full border border-cyan/30 bg-cyan-dim px-3 py-1.5 text-[11px] leading-snug text-cyan-soft">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse-soft rounded-full bg-cyan" />
            {siteConfig.availability}
          </span>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-obsidian/95 backdrop-blur-xl lg:hidden"
        >
          <nav className="section-wrap section-pad flex flex-col gap-1 py-4" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base text-ink hover:bg-glass"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <p className="mt-3 rounded-xl border border-cyan/30 bg-cyan-dim px-3 py-3 text-xs text-cyan-soft">
              {siteConfig.availability}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
