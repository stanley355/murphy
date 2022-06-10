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

  return (
    <div className={styles.planTemplate}>
      {hostData && <ProfilePlaceholder profile={hostData} />}
      {plansData.length > 0 && <PlanList plans={plansData} /> }
      {similarPlansData.length > 0 && <PlansCarousel carouselTitle='Similar Plans' carouselItems={similarPlansData} /> }
    </div>
  );
}

export default PlanTemplate;