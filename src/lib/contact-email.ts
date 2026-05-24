const CONTACT_TO = "hogedegbe@gmail.com";

export function getContactRecipient() {
  return process.env.CONTACT_TO_EMAIL ?? CONTACT_TO;
}

export function getResendFromAddress() {
  return (
    process.env.RESEND_FROM_EMAIL ??
    "Red Cell Systems <onboarding@resend.dev>"
  );
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  message: string;
}

export function parseContactPayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const firstName = String(data.firstName ?? "").trim();
  const lastName = String(data.lastName ?? "").trim();
  const email = String(data.email ?? "").trim();
  const organization = String(data.organization ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!firstName || !lastName || !email || !organization || !message) {
    return null;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return null;
  }

  if (
    firstName.length > 100 ||
    lastName.length > 100 ||
    email.length > 254 ||
    organization.length > 200 ||
    message.length > 5000
  ) {
    return null;
  }

  return { firstName, lastName, email, organization, message };
}

export function buildContactEmail(payload: ContactPayload) {
  const { firstName, lastName, email, organization, message } = payload;
  const fullName = `${firstName} ${lastName}`;

  const text = [
    `New contact form submission from ${fullName}`,
    "",
    `Email: ${email}`,
    `Organization: ${organization}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `.trim();

  return {
    subject: `Red Cell Systems contact — ${fullName} (${organization})`,
    text,
    html,
    replyTo: email,
  };
}
