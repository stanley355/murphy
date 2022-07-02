import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './NewsCarousel.module.scss';

import { CarouselInterface } from '../../../clients/common/interfaces/CarouselInterface';
import useResponsive from '../../../utils/hooks/useResponsive';

const NewsCarousel = (props: CarouselInterface) => {
  const { carouselTitle, carouselItems } = props;
  const { isDesktop } = useResponsive();

  return (
    <div className={styles.newsCarousel}>
      <div className="container">
        {carouselTitle && <h2>{carouselTitle}</h2>}
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={isDesktop ? 115 :100}
          infinite={true}
          visibleSlides={isDesktop ? 4 : 1}
          isPlaying={true}
          totalSlides={carouselItems.length}
        >
          <Slider>
            {carouselItems.map((item: any, index: number) => {
              return (
                <Slide index={index} key={item.title} className={styles.newsCarousel__card}>
                  <Link href={item.url}>
                    <a title={item.title}>
                      <Image 
                        src={item.urlToImage}
                        alt={item.title}
                        width={isDesktop ? 200 : 400}
                        height={isDesktop ? 175 : 250}
                      />
                      <div className={styles.newsCarousel__card__title}>{item.title}</div>
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