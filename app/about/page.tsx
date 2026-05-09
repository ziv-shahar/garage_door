import Link from "next/link";
import Image from "next/image";
import { IconArrow, IconPhone } from "@/components/Icons";

function PhotoTile({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "var(--paper-3)" }}>
      <Image
        src={src}
        alt={alt}
        width={320}
        height={280}
        style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
      />
      <div
        className="mono"
        style={{
          position: "absolute",
          left: 12,
          bottom: 12,
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "4px 8px",
          fontSize: 10,
          letterSpacing: "0.16em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* HEADER */}
      <section style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 56px" }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 14 }}>
            ABOUT — EST. 2009
          </div>
          <h1
            className="display"
            style={{
              fontSize: "clamp(60px, 9vw, 144px)",
              fontWeight: 900,
              margin: "0 0 20px",
              lineHeight: 0.9,
              maxWidth: 1100,
            }}
          >
            Started in a
            <br />
            two-bay garage
            <br />
            on Glenwood Ave.
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, marginTop: 32 }}>
            <p style={{ fontSize: 20, lineHeight: 1.5, color: "var(--ink-2)", margin: 0 }}>
              We&apos;re a second-generation family shop. No call centers, no franchise fees, no commissioned
              salespeople — just six technicians who answer their own phones.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignSelf: "end" }}>
              {[
                ["2009", "Founded by Marcus Reyes Sr."],
                ["6", "Full-time technicians"],
                ["38k+", "Service calls completed"],
              ].map(([n, l]) => (
                <div key={l} style={{ borderTop: "1.5px solid var(--ink)", paddingTop: 14 }}>
                  <div className="display" style={{ fontSize: 48, fontWeight: 800 }}>
                    {n}
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.14em", marginTop: 4 }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 0 }}>
          <PhotoTile src="/uploads/rollers-and-cables.webp" alt="Cable inspection" label="01 / RALEIGH" />
          <PhotoTile src="/uploads/noisy-door.webp" alt="Belt drive" label="02 / CARY" />
          <PhotoTile src="/uploads/broken-spring.webp" alt="Torsion spring" label="03 / DURHAM" />
          <PhotoTile src="/uploads/off-track-door.webp" alt="Off-track door panel" label="04 / APEX" />
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 10 }}>
                § 01 — STORY
              </div>
              <h2 className="display" style={{ fontSize: 48, fontWeight: 800, margin: 0 }}>
                One truck, one promise.
              </h2>
            </div>
            <div style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-2)" }}>
              <p style={{ marginTop: 0 }}>
                Marcus Reyes Sr. spent fourteen years as a foreman at a national garage door chain before quitting in
                2009. He was tired of being told to upsell openers to widows and tack on &ldquo;diagnostic fees&rdquo;
                for jobs the technician could see from the curb.
              </p>
              <p>
                He bought a used Ford F-250, a torsion spring set, and started taking calls from his kitchen table.
                Sixteen years later we run four trucks out of a small shop off Hillsborough Street, but the rule
                hasn&apos;t changed:
              </p>
              <p
                style={{
                  fontFamily: "var(--font-big-shoulders), 'Big Shoulders', sans-serif",
                  fontSize: 36,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  margin: "28px 0 0",
                  paddingLeft: 24,
                  borderLeft: "3px solid var(--amber)",
                  color: "var(--ink)",
                  textTransform: "uppercase",
                }}
              >
                &ldquo;Quote it before you crack the toolbox. If you can&apos;t fix it honest, don&apos;t fix it.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ borderBottom: "1.5px solid var(--ink)", background: "var(--paper-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 10 }}>
            § 02 — HOW WE WORK
          </div>
          <h2
            className="display"
            style={{ fontSize: "clamp(36px, 4vw, 64px)", fontWeight: 800, margin: "0 0 48px", maxWidth: 900 }}
          >
            Four rules every Northgate truck runs by.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {[
              [
                "No commissioned techs",
                "Our crew is salaried. They have zero financial reason to recommend a part you don't need.",
              ],
              [
                "Quote before tools",
                "Every job gets a printed itemized quote before any part comes off the truck. You sign or you don't.",
              ],
              [
                "Stock the truck heavy",
                "We carry every common spring, roller, cable, and opener on board. ~94% of jobs finish in one visit.",
              ],
              [
                "Show, don't tell",
                "Tech photographs the worn part, walks you through it on a tablet. You decide if it's worth replacing.",
              ],
            ].map(([t, d], i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1.5px solid var(--ink)",
                  padding: 32,
                  display: "flex",
                  gap: 20,
                }}
              >
                <div
                  className="display"
                  style={{ fontSize: 48, fontWeight: 800, color: "var(--amber-deep)", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="display" style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>
                    {t}
                  </h3>
                  <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, margin: 0 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREW */}
      <section style={{ borderBottom: "1.5px solid var(--ink)" }}>
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
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 10 }}>
                § 03 — THE CREW
              </div>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, margin: 0 }}>
                Six people. Six trucks.
              </h2>
            </div>
            <p style={{ maxWidth: 380, color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              When you call, you&apos;ll talk to one of these six. They answer their own phones because they fix their
              own jobs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { n: "Marcus Reyes Jr.", r: "Owner · Lead Tech", y: "14 yrs", c: "Took over from his dad in 2021. IDA-certified.", i: "MR" },
              { n: "Tasha Boone", r: "Operations · Dispatch", y: "8 yrs", c: "The voice on the phone. Knows every truck's inventory by heart.", i: "TB" },
              { n: "Devon Park", r: "Senior Technician", y: "11 yrs", c: "Specializes in commercial rolling steel and high-cycle springs.", i: "DP" },
              { n: "Aaron Mehta", r: "Technician", y: "5 yrs", c: "Opener wizard. Can program any remote made after 1998.", i: "AM" },
              { n: "Lupe Calderón", r: "Technician", y: "3 yrs", c: "Came from residential framing. Strongest panel install on the team.", i: "LC" },
              { n: "Kris Nyland", r: "Apprentice", y: "1 yr", c: "Final-year apprentice. Always rides with a senior tech.", i: "KN" },
            ].map((p, i) => (
              <div key={i} style={{ background: "var(--paper)", border: "1.5px solid var(--ink)" }}>
                <div
                  className="stripe-bg"
                  style={{
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1.5px solid var(--ink)",
                    position: "relative",
                  }}
                >
                  <div className="display" style={{ fontSize: 96, fontWeight: 900, color: "var(--ink)" }}>
                    {p.i}
                  </div>
                  <div
                    className="mono"
                    style={{
                      position: "absolute",
                      left: 12,
                      top: 12,
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      color: "var(--ink-3)",
                    }}
                  >
                    PORTRAIT · {String(i + 1).padStart(2, "0")}/06
                  </div>
                </div>
                <div style={{ padding: "22px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <h3 className="display" style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
                      {p.n}
                    </h3>
                    <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>
                      {p.y}
                    </div>
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 11, color: "var(--amber-deep)", letterSpacing: "0.14em", marginTop: 4 }}
                  >
                    {p.r.toUpperCase()}
                  </div>
                  <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55, margin: "12px 0 0" }}>{p.c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ borderBottom: "1.5px solid var(--ink)", background: "var(--ink)", color: "var(--paper)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--paper-3)", marginBottom: 10 }}>
            § 04 — MILESTONES
          </div>
          <h2
            className="display"
            style={{ fontSize: "clamp(36px, 4vw, 64px)", fontWeight: 800, margin: "0 0 48px" }}
          >
            Sixteen years, four trucks, no franchises.
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, background: "var(--paper-3)" }}
          >
            {[
              ["2009", "One truck, one phone, one technician."],
              ["2014", "Hired Devon. Bought truck #2."],
              ["2018", "Moved into the Hillsborough St. shop."],
              ["2021", "Marcus Jr. takes the keys."],
              ["2025", "38,000th service call completed."],
            ].map(([y, t]) => (
              <div key={y} style={{ background: "var(--ink)", padding: "32px 24px" }}>
                <div className="display" style={{ fontSize: 36, fontWeight: 800, color: "var(--amber)" }}>
                  {y}
                </div>
                <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.5, color: "var(--paper-3)" }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px", textAlign: "center" }}>
          <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 800, margin: "0 0 28px" }}>
            Ready to put us
            <br />
            to work?
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Schedule a service call <IconArrow />
            </Link>
            <a href="tel:9195550143" className="btn btn-amber">
              <IconPhone size={16} /> (919) 555·0143
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
