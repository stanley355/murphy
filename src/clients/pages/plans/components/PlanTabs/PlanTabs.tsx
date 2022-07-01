import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './PlanTabs.module.scss';

import PlanList from '../PlanList';

interface IPlanTabs {
  planList: [any]
}

const PlanTabs = (props: IPlanTabs) => {
  const { planList } = props;

  const [activeTab, setActiveTab] = useState("plans");

  return (
    <div className={styles.planTabs}>
      <div className={styles.planTabs__head}>
        <button
          type="button"
          onClick={() => setActiveTab("plans")}
          className={classNames(activeTab !== "plans" ? styles["btnInactive"] : "")}
        >
          Plans
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("comparisons")}
          className={classNames(activeTab !== "comparisons" ? styles["btnInactive"] : "")}
        >
          Comparisons
        </button>
      </div>
      <div className={styles.planTabs__body}>
        <PlanList list={planList} />
      </div>
    </div>
  );
}

export default PlanTabs;