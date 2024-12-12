import { createClient } from 'contentful';

const space = import.meta.env.CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.DEV
  ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN || process.env.CONTENTFUL_PREVIEW_TOKEN
  : import.meta.env.CONTENTFUL_DELIVERY_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN;

if (!space || !accessToken) {
  throw new Error("Missing Contentful configuration: Ensure environment variables are set.");
}

export const contentfulClient = createClient({
  space,
  accessToken,
  host: import.meta.env.DEV
    ? 'preview.contentful.com'
    : 'cdn.contentful.com',
});

export function getContentfulClient() {
  const space = import.meta.env.CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_SPACE_ID;
  const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space || !accessToken) {
    throw new Error("Missing Contentful configuration: Ensure environment variables are set.");
  }

  return createClient({ space, accessToken });
}

