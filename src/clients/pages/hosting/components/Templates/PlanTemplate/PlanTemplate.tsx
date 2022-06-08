import React from 'react';

import styles from './PlanTemplate.module.scss';

interface PlanTemplateInterface {
  hostData: any,
}

const PlanTemplate = (props: PlanTemplateInterface) => {
  const { hostData } = props;

  return (
    <div className={styles.planTemplate}>

    </div>
  );
}

export default PlanTemplate;