import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { setPlanBandwidthDisplay } from '../../../cloudslug/modules/setPlanBandwidthDisplay';
import { setPlanBuildDisplay } from '../../../cloudslug/modules/setPlanBuildDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../cloudslug/modules/setPlanConcurrentBuildDisplay';
import styles from './LandingCloudPlans.module.scss';

const LandingCloudPlans = (props: any) => {
  const { planList } = props;

  console.log(planList[0]);

  const carouselResponsiveness = {
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <div className={styles.landing__cloudplans}>
      <Carousel
        infinite
        swipeable
        autoPlay
        autoPlaySpeed={3000}
        responsive={carouselResponsiveness}
        arrows={false}
        showDots={true}
      >
        {planList &&
          planList.map((plan: any) => (
            <div className={styles.landing__cloudplans__Card} key={plan.name}>
              <div>{plan.name}</div>
              <div>{plan.description}</div>
              <div>Bandwidth: {setPlanBandwidthDisplay(plan)} </div>
              <div>Build: {setPlanBuildDisplay(plan)} </div>
              <div>Concurrent Build: {setPlanConcurrentBuildDisplay(plan)} </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default LandingCloudPlans;
