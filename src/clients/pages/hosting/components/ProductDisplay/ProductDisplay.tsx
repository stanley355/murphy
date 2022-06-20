import React, { useState } from 'react';

import styles from './ProductDisplay.module.scss';
import ProductList from '../ProductList';
import ProductTabs from '../ProductTabs';
import ProductFilter from '../ProductFilter';
import { filterProductList } from '../../modules/filterProductList';
import useResponsive from '../../../../../utils/hooks/useResponsive';

interface ProductDisplayInterface {
  productList: [any] | any[]
}

const ProductDisplay = (props: ProductDisplayInterface) => {
  const { productList } = props;
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const { isDesktop } = useResponsive();

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
      {isDesktop ? <DesktopProductDisplay /> : <ProductTabs productList={productList} />}
    </div>
  )
}

export default ProductDisplay;