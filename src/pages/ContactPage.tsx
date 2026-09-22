import React from 'react';
import { PageId } from '../types';
import { BUSINESS } from '../data/content';
import { EnquiryForm } from '../components/EnquiryForm';
import { MapPin, Phone, Star, Clock, Compass, ArrowUpRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="space-y-20 md:space-y-24 pb-24">
      {/* 1. Page Header */}
      <section className="pt-12 md:pt-18 px-6 max-w-4xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1F211F]">
          Contact Équilibre Yoga
        </h1>
        <p className="text-base sm:text-lg text-[#555951] leading-relaxed max-w-2xl mx-auto font-light">
          Connect with our boutique studio in Paris regarding group sessions, private sessions, or general enquiries.
        </p>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Details & Studio Location (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E7DFD2] shadow-xs space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#787D73] font-medium block">
                  Yoga & Wellness Studio
                </span>
                <h2 className="font-serif text-3xl text-[#202120] font-medium mt-1">
                  {BUSINESS.name}
                </h2>
                <p className="text-sm text-[#5C6157] mt-2 leading-relaxed">
                  {BUSINESS.about}
                </p>
              </div>

              <div className="border-t border-[#F0EAE0] pt-6 space-y-4">
                {/* Physical Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EFE9] text-[#555E4C] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <strong className="block font-semibold text-[#202120] mb-0.5">
                      Studio Address
                    </strong>
                    <address className="not-italic text-[#555A51] leading-relaxed">
                      {BUSINESS.street}
                      <br />
                      {BUSINESS.postalCode} {BUSINESS.city}, {BUSINESS.country}
                    </address>
                    <span className="inline-block mt-1 text-xs text-[#7B8076]">
                      11ème Arrondissement · Quartier Oberkampf
                    </span>
                  </div>
                </div>

                {/* Clickable Telephone */}
                <div className="flex items-start space-x-3.5 pt-2">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EFE9] text-[#555E4C] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <strong className="block font-semibold text-[#202120] mb-0.5">
                      Telephone
                    </strong>
                    <a
                      id="contact-page-phone-link"
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="text-base font-semibold text-[#272A25] hover:text-[#525D46] transition-colors inline-flex items-center space-x-1"
                      title="Call Équilibre Yoga"
                    >
                      <span>{BUSINESS.phone}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#7A8074]" />
                    </a>
                    <span className="block text-xs text-[#7B8076] mt-0.5">
                      Click to call directly from your device
                    </span>
                  </div>
                </div>

                {/* Rating Card */}
                <div className="flex items-start space-x-3.5 pt-2">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EFE9] text-[#D9A354] flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="w-5 h-5 fill-[#D9A354]" />
                  </div>
                  <div className="text-sm">
                    <strong className="block font-semibold text-[#202120] mb-0.5">
                      Google Review Score
                    </strong>
                    <div className="flex items-center space-x-2 text-sm text-[#555A51]">
                      <span className="font-semibold text-[#202120]">{BUSINESS.rating}/5</span>
                      <span>·</span>
                      <span>{BUSINESS.reviewCount} Verified Reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Visiting Advice */}
              <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#E9E3D8] text-xs text-[#5F645A] leading-relaxed space-y-1">
                <strong className="text-[#202120] block font-medium">
                  Studio Visit Information:
                </strong>
                <p>
                  To preserve the quiet, concentrated atmosphere of ongoing yoga sessions, we kindly invite visitors to call or submit an enquiry prior to arrival.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm initialSessionType="general" />
          </div>
        </div>
      </section>
    </div>
  );
};
