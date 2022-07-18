import React, { useEffect, useReducer } from 'react';

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
  const { filteredList } = state;

  useEffect(() => {
    if (productList) {
      dispatch({ type: 'SET_OG_LIST', payload: { list: productList } })
    }
  }, []);

  useEffect(() => {
    if (query && query.category) {
      dispatch({ type: 'SET_QUERY_LIST', payload: { category: query.category } })
    }
  }, [query])

  const updateFilteredProducts = (filterValues: any) => {
    dispatch({ type: 'SET_FILTERED_LIST', payload: { filterValues } });
  }

  const DesktopProductDisplay = () => {
    return (
      <div className={styles.productDisplay__desktop}>
        <ProductList list={filteredList} />
        <ProductFilter onSubmit={updateFilteredProducts} />
      </div>
    );
  }

  return (
    <div className={styles.productDisplay}>
      {isDesktop ? <DesktopProductDisplay /> : <ProductTabs
        productList={filteredList}
        onFilterSubmit={updateFilteredProducts}
      />}
    </div>
  )
}

export default ProductDisplay;