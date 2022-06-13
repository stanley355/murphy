import React from 'react';

import ProfilePlaceholder from '../../ProfilePlaceholder';
import ProductDisplay from '../../ProductDisplay';

interface ProductTemplateInterface {
  hostData: any,
}

const ProductTemplate = (props: ProductTemplateInterface) => {
  const { hostData } = props;

  return (
    <div className="productTemplate">
      <ProfilePlaceholder profile={hostData} />
      <ProductDisplay />
    </div>
  );
}

export default ProductTemplate;