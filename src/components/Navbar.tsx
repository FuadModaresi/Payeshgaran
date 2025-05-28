'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // TypeScript may not have BeforeInstallPromptEvent by default, so define it if needed
  interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  }
  
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Listen for the beforeinstallprompt event
    const handler = (e: Event) => {
      const event = e as BeforeInstallPromptEvent;
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
     
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstall(false);
      }
    } else {
      alert(
        'برای افزودن به صفحه اصلی:\n\nدر اندروید: از منوی مرورگر گزینه "Add to Home Screen" را انتخاب کنید.\nدر آیفون: از منوی اشتراک‌گذاری (Share) گزینه "Add to Home Screen" را انتخاب کنید.'
      );
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            <Link href="/" className="flex items-center">
              <span className="ml-2">پایشگران زیست بوم صدرا</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="px-3 py-2 hover:bg-green-700 rounded transition duration-300">
              صفحه اصلی
            </Link>
            <Link href="/about" className="px-3 py-2 hover:bg-green-700 rounded transition duration-300">
              رسالت ما
            </Link>
            <Link href="/projects" className="px-3 py-2 hover:bg-green-700 rounded transition duration-300">
              پروژه‌ها
            </Link>
            <Link href="/contact" className="px-3 py-2 hover:bg-green-700 rounded transition duration-300">
              تماس با ما
            </Link>
            {/* Add to Home Screen */}
            {mounted && (
              <button
                onClick={handleInstallClick}
                className={`px-3 py-2 hover:bg-green-700 rounded transition duration-300${showInstall ? '' : ' hidden'}`}
              >
                افزودن به صفحه اصلی
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            className={`md:hidden bg-green-800 px-4 pb-4 space-y-2
              transition-all duration-300 ease-in-out
              opacity-100 translate-y-0
              animate-dropdown mobile-dropdown-menu`}
          >
            <Link
              href="/"
              className="block px-3 py-2 hover:bg-green-700 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              صفحه اصلی
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 hover:bg-green-700 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              رسالت ما
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 hover:bg-green-700 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              پروژه‌ها
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 hover:bg-green-700 rounded transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              تماس با ما
            </Link>
            {mounted && (
              <button
                type="button"
                onClick={handleInstallClick}
                className="block w-full text-right px-3 py-2 hover:bg-green-700 rounded transition duration-300"
              >
                افزودن به صفحه اصلی
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
