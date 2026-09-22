import React, { useState } from 'react';
import { PageId, FAQItem } from '../types';
import { BUSINESS, FAQ_ITEMS } from '../data/content';
import { ChevronDown, Phone, Mail, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'group', label: 'Group Sessions' },
    { id: 'private', label: 'Private Sessions' },
    { id: 'practice', label: 'Movement & Flexibility' },
    { id: 'relaxation', label: 'Relaxation' },
    { id: 'studio', label: 'Studio Enquiries' },
  ];

  const filteredItems = FAQ_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 md:space-y-24 pb-24">
      {/* 1. Page Header */}
      <section className="pt-12 md:pt-18 px-6 max-w-4xl mx-auto text-center space-y-5">
        <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
          Studio Guidance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1F211F]">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#555951] leading-relaxed max-w-2xl mx-auto font-light">
          Find helpful answers regarding our group and private yoga sessions, our focus on movement, flexibility, and relaxation, and visiting our Paris studio.
        </p>
      </section>

      {/* 2. Category Filter Chips */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="FAQ categories">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`faq-category-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                role="tab"
                aria-selected={isSelected}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-calm cursor-pointer ${
                  isSelected
                    ? 'bg-[#2E332A] text-white'
                    : 'bg-[#FAF7F2] border border-[#E3DBD0] text-[#555A51] hover:bg-[#F2EDE4] hover:text-[#202120]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Accordion List */}
      <section className="px-6 max-w-4xl mx-auto space-y-4">
        <div className="space-y-3">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E8E1D5] overflow-hidden transition-calm shadow-2xs"
              >
                <button
                  id={`faq-question-${index}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#202120] font-medium pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#2D3228] text-white' : 'bg-[#F2ECE3] text-[#555A51]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#575B53] leading-relaxed border-t border-[#F3EEE6] animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Notice for Unsupplied Specifics & Direct Contact Box */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F1EA] border border-[#DDD6C8] space-y-6 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#E5EADF] text-[#4E5B42] flex items-center justify-center">
            <HelpCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#202120] font-medium">
              Have a Specific Question?
            </h2>
            <p className="text-sm text-[#575C53] leading-relaxed">
              For current session timetables, registration details, or specific enquiries not covered above, please contact Équilibre Yoga directly. We are happy to assist you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <button
              id="faq-send-enquiry-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#2E332A] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#464F3E] transition-calm cursor-pointer"
            >
              Send an Enquiry
            </button>
            <a
              id="faq-call-studio-link"
              href={`tel:${BUSINESS.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-3 rounded-full border border-[#D0C7B9] bg-white text-[#202120] hover:bg-[#FAF7F2] text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center space-x-2 transition-calm"
            >
              <Phone className="w-3.5 h-3.5 text-[#5C6452]" />
              <span>Call {BUSINESS.phone}</span>
            </a>
          </div>

          <p className="text-xs text-[#7E837A] pt-2">
            Studio Location: 35 Rue Oberkampf, 75011 Paris, France
          </p>
        </div>
      </section>
    </div>
  );
};
