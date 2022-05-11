import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { setPlanBandwidthDisplay } from '../../../cloudslug/modules/setPlanBandwidthDisplay';
import { setPlanBuildDisplay } from '../../../cloudslug/modules/setPlanBuildDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../cloudslug/modules/setPlanConcurrentBuildDisplay';
import { setPlanAnalyticDisplay } from '../../../cloudslug/modules/setPlanAnalyticDispla';
import { setPlanPriceDisplay } from '../../../cloudslug/modules/setPlanPriceDisplay';
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
        max: 1000,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1000,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <div className={styles.landing__cloudplans}>
      <Carousel
        infinite
        swipeable
        autoPlay={false}
        // autoPlaySpeed={3000}
        responsive={carouselResponsiveness}
        arrows={false}
        showDots={true}
      >
        {planList &&
          planList.map((plan: any) => (
            <div className={styles.landing__cloudplans__card} key={plan.name}>
              <div className={styles.landing__cloudplans__card__title}>{plan.name}</div>
              <div>{plan.description}</div>
              <div>Price: {setPlanPriceDisplay(plan)} </div>
              <div>Bandwidth: {setPlanBandwidthDisplay(plan)} </div>
              <div>Build: {setPlanBuildDisplay(plan)} </div>
              <div>Concurrent Build: {setPlanConcurrentBuildDisplay(plan)} </div>
              <div>Analytic: {setPlanAnalyticDisplay(plan)} </div>
              <a href={plan.url}>Purchase</a>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default LandingCloudPlans;
