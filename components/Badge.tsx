export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-paper-2 border border-line text-[11px] font-semibold tracking-[0.14em] uppercase"
      style={{ background: "var(--paper-2)", borderColor: "var(--line)" }}
    >
      {children}
    </span>
  );
}
