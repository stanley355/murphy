import React from 'react';
import Link from 'next/link';
import { FaBuffer } from 'react-icons/fa';
import classNames from 'classnames';
import { setProductCategory } from '../../modules/setProductCategory';
import { setProductPriceDisplay } from '../../modules/setPriceDisplay';
import CloudProductDescription from '../CloudProductDescription/CloudProductDescription';

import styles from './CloudSlugSimilarProducts.module.scss';

interface ICloudSlugSimilarProducts {
  hostID: Number;
  productList: [any];
}

const CloudSlugSimilarProducts = (props: ICloudSlugSimilarProducts) => {
  const { hostID, productList } = props;

  const filteredProducts =
    productList &&
    productList
      .filter((product: any, i: number) => product.hosts_id !== hostID)
      .filter((product: any, i: number) => i < 6);

  return (
    <div className={styles.cloudslug__similarproducts}>
      <div className="container">
        <div className={styles.cloudslug__similarproducts__title}>Similar Products: </div>
        <div className={styles.cloudslug__similarproducts__cardList}>
          {filteredProducts.length > 0 &&
            filteredProducts.map((product: any) => (
              <div className={styles.cloudslug__similarproducts__card} key={product.title}>
                <div className={styles.cloudslug__similarproducts__card__head}>
                  <div>
                    <Link href={product.product_url}>
                      <a title={product.title}>{product.title}</a>
                    </Link>
                    <div>Category: {setProductCategory(product.category)} </div>
                    <div>Start Price: {setProductPriceDisplay(product)} </div>
                  </div>
                  <Link href={product.product_url}>
                    <a
                      className={classNames(styles.cloudslug__similarproducts__card__cta, "gtm_cta_redirection")}
                      title={product.title}
                    >
                      <FaBuffer /> Specs
                    </a>
                  </Link>
                </div>
                <CloudProductDescription title={product.title} desc={product.description} url={product.product_url} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CloudSlugSimilarProducts;
