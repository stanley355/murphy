import React from 'react';
import Link from 'next/link';
import { FaBuffer } from 'react-icons/fa';
import { setProductCategory } from '../../modules/setProductCategory';
import { setProductPriceDisplay } from '../../modules/setPriceDisplay';
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

      console.log(productList[0].category);
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
                      className={styles.cloudslug__similarproducts__card__cta}
                      title={product.title}
                    >
                      <FaBuffer /> Specs
                    </a>
                  </Link>
                </div>
                <div>{product.description}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CloudSlugSimilarProducts;
