import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { HomePage } from './pages/HomePage';
import { YogaSessionsPage } from './pages/YogaSessionsPage';
import { GroupSessionsPage } from './pages/GroupSessionsPage';
import { PrivateSessionsPage } from './pages/PrivateSessionsPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { BUSINESS } from './data/content';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

export default function App() {
  // Parse initial path
  const getPageFromPath = (): PageId => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (path === 'sessions') return 'sessions';
    if (path === 'group-sessions') return 'group-sessions';
    if (path === 'private-sessions') return 'private-sessions';
    if (path === 'about') return 'about';
    if (path === 'faq') return 'faq';
    if (path === 'contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromPath);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'sessions':
        return <YogaSessionsPage onNavigate={handleNavigate} />;
      case 'group-sessions':
        return <GroupSessionsPage onNavigate={handleNavigate} />;
      case 'private-sessions':
        return <PrivateSessionsPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#202120]">
      {/* SEO updater for title, description, and social meta tags */}
      <SEOHead page={currentPage} />

      {/* Main Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content with animated transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Quick Mobile Floating Call Button */}
      <div className="md:hidden fixed bottom-5 right-5 z-30">
        <a
          id="mobile-floating-call"
          href={`tel:${BUSINESS.phoneRaw}`}
          aria-label={`Call Équilibre Yoga at ${BUSINESS.phone}`}
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-[#2A2F25] text-white shadow-lg border border-[#3E4537] hover:bg-[#3E4636] transition-calm"
        >
          <Phone className="w-4 h-4 text-[#C1C9BA]" />
          <span className="text-xs font-semibold tracking-wider uppercase">Call Studio</span>
        </a>
      </div>

      {/* Main Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
