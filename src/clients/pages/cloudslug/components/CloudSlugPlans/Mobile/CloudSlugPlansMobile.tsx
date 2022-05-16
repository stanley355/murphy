import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import Link from 'next/link';

import { setPlanPriceDisplay } from '../../../modules/setPriceDisplay';
import { setPlanAnalyticDisplay } from '../../../modules/setPlanAnalyticDispla';
import { setPlanBandwidthDisplay } from '../../../modules/setPlanBandwidthDisplay';
import { setPlanBuildDisplay } from '../../../modules/setPlanBuildDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../modules/setPlanConcurrentBuildDisplay';
import styles from './CloudSlugPlansMobile.module.scss';

interface ICloudSlugPlans {
  plans: [{
    name: string,
    plan_url: string,
    price: number,
    analytic: boolean,
    bandwidth: number,
  }]
}

const CloudSlugPlansMobile = (props: ICloudSlugPlans) => {
  const { plans } = props;

  const PlanCardHead = ({ plan }: any) => {
    return (
      <div className={styles.cloudslug__plansmobile__card__head}>
        <div className={styles.cloudslug__plansmobile__card__head__texts}>
          <div className={styles.cloudslug__plansmobile__card__head__title}>{plan.name}</div>
          <div className={styles.cloudslug__plansmobile__card__head__price}><FaMoneyCheckAlt />
            {setPlanPriceDisplay(plan)}
          </div>
        </div>

        <Link href={plan.plan_url}>
          <a title={plan.name} className={styles.cloudslug__plansmobile__card__head__link}>Purchase</a>
        </Link>
      </div>
    )
  }

  const PlanCardBody =({plan}: any) => {
    return(
      <div className={styles.cloudslug__plansmobile__card__body}>
        <div>Analytic: {setPlanAnalyticDisplay(plan)}</div>
        <div>Bandwidth: {setPlanBandwidthDisplay(plan)}</div>
        <div>Build: {setPlanBuildDisplay(plan)}</div>
        <div>Concurrent Build: {setPlanConcurrentBuildDisplay(plan)}</div>
      </div>
    )
  }

  return (
    <div className={styles.cloudslug__plansmobile}>
      {plans.map((plan) =>
        <div key={plan.name} className={styles.cloudslug__plansmobile__card}>
          <PlanCardHead plan={plan} />
          <PlanCardBody plan={plan} />
        </div>)}
    </div>
  );
}

export default CloudSlugPlansMobile;
