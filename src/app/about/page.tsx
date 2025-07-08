'use client';

import ReactPlayer from 'react-player';
import { useState } from 'react';

function getAparatEmbed(url: string) {
  // Extract hash from Aparat URL
  const match = url.match(/aparat\.com\/v\/([a-zA-Z0-9]+)/);
  return match ? `https://www.aparat.com/video/video/embed/videohash/${match[1]}/vt/frame` : null;
}

const AboutPage = () => {
  const [videoUrl, setVideoUrl] = useState('https://www.aparat.com/v/XpP5Z');

  const aparatEmbed = getAparatEmbed(videoUrl);
  const isAparat = Boolean(aparatEmbed);

  return (
    <>
      {/* Media Player Section */}
      <div className="w-full flex flex-col items-center bg-black py-4">
        <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
          {isAparat ? (
            <iframe
              src={aparatEmbed!}
              width="100%"
              height="100%"
              allowFullScreen
              style={{ border: 0 }}
            ></iframe>
          ) : (
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              controls
              playing={false}
            />
          )}
        </div>
        <div className="w-full max-w-2xl mt-2">
          <input
            type="text"
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
            placeholder="لینک ویدیو از آپارات، یوتیوب یا اینستاگرام"
            className="w-full border rounded px-3 py-2 mt-2 text-black"
          />
        </div>
      </div>

      {/* Existing About Page Content */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
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
                <span>توسعه فرهنگ حفاظت از محیط زیست و جلب مشارکت‌های مردمی</span>
              </p>
              <p className="flex items-start">
                <span className="text-green-600 ml-2">•</span>
                <span>همکاری با سازمان‌ها و نهادهای دولتی و غیردولتی برای پیشبرد اهداف زیست‌محیطی</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
