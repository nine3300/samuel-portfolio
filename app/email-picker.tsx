"use client";

import { useEffect, useState } from "react";

type Target = { to: string; subject: string; mailto: string };

// Intercepts clicks on mailto: links and lets the visitor choose how to send the email.
export default function EmailPicker() {
  const [target, setTarget] = useState<Target | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="mailto:"]');
      if (!link || link.dataset.direct !== undefined) return;
      e.preventDefault();
      const mailto = link.getAttribute("href")!;
      const url = new URL(mailto);
      setCopied(false);
      setTarget({ to: decodeURIComponent(url.pathname), subject: url.searchParams.get("subject") ?? "", mailto });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTarget(null);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!target) return null;

  const to = encodeURIComponent(target.to);
  const su = encodeURIComponent(target.subject);
  const options = [
    { label: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}` },
    { label: "Outlook.com", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}` },
    { label: "Yahoo Mail", href: `https://compose.mail.yahoo.com/?to=${to}&subject=${su}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(target.to);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-space-950/70 backdrop-blur-sm px-6"
      onClick={() => setTarget(null)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-picker-title"
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-space-900/95 border border-white/15 shadow-2xl shadow-cyan-500/10 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-1">
          <h2 id="email-picker-title" className="font-display font-bold text-lg text-white">
            Send an email
          </h2>
          <button
            aria-label="Close"
            className="text-slate-300 hover:text-cyan-300 transition-colors"
            onClick={() => setTarget(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
        </div>
        <p className="font-mono text-xs text-cyan-300 mb-5 break-all">{target.to}</p>

        <div className="space-y-2.5">
          {options.map((o) => (
            <a
              key={o.label}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setTarget(null)}
              className="interactive-chip flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/15 hover:border-cyan-400 hover:bg-cyan-500/10 font-display font-semibold text-sm text-white"
            >
              <span>{o.label}</span>
              <span className="text-xs text-cyan-400">↗</span>
            </a>
          ))}
          <a
            href={target.mailto}
            data-direct
            onClick={() => setTarget(null)}
            className="interactive-chip flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/15 hover:border-cyan-400 hover:bg-cyan-500/10 font-display font-semibold text-sm text-white"
          >
            <span>Default email app</span>
            <span className="text-xs text-cyan-400">→</span>
          </a>
          <button
            onClick={copy}
            className="interactive-chip w-full flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/15 hover:border-cyan-400 hover:bg-cyan-500/10 font-display font-semibold text-sm text-white"
          >
            <span>{copied ? "Copied!" : "Copy email address"}</span>
            <span className="text-xs text-cyan-400">{copied ? "✓" : "⧉"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
