import React from 'react';
import { PageId } from '../types';
import { BUSINESS, IMAGES } from '../data/content';
import { ArrowRight, Check, Users, Sparkles, Phone, ShieldCheck, Heart } from 'lucide-react';

interface GroupSessionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const GroupSessionsPage: React.FC<GroupSessionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 md:space-y-24 pb-24">
      {/* 1. Page Hero */}
      <section className="pt-12 md:pt-18 px-6 max-w-5xl mx-auto text-center space-y-5">
        <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
          Shared Studio Practice
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1F211F]">
          Group Yoga Sessions
        </h1>
        <p className="text-base sm:text-lg text-[#555951] leading-relaxed max-w-2xl mx-auto font-light">
          Practicing yoga in a collective setting creates a supportive shared momentum, encouraging mindful movement, progressive flexibility, and deep relaxation.
        </p>
      </section>

      {/* 2. Visual Photography of Group Practice */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-[#E7DFD2] shadow-xs relative aspect-16/9 md:aspect-21/9 bg-[#F0ECE4]">
          <img
            src={IMAGES.groupSession}
            alt="Group yoga practice session in a calm light-filled studio space in Paris"
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white max-w-lg">
            <span className="text-xs uppercase tracking-widest text-[#E6EADB] font-medium block">
              Équilibre Yoga · Paris 11ème
            </span>
            <p className="font-serif text-lg sm:text-xl font-medium">
              Moving together with conscious breath and natural alignment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Experience of Practicing in a Group Setting */}
      <section className="px-6 max-w-5xl mx-auto space-y-8">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#666E5B] font-semibold">
            Collective Harmony
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F211F] font-medium">
            The Shared Energy of Group Yoga
          </h2>
          <p className="text-base text-[#52574F] leading-relaxed">
            There is a distinct balance that emerges when individuals gather to move in unison. In our group yoga sessions at Équilibre Yoga, the shared focus in the room cultivates presence. Practicing alongside others provides an uplifting sense of community without competition, giving you space to focus inward while drawing motivation from the shared atmosphere.
          </p>
        </div>

        {/* Detailed Breakdown of the Three Pillars within Group Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DA] shadow-2xs space-y-3">
            <h3 className="font-serif text-xl text-[#202120] font-semibold">
              Movement in Rhythm
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6157] leading-relaxed">
              Sequences flow together seamlessly, guiding the group through coordinated postures that awaken the body and refine balance.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DA] shadow-2xs space-y-3">
            <h3 className="font-serif text-xl text-[#202120] font-semibold">
              Collective Flexibility
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6157] leading-relaxed">
              Shared pacing allows ample time for muscles to lengthen and release tension safely, supported by gentle guidance.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#EAE4DA] shadow-2xs space-y-3">
            <h3 className="font-serif text-xl text-[#202120] font-semibold">
              Deep Studio Relaxation
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6157] leading-relaxed">
              The quiet conclusion of a group session brings a shared stillness, leaving practitioners refreshed and composed.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What to Expect in Our Boutique Studio */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#F6F3EC] border border-[#E2DBD0] p-8 md:p-12 space-y-6">
          <h2 className="font-serif text-3xl text-[#202120] font-medium">
            A Boutique Studio Environment
          </h2>
          <p className="text-sm sm:text-base text-[#52564E] leading-relaxed">
            Unlike oversized gym classes, Équilibre Yoga maintains an authentic boutique atmosphere at 35 Rue Oberkampf. Our studio prioritizes calm, clean lines, and breathing room so that each participant has ample physical space to stretch and move unconstrained.
          </p>

          <div className="space-y-3 pt-2 text-sm text-[#4A4E46]">
            <div className="flex items-center space-x-3">
              <Check className="w-4 h-4 text-[#5D6652] shrink-0" />
              <span>Thoughtful room arrangement ensuring comfortable personal practice space</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-4 h-4 text-[#5D6652] shrink-0" />
              <span>Attentive environment centered on movement, flexibility, and relaxation</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-4 h-4 text-[#5D6652] shrink-0" />
              <span>Peaceful oasis in the historic 11th arrondissement of Paris</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clear Enquiry CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1E201E] font-medium">
          Interested in Joining a Group Yoga Session?
        </h2>
        <p className="text-sm sm:text-base text-[#565A52] leading-relaxed max-w-xl mx-auto">
          Contact Équilibre Yoga to enquire about current group session availability, studio visiting details, or any questions you may have.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
          <button
            id="group-enquire-btn"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2F342B] hover:bg-[#474E3F] text-white text-xs uppercase tracking-widest font-semibold transition-calm cursor-pointer"
          >
            Enquire About Group Sessions
          </button>
          <a
            id="group-call-btn"
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
