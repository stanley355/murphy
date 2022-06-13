import React from 'react';

import ProfilePlaceholder from '../../ProfilePlaceholder';
import ProductDisplay from '../../ProductDisplay';

interface ProductTemplateInterface {
  hostData: any,
  productList: [any]
}

const ProductTemplate = (props: ProductTemplateInterface) => {
  const { hostData, productList } = props;

  return (
    <div className="productTemplate">
      <ProfilePlaceholder profile={hostData} />
      <ProductDisplay productList={productList} />
    </div>
  );
}

export default ProductTemplate;