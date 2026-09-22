import React from 'react';
import { PageId } from '../types';
import { BUSINESS, IMAGES } from '../data/content';
import { Star, MapPin, Phone, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 md:space-y-28 pb-24">
      {/* 1. Page Header */}
      <section className="pt-12 md:pt-18 px-6 max-w-5xl mx-auto text-center space-y-5">
        <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
          Paris Boutique Studio
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1F211F]">
          About Équilibre Yoga
        </h1>
        <p className="text-base sm:text-lg text-[#555951] leading-relaxed max-w-2xl mx-auto font-light">
          A boutique yoga and wellness studio situated in the 11th arrondissement of Paris, offering group and private sessions focused on movement, flexibility, and relaxation.
        </p>
      </section>

      {/* 2. Visual Studio Ambiance */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E7DFD2] shadow-xs aspect-16/10 bg-[#F0ECE4]">
            <img
              src={IMAGES.studioSpace}
              alt="Calm boutique interior of Équilibre Yoga studio in Paris"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E8E1D4] shadow-xs space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F3EFE9] border border-[#E4DDD1] text-xs text-[#393C37]">
              <div className="flex text-[#D9A354]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D9A354] stroke-[#D9A354]" />
                ))}
              </div>
              <span className="font-semibold text-[#202120]">{BUSINESS.rating}/5</span>
              <span className="text-[#6D716A]">({BUSINESS.reviewCount} Reviews)</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#202120] font-medium leading-snug">
              A Quiet Haven in the 11th Arrondissement
            </h2>

            <p className="text-sm text-[#575B53] leading-relaxed">
              Located at 35 Rue Oberkampf, Équilibre Yoga was created to provide a sanctuary where practice is simple, grounded, and focused on physical and mental balance.
            </p>

            <div className="pt-2 border-t border-[#F0EBE2] text-xs text-[#52564F] space-y-2">
              <p>
                <strong className="text-[#202120]">Location:</strong> 35 Rue Oberkampf, 75011 Paris, France
              </p>
              <p>
                <strong className="text-[#202120]">Phone:</strong>{' '}
                <a href={`tel:${BUSINESS.phoneRaw}`} className="underline hover:text-[#525D46]">
                  {BUSINESS.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Studio Philosophy & Pillars */}
      <section className="px-6 max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
            Our Studio Values
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F211F] font-medium">
            Balance Through Simplicity
          </h2>
          <p className="text-sm sm:text-base text-[#52574F] leading-relaxed">
            We avoid wellness jargon and unnecessary complexity. Our classes center purely on what supports the body and calms the mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E7E0D3] shadow-2xs space-y-3">
            <span className="font-serif text-3xl font-medium text-[#4D5543] block">01</span>
            <h3 className="font-serif text-2xl text-[#202120] font-medium">
              Conscious Movement
            </h3>
            <p className="text-sm text-[#595E54] leading-relaxed">
              Moving with care, understanding the alignment of the joints, and maintaining fluid rhythm from one posture into the next.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E7E0D3] shadow-2xs space-y-3">
            <span className="font-serif text-3xl font-medium text-[#4D5543] block">02</span>
            <h3 className="font-serif text-2xl text-[#202120] font-medium">
              Progressive Flexibility
            </h3>
            <p className="text-sm text-[#595E54] leading-relaxed">
              Allowing the spine, hips, and limbs to open through gradual stretches, honoring each person’s natural anatomical boundaries.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E7E0D3] shadow-2xs space-y-3">
            <span className="font-serif text-3xl font-medium text-[#4D5543] block">03</span>
            <h3 className="font-serif text-2xl text-[#202120] font-medium">
              Restful Relaxation
            </h3>
            <p className="text-sm text-[#595E54] leading-relaxed">
              Prioritizing peaceful floor postures and deep breathing to restore nervous system balance and reduce urban mental fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Group & Private Balance */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#F6F2EB] border border-[#E3DBD0] p-8 md:p-12 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
              Practicing with Us
            </span>
            <h2 className="font-serif text-3xl text-[#202120] font-medium">
              Group and Private Options
            </h2>
            <p className="text-sm sm:text-base text-[#52564E] leading-relaxed">
              Équilibre Yoga offers both communal group sessions and dedicated private sessions. You can choose the format that best fits your lifestyle, practice preference, and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E7DFD3] space-y-2">
              <h3 className="font-serif text-xl text-[#202120] font-semibold">Group Sessions</h3>
              <p className="text-xs text-[#5D6258] leading-relaxed">
                Experience shared energy, consistent pacing, and the collective encouragement of a boutique community.
              </p>
              <button
                onClick={() => onNavigate('group-sessions')}
                className="text-xs uppercase tracking-wider font-semibold text-[#4E5646] hover:text-[#202120] pt-2 flex items-center cursor-pointer"
              >
                <span>Learn about group sessions</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E7DFD3] space-y-2">
              <h3 className="font-serif text-xl text-[#202120] font-semibold">Private Sessions</h3>
              <p className="text-xs text-[#5D6258] leading-relaxed">
                Receive individual guidance, personalized pacing, and an attentive setting centered on your goals.
              </p>
              <button
                onClick={() => onNavigate('private-sessions')}
                className="text-xs uppercase tracking-wider font-semibold text-[#4E5646] hover:text-[#202120] pt-2 flex items-center cursor-pointer"
              >
                <span>Learn about private sessions</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1E201E] font-medium">
          Connect with Équilibre Yoga in Paris
        </h2>
        <p className="text-sm sm:text-base text-[#565A52] leading-relaxed max-w-xl mx-auto">
          We invite you to reach out with any enquiries or to arrange your visit to our studio on Rue Oberkampf.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
          <button
            id="about-contact-btn"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2F342B] hover:bg-[#474E3F] text-white text-xs uppercase tracking-widest font-semibold transition-calm cursor-pointer"
          >
            Get in Touch
          </button>
          <a
            id="about-call-btn"
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#CCC4B5] bg-white text-[#252822] hover:bg-[#F2EDE5] text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center space-x-2 transition-calm"
          >
            <Phone className="w-3.5 h-3.5 text-[#5C6452]" />
            <span>Call {BUSINESS.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
