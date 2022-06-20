import { fetchHostProducts } from '../../../../lib/api-fetcher/morphclouds/products';
import { fetchAllProducts } from '../../../../lib/api-fetcher/morphclouds/products';

const fetchProductTemplateData = async (hostName: string, hostID: number) => {
  const hostProducts = await fetchHostProducts(hostName);
  const allProducts = await fetchAllProducts();
  const similarProducts =
    allProducts.length > 0 && allProducts.filter((product: any) => product.id !== hostID);

  return {
    hostProducts: hostProducts,
    similarProducts: similarProducts,
  };
};

export default fetchProductTemplateData;