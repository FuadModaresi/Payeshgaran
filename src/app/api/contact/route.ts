import nodemailer from 'nodemailer';

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

    // Configure transporter with your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'payeshgaransadra@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // Use an App Password, not your Gmail password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'payeshgaransadra@gmail.com',
      subject: `پیام جدید از فرم تماس`,
      text: `نام: ${name}\nایمیل: ${email}\nپیام:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

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