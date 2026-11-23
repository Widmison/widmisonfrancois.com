'use client';

import { FormEvent, useState } from 'react';
import { Check, ClipboardCopy, Mail, Send } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { Reveal } from '@/components/Reveal';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export function ContactSection() {
  const [status, setStatus] = useState<FormState>('idle');
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2800);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      showToast('Email copied to clipboard');
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast('Could not copy — use mailto instead');
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const projectType = String(data.get('projectType') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      showToast('Please fill in name, email, and message');
      return;
    }

    setStatus('sending');

    const endpoint = siteConfig.formspreeEndpoint || siteConfig.web3formsAccessKey;

    if (siteConfig.formspreeEndpoint) {
      try {
        const res = await fetch(siteConfig.formspreeEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        if (!res.ok) throw new Error('Formspree error');
        setStatus('sent');
        form.reset();
        showToast('Inquiry sent — talk soon');
        return;
      } catch {
        setStatus('error');
      }
    } else if (siteConfig.web3formsAccessKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: siteConfig.web3formsAccessKey,
            name,
            email,
            projectType,
            message,
            subject: `Portfolio inquiry from ${name}`,
          }),
        });
        if (!res.ok) throw new Error('Web3Forms error');
        setStatus('sent');
        form.reset();
        showToast('Inquiry sent — talk soon');
        return;
      } catch {
        setStatus('error');
      }
    }

    // GitHub Pages–safe fallback: mailto with prefilled body
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType || 'n/a'}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
    showToast(
      endpoint
        ? 'Opened mail client as fallback'
        : 'Opened mail client — add Formspree/Web3Forms key to enable AJAX submit',
    );
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 py-20 sm:py-24"
    >
      <div className="section-wrap section-pad">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow text-gold">Contact</p>
            <h2
              id="contact-heading"
              className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl"
            >
              Let&apos;s build the platform—and engineer the attention.
            </h2>
            <p className="mt-3 text-muted">
              Web engineering, AI growth systems, or brand partnerships.
              Reach Widmison Francois directly.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-panel flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-ink transition hover:border-cyan/40"
              >
                <Mail className="h-4 w-4 text-cyan" aria-hidden />
                {siteConfig.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="glass-panel flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-ink transition hover:border-gold/40"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-gold" aria-hidden />
                ) : (
                  <ClipboardCopy className="h-4 w-4 text-gold" aria-hidden />
                )}
                {copied ? 'Copied' : 'Copy email to clipboard'}
              </button>
              <p className="text-xs text-muted">{siteConfig.location}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass-panel rounded-2xl p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-muted">Name</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-line bg-obsidian/70 px-3 py-2.5 text-ink outline-none ring-cyan/40 placeholder:text-muted/60 focus:ring-2"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-muted">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-line bg-obsidian/70 px-3 py-2.5 text-ink outline-none ring-cyan/40 placeholder:text-muted/60 focus:ring-2"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm">
                <span className="text-muted">Project type</span>
                <select
                  name="projectType"
                  className="mt-1.5 w-full rounded-xl border border-line bg-obsidian/70 px-3 py-2.5 text-ink outline-none ring-cyan/40 focus:ring-2"
                  defaultValue="Web Engineering"
                >
                  <option>Web Engineering</option>
                  <option>AI Growth Systems</option>
                  <option>Brand Partnership</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="mt-4 block text-sm">
                <span className="text-muted">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full resize-y rounded-xl border border-line bg-obsidian/70 px-3 py-2.5 text-ink outline-none ring-cyan/40 placeholder:text-muted/60 focus:ring-2"
                  placeholder="Tell me about the platform, audience, or partnership..."
                />
              </label>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-obsidian transition hover:bg-cyan-soft disabled:opacity-60 sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden />
                {status === 'sending' ? 'Sending…' : 'Send inquiry'}
              </button>

              {status === 'sent' && (
                <p className="mt-3 text-sm text-gold-soft" role="status">
                  Thanks—looking forward to connecting.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-sm text-red-300" role="alert">
                  Something went wrong. Try mailto or copy the email above.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      {toast && (
        <div
          className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-line bg-glass px-4 py-2 text-sm text-ink shadow-glow"
          role="status"
        >
          {toast}
        </div>
      )}
    </section>
  );
}
