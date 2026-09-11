import { NextResponse } from "next/server";

type LeadBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  address?: unknown;
  property?: unknown;
  roof?: unknown;
  need?: unknown;
  membership?: unknown;
  message?: unknown;
  source?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = asTrimmedString(body.name);
  const phone = asTrimmedString(body.phone);
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "name_and_phone_required" }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    email: asTrimmedString(body.email) || undefined,
    address: asTrimmedString(body.address) || undefined,
    property: asTrimmedString(body.property) || undefined,
    roof: asTrimmedString(body.roof) || undefined,
    need: asTrimmedString(body.need) || undefined,
    membership: asTrimmedString(body.membership) || undefined,
    message: asTrimmedString(body.message) || undefined,
    source: asTrimmedString(body.source) || "web",
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });
    clearTimeout(timer);
    return NextResponse.json({ ok: true, forwarded: res.ok });
  } catch {
    return NextResponse.json({ ok: true, forwarded: false });
  }
}