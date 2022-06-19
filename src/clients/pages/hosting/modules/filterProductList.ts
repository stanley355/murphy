interface filterValuesInterface {
  category: string;
  free_tier: boolean;
  free_trial: boolean;
  max_price: number;
}

export const filterProductList = (
  filterValues: filterValuesInterface,
  productList: [any] | any[]
) => {
  let newProductList = [...productList];

  if (filterValues.category) {
    const filteredList = newProductList.filter(
      (product: any) => product.category === filterValues.category
    );
    newProductList = filteredList;
  }

  if (filterValues.free_tier) {
    const filteredList = newProductList.filter(
      (product: any) => product.free_tier === filterValues.free_tier
    );
    newProductList = filteredList;
  }

  if (filterValues.free_trial) {
    const filteredList = newProductList.filter(
      (product: any) => product.free_trial === filterValues.free_trial
    );
    newProductList = filteredList;
  }

  if (filterValues.max_price) {
    const filteredList = newProductList.filter(
      (product: any) => product.base_price <= filterValues.max_price
    );
    newProductList = filteredList;
  }

  return newProductList;
};
