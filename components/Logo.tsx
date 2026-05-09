export function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "var(--paper)" : "var(--ink)";
  return (
    <div className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" stroke={color} strokeWidth="2.5" />
        <rect x="8" y="9" width="24" height="4" fill={color} />
        <rect x="8" y="16" width="24" height="4" fill={color} />
        <rect x="8" y="23" width="24" height="4" fill={color} opacity="0.6" />
        <rect x="8" y="30" width="24" height="2" fill="var(--amber)" />
      </svg>
      <div style={{ lineHeight: 1 }}>
        <div className="display font-black text-lg" style={{ color }}>
          NORTHGATE
        </div>
        <div
          className="mono text-[9px] tracking-[0.18em] mt-0.5"
          style={{ color: light ? "var(--paper-3)" : "var(--ink-3)" }}
        >
          GARAGE DOOR CO. · EST 2009
        </div>
      </div>
    </div>
  );
}
