import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  buildContactEmail,
  getContactRecipient,
  getResendFromAddress,
  parseContactPayload,
} from "@/lib/contact-email";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parseContactPayload(body);
  if (!payload) {
    return NextResponse.json(
      { error: "Please fill in all fields with valid information." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const email = buildContactEmail(payload);

  const { error } = await resend.emails.send({
    from: getResendFromAddress(),
    to: getContactRecipient(),
    replyTo: email.replyTo,
    subject: email.subject,
    text: email.text,
    html: email.html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
