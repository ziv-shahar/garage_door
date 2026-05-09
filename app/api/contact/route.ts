import { Resend } from "resend";

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.phone || !body.service || !body.address) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email");
    return Response.json({
      success: true,
      bookingId: `NG-${Math.floor(Math.random() * 900000 + 100000)}`,
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Northgate Booking <onboarding@resend.dev>",
      to: ["zivshaharr@gmail.com"],
      subject: `New Service Request — ${body.service} (${body.urgency})`,
      html: `
        <h2>New Booking — Northgate Garage Door Co.</h2>
        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${body.name}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${body.phone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${body.email || "—"}</td></tr>
          <tr><td><strong>Service</strong></td><td>${body.service}</td></tr>
          <tr><td><strong>Address</strong></td><td>${body.address}</td></tr>
          <tr><td><strong>Urgency</strong></td><td>${body.urgency}</td></tr>
          <tr><td><strong>Notes</strong></td><td>${body.message || "—"}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }

  return Response.json({
    success: true,
    bookingId: `NG-${Math.floor(Math.random() * 900000 + 100000)}`,
  });
}
