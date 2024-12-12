import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Tentang Kami',
      href: getPermalink('/about'),
    },
    {
      text: 'Artikel',
      href: getPermalink('/articles'),
    },
    {
      text: 'Events',
      href: getPermalink('/events'),
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
      title: 'Menu',
      links: [
        {
          text: 'Home',
          href: getPermalink('/'),
        },
        {
          text: 'Tentang Kami',
          href: getPermalink('/about'),
        },
        {
          text: 'Artikel',
          href: getPermalink('/articles'),
        },
        {
          text: 'Events',
          href: getPermalink('/events'),
        },
        {
          text: 'Hubungi Kami',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/+6289611284382' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sentrakreasi.ukm/' },
  ],
};
