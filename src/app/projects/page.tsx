import Image from 'next/image';
import Link from 'next/link';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'طرح جنگلانه در ارتفاعات شهر صدرا',
      description: 'در طرح ملی جنگلانه دوستداران طبیعت در استان فارس (استان زادگاه جنگلانه) حدود ۸۰ کیلوگرم بذر را در منطقه آهوچر شهر صدرا در استان فارس کاشتند. جنگلانه مشارکتی خود جوش است که هرساله با همکاری سازمان‌های مردم نهاد و به همت مردم و با هدف حفظ تنوع زیستی، حفاظت، احیا و ترویج طبیعت به اجرا در می‌آید.',
      image: '/images/jangalaneh_project.jpeg',
      date: '۱۴۰۳/۱۱/۰۴',
      location: 'منطقه آهوچر شهر صدرا، استان فارس',
      results: 'کاشت بیش از ۸۰ کیلوگرم بذر گیاهان بومی شامل بادام کوهی، بنه و بلوط در ۴ هکتار از ارتفاعات آهوچر شهر صدرا، افزایش آگاهی عمومی و مشارکت هزاران نفر از اهالی صدرا',
      source: 'پایگاه خبری رادیو طبیعت - اجرای طرح جنگلانه در ارتفاعات شهر صدرا'
    },
    {
      id: 2,
      title: 'همایش با شکوه جنگلانه ۱۴۰۳ شهر صدرا',
      description: 'در راستای پاسداشت هویت «سبز - فرهنگی» شهر صدرا، دبیرخانه طرح ملی جنگلانه به مدیریت استاد مدرسی راد، همایش با شکوه جنگلانه ۱۴۰۳ را در شهر صدرا برگزار کرد. این رویداد با مشارکت گسترده شهروندان، دانش‌آموزان و خانواده‌ها همراه بود و شامل کاشت بذر گیاهان سازگار با محیط زیست صدرا در دامنه‌ی رشته کوه آهوچر شمالی بود.',
      image: '/images/jangalaneh_project.jpeg',
      date: '۱۴۰۳/۱۱/۰۴',
      location: 'دامنه رشته کوه آهوچر شمالی - دره آبشار، شهر صدرا',
      results: 'مشارکت گسترده شهروندان و دانش‌آموزان، ارائه آموزش‌های زیست‌محیطی، اهدای جوایز به دانش‌آموزان فعال در زمینه محیط زیست، و ایجاد فرهنگ احترام به طبیعت',
      source: 'صدرا نیوز (خبر صدرا) - برگزاری طرح سبز جنگلانه شهرصدرا'
    },
    {
      id: 3,
      title: 'پروژه کاشت درختان بلوط در زاگرس',
      description: 'این پروژه با هدف احیای جنگل‌های بلوط زاگرس که در سال‌های اخیر با چالش‌های جدی مواجه شده‌اند، انجام شده است. در این پروژه بیش از ۵۰۰۰ نهال بلوط با مشارکت داوطلبان محلی کاشته شد.',
      image: '/images/oak_tree_background.webp',
      date: '۱۴۰۳/۰۲/۱۵',
      location: 'استان کهگیلویه و بویراحمد',
      results: 'افزایش پوشش جنگلی منطقه، جلوگیری از فرسایش خاک، و ایجاد اشتغال موقت برای ۲۰ نفر از جوانان محلی',
      source: 'گزارش داخلی انجمن پایشگران زیست بوم صدرا'
    },
    {
      id: 4,
      title: 'پویش ملی درخت‌یار',
      description: 'مشارکت در پویش ملی درخت‌یار که از سال ۹۹ با هدف کاشت نهال مثمر برای خانواده‌های کم برخوردار آغاز شده است. این پویش با نگاهی معیشتی به موضوع درختکاری، علاوه بر ایجاد فضای سبز، به بهبود وضعیت اقتصادی خانواده‌ها نیز کمک می‌کند.',
      image: '/images/reforestation_project.jpeg',
      date: '۱۴۰۲/۱۲/۱۰',
      location: 'سراسر ایران',
      results: 'مشارکت در کاشت بیش از ۱۰۰۰ نهال مثمر در مناطق کم برخوردار، آموزش نگهداری از درختان به ساکنان محلی',
      source: 'خبرگزاری مهر - کاشت بیش از ۳۲۰ میلیون درخت طی یک سال در ایران'
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-green-800">پروژه‌های پایشگران زیست بوم صدرا</h1>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-bold text-green-800 mb-3">{project.title}</h2>
                  <div className="flex flex-wrap text-sm text-gray-600 mb-4">
                    <span className="ml-4">📅 تاریخ: {project.date}</span>
                    <span>📍 مکان: {project.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-green-800 mb-2">نتایج پروژه:</h3>
                    <p className="text-gray-700">{project.results}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    منبع: {project.source}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            مشارکت در پروژه‌های آینده
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
