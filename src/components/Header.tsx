import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS, NAV_ITEMS } from '../data/content';
import { Phone, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EAE5DC] transition-calm">
      {/* Top micro-bar with studio location & direct phone */}
      <div className="hidden md:block bg-[#F4EFEA] border-b border-[#EAE5DC]/60 py-1.5 text-xs text-[#5F625D]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#636B58]" aria-hidden="true" />
              <span>{BUSINESS.address}</span>
            </span>
            <span className="text-[#B3ADA4]">|</span>
            <span className="text-[#3A3D39] font-medium">
              Boutique Yoga Studio in Paris · 11ème Arrondissement
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              id="header-top-phone"
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center space-x-1 text-[#2B2E2A] hover:text-[#636B58] transition-colors font-medium"
              title="Call Équilibre Yoga"
            >
              <Phone className="w-3 h-3 text-[#636B58]" aria-hidden="true" />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand identity */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer"
          aria-label="Équilibre Yoga Home"
        >
          <span className="block font-serif text-2xl md:text-3xl font-medium tracking-tight text-[#202120] group-hover:text-[#4F5744] transition-colors">
            Équilibre Yoga
          </span>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-[#6E726A] font-medium -mt-0.5">
            Paris · 75011
          </span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-sm tracking-wide rounded-full transition-calm cursor-pointer ${
                  isActive
                    ? 'bg-[#EFEAE1] text-[#202120] font-semibold'
                    : 'text-[#4A4E47] hover:text-[#181A18] hover:bg-[#F2ECE3]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Primary contact CTA & Mobile toggle */}
        <div className="flex items-center space-x-3">
          <button
            id="header-enquire-btn"
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 text-xs uppercase tracking-widest font-medium bg-[#31362D] text-[#FBF9F5] rounded-full hover:bg-[#484F42] transition-calm shadow-xs cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2D302A] hover:text-[#181A18] hover:bg-[#EFEAE1] rounded-lg transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden border-t border-[#EAE5DC] bg-[#FBF9F5] px-6 pt-4 pb-6 space-y-3 shadow-lg animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#EFEAE1] text-[#202120] font-semibold'
                      : 'text-[#4A4E47] hover:bg-[#F4EFEA] hover:text-[#181A18]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#636B58]" />}
                  </div>
                  {item.description && (
                    <span className="block text-xs text-[#7B8077] font-normal mt-0.5">
                      {item.description}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EAE5DC] space-y-2">
            <a
              id="mobile-menu-phone"
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl border border-[#DCD5C9] text-sm font-medium text-[#202120] hover:bg-[#F2ECE3] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#636B58]" />
              <span>Call {BUSINESS.phone}</span>
            </a>
            <button
              id="mobile-menu-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl bg-[#31362D] text-white text-sm font-medium hover:bg-[#484F42] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
