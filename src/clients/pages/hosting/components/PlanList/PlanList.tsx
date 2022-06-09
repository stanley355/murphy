import React from 'react';

import styles from './PlanList.module.scss';

interface PlanListInterface {
  plans: [any]
}

const PlanList = (props: PlanListInterface) => {
  const { plans } = props;


  const PlanCard = (props: any) => {
    const { plan } = props;

    return (
      <div key={plan.name}>
        <div>
          <span>{plan.name}</span>
          {/* <span>{setPlanPriceDisplay(plan)}</span> */}
        </div>
        <div>{plan.description}</div>
        <div></div>
        <button>Check Out</button>
      </div>
    );
  }

  return (
    <div className={styles.planList}>
      <div>Hosting Plans</div>
      {plans.map((plan: any) => <PlanCard plan={plan} />)}
    </div>
  )
}

export default PlanList;