import React from 'react';
import { FaBuffer } from 'react-icons/fa';
import classNames from 'classnames';
import CloudProductDescription from '../CloudProductDescription/CloudProductDescription';
import { setProductCategory } from '../../modules/setProductCategory';
import { setProductPriceDisplay } from '../../modules/setPriceDisplay';

import styles from './CloudSlugProducts.module.scss';

const CloudSlugProducts = (props: any) => {
  const { products } = props;

  

  return (
    <div className={styles.cloudslug__products}>
      <div className={styles.cloudslug__products__cardList}>
        {products.length > 0 &&
          products.map((product: any) => (
            <div className={styles.cloudslug__products__card} key={product.title}>
              <div className={styles.cloudslug__products__card__head}>
                <div>
                  <a title={product.title} href={product.product_url}>
                    {product.title}
                  </a>
                  <div>Category: {setProductCategory(product.category)} </div>
                  <div>Start Price: {setProductPriceDisplay(product)} </div>
                </div>
                <a
                  href={product.product_url}
                  className={classNames(styles.cloudslug__products__card__cta, "gtm_cta_redirection")}
                  title={product.title}
                >
                  <FaBuffer /> Specs
                </a>
              </div>
              <CloudProductDescription title={product.title} desc={product.description} url={product.product_url} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default CloudSlugProducts;
