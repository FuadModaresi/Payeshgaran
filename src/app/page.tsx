import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <main className="min-h-screen">      
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/oak_tree_background.webp"
            alt="درخت بلوط"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <div className="mb-6 w-32 h-32 relative">
            <Image
              src="/images/logo.png"
              alt="لوگوی پایشگران زیست بوم صدرا"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">پایشگران زیست بوم صدرا</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">شهر صدرا_شهر سالم_شهر سبز</p>
          
          <div className="bg-black bg-opacity-30 p-6 rounded-lg max-w-3xl mb-8">
            <p className="text-lg md:text-xl leading-relaxed" dir="rtl">
              چو آید بهارَش همین پهن، سبز<br />
              همه کوه پُر لاله و دشت، سبز<br />
              زمین پُر شقایق،درخت پُر زِ گُل<br />
              هَمی رَشک جویَد بَرآن باغِ گُل<br />
              ببینی دل اَفروز باغِ بِهِشت<br />
              همان میوه اَش چون چراغِ بِهِشت<br />
              به هر گوشه ای باغی و گُل سِتان<br />
              زمین سُنبُل و شاخ بُلبُل سِتان
            </p>
            <p className="text-right mt-4 font-semibold">-  سید نورالدین مدرسی راد _ دبیر انجمن</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              درباره ما
            </Link>
            <Link href="/projects" className="bg-transparent hover:bg-white hover:text-green-800 text-white font-bold py-3 px-6 rounded-lg border-2 border-white transition duration-300">
              مشاهده پروژه‌ها
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">فعالیت‌های ما</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">درختکاری</h3>
              <p className="text-gray-700">اجرای پروژه‌های درختکاری در مناطق مختلف با هدف احیای جنگل‌ها و افزایش پوشش گیاهی</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">پایش زیست‌محیطی</h3>
              <p className="text-gray-700">بررسی و پایش مستمر وضعیت اکوسیستم‌های طبیعی و ارائه گزارش‌های تخصصی</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-green-800">آموزش و فرهنگ‌سازی</h3>
              <p className="text-gray-700">برگزاری کارگاه‌ها و دوره‌های آموزشی با هدف ارتقای آگاهی عمومی درباره محیط زیست</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">به ما بپیوندید</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">با پیوستن به پایشگران زیست بوم صدرا، در حفاظت از محیط زیست و ساخت آینده‌ای پایدار سهیم شوید.</p>
          <Link href="/contact" className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            تماس با ما
          </Link>
        </div>
      </div>
    </main>
  )
}