import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Skeleton from '../../clients/pages/hosting/components/Skeleton/Skeleton';
import PlanTemplate from '../../clients/pages/hosting/components/Templates/PlanTemplate';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

import { fetchSingleHost } from '../../lib/api-fetcher/morphclouds/hosts';
import { fetchHostPlans } from '../../lib/api-fetcher/morphclouds/plans';
import { fetchAllPlans } from '../../lib/api-fetcher/morphclouds/plans';
import { fetchAllHostNames } from '../../lib/api-fetcher/morphclouds/hosts';

interface HostingSlugInterface {
  hostData: any,
  hostPlans: any,
  allPlansData: any,
}

const HostingSlug = (props: HostingSlugInterface) => {
  const { hostData, hostPlans, allPlansData } = props;
  const router = useRouter();

  return (
    <div className="hostingSlug">
      <div className="container">
        {/* <PlanTemplate hostData={hostData} /> */}
        <Skeleton />
      </div>
    </div>
  );
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const hostName = params && capitalizeFirstLetter(params.slug);
  const hostData = await fetchSingleHost(hostName);

  let hostPlans = [];
  let allPlansData = [];

  if (hostData && hostData.template === 'Plan') {
    hostPlans = await fetchHostPlans(hostName);
    allPlansData = await fetchAllPlans();
  }

  // let hostProducts = [];
  // let allProductsData = [];

  // if (hostData && hostData.template === 'Product') {
  //   hostProducts = await fetchHostProducts(hostName);
  //   allProductsData = await fetchAllProducts();
  // }

  return {
    props: {
      hostData: hostData ?? null,
      hostPlans: hostPlans,
      allPlans: allPlansData,
      // hostProducts: hostProducts,
      // allProducts: allProductsData,
    },
    revalidate: 2 * 60 // 2 minutes
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const hostNames = await fetchAllHostNames();
  // const pathList = hostNames && hostNames.map((hostName: string) => { return { params: { slug: slugify(hostName) } } });
  const pathList = [
    { params: { slug: 'vercel' } },
    { params: { slug: 'heroku' } },
  ]

  return {
    paths: pathList ?? [],
    fallback: true,
  }
}

export default HostingSlug;
