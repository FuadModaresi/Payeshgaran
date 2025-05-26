import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // In a real application, you would process the form data here
    // For example, save to database, send email, etc.
    
    try {
      const { name, email, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'لطفاً تمام فیلدهای ضروری را پر کنید.' });
      }
      
      // Here you would typically:
      // 1. Save the contact request to a database
      // 2. Send an email notification
      // 3. Possibly trigger other workflows
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: 'پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'متأسفانه در ارسال پیام خطایی رخ داد. لطفاً دوباره تلاش کنید.' 
      });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}
