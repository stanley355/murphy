import React from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './PlansCarousel.module.scss';

import { CarouselInterface } from '../../../clients/common/interfaces/CarouselInterface';
import { setPlanPriceDisplay } from '../../../clients/common/modules/setPriceDisplay';
import useResponsive from '../../../utils/hooks/useResponsive';

const PlansCarousel = (props: CarouselInterface) => {
  const { carouselTitle, carouselItems } = props;

  const { isDesktop } = useResponsive();

  const setPlanDescriptionDisplay = (desc: string) => {
    if (desc.length > 120) {
      return desc.substring(0, 120).concat('... Check to see more')
    }
    return desc;
  }

  console.log(carouselItems[0]);
  return (
    <div className={styles.plansCarousel}>
      <div className="container">
        {carouselTitle && <h2>{carouselTitle}</h2>}
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={isDesktop ? 75 : 60}
          infinite={true}
          visibleSlides={isDesktop ? 3 : 1}
          isPlaying={true}
          totalSlides={carouselItems.length}
        >
          <Slider>
            {carouselItems.map((item: any, index: number) => {
              return (
                <Slide index={index} key={item.name} className={styles.plansCarousel__card}>
                  <div className={styles.plansCarousel__card__head}>
                    <div>{item.name}</div>
                    <div>{setPlanPriceDisplay(item)}</div>
                  </div>
                  <div className={styles.plansCarousel__card__description}>
                    {setPlanDescriptionDisplay(item.description)}
                  </div>
                  <Link href={item.plan_url}>
                    <a title={item.name} className={styles.plansCarousel__card__cta}>
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
