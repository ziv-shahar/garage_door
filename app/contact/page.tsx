"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapDiagram } from "@/components/MapDiagram";
import { IconArrow, IconPhone, IconClock, IconPin, IconMail, IconCheck } from "@/components/Icons";

const schema = z.object({
  name:    z.string().min(1, "Required"),
  phone:   z.string().regex(/^[\d\s\-()+]{10,}/, "Need a valid phone number"),
  email:   z.string().email("Looks invalid").optional().or(z.literal("")),
  service: z.string().min(1, "Pick one"),
  address: z.string().min(1, "We need to know where to drive"),
  urgency: z.enum(["emergency", "standard", "planned"]),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface ConfirmationData {
  bookingId: string;
  name: string;
  phone: string;
  service: string;
  address: string;
  urgency: string;
}

function InfoBlock({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--paper)", border: "1.5px solid var(--ink)", padding: "24px 26px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <span style={{ color: "var(--ink)" }}>{icon}</span>
        <h3 className="display" style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: "1px solid var(--line)", fontSize: 14 }}>
      <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.10em", alignSelf: "center" }}>{k.toUpperCase()}</span>
      <span style={{ fontWeight: 600 }}>{v}</span>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className={error ? "field-error" : ""} style={{ display: "block" }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--ink-3)", marginBottom: 8, display: "flex", justifyContent: "space-between" }}>
        <span>{label.toUpperCase()}</span>
        {error && <span style={{ color: "var(--red)", textTransform: "none", letterSpacing: "normal" }}>{error}</span>}
      </div>
      {children}
    </label>
  );
}

