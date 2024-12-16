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
      text: 'Artikel',
      href: getPermalink('/articles'),
    },
    {
      text: 'Kegiatan',
      href: getPermalink('/events'),
    },
    {
      text: 'Hubungi Kami',
      href: getPermalink('/contact'),
    },
    {
      text: 'Repository',
      href: 'https://tim-pkm-4.pages.dev/',
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
          text: 'Kegiatan',
          href: getPermalink('/events'),
        },
        {
          text: 'Hubungi Kami',
          href: getPermalink('/contact'),
        },
        {
          text: 'Repository',
          href: 'https://tim-pkm-4.pages.dev/',
        },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    ...items,
  ],
};
