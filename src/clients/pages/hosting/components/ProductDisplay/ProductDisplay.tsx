import React from 'react';

import ProductTabs from '../ProductTabs';
import styles from './ProductDisplay.module.scss';

import useResponsive from '../../../../../utils/hooks/useResponsive';

interface ProductDisplayInterface {
  productList: [any]
}

const ProductDisplay = (props: ProductDisplayInterface) => {
  const { productList } = props;
  const { isDesktop } = useResponsive();

  return (
    <div className={styles.productDisplay}>
      {!isDesktop && <ProductTabs productList={productList} />}
    </div>
  )
}

export default ProductDisplay;