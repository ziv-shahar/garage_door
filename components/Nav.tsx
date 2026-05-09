"use client";

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
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--paper)",
        borderBottom: "1.5px solid var(--ink)",
      }}
    >
      {/* Top utility strip */}
      <div
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          fontSize: 12,
          padding: "8px 0",
          overflow: "hidden",
        }}
      >
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

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" style={{ background: "none", border: "none", padding: 0 }}>
          <Logo />
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              style={{
                background: "transparent",
                border: "none",
                padding: "10px 18px",
                fontWeight: isActive(t.href) ? 700 : 500,
                fontSize: 14,
                letterSpacing: "0.04em",
                color: isActive(t.href) ? "var(--ink)" : "var(--ink-2)",
                position: "relative",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {t.label}
              {isActive(t.href) && (
                <div
                  style={{
                    position: "absolute",
                    left: 18,
                    right: 18,
                    bottom: 4,
                    height: 2,
                    background: "var(--amber)",
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              className="badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                background: "var(--paper-2)",
                border: "1px solid var(--line)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <span className="pulse" />
              On-call now
            </span>
          </div>
          <a href="tel:9195550143" className="btn btn-amber" style={{ padding: "12px 18px" }}>
            <IconPhone size={16} /> (919) 555·0143
          </a>
        </div>
      </div>
    </header>
  );
}
