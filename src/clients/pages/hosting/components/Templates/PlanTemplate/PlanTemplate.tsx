import React from 'react';
import styles from './PlanTemplate.module.scss';

import PlansCarousel from '../../../../../../components/Carousels/PlansCarousel';
import ProfilePlaceholder from '../../ProfilePlaceholder';
import PlanList from '../../PlanList';

interface PlanTemplateInterface {
  hostData: any,
  plansData: [any],
  similarPlansData: [any],
}

const PlanTemplate = (props: PlanTemplateInterface) => {
  const { hostData, plansData, similarPlansData } = props;

  console.log(similarPlansData);
  return (
    <div className={styles.planTemplate}>
      {hostData && <ProfilePlaceholder profile={hostData} />}
      {plansData.length > 0 && <PlanList plans={plansData} /> }
      {}
    </div>
  );
}

export default PlanTemplate;