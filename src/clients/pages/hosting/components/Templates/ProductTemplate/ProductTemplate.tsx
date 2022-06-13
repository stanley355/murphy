import React from 'react';

import ProfilePlaceholder from '../../ProfilePlaceholder';

interface ProductTemplateInterface {
  hostData: any,
}

const ProductTemplate = (props: ProductTemplateInterface) => {
  const { hostData } = props;

  return (
    <div>
      <ProfilePlaceholder profile={hostData} />
    </div>
  );
}

export default ProductTemplate;