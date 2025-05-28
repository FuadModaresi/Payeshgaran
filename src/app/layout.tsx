import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
// import Head from 'next/head'; // Remove this line, not needed in App Router

const inter = Inter({ subsets: ['latin'] });

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
