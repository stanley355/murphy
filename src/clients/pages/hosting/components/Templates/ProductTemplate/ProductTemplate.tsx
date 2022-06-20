import React from 'react';

import ProfilePlaceholder from '../../ProfilePlaceholder';
import ProductDisplay from '../../ProductDisplay';
import ProductsCarousel from '../../../../../../components/Carousels/ProductsCarousel';

interface ProductTemplateInterface {
  hostData: any,
  productList: [any],
  similarProductsData: [any]
}

const ProductTemplate = (props: ProductTemplateInterface) => {
  const { hostData, productList, similarProductsData } = props;

  return (
    <div className="productTemplate">
      {hostData && <ProfilePlaceholder profile={hostData} />}
      {productList.length > 0 && <ProductDisplay productList={productList} />}
      {similarProductsData.length > 0 && <ProductsCarousel carouselTitle='Similar Products' carouselItems={similarProductsData} /> }
    </div>
  );
}

export default ProductTemplate;