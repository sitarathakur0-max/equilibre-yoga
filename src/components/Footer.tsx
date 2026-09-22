import React from 'react';
import { PageId } from '../types';
import { BUSINESS, NAV_ITEMS } from '../data/content';
import { Phone, MapPin, Star, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#21241F] text-[#EDE8E1] border-t border-[#363B32]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Studio Identity & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="block font-serif text-3xl font-medium tracking-tight text-[#FAF7F2]">
                {BUSINESS.name}
              </span>
              <span className="block text-xs uppercase tracking-[0.25em] text-[#9EA399] mt-1 font-medium">
                Paris · 11ème Arrondissement
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#C0C5BC] max-w-md">
              {BUSINESS.about}
            </p>

            {/* Google Rating verification pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#2C312A] border border-[#3E453B] text-xs text-[#E1DDD5]">
              <div className="flex text-[#D9A354]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D9A354] stroke-[#D9A354]" />
                ))}
              </div>
              <span className="font-semibold text-white">{BUSINESS.rating}/5</span>
              <span className="text-[#9EA399]">· {BUSINESS.reviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Column 2: Studio Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#8F9489] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-${item.id}`}
                    onClick={() => onNavigate(item.id)}
                    className="text-[#C0C5BC] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Yoga Practice & Offerings (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#8F9489] font-medium">
              Yoga Sessions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-session-group"
                  onClick={() => onNavigate('group-sessions')}
                  className="text-[#C0C5BC] hover:text-white transition-colors cursor-pointer text-left flex items-center group"
                >
                  <span>Group Sessions</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  id="footer-session-private"
                  onClick={() => onNavigate('private-sessions')}
                  className="text-[#C0C5BC] hover:text-white transition-colors cursor-pointer text-left flex items-center group"
                >
                  <span>Private Sessions</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  id="footer-session-overview"
                  onClick={() => onNavigate('sessions')}
                  className="text-[#C0C5BC] hover:text-white transition-colors cursor-pointer text-left"
                >
                  Movement & Flexibility
                </button>
              </li>
              <li>
                <button
                  id="footer-session-faq"
                  onClick={() => onNavigate('faq')}
                  className="text-[#C0C5BC] hover:text-white transition-colors cursor-pointer text-left"
                >
                  Practice FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Location & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#8F9489] font-medium">
              Paris Studio
            </h4>
            <div className="space-y-3 text-sm text-[#C0C5BC]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#8C9581] mt-0.5 shrink-0" />
                <address className="not-italic leading-relaxed">
                  <span className="block font-medium text-[#EDE8E1]">{BUSINESS.name}</span>
                  <span>{BUSINESS.street}</span>
                  <br />
                  <span>{BUSINESS.postalCode} {BUSINESS.city}, {BUSINESS.country}</span>
                </address>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#8C9581] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-[#FAF7F2] hover:text-[#A8B29C] transition-colors font-medium"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-contact-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-2 px-4 py-2 text-xs uppercase tracking-wider bg-[#373E32] hover:bg-[#485242] text-[#F3EFE8] rounded-lg transition-colors cursor-pointer"
              >
                <span>Send Studio Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-14 pt-8 border-t border-[#33382F] flex flex-col sm:flex-row items-center justify-between text-xs text-[#878D82] space-y-3 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Boutique Yoga & Wellness Studio · 35 Rue Oberkampf, 75011 Paris
          </p>
        </div>
      </div>
    </footer>
  );
};
