import React from 'react';
import { GetStaticProps } from 'next';
import PlanMeta from '../../clients/pages/plans/components/PlanMeta';
import PlanTabs from '../../clients/pages/plans/components/PlanTabs';
import { fetchAllPlans } from '../../lib/api-fetcher/morphclouds/plans';

interface PlansInterface {
  planList: [any]
}

const Plans = (props: PlansInterface) => {
  const { planList } = props;

  return (
    <div className="container">
      <PlanMeta />
      <div className="plans">
        <h1>Web Hosting Plans</h1>
        <div>Select or Compare Plans suiting your Needs</div>
        {planList && <PlanTabs planList={planList}/>}
      </div>
    </div>

  )
}


export const getStaticProps: GetStaticProps = async () => {
  const allPlans = await fetchAllPlans();

  return {
    props: {
      planList: allPlans
    }
  }
}


export default Plans;