export default function ContactPage() {
  const [isLoading,  setIsLoading]  = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationData | null>(null);
  const [submitError,  setSubmitError]  = useState("");
  const [urgency, setUrgency] = useState<"emergency" | "standard" | "planned">("standard");

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { urgency: "standard" },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setSubmitError("");
    try {
      const res  = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setConfirmation({ bookingId: json.bookingId, name: data.name, phone: data.phone, service: data.service, address: data.address, urgency: data.urgency });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please call us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  if (confirmation) {
    return (
      <div className="page-enter min-h-[70vh] flex items-center justify-center px-4 py-20 md:px-8">
        <div style={{ maxWidth: 600, textAlign: "center", width: "100%" }}>
          <div style={{ width: 72, height: 72, margin: "0 auto 24px", border: "2px solid var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--amber)" }}>
            <IconCheck size={36} />
          </div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 14 }}>
            BOOKING #{confirmation.bookingId}
          </div>
          <h1 className="display" style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 0.95 }}>
            Got it, {confirmation.name.split(" ")[0]}.<br />Tasha will call you back<br />in under 10 minutes.
          </h1>
          <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.55, marginBottom: 32 }}>
            We&apos;ll confirm the appointment, give you an arrival window, and tell you which technician is rolling out.
          </p>
          <div style={{ border: "1.5px solid var(--ink)", padding: "24px 28px", textAlign: "left", display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px 24px", background: "var(--paper-2)" }}>
            {[["NAME", confirmation.name], ["PHONE", confirmation.phone], ["SERVICE", confirmation.service], ["ADDRESS", confirmation.address], ["URGENCY", confirmation.urgency]].map(([k, v]) => (
              <>
                <div key={k} className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.14em" }}>{k}</div>
                <div key={v} style={{ fontWeight: 600, textTransform: k === "URGENCY" ? "capitalize" : "none" }}>{v}</div>
              </>
            ))}
          </div>
          <button className="btn btn-ghost" style={{ marginTop: 28 }} onClick={() => { setConfirmation(null); reset(); setUrgency("standard"); }}>
            Submit another <IconArrow />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter">
      {/* HEADER */}
      <section style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <div className="max-w-[1280px] mx-auto px-4 pt-10 pb-8 md:px-8 md:pt-[72px]">
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 14 }}>
            CONTACT — WE PICK UP IN UNDER 30 SECONDS
          </div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 9vw, 144px)", fontWeight: 900, margin: "0 0 20px", lineHeight: 0.9 }}>
            Tell us what&apos;s<br />wrong with the door.
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: 600, lineHeight: 1.5, margin: 0 }}>
            Fill the form below or call. Either gets you on the schedule today — same hour for emergencies.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <div className="max-w-[1280px] mx-auto px-4 py-10 md:px-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10" style={{ background: "var(--paper)", border: "1.5px solid var(--ink)" }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 8 }}>§ BOOKING FORM</div>
              <h2 className="display" style={{ fontSize: 34, fontWeight: 800, margin: "0 0 28px" }}>Schedule a service call</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[18px]">
                <Field label="Your name" error={errors.name?.message}>
                  <input {...register("name")} placeholder="Jane Doe" />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input {...register("phone")} placeholder="(919) 555 0143" inputMode="tel" />
                </Field>
              </div>

              <div className="mt-4 md:mt-[18px]">
                <Field label="Email (optional, for confirmation)" error={errors.email?.message}>
                  <input {...register("email")} placeholder="jane@email.com" type="email" />
                </Field>
              </div>

              <div className="mt-4 md:mt-[18px]">
                <Field label="Service address" error={errors.address?.message}>
                  <input {...register("address")} placeholder="221 Glenwood Ave, Raleigh, NC" />
                </Field>
              </div>

              <div className="mt-4 md:mt-[18px]">
                <Field label="What's the issue?" error={errors.service?.message}>
                  <select {...register("service")}>
                    <option value="">— select one —</option>
                    <option>Broken spring</option>
                    <option>Door off track</option>
                    <option>Noisy operation</option>
                    <option>Cables / rollers</option>
                    <option>Opener won&apos;t work</option>
                    <option>Panel damage</option>
                    <option>New door install</option>
                    <option>Annual maintenance tune-up</option>
                    <option>Other / not sure</option>
                  </select>
                </Field>
              </div>

              <div className="mt-6">
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--ink-3)", marginBottom: 10 }}>HOW URGENT?</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1.5px solid var(--ink)" }}>
                  {[
                    { v: "emergency" as const, t: "Emergency",       sub: "Door open, can't close"   },
                    { v: "standard"  as const, t: "Today / Tomorrow", sub: "Working but unreliable"   },
                    { v: "planned"   as const, t: "This week",        sub: "Tune-up or quote"         },
                  ].map((o) => (
                    <button type="button" key={o.v}
                      onClick={() => { setUrgency(o.v); setValue("urgency", o.v); }}
                      style={{ padding: "12px 10px", textAlign: "left", background: urgency === o.v ? "var(--ink)" : "var(--paper)", color: urgency === o.v ? "var(--paper)" : "var(--ink)", border: "none", borderRight: "1.5px solid var(--ink)", cursor: "pointer" }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{o.t}</div>
                      <div style={{ fontSize: 11, marginTop: 3, opacity: 0.8 }}>{o.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 md:mt-[18px]">
                <Field label="Anything else? (optional)" error={errors.message?.message}>
                  <textarea {...register("message")} rows={4} placeholder="Brand of opener, age of door, weird noises, what you've already tried…" />
                </Field>
              </div>

              {submitError && (
                <div style={{ marginTop: 16, padding: "12px 16px", background: "oklch(0.98 0.025 25)", border: "1.5px solid var(--red)", color: "var(--red)", fontSize: 14 }}>
                  {submitError}
                </div>
              )}

              <div className="flex gap-3 mt-6 items-center flex-wrap">
                <button type="submit" className="btn btn-amber" style={{ padding: "16px 24px" }} disabled={isLoading}>
                  {isLoading ? "Sending…" : "Send to dispatch"} <IconArrow />
                </button>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.10em" }}>
                  · WE&apos;LL CALL BACK IN &lt; 10 MIN
                </div>
              </div>
            </form>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "28px" }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--amber)", marginBottom: 6 }}>EMERGENCY LINE</div>
                <a href="tel:9195550143" className="display no-underline block" style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, color: "var(--paper)", lineHeight: 1 }}>
                  (919) 555·0143
                </a>
                <div style={{ marginTop: 14, fontSize: 13, color: "var(--paper-3)" }}>Live human, 24/7. We won&apos;t put you on hold.</div>
              </div>

              <InfoBlock icon={<IconClock />} title="Hours">
                <Row k="Mon — Fri" v="7:00 AM – 7:00 PM" />
                <Row k="Saturday"  v="8:00 AM – 5:00 PM" />
                <Row k="Sunday"    v="Emergency only"     />
                <Row k="Holidays"  v="Emergency only"     />
              </InfoBlock>

              <InfoBlock icon={<IconPin />} title="Service area">
                <p style={{ margin: 0, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>
                  Raleigh · Cary · Durham · Chapel Hill · Apex · Morrisville · Wake Forest · Garner · Holly Springs · Knightdale
                </p>
                <div className="mono" style={{ marginTop: 12, fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.10em" }}>
                  OUTSIDE THE TRIANGLE? CALL — WE TRAVEL FOR LARGER JOBS.
                </div>
              </InfoBlock>

              <InfoBlock icon={<IconMail />} title="Other ways to reach us">
                <Row k="Email"   v="dispatch@northgate.shop"          />
                <Row k="Address" v="2417 Hillsborough St, Raleigh NC" />
                <Row k="License" v="NC #4471-G · NC #4471-G-RES"      />
              </InfoBlock>
            </aside>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section>
        <div className="max-w-[1280px] mx-auto px-4 py-12 md:px-8 md:py-14 lg:pb-20">
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "var(--ink-3)", marginBottom: 10 }}>§ COVERAGE</div>
          <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 800, margin: "0 0 28px" }}>
            Where the trucks are right now.
          </h2>
          <div className="relative border overflow-hidden h-[260px] sm:h-[340px] md:h-[420px]" style={{ borderColor: "var(--ink)", background: "var(--paper-2)" }}>
            <MapDiagram />
          </div>
        </div>
      </section>
    </div>
  );
}
