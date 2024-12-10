import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Tentang Kami',
      href: getPermalink('/'),
    },
    {
      text: 'Artikel',
      href: getPermalink('/'),
    },
    {
      text: 'Events',
      href: getPermalink('/tags'),
    },
    {
      text: 'Hubungi Kami',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Home', href: '' },
        { text: 'Tentang Kami', href: '' },
        { text: 'Artikel', href: '#' },
        { text: 'Events', href: '#' },
        { text: 'Hubungi Kami', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sentrakreasi.ukm/' },
  ],
};
