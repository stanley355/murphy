import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { slugify } from '../../utils/slugify';
import Skeleton from '../../clients/pages/hosting/components/Skeleton/Skeleton';
import PlanTemplate from '../../clients/pages/hosting/components/Templates/PlanTemplate';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';


import { fetchSingleHost } from '../../lib/api-fetcher/morphclouds/hosts';
import { fetchPlanTemplateData } from '../../clients/pages/hosting/modules/fetchPlanTemplateData';
import { fetchAllHostNames } from '../../lib/api-fetcher/morphclouds/hosts';

interface HostingSlugInterface {
  hostData: any,
  hostPlansData: [any],
  similarPlansData: [any],
}

const HostingSlug = (props: HostingSlugInterface) => {
  const { hostData, hostPlansData, similarPlansData } = props;
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
      </div>
    </div>
  );
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const hostName = params && capitalizeFirstLetter(params.slug);
  const hostData = await fetchSingleHost(hostName);
  const planTemplateData = await fetchPlanTemplateData(hostName, hostData.id);

  // let hostProducts = [];
  // let allProductsData = [];

  // if (hostData && hostData.template === 'Product') {
  //   hostProducts = await fetchHostProducts(hostName);
  //   allProductsData = await fetchAllProducts();
  // }

  return {
    props: {
      hostData: hostData ?? null,
      hostPlansData: planTemplateData.hostPlans ?? [],
      similarPlansData: planTemplateData.similarPlans ?? [],
      // hostProducts: hostProducts,
      // allProducts: allProductsData,
    },
    revalidate: 2 * 60 // 2 minutes
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const hostNames = await fetchAllHostNames();
  const pathList = hostNames && hostNames.map((hostName: string) => { return { params: { slug: slugify(hostName) } } });
  // const pathList = [
  //   { params: { slug: 'vercel' } },
  //   { params: { slug: 'heroku' } },
  // ]

  return {
    paths: pathList ?? [],
    fallback: true,
  }
}

export default HostingSlug;
