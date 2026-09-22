import React from 'react';
import { PageId } from '../types';
import { BUSINESS, IMAGES } from '../data/content';
import { ArrowRight, Check, Users, User, Compass, Wind, Sparkles } from 'lucide-react';

interface YogaSessionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const YogaSessionsPage: React.FC<YogaSessionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-28 pb-24">
      {/* 1. Page Header */}
      <section className="pt-12 md:pt-18 px-6 max-w-5xl mx-auto text-center space-y-5">
        <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
          Studio Offerings
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1F211F]">
          Yoga Sessions in Paris
        </h1>
        <p className="text-base sm:text-lg text-[#555951] leading-relaxed max-w-2xl mx-auto font-light">
          At Équilibre Yoga, our practice is grounded in the foundational principles of movement, flexibility, and relaxation. We offer both group and private sessions tailored to your practice goals.
        </p>
      </section>

      {/* 2. Visual Feature Image */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-[#E8E1D4] shadow-xs relative aspect-16/9 md:aspect-21/9 bg-[#F0EBE1]">
          <img
            src={IMAGES.groupSession}
            alt="Yoga session at Équilibre Yoga boutique studio in Paris"
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white max-w-md space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#E6EADB] font-medium block">
              Boutique Setting · 35 Rue Oberkampf
            </span>
            <p className="font-serif text-lg sm:text-xl font-medium">
              A balanced studio environment for mindful physical practice.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Comparing the Offerings: Group vs Private */}
      <section className="px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#68705E] font-semibold">
            Two Formats
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E201E] font-medium">
            Choose Your Way to Practice
          </h2>
          <p className="text-sm text-[#5B6056]">
            Whether you appreciate the communal rhythm of a group or the dedicated pace of a one-on-one session, both formats center on conscious movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Format 1: Group Sessions */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E7E1D4] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#F4F0E8] text-[#4E5646] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl text-[#202120] font-medium">
                Group Yoga Sessions
              </h3>
              <p className="text-sm text-[#555A51] leading-relaxed">
                Shared yoga sessions where practitioners follow unified sequences that guide the body through progressive stretching, steady movement, and restful closing postures.
              </p>
              <div className="space-y-2.5 pt-2 text-xs text-[#484D44]">
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#606954] mt-0.5 shrink-0" />
                  <span>Experience collective energy and steady class pacing</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#606954] mt-0.5 shrink-0" />
                  <span>Build routine and consistency in your weekly movement practice</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#606954] mt-0.5 shrink-0" />
                  <span>Set within our calm boutique studio space on Rue Oberkampf</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2ECE2] flex items-center justify-between">
              <button
                id="sessions-page-group-cta"
                onClick={() => onNavigate('group-sessions')}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#2D3228] hover:text-[#525D46] transition-colors cursor-pointer"
              >
                <span>View Group Sessions Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Format 2: Private Sessions */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E7E1D4] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#F4F0E8] text-[#4E5646] flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl text-[#202120] font-medium">
                Private Yoga Sessions
              </h3>
              <p className="text-sm text-[#555A51] leading-relaxed">
                One-on-one yoga practice in our calm studio. Designed for those seeking undivided attention, customized pacing, and a serene environment to explore movement and flexibility.
              </p>
              <div className="space-y-2.5 pt-2 text-xs text-[#484D44]">
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#606954] mt-0.5 shrink-0" />
                  <span>Individualized pacing tailored to your comfort and flexibility</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#606954] mt-0.5 shrink-0" />
                  <span>A quiet, private setting allowing for deep concentration</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#606954] mt-0.5 shrink-0" />
                  <span>Direct booking enquiry and schedule arrangement</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2ECE2] flex items-center justify-between">
              <button
                id="sessions-page-private-cta"
                onClick={() => onNavigate('private-sessions')}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#2D3228] hover:text-[#525D46] transition-colors cursor-pointer"
              >
                <span>View Private Sessions Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Informative Breakdown of Movement, Flexibility, and Relaxation */}
      <section className="px-6 max-w-7xl mx-auto space-y-16">
        <div className="border-t border-[#EAE3D6] pt-16">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
              The Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E201E] font-medium">
              Understanding Our Focus
            </h2>
            <p className="text-sm sm:text-base text-[#555951] leading-relaxed">
              We structure our sessions around practical movement science and mindful physical principles.
            </p>
          </div>

          <div className="space-y-12">
            {/* Section A: Movement */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F4EE] p-8 sm:p-10 rounded-3xl border border-[#E5DFD2]">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center space-x-2 text-[#4E5744] text-xs uppercase tracking-widest font-semibold">
                  <Compass className="w-4 h-4" />
                  <span>Pillar One</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#202120] font-medium">
                  Conscious Physical Movement
                </h3>
                <p className="text-sm text-[#575B53] leading-relaxed">
                  Movement in our studio emphasizes awareness of posture, balance, and weight distribution. Rather than fast-paced cardio or strained postures, transitions between poses are unhurried and fluid, encouraging you to observe how your joints, muscles, and breath synchronize.
                </p>
              </div>
              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E2DBD0] text-xs space-y-2 text-[#575B53]">
                <strong className="block text-sm font-serif text-[#202120]">Movement Highlights:</strong>
                <p>• Postural alignment and joint awareness</p>
                <p>• Fluid, intentional transitions between asanas</p>
                <p>• Balanced distribution of effort across the body</p>
              </div>
            </div>

            {/* Section B: Flexibility */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F4EE] p-8 sm:p-10 rounded-3xl border border-[#E5DFD2]">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center space-x-2 text-[#4E5744] text-xs uppercase tracking-widest font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Pillar Two</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#202120] font-medium">
                  Gentle & Progressive Flexibility
                </h3>
                <p className="text-sm text-[#575B53] leading-relaxed">
                  Flexibility is cultivated with patience. By giving the body sufficient time to settle into postures and using steady exhalations, muscular tension dissolves progressively. This non-coercive approach respects your unique anatomy and preserves joint integrity.
                </p>
              </div>
              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E2DBD0] text-xs space-y-2 text-[#575B53]">
                <strong className="block text-sm font-serif text-[#202120]">Flexibility Highlights:</strong>
                <p>• Lengthening of hamstrings, spine, and shoulders</p>
                <p>• Safe anatomical boundaries and no forced stretches</p>
                <p>• Gradual expansion of comfortable range of motion</p>
              </div>
            </div>

            {/* Section C: Relaxation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F4EE] p-8 sm:p-10 rounded-3xl border border-[#E5DFD2]">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center space-x-2 text-[#4E5744] text-xs uppercase tracking-widest font-semibold">
                  <Wind className="w-4 h-4" />
                  <span>Pillar Three</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#202120] font-medium">
                  Restorative Relaxation
                </h3>
                <p className="text-sm text-[#575B53] leading-relaxed">
                  Every yoga session concludes with dedicated relaxation to allow the physiological effects of movement to integrate. Through steady, conscious respiration and supported resting postures, practitioners experience a calm state of quiet rejuvenation.
                </p>
              </div>
              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E2DBD0] text-xs space-y-2 text-[#575B53]">
                <strong className="block text-sm font-serif text-[#202120]">Relaxation Highlights:</strong>
                <p>• Conscious breath pacing to calm the mind</p>
                <p>• Restorative floor-based settling postures</p>
                <p>• Decompression from urban Parisian tempo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTAs leading to Contact & Details */}
      <section className="px-6 max-w-5xl mx-auto text-center space-y-6 pt-6">
        <h2 className="font-serif text-3xl text-[#202120] font-medium">
          Enquire About Yoga Sessions at Équilibre Yoga
        </h2>
        <p className="text-sm text-[#575B53] max-w-xl mx-auto leading-relaxed">
          Reach out to our studio team at 35 Rue Oberkampf, 75011 Paris, or by telephone at +33 1 88 32 47 19 to discuss current session availability and find the right practice for you.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            id="sessions-contact-cta"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2E332A] hover:bg-[#464E3E] text-white text-xs uppercase tracking-widest font-semibold transition-calm cursor-pointer"
          >
            Get in Touch
          </button>
          <a
            id="sessions-phone-call"
            href={`tel:${BUSINESS.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#CDC5B6] bg-white text-[#202120] hover:bg-[#F3EFE9] text-xs uppercase tracking-widest font-semibold transition-calm"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </div>
  );
};
