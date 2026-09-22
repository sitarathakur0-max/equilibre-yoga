export type PageId =
  | 'home'
  | 'sessions'
  | 'group-sessions'
  | 'private-sessions'
  | 'about'
  | 'faq'
  | 'contact';

export interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewCount: number;
  about: string;
}

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
  description?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'group' | 'private' | 'practice' | 'relaxation' | 'studio';
}

export interface EnquiryFormData {
  name: string;
  email: string;
  sessionType: 'group' | 'private' | 'general';
  message: string;
}
