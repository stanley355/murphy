import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

import { slugify } from '../../utils/slugify';
import HostMeta from '../../clients/pages/hosting/components/HostMeta';
import Skeleton from '../../clients/pages/hosting/components/Skeleton/Skeleton';
import PlanTemplate from '../../clients/pages/hosting/components/Templates/PlanTemplate';
import ProductTemplate from '../../clients/pages/hosting/components/Templates/ProductTemplate';
import NewsCarousel from '../../components/Carousels/NewsCarousel';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { fetchAllHostNames } from '../../lib/api-fetcher/morphclouds/hosts';
import { fetchSingleHost } from '../../lib/api-fetcher/morphclouds/hosts';
import fetchPlanTemplateData from '../../clients/pages/hosting/modules/fetchPlanTemplateData';
import fetchProductTemplateData from '../../clients/pages/hosting/modules/fetchProductTemplateData';

import { fetchNews } from '../../lib/api-fetcher/external/newsapi';

interface HostingSlugInterface {
  hostData: any,
  hostPlansData: [any],
  similarPlansData: [any],
  hostProductsData: [any],
  similarProductsData: [any],
  newsData: {
    status: string,
    totalResults: number,
    articles: [any]
  }
}

const HostingSlug = (props: HostingSlugInterface) => {
  const { hostData, hostPlansData, similarPlansData, hostProductsData, similarProductsData, newsData } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <Skeleton />
  }

  const renderTemplate = (templateName: string) => {
    switch (templateName) {
      case "Plan":
        return <PlanTemplate
          hostData={hostData}
          plansData={hostPlansData}
          similarPlansData={similarPlansData}
        />;
      case "Product":
        return <ProductTemplate
          hostData={hostData}
          productList={hostProductsData}
          similarProductsData={similarProductsData}
        />
      default:
        return <div>404 Not Found</div>
    }
  }

  return (
    <div className="hostingSlug">
      <HostMeta hostData={hostData} />
      <div className="container">
        {renderTemplate(hostData.template)}
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
  const planTemplateData = hostData.template === "Plan" ? await fetchPlanTemplateData(hostName, hostData.id) : null;
  const productTemplateData = hostData.template === "Product" ? await fetchProductTemplateData(hostName, hostData.id) : null;
  const newsData = params && await fetchNews(params.slug);

  return {
    props: {
      hostData: hostData ?? null,
      hostPlansData: planTemplateData?.hostPlans ?? [],
      similarPlansData: planTemplateData?.similarPlans ?? [],
      hostProductsData: productTemplateData?.hostProducts ?? [],
      similarProductsData: productTemplateData?.similarProducts ?? [],
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
    fallback: false,
  }
}

export default HostingSlug;
