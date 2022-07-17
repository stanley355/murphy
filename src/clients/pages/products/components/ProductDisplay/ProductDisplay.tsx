import React, { useState, useEffect, useReducer } from 'react';

import styles from './ProductDisplay.module.scss';
import ProductList from '../ProductList';
import ProductTabs from '../ProductTabs';
import ProductFilter from '../ProductFilter';
import { productFilterReducer } from '../../modules/productFilterReducer';
import { productFilterStore } from '../../modules/productFilterStore';
import useResponsive from '../../../../../utils/hooks/useResponsive';

interface ProductDisplayInterface {
  query?: any,
  productList: [any] | any[]
}

const ProductDisplay = (props: ProductDisplayInterface) => {
  const { query, productList } = props;
  const { isDesktop } = useResponsive();

  const [state, dispatch] = useReducer(productFilterReducer, productFilterStore);

  const DesktopProductDisplay = () => {
    return (
      <div className={styles.productDisplay__desktop}>
        <ProductList list={productList} />
        <ProductFilter onSubmit={()=> {}} />
      </div>
    );
  }

  return (
    <div className={styles.productDisplay}>
      {isDesktop ? <DesktopProductDisplay /> : <ProductTabs
        productList={productList}
        onFilterSubmit={()=> {}}
      />}
    </div>
  )
}

export default ProductDisplay;