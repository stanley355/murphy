import React from 'react';
import Router from 'next/router';

import styles from './PlanList.module.scss';
import PlanAccordion from '../PlanAccordion';
import PlanPrice from '../PlanPrice';
import { getPlanAvatarSrc } from '../../modules/getPlanAvatarSrc';
import { setPlanAnalyticDisplay } from '../../../../common/modules/setPlanAnalyticDisplay';
import { setPlanBandwidthDisplay } from '../../../../common/modules/setPlanBandwidthDisplay';
import { setPlanBuildDisplay } from '../../../../common/modules/setPlanBuildDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../../common/modules/setPlanConcurrentBuildDisplay';

interface IPlanList {
  list: [any],
  onCompareClick: (item: any) => void
}

const PlanList = (props: IPlanList) => {
  const { list, onCompareClick } = props;

  const PlanDetails = (props: any) => {
    const { plan } = props;
    return (
      <div className={styles.planList__card__details}>
        <ul>
          <li>Analytic: {setPlanAnalyticDisplay(plan)} </li>
          <li>Bandwidth: {setPlanBandwidthDisplay(plan)} </li>
          <li>Build: {setPlanBuildDisplay(plan)} </li>
          <li>Concurrent Build: {setPlanConcurrentBuildDisplay(plan)} </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.planList}>
      {list.map((item: any) =>
        <div className={styles.planList__card} key={item.name}>
          <div className={styles.planList__card__head}>
            <div className={styles.planList__card__head__imgContainer}>
              <img
                src={getPlanAvatarSrc(item.name)}
                alt={item.name}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.planList__card__head__details}>
              <div className={styles.planList__card__head__title}>{item.name}</div>
              <PlanPrice item={item} />
            </div>
          </div>
          <PlanAccordion title="See Description" body={item.description} />
          <PlanAccordion title="See Details" body={<PlanDetails plan={item} />} />
          <div className={styles.planList__card__cta}>
            <button
              type="button"
              className={styles.planList__card__cta__compare}
              onClick={() => onCompareClick(item)}
            >
              Compare
            </button>
            <button
              type="button"
              className={styles.planList__card__cta__purchase}
              onClick={() => Router.push(item.plan_url)}
            >
              Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlanList;