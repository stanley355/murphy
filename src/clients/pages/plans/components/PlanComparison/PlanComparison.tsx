import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Router from 'next/router';
import styles from './PlanComparison.module.scss';

import PlanPrice from '../PlanPrice';
import { getPlanAvatarSrc } from '../../modules/getPlanAvatarSrc';
import { setPlanBandwidthDisplay } from '../../../../common/modules/setPlanBandwidthDisplay';
import { setPlanBuildDisplay } from '../../../../common/modules/setPlanBuildDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../../common/modules/setPlanConcurrentBuildDisplay';
import { setPlanAnalyticDisplay } from '../../../../common/modules/setPlanAnalyticDisplay';

interface IPlanComparison {
  comparisonList: any[],
  onRemoveClick: (itemID: number) => void
}

const PlanComparison = (props: IPlanComparison) => {
  const { comparisonList, onRemoveClick } = props;

  return (
    <div className={styles.planComparison}>
      <div className={styles.planComparison__rowNames}>
        <div className={styles.planComparison__imgWrap}>-</div>
        <div>Plan Name</div>
        <div>Free Domain</div>
        <div>Domain Extension</div>
        <div>Analytics</div>
        <div>Bandwidth</div>
        <div>Build</div>
        <div>Concurrent Build</div>
        <div>Database Benefit</div>
        <div>Page Data</div>
        <div>Price</div>
        <div className={styles.planComparison__cta}>Checkout</div>
      </div>
      {comparisonList.length > 0 && comparisonList.map((item: any) =>
        < div className={styles.planComparison__rowValues}>
          <div className={styles.planComparison__imgWrap}>
            <Image
              src={getPlanAvatarSrc(item.name)}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.planComparison__title}>{item.name}</div>
          <div>{item.free_domain ? <FaCheck /> : <FaTimes />}</div>
          <div>{item.domain_extension ?? 'custom'}</div>
          <div>{setPlanAnalyticDisplay(item)}</div>
          <div>{setPlanBandwidthDisplay(item)}</div>
          <div>{setPlanBuildDisplay(item)}</div>
          <div>{setPlanConcurrentBuildDisplay(item)}</div>
          <div>{item.database_benefit ? <FaCheck /> : <FaTimes />}</div>
          <div>{item.page_data}</div>
          <PlanPrice item={item} />
          <div className={styles.planComparison__cta}>
            <button onClick={()=> Router.push(item.plan_url)}>Purchase</button>
            <button onClick={()=> onRemoveClick(item.id)}>Remove</button>
          </div>
        </div>)}
    </div>
  );
}

export default PlanComparison;