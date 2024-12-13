import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

import { contentfulClient } from '~/lib/contentful';
import type { EntryFieldTypes } from 'contentful';

interface KontakType {
  contentTypeId: string;
  fields: {
    jenisKontak: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Text;
    linkKontak: EntryFieldTypes.Text;
  };
}

// Fetch the entry and include linked assets
const entries = await contentfulClient.getEntries<KontakType>({
  content_type: 'contactsFooterType',
});

const items = entries.items.map((item) => {
  return {
    ariaLabel: item.fields.jenisKontak,
    icon: item.fields.icon,
    href: item.fields.linkKontak,
    target: '_blank',
  };
});

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
      text: 'Artikels',
      href: getPermalink('/article'),
    },
    {
      text: 'Events',
      href: getPermalink('/event'),
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
          text: 'Artikels',
          href: getPermalink('/article'),
        },
        {
          text: 'Events',
          href: getPermalink('/event'),
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
    ...items,
  ],
};
