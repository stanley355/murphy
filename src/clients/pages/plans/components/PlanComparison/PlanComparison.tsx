import React, { useState } from 'react';
import Router from 'next/router';
import styles from './PlanComparison.module.scss';

import { planComparisonStore, removeComparison } from '../../modules/planComparisonState';
import { getPlanAvatarSrc } from '../../modules/getPlanAvatarSrc';
import { setPlanBandwidthDisplay } from '../../../../common/modules/setPlanBandwidthDisplay';
import { setPlanBuildDisplay } from '../../../../common/modules/setPlanBuildDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../../common/modules/setPlanConcurrentBuildDisplay';
import { setPlanPriceDisplay } from '../../../../common/modules/setPriceDisplay';
import { setPlanAnalyticDisplay } from '../../../../common/modules/setPlanAnalyticDisplay';


const PlanComparison = () => {
  const [comparisonList, setComparisonList] = useState(planComparisonStore.getState());

  return (
    <div className={styles.planComparison}>
      <table>
        <thead>
          <tr>
            <th>-</th>
            {comparisonList.map((item: any) =>
              <th key={item.name}>
                <img
                  src={getPlanAvatarSrc(item.name)}
                  alt={item.name}
                  width={75}
                  height={75}
                />
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>Plan Name</td>
            {comparisonList.map((item: any) =>
              <td key={item.name} className={styles.planComparison__title}>
                {item.name}
              </td>
            )}
          </tr>
          <tr>
            <td>Analytic</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {setPlanAnalyticDisplay(item)}
              </td>
            )}
          </tr>
          <tr>
            <td>Bandwidth</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {setPlanBandwidthDisplay(item)}
              </td>
            )}
          </tr>
          <tr>
            <td>Build</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {setPlanBuildDisplay(item)}
              </td>
            )}
          </tr>
          <tr>
            <td>Concurrent Build</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {setPlanConcurrentBuildDisplay(item)}
              </td>
            )}
          </tr>
          <tr>
            <td>Price</td>
            {comparisonList.map((item: any) =>
              <td key={item.name} className={styles.planComparison__price}>
                {setPlanPriceDisplay(item)}
              </td>
            )}
          </tr>
          <tr>
            <td>-</td>
            {comparisonList.map((item: any) =>
              <td key={item.name} className={styles.planComparison__cta}>
                <button type="button" onClick={() => Router.push(item.plan_url)}>
                  Purchase
                </button>
                <button type="button"
                  onClick={() => {
                    planComparisonStore.dispatch(removeComparison(item));
                    setComparisonList(planComparisonStore.getState());
                  }}>
                  Remove
                </button>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlanComparison;