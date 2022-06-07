import React from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './NewsCarousel.module.scss';

import { CarouselInterface } from '../../../clients/common/interfaces/CarouselInterface';
import useResponsive from '../../../utils/hooks/useResponsive';

const NewsCarousel = (props: CarouselInterface) => {
  const { carouselTitle, carouselItems } = props;
  const { isDesktop } = useResponsive();

  const setArticlesDescription = (desc: string) => {
    if (desc.length > 120) {
      return (
        <div>
          {desc.substring(0, 120).concat('...')}
          <span>See More</span>
        </div>
      )
    }

    return (
      <div>
        {desc}...
        <span>See More</span>
      </div>
    )
  }

  return (
    <div className={styles.newsCarousel}>
      <div className="container">
        {carouselTitle && <h2>{carouselTitle}</h2>}
        <CarouselProvider
          naturalSlideWidth={isDesktop ? 125 : 100}
          naturalSlideHeight={isDesktop ? 175 : 120}
          infinite={true}
          visibleSlides={isDesktop ? 3 : 1}
          isPlaying={true}
          totalSlides={carouselItems.length}
        >
          <Slider>
            {carouselItems.map((item: any, index: number) => {
              return (
                <Slide index={index} key={item.title} className={styles.newsCarousel__card}>
                  <Link href={item.url}>
                    <a title={item.title}>
                      <img
                        src={item.urlToImage}
                        width={400}
                        height={250}
                      />
                      <div className={styles.newsCarousel__card__title}>{item.title}</div>
                      <div className={styles.newsCarousel__card__description}>
                        {setArticlesDescription(item.description)}
                      </div>
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

export default NewsCarousel;