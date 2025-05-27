'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, this would be an API call to the backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful submission
      setSubmitResult({
        success: true,
        message: 'پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.'
      });
      setShowResult(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setSubmitResult({
        success: false,
        message: 'متأسفانه در ارسال پیام خطایی رخ داد. لطفاً دوباره تلاش کنید.'
      });
      setShowResult(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-green-800">تماس با ما</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 bg-green-700 text-white">
              <h2 className="text-2xl font-bold mb-6">اطلاعات تماس</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl ml-3">📍</div>
                  <div>
                    <p className="font-semibold">آدرس:</p>
                    <p>استان فارس، شهر جدید صدرا، دفتر دبیرخانه طرح ملی جنگلانه</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl ml-3">📞</div>
                  <div>
                    <p className="font-semibold">تلفن:</p>
                    <p>۰۹۱۷۷۱۹۸۴۲۷</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl ml-3">✉️</div>
                  <div>
                    <p className="font-semibold">ایمیل:</p>
                    <p>payeshgaransadra@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">ساعات کاری:</h3>
                <p>شنبه تا چهارشنبه: ۸ صبح تا ۴ بعدازظهر</p>
                <p>پنجشنبه: ۸ صبح تا ۱ بعدازظهر</p>
                <p>جمعه: تعطیل</p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-bold mb-6 text-green-800">ارسال پیام</h2>
              
              {showResult ? (
                <div className={`p-4 rounded-lg mb-6 ${submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <p>{submitResult.message}</p>
                  <button 
                    onClick={() => setShowResult(false)}
                    className="mt-3 text-sm underline"
                  >
                    ارسال پیام جدید
                  </button>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/payeshgaransadra@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-semibold mb-1">نام</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-semibold mb-1">ایمیل</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-semibold mb-1">پیام</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    ارسال پیام
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
