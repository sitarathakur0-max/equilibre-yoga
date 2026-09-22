import { BusinessInfo, FAQItem, NavItem } from '../types';

export const BUSINESS: BusinessInfo = {
  name: 'Équilibre Yoga',
  category: 'Yoga & Wellness Studio',
  address: '35 Rue Oberkampf, 75011 Paris, France',
  street: '35 Rue Oberkampf',
  postalCode: '75011',
  city: 'Paris',
  country: 'France',
  phone: '+33 1 88 32 47 19',
  phoneRaw: '+33188324719',
  rating: 4.9,
  reviewCount: 27,
  about: 'Boutique yoga studio offering group and private sessions focused on movement, flexibility and relaxation.',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'sessions', label: 'Yoga Sessions', path: '/sessions', description: 'Overview of our practice offerings' },
  { id: 'group-sessions', label: 'Group Sessions', path: '/group-sessions', description: 'Shared collective practice' },
  { id: 'private-sessions', label: 'Private Sessions', path: '/private-sessions', description: 'Dedicated one-on-one focus' },
  { id: 'about', label: 'About', path: '/about', description: 'Our Parisian boutique studio' },
  { id: 'faq', label: 'FAQ', path: '/faq', description: 'Common practice questions' },
  { id: 'contact', label: 'Contact', path: '/contact', description: 'Reach out to our studio' },
];

/**
 * Curated authentic photography (Pexels verified direct assets, strictly NO Unsplash)
 * Restrained selection: 1 meaningful image per major visual section.
 */
export const IMAGES = {
  // Peaceful boutique yoga studio interior with soft natural daylight & clean floor
  heroStudio: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // Group yoga session practicing alignment in an airy studio
  groupSession: 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // Individual private yoga focus with mindful posture and stretching
  privateSession: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // Seated stretching demonstrating natural flexibility and stillness
  flexibilityDetail: 'https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // Mindful relaxation, breathwork and restorative posture
  relaxationCalm: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // Minimalist studio interior ambiance with natural materials
  studioSpace: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'group',
    question: 'What is the experience like in group yoga sessions?',
    answer:
      'Our group sessions provide a balanced, collective setting where practitioners move together through sequences focused on movement, flexibility, and relaxation. The atmosphere is calm, supportive, and designed to allow each person to honor their own rhythm while sharing the mindful focus of the room.',
  },
  {
    category: 'group',
    question: 'How do I enquire about current group session times and availability?',
    answer:
      'Because session availability is carefully maintained to ensure a comfortable boutique environment, please contact Équilibre Yoga directly by telephone at +33 1 88 32 47 19 or submit an online enquiry form to receive our latest schedule details.',
  },
  {
    category: 'private',
    question: 'Why choose a private yoga session?',
    answer:
      'Private yoga sessions at Équilibre Yoga offer an individual practice setting tailored to your personal pace. With dedicated space and focused attention on your movement, flexibility, and relaxation goals, private sessions allow for a deeply attentive and quiet experience.',
  },
  {
    category: 'private',
    question: 'Can private sessions be scheduled for specific goals?',
    answer:
      'Yes. Whether you wish to spend more time working on gentle stretching, developing deeper bodily awareness, or cultivating breathing and relaxation, private sessions provide the space to focus specifically on what you need.',
  },
  {
    category: 'practice',
    question: 'How does Équilibre Yoga approach movement and flexibility?',
    answer:
      'We approach movement and flexibility as progressive, mindful practices rather than forced athletic performance. Poses and transitions are explored with attention to alignment, joint comfort, and breath, allowing the body to open and release tension naturally over time.',
  },
  {
    category: 'relaxation',
    question: 'What role does relaxation play in the sessions?',
    answer:
      'Relaxation is a foundational pillar of every session at Équilibre Yoga. By pairing continuous conscious breathing with restorative pacing and settling postures, sessions help soothe the nervous system and create mental quiet amidst the fast pace of Parisian life.',
  },
  {
    category: 'studio',
    question: 'Where is Équilibre Yoga located in Paris?',
    answer:
      'Our studio is situated at 35 Rue Oberkampf, 75011 Paris, France, in the vibrant Oberkampf neighborhood of the 11th arrondissement. The studio offers a calm, peaceful haven just steps from the lively streets of Paris.',
  },
  {
    category: 'studio',
    question: 'How should I prepare for my visit or enquiry?',
    answer:
      'We recommend reaching out ahead of your visit so we can provide current session details and answer any questions. You can call us directly at +33 1 88 32 47 19 or use the contact form on this website.',
  },
];
