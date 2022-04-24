import React from 'react';

import { setPlanPriceDisplay } from '../../../modules/setPlanPriceDisplay';
import { setPlanBandwidthDisplay } from '../../../modules/setPlanBandwidthDisplay';
import { setPlanBuildDisplay } from '../../../modules/setPlanBuildDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../modules/setPlanConcurrentBuildDisplay';
import { setPlanAnalyticDisplay } from '../../../modules/setPlanAnalyticDispla';
import styles from './CloudSlugPlansDesktop.module.scss';

interface ICloudSlugPlans {
  plans: [{
    name: string,
    plan_url: string,
    price: number,
    price_unit: string,
    price_timeunit: string,
    price_desc: string,
    analytic: boolean,
    analytic_price: number,
    analytic_unit: string,
    analytic_timeunit: string,
    analytic_desc: string,
    build: number,
    build_unit: string,
    build_timeunit: string,
    build_desc: string,
    bandwidth: number,
    bandwidth_unit: string,
    bandwidth_timeunit: string,
    bandwidth_desc: string,
    concurrent_build: number,
    concurrent_build_unit: string,
    concurrent_build_timeunit: string,
    concurrent_build_desc: string,
  }]
}

const CloudSlugPlansDesktop = (props: ICloudSlugPlans) => {
  const { plans } = props;

  console.log(plans[0]);

  return (
    <div className={styles.cloudslug__plansdesktop}>
      <table>
        <tr>
          <th>Plan Name:</th>
          {plans.map((plan) => <th>{plan.name}</th>)}
        </tr>
        <tr>
          <td>Price: </td>
          {plans.map((plan) =>
            <td>
              <div>{setPlanPriceDisplay(plan)}</div>
              <div>{plan.price_desc !== "custom" ? plan.price_desc : ""}</div>
            </td>)}
        </tr>
        <tr>
          <td>Bandwidth: </td>
          {plans.map((plan) =>
            <td>
              <div>{setPlanBandwidthDisplay(plan)}</div>
              <div>{plan.bandwidth_desc !== "custom" ? plan.bandwidth_desc : ""}</div>
            </td>)}
        </tr>
        <tr>
          <td>Build: </td>
          {plans.map((plan) =>
            <td>
              <div>{setPlanBuildDisplay(plan)}</div>
              <div>{plan.build_desc !== "custom" ? plan.build_desc : ""}</div>
            </td>)}
        </tr>
        <tr>
          <td>Concurrent Build: </td>
          {plans.map((plan) =>
            <td>
              <div>{setPlanConcurrentBuildDisplay(plan)}</div>
              <div>{plan.concurrent_build_desc !== "custom" ? plan.concurrent_build_desc : ""}</div>
            </td>)}
        </tr>

        <tr>
          <td>Analytic: </td>
          {plans.map((plan) =>
            <td>
              <div>{setPlanAnalyticDisplay(plan)}</div>
              <div>{plan.analytic_desc !== "custom" ? plan.analytic_desc : ""}</div>
            </td>)}
        </tr>

        <tr className={styles.cloudslug__plansdesktop__purchaserow}>
          <td></td>
          {plans.map((plan) =>
            <td>
              <a href={plan.plan_url}>Purchase</a>
              
            </td>)}
        </tr>
      </table>
    </div>
  )
}

export default CloudSlugPlansDesktop;
