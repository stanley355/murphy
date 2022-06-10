import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

import { slugify } from '../../utils/slugify';
import Skeleton from '../../clients/pages/hosting/components/Skeleton/Skeleton';
import PlanTemplate from '../../clients/pages/hosting/components/Templates/PlanTemplate';
import NewsCarousel from '../../components/Carousels/NewsCarousel';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { fetchAllHostNames } from '../../lib/api-fetcher/morphclouds/hosts';
import { fetchSingleHost } from '../../lib/api-fetcher/morphclouds/hosts';
import { fetchPlanTemplateData } from '../../clients/pages/hosting/modules/fetchPlanTemplateData';
import { fetchNews } from '../../lib/api-fetcher/external/newsapi';

interface HostingSlugInterface {
  hostData: any,
  hostPlansData: [any],
  similarPlansData: [any],
  newsData: {
    status: string,
    totalResults: number,
    articles: [any]
  }
}

const HostingSlug = (props: HostingSlugInterface) => {
  const { hostData, hostPlansData, similarPlansData, newsData } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <Skeleton />
  }

  return (
    <div className="hostingSlug">
      <div className="container">
        <PlanTemplate
          hostData={hostData}
          plansData={hostPlansData}
          similarPlansData={similarPlansData}
        />
        {newsData?.articles.length > 0 && <NewsCarousel
          carouselTitle="Related News"
          carouselItems={newsData.articles}
        />}
      </div>
    </div>
  );
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const hostName = params && capitalizeFirstLetter(params.slug);
  const hostData = await fetchSingleHost(hostName);
  const planTemplateData = await fetchPlanTemplateData(hostName, hostData.id);

  const newsData = params && await fetchNews(params.slug);

  return {
    props: {
      hostData: hostData ?? null,
      hostPlansData: planTemplateData.hostPlans ?? [],
      similarPlansData: planTemplateData.similarPlans ?? [],
      newsData: newsData ?? []
    },
    revalidate: 2 * 60 // 2 minutes
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const hostNames = await fetchAllHostNames();
  const pathList = hostNames && hostNames.map((hostName: string) => { return { params: { slug: slugify(hostName) } } });

  return {
    paths: pathList ?? [],
    fallback: true,
  }
}

export default HostingSlug;
