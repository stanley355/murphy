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

  const { ogList, filteredList } = state;

  useEffect(() => {
    if (productList) {
      dispatch({ type: 'SET_OG_LIST', payload: { list: productList } })
    }
  }, []);

  

  const DesktopProductDisplay = () => {
    return (
      <div className={styles.productDisplay__desktop}>
        <ProductList list={filteredList} />
        <ProductFilter onSubmit={() => { }} />
      </div>
    );
  }

  console.log(state);

  return (
    <div className={styles.productDisplay}>
      {isDesktop ? <DesktopProductDisplay /> : <ProductTabs
        productList={filteredList}
        onFilterSubmit={() => { }}
      />}
    </div>
  )
}

export default ProductDisplay;