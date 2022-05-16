import React from 'react';
import Link from 'next/link';
import { FaBuffer } from 'react-icons/fa';
import { setProductCategory } from '../../../cloudslug/modules/setProductCategory';
import { setProductPriceDisplay } from '../../../cloudslug/modules/setPriceDisplay';
import CloudProductDescription from '../../../cloudslug/components/CloudProductDescription/CloudProductDescription';

import styles from './LandingCloudProducts.module.scss';

const LandingCloudProducts = (props: any) => {
  const { productList } = props;

  return (
    <div className={styles.landing__cloudproducts}>
      <div className="container">
        <div className={styles.landing__cloudproducts__title}>Check customizable products for your App: </div>
        <div className={styles.landing__cloudproducts__cardList}>
          {productList.length > 0 &&
            productList.map((product: any) => (
              <div className={styles.landing__cloudproducts__card} key={product.title}>
                <div className={styles.landing__cloudproducts__card__head}>
                  <div>
                    <Link href={product.product_url}>
                      <a title={product.title}>{product.title}</a>
                    </Link>
                    <div>Category: {setProductCategory(product.category)} </div>
                    <div>Start Price: {setProductPriceDisplay(product)} </div>
                  </div>
                  <Link href={product.product_url}>
                    <a
                      className={styles.landing__cloudproducts__card__cta}
                      title={product.title}
                    >
                      <FaBuffer /> Specs
                    </a>
                  </Link>
                </div>
                <CloudProductDescription
                  title={product.title}
                  desc={product.description}
                  url={product.product_url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LandingCloudProducts;
