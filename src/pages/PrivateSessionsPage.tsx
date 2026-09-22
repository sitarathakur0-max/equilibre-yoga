import React from 'react';
import { PageId } from '../types';
import { BUSINESS, IMAGES } from '../data/content';
import { ArrowRight, Check, User, Phone, Sparkles, Compass } from 'lucide-react';

interface PrivateSessionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivateSessionsPage: React.FC<PrivateSessionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 md:space-y-24 pb-24">
      {/* 1. Page Hero */}
      <section className="pt-12 md:pt-18 px-6 max-w-5xl mx-auto text-center space-y-5">
        <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
          One-on-One Studio Practice
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1F211F]">
          Private Yoga Sessions
        </h1>
        <p className="text-base sm:text-lg text-[#555951] leading-relaxed max-w-2xl mx-auto font-light">
          Dedicated individual yoga sessions providing focused attention, unhurried pacing, and a serene private studio atmosphere in Paris.
        </p>
      </section>

      {/* 2. Visual Photography of Private Focus */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-[#E7DFD2] shadow-xs relative aspect-16/9 md:aspect-21/9 bg-[#F0ECE4]">
          <img
            src={IMAGES.privateSession}
            alt="Private yoga session focused on gentle movement and alignment in Paris studio"
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white max-w-lg">
            <span className="text-xs uppercase tracking-widest text-[#E6EADB] font-medium block">
              Individual Practice · Paris 75011
            </span>
            <p className="font-serif text-lg sm:text-xl font-medium">
              Attentive space shaped around your individual rhythm and goals.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Appeal of Private Yoga Practice */}
      <section className="px-6 max-w-5xl mx-auto space-y-8">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#666E5B] font-semibold">
            Tailored Attention
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F211F] font-medium">
            The Value of an Individual Practice
          </h2>
          <p className="text-base text-[#52574F] leading-relaxed">
            A private yoga session offers an intimate, focused environment where the practice unfolds at your own natural tempo. Free from the collective schedule of a group class, you have the uninterrupted space to explore movement nuances, ask questions, and focus deeply on flexibility and relaxation.
          </p>
        </div>

        {/* Core elements of Private practice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DA] shadow-2xs space-y-3">
            <h3 className="font-serif text-xl text-[#202120] font-semibold">
              Personalized Pacing
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6157] leading-relaxed">
              Move at the speed that feels right for your body today. Take more time in challenging postures or dwell longer in restorative holds.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DA] shadow-2xs space-y-3">
            <h3 className="font-serif text-xl text-[#202120] font-semibold">
              Focused Movement & Alignment
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6157] leading-relaxed">
              Receive direct visual and postural feedback to develop safe body mechanics, proper weight distribution, and comfortable joint alignment.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DA] shadow-2xs space-y-3">
            <h3 className="font-serif text-xl text-[#202120] font-semibold">
              Uninterrupted Relaxation
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6157] leading-relaxed">
              Enjoy a peaceful, quiet studio environment free of outside distractions, perfect for settling the mind and easing daily stress.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Who Can Benefit from Private Sessions */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#F6F3EC] border border-[#E2DBD0] p-8 md:p-12 space-y-6">
          <h2 className="font-serif text-3xl text-[#202120] font-medium">
            Who Chooses Private Yoga Sessions?
          </h2>
          <p className="text-sm sm:text-base text-[#52564E] leading-relaxed">
            Private sessions at Équilibre Yoga appeal to practitioners across different stages of practice:
          </p>

          <div className="space-y-3 pt-2 text-sm text-[#4A4E46]">
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#5D6652] mt-0.5 shrink-0" />
              <span>Those beginning yoga who wish to establish foundational postures and body awareness in a calm setting</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#5D6652] mt-0.5 shrink-0" />
              <span>Practitioners looking to focus specifically on flexibility or targeted areas of muscle tightness</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#5D6652] mt-0.5 shrink-0" />
              <span>Individuals seeking an unhurried, quiet sanctuary for mindful movement away from busy schedules</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-4 h-4 text-[#5D6652] mt-0.5 shrink-0" />
              <span>Anyone preferring individual attention to refine their transitions, breath control, and relaxation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strong Contact CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1E201E] font-medium">
          Schedule or Enquire About Private Sessions
        </h2>
        <p className="text-sm sm:text-base text-[#565A52] leading-relaxed max-w-xl mx-auto">
          Private sessions are scheduled directly with our Paris studio. Reach out to discuss your practice goals, check availability, or ask any questions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
          <button
            id="private-enquire-btn"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2F342B] hover:bg-[#474E3F] text-white text-xs uppercase tracking-widest font-semibold transition-calm cursor-pointer"
          >
            Enquire About Private Sessions
          </button>
          <a
            id="private-call-btn"
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#CCC4B5] bg-white text-[#252822] hover:bg-[#F2EDE5] text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center space-x-2 transition-calm"
          >
            <Phone className="w-3.5 h-3.5 text-[#5C6452]" />
            <span>Call {BUSINESS.phone}</span>
          </a>
        </div>

        <p className="text-xs text-[#7B8076]">
          Studio address: 35 Rue Oberkampf, 75011 Paris, France
        </p>
      </section>
    </div>
  );
};
