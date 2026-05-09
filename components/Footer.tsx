import Link from "next/link";
import { Logo } from "./Logo";
import { IconPhone } from "./Icons";

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href?: string }[];
}) {
  return (
    <div>
      <div
        className="mono"
        style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--amber)", marginBottom: 14 }}
      >
        {title.toUpperCase()}
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((x, i) => (
          <li key={i}>
            {x.href ? (
              <Link
                href={x.href}
                style={{ color: "var(--paper)", fontSize: 14, textDecoration: "none" }}
              >
                {x.label}
              </Link>
            ) : (
              <span style={{ color: "var(--paper)", fontSize: 14 }}>{x.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", borderTop: "1.5px solid var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
          <div>
            <Logo light />
            <p style={{ marginTop: 18, color: "var(--paper-3)", maxWidth: 340, fontSize: 14, lineHeight: 1.6 }}>
              Family-run garage door repair and installation, serving the Triangle area of North Carolina since 2009.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <a href="tel:9195550143" className="btn btn-amber">
                <IconPhone size={16} /> (919) 555·0143
              </a>
            </div>
          </div>

          <FooterCol
            title="Pages"
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ]}
          />

          <FooterCol
            title="Services"
            items={[
              { label: "Spring repair" },
              { label: "Off-track doors" },
              { label: "Opener service" },
              { label: "Cables & rollers" },
              { label: "Panel replacement" },
              { label: "New installs" },
            ]}
          />

          <FooterCol
            title="Service Area"
            items={[
              { label: "Raleigh" },
              { label: "Cary" },
              { label: "Durham" },
              { label: "Chapel Hill" },
              { label: "Apex" },
              { label: "Wake Forest" },
            ]}
          />
        </div>

        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: "1px solid oklch(0.32 0.012 250)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div className="mono" style={{ fontSize: 11, color: "var(--paper-3)", letterSpacing: "0.14em" }}>
            © 2009 — 2026 NORTHGATE GARAGE DOOR CO., LLC · NC #4471-G
          </div>
          <div className="mono" style={{ fontSize: 11, color: "var(--paper-3)", letterSpacing: "0.14em" }}>
            DISPATCH@NORTHGATE.SHOP
          </div>
        </div>
      </div>
    </footer>
  );
}
