type NavbarElement = {
  name: string;
  link?: string;
};

export const navbar: NavbarElement[] = [
  { name: 'ABOUT', link: '#about' },
  { name: 'HOW TO', link: '#howto' },
  { name: 'FAQ', link: '#faq' },
];

type FaqElement = {
  id: number;
  question: string;
  answer: string;
};

export const faqContent: FaqElement[] = [
  {
    id: 1,
    question: 'What is a professional traffic permit?',
    answer:
      'Traffic permits are a requirement for conducting professional traffic.',
  },
  {
    id: 2,
    question: 'When is a professional traffic permit needed?',
    answer:
      'A professional traffic permit is required for businesses and individuals involved in commercial transportation of goods or passengers.',
  },
  {
    id: 3,
    question: 'Where to look for a traffic permit?',
    answer:
      'You can obtain information about traffic permits from local transport authorities or regulatory bodies overseeing commercial transportation.',
  },
  {
    id: 4,
    question:
      'Are there differences between a traffic permit and a professional traffic permit?',
    answer:
      'Yes, a professional traffic permit is specifically for commercial use, while a regular traffic permit might only cover non-commercial or personal transportation.',
  },
  {
    id: 5,
    question: 'How much does a commercial traffic permit cost for goods?',
    answer:
      'The cost of a commercial traffic permit varies based on location, type of business, and applicable regulations.',
  },
  {
    id: 6,
    question: 'How to check the traffic condition?',
    answer:
      'You can check traffic conditions through apps, websites, or services that provide real-time updates on traffic and road conditions.',
  },
  {
    id: 7,
    question: 'What are the requirements for a professional traffic permit?',
    answer:
      'Requirements may include completing a training course, passing a test, having appropriate vehicles, and meeting regulatory compliance standards.',
  },
  {
    id: 8,
    question: 'How to plug in for the traffic permit test?',
    answer:
      'You can register for the traffic permit test through authorized testing centers or online portals provided by transport authorities.',
  },
  {
    id: 9,
    question:
      'Are there professional traffic permit training courses at a distance?',
    answer:
      'Yes, many institutions offer remote or online training courses for professional traffic permits.',
  },
  {
    id: 10,
    question: 'How is the sample for a professional traffic permit booked?',
    answer:
      'You can book a sample test or practice session for a professional traffic permit through approved training centers or online resources.',
  },
];
