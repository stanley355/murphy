import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './PlanTabs.module.scss';

import { planComparisonStore } from '../../modules/planComparisonState';
import PlanComparison from '../PlanComparison';
import PlanList from '../PlanList';

interface IPlanTabs {
  planList: [any]
}

const PlanTabs = (props: IPlanTabs) => {
  const { planList } = props;
  const [activeTab, setActiveTab] = useState("list");

  const setShowingTab = (tab: string) => {
    switch (tab) {
      case "list":
        return <PlanList list={planList} onCompareClick={() => setActiveTab("comparisons")} />
      case "comparisons":
        return <PlanComparison />
      default:
        return <PlanList list={planList} onCompareClick={() => setActiveTab("comparisons")} />
    }
  }

  return (
    <div className={styles.planTabs}>
      <div className={styles.planTabs__head}>
        <button
          type="button"
          onClick={() => setActiveTab("list")}
          className={classNames(activeTab === "list" ? "" : styles["btnInactive"])}
        >
          Plans
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("comparisons")}
          className={classNames(activeTab === "comparisons" ? "" : styles["btnInactive"])}
        >
          Comparisons
        </button>
      </div>
      <div className={styles.planTabs__body}>
        {setShowingTab(activeTab)}
      </div>
    </div>
  );
}

export default PlanTabs;