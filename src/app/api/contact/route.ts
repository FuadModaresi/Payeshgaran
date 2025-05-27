import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: 'لطفاً تمام فیلدهای ضروری را پر کنید.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'payeshgaransadra@gmail.com', // Must be a verified sender in Resend
      to: 'payeshgaransadra@gmail.com',
      replyTo: email, // <-- use reply_to instead of replyTo
      subject: 'پیام جدید از فرم تماس',
      html: `
        <p><strong>نام:</strong> ${name}</p>
        <p><strong>ایمیل:</strong> ${email}</p>
        <p><strong>پیام:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'متأسفانه در ارسال پیام خطایی رخ داد. لطفاً دوباره تلاش کنید.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}