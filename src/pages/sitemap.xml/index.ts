import { getServerSideSitemapIndex } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
import { slugify } from '../../utils/slugify';
import { fetchAllHostNames } from '../../lib/api-fetcher/morphclouds/hosts';

const { BASE_URL } = getConfig().publicRuntimeConfig;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const hostNames = await fetchAllHostNames();
  const hostingBranch =
    hostNames && hostNames.map((name: string) => `${BASE_URL}/hosting/${slugify(name)}`);

  const fields = [
    BASE_URL,
    `${BASE_URL}/hosting`,
    `${BASE_URL}/plans`,
    `${BASE_URL}/products`,
    ...hostingBranch,
  ];

  return getServerSideSitemapIndex(ctx, fields);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
