interface IPrice {
  price?: number;
  price_unit: string;
  price_timeunit: string;
  price_desc: string;
  base_price?: number;
  currency: string,
}

export const setPriceCurrency = (currency: string) => {
  if (currency) return currency;
  return 'US$';
}

export const setPlanPriceDisplay = (plan : IPrice) => {
  if (plan.price === null) {
    if (plan.price_desc) return plan.price_desc;
  } else {
    const currency = setPriceCurrency(plan.currency);
    let price = `${currency} ${plan.price}`;
    if (plan.price_unit) price += `/${plan.price_unit}`;
    if (plan.price_timeunit) price += `/${plan.price_timeunit}`;
    return price;
  }
};

export const setProductPriceDisplay = (product : IPrice) => {
  if (product.base_price === null) {
    if (product.price_desc) return product.price_desc;
    else return 'Data N/A'
  } else {
    let price = `$${product.base_price}`;
    if (product.price_unit) price += `/${product.price_unit}`;
    if (product.price_timeunit) price += `/${product.price_timeunit}`;
    return price;
  }
};
