import Link from "next/link";
import Image from "next/image";
import { IconArrow, IconPhone, IconShield, IconBolt, IconWrench } from "@/components/Icons";

const services = [
  {
    img: "/uploads/broken-spring.webp",
    title: "Broken Springs",
    blurb: "Torsion & extension spring replacement with a 12-year warranty.",
    tag: "01 / SPRINGS",
  },
  {
    img: "/uploads/off-track-door.webp",
    title: "Off-Track Doors",
    blurb: "Realignment and roller replacement to get you back on track.",
    tag: "02 / TRACKS",
  },
  {
    img: "/uploads/noisy-door.webp",
    title: "Noisy Operation",
    blurb: "Belt, chain, and gear servicing to silence rattles and grinds.",
    tag: "03 / OPENERS",
  },
  {
    img: "/uploads/rollers-and-cables.webp",
    title: "Cables & Rollers",
    blurb: "Frayed cable and worn roller replacement on every door style.",
    tag: "04 / HARDWARE",
  },
];

const testimonials = [
  {
    q: "Spring snapped on a Sunday morning. Marcus showed up in 70 minutes, had the part on the truck, was done by lunch. Charged exactly what he quoted on the phone.",
    a: "Diane K.",
    city: "Cary, NC",
    d: "Apr 2026",
  },
  {
    q: "These folks gave me a quote $400 less than the chain-store guys and finished in half the time. They explained what they were doing the whole way through.",
    a: "Reggie T.",
    city: "Durham, NC",
    d: "Mar 2026",
  },
  {
    q: "Replaced opener and rollers on two doors. Crew was clean, fast, and the noise difference is unreal. House feels twenty years newer.",
    a: "Priya M.",
    city: "Chapel Hill, NC",
    d: "Feb 2026",
  },
];

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section style={{ borderBottom: "1.5px solid var(--ink)", background: "var(--paper)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 32px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "end" }}>
            <div>
              <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                <span
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
                  ★ Google 4.9 · 612 reviews
                </span>
                <span
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
                  BBB A+ Rated
                </span>
              </div>
              <h1
                className="display"
                style={{ fontSize: "clamp(64px, 9vw, 132px)", fontWeight: 900, margin: "0 0 20px" }}
              >
                Doors that
                <br />
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{ position: "relative", zIndex: 1 }}>actually open.</span>
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 8,
                      height: 18,
                      background: "var(--amber)",
                      zIndex: 0,
                    }}
                  />
                </span>
              </h1>
              <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: 520, lineHeight: 1.55, margin: "0 0 28px" }}>
                Northgate is a family-run garage door shop serving the Triangle since 2009. Springs, openers, panels,
                and emergency calls — usually fixed in a single visit.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Book a service call <IconArrow />
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  Meet the crew
                </Link>
              </div>

              <div
                style={{
                  marginTop: 48,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 24,
                  paddingTop: 24,
                  borderTop: "1px solid var(--line)",
                }}
              >
                {[
                  ["16+", "Years in business"],
                  ["38k", "Doors serviced"],
                  ["90 min", "Avg. arrival window"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="display" style={{ fontSize: 42, fontWeight: 800 }}>
                      {n}
                    </div>
                    <div
                      className="mono"
                      style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.14em", marginTop: 4 }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ position: "relative", border: "1.5px solid var(--ink)" }}>
                <Image
                  src="/uploads/rollers-and-cables.webp"
                  alt="Technician inspecting garage door cable"
                  width={640}
                  height={520}
                  style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: -1,
                    top: -1,
                    background: "var(--ink)",
                    color: "var(--paper)",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span className="pulse" />
                  <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em" }}>
                    LIVE · 3 CREWS DISPATCHED
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: 16,
                    bottom: 16,
                    background: "var(--paper)",
                    border: "1.5px solid var(--ink)",
                    padding: "14px 18px",
                    maxWidth: 240,
                  }}
                >
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-3)" }}>
                    WHAT WE FOUND
                  </div>
                  <div style={{ fontWeight: 700, marginTop: 4, fontSize: 15 }}>
                    Worn nylon roller, frayed lift cable. Replaced in 42 min.
                  </div>
                </div>
              </div>
              <div
                className="mono"
                style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 10, letterSpacing: "0.10em" }}
              >
                FIG.01 — RALEIGH, NC · TUE 2:14 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ borderBottom: "1.5px solid var(--ink)", background: "var(--paper-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div
                className="mono"
                style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 10 }}
              >
                § 01 — SERVICES
              </div>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 800, margin: 0 }}>
                Four problems
                <br />
                we fix every day.
              </h2>
            </div>
            <p style={{ maxWidth: 380, color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              Diagnostic is always free. We&apos;ll show you the worn part, quote the job upfront, and only proceed
              once you say go.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "var(--ink)",
              border: "1.5px solid var(--ink)",
            }}
          >
            {services.map((s, i) => (
              <div key={i} style={{ background: "var(--paper)", display: "flex", flexDirection: "column" }}>
                <Image
                  src={s.img}
                  alt={s.title}
                  width={320}
                  height={220}
                  style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.20em", color: "var(--ink-3)" }}>
                    {s.tag}
                  </div>
                  <h3 className="display" style={{ fontSize: 30, fontWeight: 800, margin: "8px 0 10px" }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, margin: 0, flex: 1 }}>
                    {s.blurb}
                  </p>
                  <Link
                    href="/contact"
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      marginTop: 18,
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--ink)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                  >
                    Get a quote <IconArrow size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 64 }}>
            <div>
              <div
                className="mono"
                style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 10 }}
              >
                § 02 — HOW IT WORKS
              </div>
              <h2
                className="display"
                style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, margin: "0 0 18px" }}
              >
                From call to closed door, in a single visit.
              </h2>
              <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6 }}>
                Our trucks roll fully stocked — torsion springs, rollers, openers, panels — so most jobs are diagnosed
                and fixed in one trip.
              </p>
            </div>

            <div style={{ display: "grid", gap: 0 }}>
              {[
                [
                  "01",
                  "You call or book online",
                  "Tell us the symptom — slamming shut, won't close, loud bang. We dispatch the closest crew.",
                  "~5 min",
                ],
                [
                  "02",
                  "Free diagnostic on-site",
                  "Tech inspects all 19 wear points, photographs the issue, and prints an itemized quote.",
                  "20–30 min",
                ],
                [
                  "03",
                  "We fix it on the spot",
                  "Most repairs done in one visit. New parts, fresh lubricant, balance test, and you sign off.",
                  "45–90 min",
                ],
                [
                  "04",
                  "12-year warranty kicks in",
                  "Springs covered for 12 years, openers 5, labor 2. Save the receipt — we keep one too.",
                  "Lifetime",
                ],
              ].map(([n, t, body, dur]) => (
                <div
                  key={n}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr 200px 120px",
                    gap: 24,
                    padding: "28px 0",
                    borderTop: "1px solid var(--line)",
                    alignItems: "baseline",
                  }}
                >
                  <div className="display" style={{ fontSize: 36, fontWeight: 800, color: "var(--amber-deep)" }}>
                    {n}
                  </div>
                  <div className="display" style={{ fontSize: 24, fontWeight: 700 }}>
                    {t}
                  </div>
                  <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, margin: 0 }}>{body}</p>
                  <div
                    className="mono"
                    style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.14em", textAlign: "right" }}
                  >
                    {dur}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ borderBottom: "1.5px solid var(--ink)", background: "var(--ink)", color: "var(--paper)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <div
            className="mono"
            style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--paper-3)", marginBottom: 10 }}
          >
            § 03 — THE NORTHGATE PROMISE
          </div>
          <h2
            className="display"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 800, margin: "0 0 56px", maxWidth: 900 }}
          >
            Honest pricing. No upsells. Real warranties.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "var(--paper-3)",
            }}
          >
            {[
              {
                icon: <IconShield />,
                t: "Flat-rate quotes",
                d: "You see the price before we lift a wrench. No surprise charges, no \"while we're here\" upsells.",
              },
              {
                icon: <IconBolt />,
                t: "90-minute response",
                d: "Triangle-area emergency calls average a 90-minute door-to-door arrival. Often much less.",
              },
              {
                icon: <IconWrench />,
                t: "12-year springs",
                d: "Industry standard is 1–3 years. Ours are good for twelve. We use Lift-Master cycle-rated steel.",
              },
            ].map((x, i) => (
              <div key={i} style={{ background: "var(--ink)", padding: "40px 36px" }}>
                <div style={{ color: "var(--amber)", marginBottom: 20 }}>{x.icon}</div>
                <h3 className="display" style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px" }}>
                  {x.t}
                </h3>
                <p style={{ color: "var(--paper-3)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <div
            className="mono"
            style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 10 }}
          >
            § 04 — WHAT NEIGHBORS SAY
          </div>
          <h2
            className="display"
            style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, margin: "0 0 48px" }}
          >
            612 reviews. 4.9 average.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {testimonials.map((r, i) => (
              <div key={i} style={{ border: "1.5px solid var(--ink)", padding: "28px", background: "var(--paper)" }}>
                <div className="stars">★★★★★</div>
                <p style={{ fontSize: 17, lineHeight: 1.5, margin: "14px 0 22px", color: "var(--ink)" }}>
                  &ldquo;{r.q}&rdquo;
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    borderTop: "1px solid var(--line)",
                    paddingTop: 14,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{r.a}</div>
                    <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.10em" }}>
                      {r.city.toUpperCase()}
                    </div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>
                    {r.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section style={{ background: "var(--amber)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "72px 32px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 32,
            alignItems: "center",
          }}
        >
          <h2
            className="display"
            style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 900, margin: 0, lineHeight: 0.9 }}
          >
            Door stuck?
            <br />
            Call us right now.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
            <a href="tel:9195550143" className="btn btn-primary" style={{ fontSize: 16, padding: "20px 28px" }}>
              <IconPhone /> (919) 555·0143
            </a>
            <Link href="/contact" className="btn btn-ghost" style={{ borderColor: "var(--ink)" }}>
              Or schedule online <IconArrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
