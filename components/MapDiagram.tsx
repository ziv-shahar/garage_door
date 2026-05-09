"use client";

const cities = [
  { x: 32, y: 38, n: "Durham" },
  { x: 50, y: 30, n: "Wake Forest" },
  { x: 30, y: 52, n: "Chapel Hill" },
  { x: 56, y: 56, n: "Cary" },
  { x: 64, y: 50, n: "Raleigh", big: true },
  { x: 78, y: 64, n: "Knightdale" },
  { x: 50, y: 74, n: "Apex" },
  { x: 70, y: 80, n: "Garner" },
];

const trucks = [
  { x: 60, y: 48, label: "TRUCK 01 · ON CALL" },
  { x: 36, y: 46, label: "TRUCK 02 · EN ROUTE" },
  { x: 72, y: 70, label: "TRUCK 03 · DISPATCHED" },
];

export function MapDiagram() {
  return (
    <svg
      viewBox="0 0 100 60"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      {/* grid */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line
          key={"v" + i}
          x1={i * 5}
          y1={0}
          x2={i * 5}
          y2={60}
          stroke="oklch(0.85 0.012 75)"
          strokeWidth="0.08"
        />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={"h" + i}
          x1={0}
          y1={i * 5}
          x2={100}
          y2={i * 5}
          stroke="oklch(0.85 0.012 75)"
          strokeWidth="0.08"
        />
      ))}
      {/* coverage zone */}
      <path
        d="M14,20 Q40,8 76,18 Q92,30 86,46 Q70,58 44,54 Q18,52 10,38 Z"
        fill="oklch(0.93 0.05 75 / 0.5)"
        stroke="var(--amber-deep)"
        strokeWidth="0.2"
        strokeDasharray="0.6 0.6"
      />
      {/* roads */}
      <path d="M10,30 L90,32" stroke="var(--ink-3)" strokeWidth="0.25" strokeOpacity="0.4" />
      <path d="M50,5 L50,55" stroke="var(--ink-3)" strokeWidth="0.25" strokeOpacity="0.4" />
      <path d="M16,12 L86,52" stroke="var(--ink-3)" strokeWidth="0.18" strokeOpacity="0.3" />
      {/* cities */}
      {cities.map((c) => (
        <g key={c.n}>
          <circle cx={c.x} cy={(c.y / 100) * 60} r={c.big ? 1.0 : 0.6} fill="var(--ink)" />
          <text
            x={c.x + 1.4}
            y={(c.y / 100) * 60 + 0.6}
            fontSize={c.big ? 1.6 : 1.2}
            fontFamily="Manrope, sans-serif"
            fontWeight={c.big ? 700 : 500}
            fill="var(--ink)"
          >
            {c.n}
          </text>
        </g>
      ))}
      {/* trucks */}
      {trucks.map((t, i) => (
        <g key={i}>
          <circle
            cx={t.x}
            cy={(t.y / 100) * 60}
            r="1.4"
            fill="var(--amber)"
            stroke="var(--ink)"
            strokeWidth="0.2"
          />
          <circle cx={t.x} cy={(t.y / 100) * 60} r="2.6" fill="none" stroke="var(--amber)" strokeWidth="0.15" opacity="0.6">
            <animate attributeName="r" from="1.4" to="3.2" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <text
            x={t.x + 2}
            y={(t.y / 100) * 60 - 0.6}
            fontSize="1"
            fontFamily="JetBrains Mono, monospace"
            fill="var(--ink-3)"
            letterSpacing="0.05"
          >
            {t.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
