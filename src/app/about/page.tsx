import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-green-800">رسالت ما</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image
              src="/images/reforestation_project.jpeg"
              alt="طبیعت ایران"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold px-4 text-center">
                پایش زیست بوم، آسایش و آرامش ماست 
              </h2>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 text-green-800">درباره پایشگران زیست بوم صدرا</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              انجمن پایشگران زیست بوم صدرا یک نهاد مردمی است که با هدف حفاظت از محیط زیست و توسعه فضای سبز از طریق درختکاری و پایش مستمر اکوسیستم‌های طبیعی فعالیت می‌کند. ما معتقدیم که حفظ محیط زیست نه تنها یک وظیفه، بلکه یک رسالت انسانی است که باید با مشارکت همگانی به انجام برسد.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-green-800">چشم‌انداز ما</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              با توجه به مشکلات زیست‌محیطی کنونی و تغییرات اقلیمی در ایران، آینده محیط زیست این کشور در شرایط حساسی قرار دارد. ما در پایشگران زیست بوم صدرا بر این باوریم که با اتخاذ تدابیر مناسب و رویکردهای پایدار، می‌توان بهبودی در وضعیت محیط زیست ایجاد کرد. چشم‌انداز ما ایرانی سرسبز و پایدار است که در آن انسان و طبیعت در هماهنگی کامل با یکدیگر زندگی می‌کنند.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-green-800">اهداف ما</h3>
            <div className="space-y-3 text-gray-700 mb-6">
              <p className="flex items-start">
                <span className="text-green-600 ml-2">•</span>
                <span>احیای جنگل‌ها و مراتع آسیب‌دیده از طریق کاشت گونه‌های بومی و سازگار با اقلیم</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-600 ml-2">•</span>
                <span>پایش مستمر وضعیت اکوسیستم‌های طبیعی و ارائه گزارش‌های تخصصی</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-600 ml-2">•</span>
                <span>آموزش و فرهنگ‌سازی در زمینه حفاظت از محیط زیست و اهمیت درختکاری</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-600 ml-2">•</span>
                <span>ایجاد اشتغال سبز برای جوامع محلی از طریق پروژه‌های زیست‌محیطی</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-600 ml-2">•</span>
                <span>همکاری با سازمان‌ها و نهادهای دولتی و غیردولتی در راستای حفاظت از محیط زیست</span>
              </p>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-800">افق آینده محیط زیست ایران</h3>
              <p className="text-gray-700 leading-relaxed">
                با توجه به مشکلات زیست‌محیطی کنونی و تغییرات اقلیمی در ایران، آینده محیط زیست این کشور در شرایط حساسی قرار دارد. کارشناسان بر این باورند که با اتخاذ تدابیر مناسب و رویکردهای پایدار، می‌توان بهبودی در وضعیت محیط زیست ایجاد کرد. ما در پایشگران زیست بوم صدرا متعهد هستیم که با تلاش مستمر و همکاری با جوامع محلی، سهم خود را در این مسیر ایفا کنیم.
              </p>
              <p className="text-sm text-gray-500 mt-3">
                منبع: پایگاه خبری رادیو طبیعت - بایگانی‌های محیط زیست ایران
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
