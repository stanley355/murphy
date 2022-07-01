import React from 'react';
import styles from './SimplePlanList.module.scss';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import useResponsive from '../../../../../utils/hooks/useResponsive';

import { setPlanAnalyticDisplay } from '../../../../common/modules/setPlanAnalyticDisplay';
import { setPlanBandwidthDisplay } from '../../../../common/modules/setPlanBandwidthDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../../common/modules/setPlanConcurrentBuildDisplay';
import { setPlanBuildDisplay } from '../../../../common/modules/setPlanBuildDisplay';
import { setPlanPriceDisplay } from '../../../../common/modules/setPriceDisplay';
interface PlanListInterface {
  plans: [any]
}

const SimplePlanList = (props: PlanListInterface) => {
  const { plans } = props;
  const { isDesktop } = useResponsive();

  const PlanCards = () => {

    return <>
      {plans.map(
        (plan: any) =>
          <div className={styles.planList__card} key={plan.name}>
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
            <button
              className={styles.planList__card__cta}
              onClick={() => window.location.href = plan.plan_url}
            >
              Check Out
            </button>
          </div>
      )}
    </>;
  }

  const PlanTable = (props: any) => {
    const { planList } = props;

    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Analytic</th>
            <th>Bandwidth</th>
            <th>Build</th>
            <th>Concurrent Build</th>
            <th>Price</th>
            <th></th>
          </tr>
          {planList.map((plan: any) => {
            return (
              <tr key={plan.name}>
                <td>{plan.name}</td>
                <td>{setPlanAnalyticDisplay(plan)}</td>
                <td>{setPlanBandwidthDisplay(plan)}</td>
                <td>{setPlanBuildDisplay(plan)}</td>
                <td>{setPlanConcurrentBuildDisplay(plan)} </td>
                <td>{setPlanPriceDisplay(plan)}</td>
                <td>
                  <button
                    onClick={() => window.location.href = plan.plan_url}
                  >
                    <FaArrowAltCircleRight />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  const PlanDisplay = () => {
    if (isDesktop) {
      if (plans.length > 1) {
        return <PlanTable planList={plans} />;
      }
      return <PlanCards />
    }
    return <PlanCards />
  }

  return (
    <div className={styles.planList}>
      <h2 className={styles.planList__title}>Hosting Plans</h2>
      <PlanDisplay />
    </div>
  )
}

export default SimplePlanList;