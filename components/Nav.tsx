"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { IconPhone } from "./Icons";

const marqueeItems = [
  "● 24/7 EMERGENCY SERVICE",
  "● SAME-DAY APPOINTMENTS",
  "● LICENSED & INSURED · NC #4471-G",
  "● 12-YEAR WARRANTY ON SPRINGS",
  "● SERVING THE TRIANGLE SINCE 2009",
  "● FREE ESTIMATES",
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const tabs = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50" style={{ background: "var(--paper)", borderBottom: "1.5px solid var(--ink)" }}>
      {/* Marquee strip */}
      <div style={{ background: "var(--ink)", color: "var(--paper)", fontSize: 12, padding: "8px 0", overflow: "hidden" }}>
        <div className="marquee-track mono" style={{ letterSpacing: "0.14em" }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} style={{ display: "flex", gap: 48, paddingRight: 48 }}>
              {marqueeItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-[1280px] mx-auto px-4 py-3 md:px-8 md:py-[18px] flex items-center justify-between gap-4">
        <Link href="/" style={{ background: "none", border: "none", padding: 0 }}>
          <Logo />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="relative no-underline"
              style={{
                display: "inline-block",
                padding: "10px 18px",
                fontWeight: isActive(t.href) ? 700 : 500,
                fontSize: 14,
                letterSpacing: "0.04em",
                color: isActive(t.href) ? "var(--ink)" : "var(--ink-2)",
              }}
            >
              {t.label}
              {isActive(t.href) && (
                <div style={{ position: "absolute", left: 18, right: 18, bottom: 4, height: 2, background: "var(--amber)" }} />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3.5">
          <span
            className="inline-flex items-center gap-2"
            style={{ padding: "6px 12px", background: "var(--paper-2)", border: "1px solid var(--line)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}
          >
            <span className="pulse" />
            On-call now
          </span>
          <a href="tel:9195550143" className="btn btn-amber" style={{ padding: "12px 18px" }}>
            <IconPhone size={16} /> (919) 555·0143
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", flexShrink: 0 }}
        >
          <span
            className="ham-line"
            style={{ transform: menuOpen ? "rotate(45deg) translate(3.5px, 3.5px)" : "none" }}
          />
          <span className="ham-line" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span
            className="ham-line"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden" style={{ borderTop: "1.5px solid var(--ink)", background: "var(--paper)" }}>
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="block px-6 py-4 no-underline text-base"
              style={{
                borderBottom: "1px solid var(--line)",
                fontWeight: isActive(t.href) ? 700 : 500,
                color: "var(--ink)",
                background: isActive(t.href) ? "var(--amber-soft)" : "transparent",
              }}
            >
              {t.label}
            </Link>
          ))}
          <div className="p-4" style={{ borderTop: "1px solid var(--line)" }}>
            <a
              href="tel:9195550143"
              className="btn btn-amber"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <IconPhone size={16} /> (919) 555·0143
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
