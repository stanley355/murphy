import React from 'react';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useResponsive from '../../utils/hooks/useResponsive';
import styles from './NewsCarousel.module.scss';

interface NewsCarouselInterface {
  articles: [any]
}

const NewsCarousel = (props: NewsCarouselInterface) => {
  const { articles } = props;
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
        <h2>Tech Related News</h2>
        <CarouselProvider
          naturalSlideWidth={isDesktop ? 125 : 100}
          naturalSlideHeight={isDesktop ? 175 : 120}
          infinite={true}
          visibleSlides={isDesktop ? 3 : 1}
          isPlaying={true}
          totalSlides={articles.length}
        >
          <Slider>
            {articles.map((article: any, index: number) => {
              return (
                <Slide index={index} key={article.title} className={styles.newsCarousel__card}>
                  <Link href={article.url}>
                    <a title={article.title}>
                      <img
                        src={article.urlToImage}
                        width={400}
                        height={250}
                      />
                      <div className={styles.newsCarousel__card__title}>{article.title}</div>
                      <div className={styles.newsCarousel__card__description}>
                        {setArticlesDescription(article.description)}
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