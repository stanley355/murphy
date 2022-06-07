import React from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './ProductsCarousel.module.scss';

import { CarouselInterface } from '../../../clients/common/interfaces/CarouselInterface';
import { setProductPriceDisplay } from '../../../clients/pages/cloudslug/modules/setPriceDisplay';
import { setProductCategory } from '../../../clients/pages/cloudslug/modules/setProductCategory';
import useResponsive from '../../../utils/hooks/useResponsive';

const ProductsCarousel = (props: CarouselInterface) => {
  const { carouselTitle, carouselItems } = props;
  const { isDesktop } = useResponsive();

  const setProductDescriptionDisplay = (desc: string) => {
    if (desc.length > 120) {
      return desc.substring(0, 120).concat('... Check to see more')
    }
    return desc;
  }

  return (
    <div className={styles.productsCarousel}>
      <div className="container">
        {carouselTitle && <h2>{carouselTitle}</h2>}
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={isDesktop ? 90 : 70}
          infinite={true}
          visibleSlides={isDesktop ? 3 : 1}
          isPlaying={true}
          totalSlides={carouselItems.length}
        >
          <Slider>
            {carouselItems.map((item: any, index: number) => {
              return (
                <Slide index={index} key={item.title} className={styles.productsCarousel__card}>
                  <div className={styles.productsCarousel__card__head}>
                    <div>{item.title}</div>
                    <div>{setProductCategory(item.category)}</div>
                    <div>{setProductPriceDisplay(item)}</div>
                  </div>
                  <div className={styles.productsCarousel__card__description}>
                    {setProductDescriptionDisplay(item.description)}
                  </div>
                  <Link href={item.product_url}>
                    <a title={item.name} className={styles.productsCarousel__card__cta}>
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

export default ProductsCarousel;
