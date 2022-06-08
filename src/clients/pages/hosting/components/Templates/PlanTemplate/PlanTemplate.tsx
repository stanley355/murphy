import React from 'react';
import styles from './PlanTemplate.module.scss';

import ProfilePlaceholder from '../../ProfilePlaceholder';

interface PlanTemplateInterface {
  hostData: any,
}

const PlanTemplate = (props: PlanTemplateInterface) => {
  const { hostData } = props;

  return (
    <div className={styles.planTemplate}>
      {hostData && <ProfilePlaceholder profile={hostData} />}
    </div>
  );
}

export default PlanTemplate;