import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Router from 'next/router';
import styles from './PlanComparison.module.scss';

import PlanPrice from '../PlanPrice';
import { getPlanAvatarSrc } from '../../modules/getPlanAvatarSrc';
import { setPlanBandwidthDisplay } from '../../../../common/modules/setPlanBandwidthDisplay';
import { setPlanBuildDisplay } from '../../../../common/modules/setPlanBuildDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../../common/modules/setPlanConcurrentBuildDisplay';
import { setPlanAnalyticDisplay } from '../../../../common/modules/setPlanAnalyticDisplay';


const PlanComparison = () => {
  const [comparisonList, setComparisonList] = useState([]);

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
            <td>Free Domain</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {item.free_domain ? <FaCheck /> : <FaTimes />}
              </td>
            )}
          </tr>
          <tr>
            <td>Domain Extension</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {item.domain_extension}
              </td>
            )}
          </tr>
          <tr>
            <td>Analytic</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                <div>{setPlanAnalyticDisplay(item)}</div>
                {item.analytic_desc && <div>{item.analytic_desc}</div>}
              </td>
            )}
          </tr>
          <tr>
            <td>Bandwidth</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {setPlanBandwidthDisplay(item)}
                {item.bandwidth_desc && <div>{item.bandwidth_desc}</div>}
              </td>
            )}
          </tr>
          <tr>
            <td>Build</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {setPlanBuildDisplay(item)}
                {item.build_desc && <div>{item.build_desc}</div>}
              </td>
            )}
          </tr>
          <tr>
            <td>Concurrent Build</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {setPlanConcurrentBuildDisplay(item)}
                {item.concurent_build_desc && <div>{item.concurrent_build_desc}</div>}
              </td>
            )}
          </tr>
          <tr>
            <td>Database Benefit</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {item.database_benefit ? <FaCheck /> : <FaTimes />}
              </td>
            )}
          </tr>
          <tr>
            <td>Page Data</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                {item.page_data}
              </td>
            )}
          </tr>
          <tr>
            <td>Price</td>
            {comparisonList.map((item: any) =>
              <td key={item.name}>
                <PlanPrice item={item} />
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
                  onClick={() => {}}>
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