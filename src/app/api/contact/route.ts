import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { restaurant, name, phone, callbackTime } = body;

    // Validate required fields
    if (!restaurant || !phone) {
      return NextResponse.json(
        { error: "Restaurant und Telefonnummer sind erforderlich." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Lokanti Website <noreply@lokanti.com>",
      to: [process.env.CONTACT_EMAIL || "hello@lokanti.com"],
      subject: `Rückruf angefordert: ${restaurant}`,
      html: `
        <h2>Neuer Rückruf-Request</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
          <tr>
            <td style="padding:8px 16px 8px 0;font-weight:600;color:#6E7672;">Restaurant</td>
            <td style="padding:8px 0;">${restaurant}</td>
          </tr>
          <tr>
            <td style="padding:8px 16px 8px 0;font-weight:600;color:#6E7672;">Name</td>
            <td style="padding:8px 0;">${name || "–"}</td>
          </tr>
          <tr>
            <td style="padding:8px 16px 8px 0;font-weight:600;color:#6E7672;">Telefon</td>
            <td style="padding:8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding:8px 16px 8px 0;font-weight:600;color:#6E7672;">Rückruf-Zeit</td>
            <td style="padding:8px 0;">${callbackTime || "Keine Präferenz"}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Fehler beim Senden. Bitte versuchen Sie es später." },
      { status: 500 }
    );
  }
}
