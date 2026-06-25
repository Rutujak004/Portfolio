import { NextResponse } from "next/server";

/* 
 * ─── Email Integration Options ────────────────────────────────────────────────
 * To send real emails, you can integrate one of these services here:
 * 
 * 1. Nodemailer: 
 *    Install `nodemailer`. Configure a transporter with your Gmail credentials 
 *    (using an App Password, not your regular password) and call `transporter.sendMail()`.
 * 
 * 2. Resend (Modern email API):
 *    Install `resend`. Initialize it with `const resend = new Resend(process.env.RESEND_API_KEY)`.
 *    Call `resend.emails.send({ from, to, subject, text })`.
 * 
 * 3. Formspree / Web3Forms (No-code backend):
 *    You wouldn't strictly need this API route at all, you could just POST directly 
 *    from the frontend to their provided endpoint URL.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Validate fields are present
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    // 3. Log the message (Placeholder for real email logic)
    console.log("──────────────────────────────────────────────");
    console.log("📨 NEW CONTACT FORM SUBMISSION");
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message:\n${message}`);
    console.log("──────────────────────────────────────────────");

    // 4. Return success
    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while sending the message." },
      { status: 500 }
    );
  }
}
