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

interface IPlanComparison {
  comparisonList: any[],
  onRemoveClick: (itemID: number) => void
}

const PlanComparison = (props: IPlanComparison) => {
  const { comparisonList, onRemoveClick } = props;

  return (
    <div className={styles.planComparison}>
      <div className="rows">
        <div className="img-wrap">-</div>
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
        <div className="button-wrap">-</div>
      </div>
    </div>
  );
}

export default PlanComparison;