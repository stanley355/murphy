import React from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { setPlanPriceDisplay } from '../../../cloudslug/modules/setPriceDisplay';
import { setPlanHostURL } from '../../../cloudslug/modules/setPlanHostURL';
import useResponsive from '../../../../../utils/hooks/useResponsive';
import styles from './PlansCarousel.module.scss';

interface PlansCarouselInterface {
  planList: [any]
}

const PlansCarousel = (props: PlansCarouselInterface) => {
  const { planList } = props;

  const { isDesktop } = useResponsive();

  const setPlanDescriptionDisplay = (desc: string) => {
    if (desc.length > 120) {
      return desc.substring(0, 120).concat('... Check to see more')
    }
    return desc;
  }

  return (
    <div className={styles.plansCarousel}>
      <div className="container">
        <h2>Hosting Plans</h2>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={isDesktop ? 70 : 60}
          infinite={true}
          visibleSlides={isDesktop ? 3 : 1}
          isPlaying={true}
          totalSlides={planList.length}
        >
          <Slider>
            {planList.map((plan: any, index: number) => {
              return (
                <Slide index={index} key={plan.name} className={styles.plansCarousel__card}>
                  <div className={styles.plansCarousel__card__head}>
                    <div>{plan.name}</div>
                    <div>{setPlanPriceDisplay(plan)}</div>
                  </div>
                  <div className={styles.plansCarousel__card__description}>
                    {setPlanDescriptionDisplay(plan.description)}
                  </div>
                  <Link href={setPlanHostURL(plan.name)}>
                    <a title={plan.name} className={styles.plansCarousel__card__cta}>
                      Check Specs
                    </a>
                  </Link>
                </Slide>
              );
            })}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default PlansCarousel;
