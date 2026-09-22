import { useEffect } from 'react';
import { PageId } from '../types';

interface SEOHeadProps {
  page: PageId;
}

const PAGE_METADATA: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'Équilibre Yoga | Boutique Yoga Studio in Paris (75011)',
    description:
      'Boutique yoga studio in Paris offering group and private sessions focused on movement, flexibility and relaxation at 35 Rue Oberkampf, 75011 Paris.',
  },
  sessions: {
    title: 'Yoga Sessions in Paris | Movement, Flexibility & Relaxation | Équilibre Yoga',
    description:
      'Explore group and private yoga sessions in Paris focused on movement, flexibility and relaxation at Équilibre Yoga on Rue Oberkampf.',
  },
  'group-sessions': {
    title: 'Group Yoga Sessions in Paris | Équilibre Yoga Studio 75011',
    description:
      'Practice yoga in a shared, supportive group setting in the 11th arrondissement of Paris. Movement, flexibility and relaxation at Équilibre Yoga.',
  },
  'private-sessions': {
    title: 'Private Yoga Sessions Paris | Individual Focus & Guidance | Équilibre Yoga',
    description:
      'Dedicated one-on-one yoga sessions in Paris. Attentive practice tailored to your pace, movement, flexibility and relaxation goals.',
  },
  about: {
    title: 'About Équilibre Yoga | Boutique Yoga & Wellness Studio Paris',
    description:
      'Discover Équilibre Yoga, a boutique yoga studio in Paris located at 35 Rue Oberkampf, dedicated to mindful movement, flexibility and calm relaxation.',
  },
  faq: {
    title: 'Yoga Practice FAQ | Équilibre Yoga Paris',
    description:
      'Frequently asked questions about group sessions, private sessions, movement, flexibility, and visiting our boutique yoga studio in Paris.',
  },
  contact: {
    title: 'Contact Équilibre Yoga | 35 Rue Oberkampf, 75011 Paris',
    description:
      'Get in touch with Équilibre Yoga. Call +33 1 88 32 47 19 or send an enquiry about our boutique yoga sessions in Paris.',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ page }) => {
  useEffect(() => {
    const meta = PAGE_METADATA[page] || PAGE_METADATA.home;
    document.title = meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta.description);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', meta.title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', meta.description);
    }
  }, [page]);

  return null;
};
