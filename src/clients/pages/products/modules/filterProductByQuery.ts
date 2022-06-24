import { filterProductList } from "./filterProductList"

export const filterProductByQuery = (query: any, productList: [any] | any[]) => {
  if (query && query.category) {
    const filterObject = {
      category: query.category,
      free_tier: false,
      free_trial: false,
      max_price: 100
    }

    const filteredProducts = filterProductList(filterObject, productList);
    return filteredProducts;
  }

  return productList;
}