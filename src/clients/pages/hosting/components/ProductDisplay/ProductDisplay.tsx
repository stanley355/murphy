import React from 'react';

import ProductTabs from '../ProductTabs';
import styles from './ProductDisplay.module.scss';

import useResponsive from '../../../../../utils/hooks/useResponsive';

const ProductDisplay = () => {

  const {isDesktop} = useResponsive();

  return (
    <div className={styles.productDisplay}>
      {!isDesktop && <ProductTabs />}
    </div>
  )
}

export default ProductDisplay;