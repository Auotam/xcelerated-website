import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, program, message, website } = body;

    // Simple anti-spam honeypot
    if (website) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    if (!fullName || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields.' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE) === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `XCELERATED Contact: ${program || 'General'} — ${fullName}`;

    const text = [
      `New Contact Inquiry`,
      `-------------------`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'N/A'}`,
      `Program: ${program || 'N/A'}`,
      ``,
      `Message:`,
      message,
    ].join('\n');

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: email,
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Server error.' }), { status: 500 });
  }
}