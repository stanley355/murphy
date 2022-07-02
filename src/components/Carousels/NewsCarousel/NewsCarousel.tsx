import React, {useEffect, useState, useRef} from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './NewsCarousel.module.scss';

import { CarouselInterface } from '../../../clients/common/interfaces/CarouselInterface';
import useResponsive from '../../../utils/hooks/useResponsive';

const NewsCarousel = (props: CarouselInterface) => {
  const { carouselTitle, carouselItems } = props;
  const { isDesktop } = useResponsive();

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunc = (entries:any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  }

  useEffect(() => {
    if (!isVisible) {
      const observer = new IntersectionObserver(callbackFunc, options);
      if (carouselRef.current) observer.observe(carouselRef.current);

      return (() => {
        if (carouselRef.current) observer.unobserve(carouselRef.current);
      })
    }
  }, [isVisible, carouselRef, options])

  return (
    <div className={styles.newsCarousel} ref={carouselRef}>
      <div className="container">
        {carouselTitle && <h2>{carouselTitle}</h2>}
        {isVisible && <CarouselProvider
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
                      <img
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
        </CarouselProvider>}
      </div>
    </div>
  );
}

export default NewsCarousel;