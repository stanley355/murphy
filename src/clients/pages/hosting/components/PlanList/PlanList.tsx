import React from 'react';

import styles from './PlanList.module.scss';
import { setPlanAnalyticDisplay } from '../../../../common/modules/setPlanAnalyticDisplay';
import { setPlanBandwidthDisplay } from '../../../../common/modules/setPlanBandwidthDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../../common/modules/setPlanConcurrentBuildDisplay';
import { setPlanBuildDisplay } from '../../../../common/modules/setPlanBuildDisplay';
import { setPlanPriceDisplay } from '../../../../common/modules/setPriceDisplay';
interface PlanListInterface {
  plans: [any]
}

const PlanList = (props: PlanListInterface) => {
  const { plans } = props;


  const PlanCard = (props: any) => {
    const { plan, key } = props;

    return (
      <div key={key} className={styles.planList__card}>
        <div className={styles.planList__card__head}>
          <span>{plan.name}</span>
          <span>{setPlanPriceDisplay(plan)}</span>
        </div>
        <div className={styles.planList__card__body}>
          <div className={styles.planList__card__description}>{plan.description}</div>
          <div>
            <div className={styles.planList__card__spec}>Analytics: {setPlanAnalyticDisplay(plan)} </div>
            <div className={styles.planList__card__spec}>Bandwidth: {setPlanBandwidthDisplay(plan)} </div>
            <div className={styles.planList__card__spec}>Build: {setPlanBuildDisplay(plan)} </div>
            <div className={styles.planList__card__spec}>Concurrent Build: {setPlanConcurrentBuildDisplay(plan)} </div>
          </div>
        </div>
        <button className={styles.planList__card__cta}>Check Out</button>
      </div>
    );
  }

  return (
    <div className={styles.planList}>
      <h2 className={styles.planList__title}>Hosting Plans</h2>
      {plans.length > 1 ? "" : plans.map((plan: any) => <PlanCard plan={plan} key={plan.name} />)}
    </div>
  )
}

export default PlanList;