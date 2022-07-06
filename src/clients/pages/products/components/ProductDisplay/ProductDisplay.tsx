import React, { useState, useEffect } from 'react';

import styles from './ProductDisplay.module.scss';
import ProductList from '../ProductList';
import ProductTabs from '../ProductTabs';
import ProductFilter from '../ProductFilter';
import productFilterStore from '../../modules/productFilterStore';
import productFilterSlice from '../../modules/productFilterSlice';
import { filterProductList } from '../../modules/filterProductList';
import useResponsive from '../../../../../utils/hooks/useResponsive';

interface ProductDisplayInterface {
  query: any,
  productList: [any] | any[]
}

const ProductDisplay = (props: ProductDisplayInterface) => {
  const { query, productList } = props;
  const { isDesktop } = useResponsive();
  const [filteredProducts, setFilteredProducts] = useState(productList);

  const { setInitialProducts, filterByQuery } = productFilterSlice.actions;
  productFilterStore.dispatch(setInitialProducts(productList));
  productFilterStore.dispatch(filterByQuery(query));
  const productStore = productFilterStore.getState();

  useEffect(() => {
    if (query && query.category) {
      setFilteredProducts(productStore.filteredList);
    }
  }, [query]);

  const updateProductList = (filterValues: any) => {
    const newProductList = filterProductList(filterValues, productList);
    setFilteredProducts(newProductList);
  }

  const DesktopProductDisplay = () => {
    return (
      <div className={styles.productDisplay__desktop}>
        <ProductList list={filteredProducts} />
        <ProductFilter onSubmit={updateProductList} />
      </div>
    );
  }

  return (
    <div className={styles.productDisplay}>
      {isDesktop ? <DesktopProductDisplay /> : <ProductTabs
        productList={filteredProducts}
        onFilterSubmit={(e) => console.log(e)}
      />}
    </div>
  )
}

export default ProductDisplay;