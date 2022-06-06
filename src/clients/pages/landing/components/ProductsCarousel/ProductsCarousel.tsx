import React from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { setProductPriceDisplay } from '../../../cloudslug/modules/setPriceDisplay';
import { setProductCategory } from '../../../cloudslug/modules/setProductCategory';
import useResponsive from '../../../../../utils/hooks/useResponsive';
import styles from './ProductsCarousel.module.scss';

interface productsCarouselInterface {
  productList: [any]
}

const ProductsCarousel = (props: productsCarouselInterface) => {
  const { productList } = props;
  const { isDesktop } = useResponsive();

  const setProductDescriptionDisplay = (desc: string) => {
    if (desc.length > 120) {
      return desc.substring(0, 120).concat('... Check to see more')
    }
    return desc;
  }

  console.log(productList[0]);

  return (
    <div className={styles.productsCarousel}>
      <div className="container">
        <h2>Web Services</h2>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={isDesktop ? 90 : 70}
          infinite={true}
          visibleSlides={isDesktop ? 3 : 1}
          isPlaying={true}
          totalSlides={productList.length}
        >
          <Slider>
            {productList.map((product: any, index: number) => {
              return (
                <Slide index={index} key={product.name} className={styles.productsCarousel__card}>
                  <div className={styles.productsCarousel__card__head}>
                    <div>{product.title}</div>
                    <div>{setProductCategory(product.category)}</div>
                    <div>{setProductPriceDisplay(product)}</div>
                    
                  </div>
                  <div className={styles.productsCarousel__card__description}>
                    {setProductDescriptionDisplay(product.description)}
                  </div>
                  <Link href={product.product_url}>
                    <a title={product.name} className={styles.productsCarousel__card__cta}>
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
