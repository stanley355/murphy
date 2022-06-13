import { fetchHostPlans } from '../../../../lib/api-fetcher/morphclouds/plans';
import { fetchAllPlans } from '../../../../lib/api-fetcher/morphclouds/plans';

const fetchPlanTemplateData = async (hostName: string, hostID: number) => {
  const hostPlans = await fetchHostPlans(hostName);
  const allPlans = await fetchAllPlans();
  const similarPlans = allPlans.length > 0 && allPlans.filter((plan: any) => plan.id !== hostID);

  return {
    hostPlans: hostPlans ?? [],
    similarPlans: similarPlans ?? [],
  };
};

export default fetchPlanTemplateData;
