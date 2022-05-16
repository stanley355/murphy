import React from 'react';
import Link from 'next/link';
import { FaBuffer } from 'react-icons/fa';
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
                  <Link href={product.product_url}>
                    <a title={product.title}>{product.title}</a>
                  </Link>
                  <div>Category: {setProductCategory(product.category)} </div>
                  <div>Start Price: {setProductPriceDisplay(product)} </div>
                </div>
                <Link href={product.product_url}>
                  <a className={styles.cloudslug__products__card__cta} title={product.title}>
                    <FaBuffer /> Specs
                  </a>
                </Link>
              </div>
              <div>{product.description}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CloudSlugProducts;
