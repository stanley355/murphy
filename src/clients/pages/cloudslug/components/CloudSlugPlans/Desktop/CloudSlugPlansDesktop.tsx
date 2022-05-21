import React from 'react';

import { setPlanPriceDisplay } from '../../../modules/setPriceDisplay';
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

  return (
    <div className={styles.cloudslug__plansdesktop}>
      <table>
        <tbody>
          <tr>
            <th>Plan Name:</th>
            {plans.map((plan) => <th key={plan.name}>{plan.name}</th>)}
          </tr>
          <tr>
            <td>Price: </td>
            {plans.map((plan) =>
              <td key={plan.name}>
                <div>{setPlanPriceDisplay(plan)}</div>
                <div>{plan.price_desc !== "custom" ? plan.price_desc : ""}</div>
              </td>)}
          </tr>
          <tr>
            <td>Bandwidth: </td>
            {plans.map((plan) =>
              <td key={plan.name}>
                <div>{setPlanBandwidthDisplay(plan)}</div>
                <div>{plan.bandwidth_desc !== "custom" ? plan.bandwidth_desc : ""}</div>
              </td>)}
          </tr>
          <tr>
            <td>Build: </td>
            {plans.map((plan) =>
              <td key={plan.name}>
                <div>{setPlanBuildDisplay(plan)}</div>
                <div>{plan.build_desc !== "custom" ? plan.build_desc : ""}</div>
              </td>)}
          </tr>
          <tr>
            <td>Concurrent Build: </td>
            {plans.map((plan) =>
              <td key={plan.name}>
                <div>{setPlanConcurrentBuildDisplay(plan)}</div>
                <div>{plan.concurrent_build_desc !== "custom" ? plan.concurrent_build_desc : ""}</div>
              </td>)}
          </tr>

          <tr>
            <td>Analytic: </td>
            {plans.map((plan) =>
              <td key={plan.name}>
                <div>{setPlanAnalyticDisplay(plan)}</div>
                <div>{plan.analytic_desc !== "custom" ? plan.analytic_desc : ""}</div>
              </td>)}
          </tr>

          <tr className={styles.cloudslug__plansdesktop__purchaserow}>
            <td></td>  {/* Dont remove this td */}
            {plans.map((plan) =>
              <td key={plan.name}>
                <a href={plan.plan_url} className="gtm_cta_redirection">Purchase</a>
              </td>)}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CloudSlugPlansDesktop;
