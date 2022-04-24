interface IPlanPrice {
  price: number;
  price_unit: string;
  price_timeunit: string;
  price_desc: string;
}

export const setPlanPriceDisplay = (plan : IPlanPrice) => {
  if (plan.price === null) {
    if (plan.price_desc) return plan.price_desc;
  } else {
    let price = `$${plan.price}`;
    if (plan.price_unit) price += `/${plan.price_unit}`;
    if (plan.price_timeunit) price += `/${plan.price_timeunit}`;
    return price;
  }
};
