import React from 'react';

import styles from './PlanTabs.module.scss';

const PlanTabs = () => {
  return (
    <div className={styles.planTabs}>
      <div className={styles.planTabs__head}>
        <button>Plans</button>
        <button>Comparisons</button>
      </div>
    </div>
  );
}

export default PlanTabs;