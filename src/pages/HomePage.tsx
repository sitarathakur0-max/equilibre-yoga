import React from 'react';
import { PageId } from '../types';
import { BUSINESS, IMAGES } from '../data/content';
import { ArrowRight, Star, Check, Phone, Sparkles, Shield, Heart } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 lg:pt-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Google Rating Badge */}
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#F3EFE9] border border-[#E4DDD1] text-xs text-[#393C37]">
              <div className="flex text-[#D9A354]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D9A354] stroke-[#D9A354]" />
                ))}
              </div>
              <span className="font-semibold text-[#202120]">{BUSINESS.rating}/5</span>
              <span className="text-[#6D716A]">· {BUSINESS.reviewCount} Google Reviews</span>
              <span className="hidden sm:inline text-[#B3ADA4]">|</span>
              <span className="hidden sm:inline text-[#4E5646] font-medium">Paris 11ème</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1F211F] leading-[1.12]">
                Move. Breathe. <br />
                <span className="italic font-normal text-[#5A634F]">Find Your Balance.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#535750] leading-relaxed max-w-2xl font-light">
                Boutique yoga sessions in Paris focused on movement, flexibility and relaxation, with group and private options.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                id="hero-explore-sessions-btn"
                onClick={() => onNavigate('sessions')}
                className="px-7 py-3.5 rounded-full bg-[#2C3128] hover:bg-[#434A3C] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2.5 transition-calm shadow-sm cursor-pointer"
              >
                <span>Explore Sessions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-get-in-touch-btn"
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-full border border-[#D5CEC2] hover:bg-[#F2ECE2] text-[#242722] text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-calm cursor-pointer"
              >
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Subtle local Paris address note */}
            <div className="pt-6 border-t border-[#EAE4D9] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#6B7067] space-y-2 sm:space-y-0">
              <p>
                <strong className="font-semibold text-[#252823]">35 Rue Oberkampf</strong>, 75011 Paris
              </p>
              <a
                id="hero-phone-call"
                href={`tel:${BUSINESS.phoneRaw}`}
                className="text-[#4E5646] hover:text-[#252823] font-medium transition-colors"
              >
                Direct: {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Visual Hero Image: Paris Boutique Studio Space */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE3D6] shadow-sm bg-[#F0EBE1] aspect-4/5 lg:aspect-3/4">
              <img
                src={IMAGES.heroStudio}
                alt="Équilibre Yoga studio atmosphere in Paris showing mindful stretching and calm natural light"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20231E]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FAF8F5]/90 backdrop-blur-md border border-[#FFFFFF]/60 text-xs space-y-1">
                <span className="font-serif text-sm font-semibold text-[#222521] block">
                  Boutique Studio Atmosphere
                </span>
                <p className="text-[#5B6057]">
                  A serene, unhurried space for mindful practice in the heart of the 11th arrondissement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE FOUNDATIONAL PILLARS: MOVEMENT, FLEXIBILITY, RELAXATION */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#6A715F] font-semibold">
            Our Core Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#202120] font-medium">
            Rooted in Movement, Flexibility & Relaxation
          </h2>
          <p className="text-sm sm:text-base text-[#575B53] leading-relaxed">
            Every session at Équilibre Yoga is shaped around these three natural elements, cultivating balance without unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Movement */}
          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#EAE5DA] shadow-2xs space-y-4 hover:border-[#D0C8BA] transition-calm">
            <div className="w-10 h-10 rounded-full bg-[#F3EFE9] text-[#4E5646] flex items-center justify-center font-serif text-lg font-medium">
              01
            </div>
            <h3 className="font-serif text-2xl text-[#202120] font-medium">
              Movement
            </h3>
            <p className="text-sm text-[#5B6056] leading-relaxed">
              Mindful physical sequences that encourage natural coordination, healthy posture, and seamless flow. Movement is approached with awareness rather than strain, allowing you to re-establish connection with your physical body.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#68705D] font-medium block">
                Fluid Alignment · Conscious Motion
              </span>
            </div>
          </div>

          {/* Pillar 2: Flexibility */}
          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#EAE5DA] shadow-2xs space-y-4 hover:border-[#D0C8BA] transition-calm">
            <div className="w-10 h-10 rounded-full bg-[#F3EFE9] text-[#4E5646] flex items-center justify-center font-serif text-lg font-medium">
              02
            </div>
            <h3 className="font-serif text-2xl text-[#202120] font-medium">
              Flexibility
            </h3>
            <p className="text-sm text-[#5B6056] leading-relaxed">
              Gradual, progressive lengthening that releases accumulated stiffness in the spine, hips, and shoulders. Through patient holding and breath integration, your natural range of motion expands steadily and comfortably.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#68705D] font-medium block">
                Progressive Length · Joint Ease
              </span>
            </div>
          </div>

          {/* Pillar 3: Relaxation */}
          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#EAE5DA] shadow-2xs space-y-4 hover:border-[#D0C8BA] transition-calm">
            <div className="w-10 h-10 rounded-full bg-[#F3EFE9] text-[#4E5646] flex items-center justify-center font-serif text-lg font-medium">
              03
            </div>
            <h3 className="font-serif text-2xl text-[#202120] font-medium">
              Relaxation
            </h3>
            <p className="text-sm text-[#5B6056] leading-relaxed">
              Quiet periods of intentional calm that settle the breath and calm the nervous system. An opportunity to pause the bustle of the city, release tension, and restore internal equilibrium before stepping back outside.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#68705D] font-medium block">
                Nervous System Rest · Mental Stillness
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GROUP & PRIVATE SESSIONS OVERVIEW */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Group Yoga Sessions */}
          <div className="rounded-3xl bg-[#FFFFFF] border border-[#E8E2D6] overflow-hidden flex flex-col justify-between group hover:shadow-xs transition-calm">
            <div className="p-8 sm:p-10 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md bg-[#F2EDE5] text-[#4E5646] text-xs font-semibold uppercase tracking-wider">
                Shared Practice
              </div>
              <h3 className="font-serif text-3xl text-[#202120] font-medium">
                Group Yoga Sessions
              </h3>
              <p className="text-sm text-[#575B53] leading-relaxed">
                Experience the collective focus and gentle rhythm of practicing alongside others in a peaceful studio setting. Group sessions guide participants through purposeful movement, flexibility exercises, and restorative relaxation.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs text-[#484C44]">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#606954] shrink-0" />
                  <span>Shared energy with balanced, attentive pacing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#606954] shrink-0" />
                  <span>Emphasis on physical movement, lengthening, and calm</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#606954] shrink-0" />
                  <span>Held in our boutique Paris studio at 35 Rue Oberkampf</span>
                </li>
              </ul>
            </div>

            <div className="p-8 sm:p-10 pt-0">
              <button
                id="home-learn-group-btn"
                onClick={() => onNavigate('group-sessions')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#30352A] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#464D3E] transition-calm cursor-pointer"
              >
                <span>Discover Group Sessions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Private Yoga Sessions */}
          <div className="rounded-3xl bg-[#FAF7F2] border border-[#E5DFD2] overflow-hidden flex flex-col justify-between group hover:shadow-xs transition-calm">
            <div className="p-8 sm:p-10 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md bg-[#EBE4D8] text-[#454D3D] text-xs font-semibold uppercase tracking-wider">
                Dedicated Focus
              </div>
              <h3 className="font-serif text-3xl text-[#202120] font-medium">
                Private Yoga Sessions
              </h3>
              <p className="text-sm text-[#575B53] leading-relaxed">
                Private sessions provide an individual practice setting tailored entirely to your own pace. With dedicated space and focused attention on your movement, flexibility, and relaxation goals, private practice offers deep quiet and care.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs text-[#484C44]">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#606954] shrink-0" />
                  <span>One-on-one studio environment dedicated to your practice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#606954] shrink-0" />
                  <span>Practice at your natural pace with individual guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#606954] shrink-0" />
                  <span>Direct enquiry and scheduling directly with our studio</span>
                </li>
              </ul>
            </div>

            <div className="p-8 sm:p-10 pt-0">
              <button
                id="home-learn-private-btn"
                onClick={() => onNavigate('private-sessions')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full border border-[#CCC4B4] bg-[#FFFFFF] text-[#242721] text-xs uppercase tracking-widest font-semibold hover:bg-[#F2EDE5] transition-calm cursor-pointer"
              >
                <span>Discover Private Sessions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BOUTIQUE STUDIO EXPERIENCE IN PARIS */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#F4EFE8] border border-[#E3DBD0] p-8 md:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Section Photography */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-[#DDD5C7] shadow-xs aspect-4/3 lg:aspect-square">
                <img
                  src={IMAGES.flexibilityDetail}
                  alt="Mindful movement and flexibility practice at Équilibre Yoga in Paris"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Content description */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#636B58] font-semibold">
                  35 Rue Oberkampf · Paris 11
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1E201E] font-medium leading-snug">
                  The Boutique Studio Experience
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#52574F] leading-relaxed">
                Situated on Rue Oberkampf in Paris’s historic 11th arrondissement, Équilibre Yoga is designed as an intimate boutique sanctuary. Away from the noise of crowded fitness halls, our studio offers a calm, spacious setting where movement, breathing, and relaxation take precedence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-[#202120] font-semibold">
                    Calm, Refined Space
                  </h3>
                  <p className="text-xs text-[#5E635A] leading-relaxed">
                    Thoughtfully designed with natural materials and open breathing room to encourage stillness and concentration.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-[#202120] font-semibold">
                    Authentic Parisian Setting
                  </h3>
                  <p className="text-xs text-[#5E635A] leading-relaxed">
                    Easily accessible in the 11th arrondissement of Paris, making consistent practice part of your routine.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  id="home-about-studio-btn"
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-full bg-[#2C3127] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#434A3A] transition-calm cursor-pointer"
                >
                  About the Studio
                </button>
                <a
                  id="home-call-studio-btn"
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="px-6 py-3 rounded-full border border-[#D0C7B8] bg-white text-[#292D26] text-xs uppercase tracking-wider font-semibold hover:bg-[#F2ECE2] transition-calm inline-flex items-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5C6452]" />
                  <span>Call {BUSINESS.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MINDFUL MOVEMENT IN EVERYDAY LIFE */}
      <section className="px-6 max-w-5xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#666D5B] font-semibold">
          Creating Space
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1E201E] font-medium leading-snug">
          The Value of Mindful Movement in Paris
        </h2>
        <p className="text-sm sm:text-base text-[#565A52] leading-relaxed max-w-3xl mx-auto">
          Urban life in Paris is invigorating, but daily demands often create physical tension and mental fatigue. Carving out dedicated time for mindful yoga practice restores balance, softens tight muscles, and creates mental clarity through steady breathing and focused movement.
        </p>
        <div className="pt-4">
          <button
            id="home-read-faq-btn"
            onClick={() => onNavigate('faq')}
            className="text-xs uppercase tracking-widest font-semibold text-[#48503E] hover:text-[#1F221B] underline underline-offset-6 transition-colors cursor-pointer"
          >
            Read Answers to Common Practice Questions →
          </button>
        </div>
      </section>

      {/* 6. FINAL ENQUIRY CTA SECTION */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#262B23] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 border border-[#3C4436]">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#353C31] text-[#BDC4B6] text-xs uppercase tracking-widest font-semibold">
              Begin Your Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Ready to Explore Group or Private Yoga Sessions?
            </h2>
            <p className="text-sm sm:text-base text-[#CCD2C6] leading-relaxed max-w-2xl mx-auto font-light">
              Contact Équilibre Yoga at 35 Rue Oberkampf, 75011 Paris. Reach out to ask about session availability or discuss whether group or private practice is right for you.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                id="home-final-contact-btn"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FAF7F2] text-[#22261E] text-xs uppercase tracking-widest font-semibold hover:bg-[#EAE4D8] transition-calm cursor-pointer"
              >
                Send Studio Enquiry
              </button>
              <a
                id="home-final-phone-link"
                href={`tel:${BUSINESS.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#4E5746] text-[#FAF7F2] hover:bg-[#343B2F] text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center space-x-2 transition-calm"
              >
                <Phone className="w-3.5 h-3.5 text-[#AAB4A0]" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>

            <p className="text-xs text-[#8E9687] pt-2">
              Boutique Yoga Studio · 35 Rue Oberkampf, 75011 Paris · 4.9/5 Google Rating (27 Reviews)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
