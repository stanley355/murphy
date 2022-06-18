import React from 'react';
import Router from 'next/router';
import styles from './ProductList.module.scss';

import { setProductPriceDisplay } from '../../../../common/modules/setPriceDisplay';
import { setProductCategory } from '../../../../common/modules/setProductCategory';

interface ProductListInterface {
  list: [any] | any[]
}

const ProductList = (props: ProductListInterface) => {
  const { list } = props;
  return (
    <div className={styles.productList}>
      {list.map((item: any) => {
        return (
          <div key={item.title} className={styles.productList__card}>
            <div className={styles.productList__card__title}>{item.title}</div>
            <div className={styles.productList__card__category}>{setProductCategory(item.category)}</div>
            <div className={styles.productList__card__price}>Start from: <span> {setProductPriceDisplay(item)} </span></div>
            <div className={styles.productList__card__description}>{item.description}</div>
            <div className={styles.productList__card__feature}>Free Tier: {item.free_tier ? "Yes" : "No"}</div>
            <div className={styles.productList__card__feature}>Free Trial: {item.free_trial ? "Yes" : "No"}</div>
            <button className={styles.productList__card__cta} onClick={()=> Router.push(item.product_url)} >Check Out</button>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList;