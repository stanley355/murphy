import React from 'react';
import styles from './PlanTemplate.module.scss';

import ProfilePlaceholder from '../../ProfilePlaceholder';
import PlanList from '../../PlanList';

interface PlanTemplateInterface {
  hostData: any,
  plansData: [any]
}

const PlanTemplate = (props: PlanTemplateInterface) => {
  const { hostData, plansData } = props;

  return (
    <div className={styles.planTemplate}>
      {hostData && <ProfilePlaceholder profile={hostData} />}
      {plansData.length > 0 && <PlanList plans={plansData} /> }
    </div>
  );
}

export default PlanTemplate;