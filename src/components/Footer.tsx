const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">پایشگران زیست بوم صدرا</h3>
            <p className="max-w-md">
              نهاد مردمی در جهت پایش زیست بوم و درختکاری با هدف حفظ و احیای محیط زیست ایران
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">ارتباط با ما</h4>
            <p className="mb-2">استان فارس، شهر جدید صدرا، دفتر دبیرخانه طرح ملی جنگلانه</p>
            <p className="mb-2">تلفن:۰۹۱۷۷۱۹۸۴۲۷</p>
            <p className="mb-2">ایمیل: payeshgaransadra@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-green-700 mt-6 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} - تمامی حقوق برای پایشگران زیست بوم صدرا محفوظ است</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
