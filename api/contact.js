import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Retrieve SMTP credentials from environment variables
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || smtpUser;

  // If environment variables are missing, log detailed message and fail gracefully
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('[TACTICAL RELAY ERROR] Server SMTP variables are not configured.');
    return res.status(500).json({ 
      error: 'SMTP configuration missing on the server. Please define SMTP_HOST, SMTP_USER, and SMTP_PASS in Vercel environment settings.' 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465, // true for port 465 (SSL), false for other ports (STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false // avoids certificate handshake rejection on some SMTP hosts
      }
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // Must be the authenticated user address to prevent SMTP relay block
      replyTo: email,                  // Allows easy replying to the sender directly from inbox
      to: receiverEmail,
      subject: `[PORTFOLIO TRANSMISSION] Dispatch from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: monospace; padding: 24px; color: #F3EDE2; background-color: #111827; border: 1px solid #1E293B; border-radius: 6px;">
          <h2 style="color: #8B3A3A; border-bottom: 1px solid #1E293B; padding-bottom: 12px; margin-top: 0; font-size: 16px; letter-spacing: 0.15em; text-transform: uppercase;">
            [✓] SECURE RELAY DISPATCH RECEIVED
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12px;">
            <tr>
              <td style="padding: 6px 0; color: #C29F5D; width: 140px; font-weight: bold;">SENDER IDENT:</td>
              <td style="padding: 6px 0; color: #F3EDE2;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #C29F5D; font-weight: bold;">ROUTING EMAIL:</td>
              <td style="padding: 6px 0; color: #F3EDE2;"><a href="mailto:${email}" style="color: #C29F5D; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #C29F5D; font-weight: bold;">TIMESTAMP:</td>
              <td style="padding: 6px 0; color: #64748B;">${new Date().toUTCString()}</td>
            </tr>
          </table>
          <div style="border-top: 1px solid #1E293B; padding-top: 16px;">
            <div style="color: #C29F5D; font-size: 10px; font-weight: bold; margin-bottom: 8px; letter-spacing: 0.1em; text-transform: uppercase;">DISPATCH PAYLOAD BODY:</div>
            <div style="padding: 16px; background-color: #0F172A; border: 1px solid #1E293B; border-radius: 4px; color: #F3EDE2; font-size: 13px; line-height: 1.6; white-space: pre-wrap; font-family: sans-serif;">${message}</div>
          </div>
          <div style="margin-top: 24px; border-top: 1px solid #1E293B; padding-top: 12px; font-size: 9px; color: #64748B; text-align: center; letter-spacing: 0.05em;">
            [INTELLIGENCE SYSTEM DISPATCH ENGINE // LEVEL 4 DE-RESTRICTED BINDER]
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('[SMTP TRANSMISSION ERROR]', error);
    return res.status(500).json({ error: 'Failed to send message: ' + error.message });
  }
}
