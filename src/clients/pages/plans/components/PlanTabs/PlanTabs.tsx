import React from 'react';

import styles from './PlanTabs.module.scss';

import PlanList from '../PlanList';

interface IPlanTabs {
  planList: [any]
}

const PlanTabs = (props: IPlanTabs) => {
  const { planList } = props;

  return (
    <div className={styles.planTabs}>
      <div className={styles.planTabs__head}>
        <button>Plans</button>
        <button>Comparisons</button>
      </div>
      <div className={styles.planTabs__body}>
        <PlanList list={planList} />
      </div>
    </div>
  );
}

export default PlanTabs;