import React from 'react';
import styles from './PlanPrice.module.scss';
import { setPlanPriceDisplay, setPriceCurrency } from '../../../../common/modules/setPriceDisplay';

interface IPlanPrice {
  item: any
}

const PlanPrice = (props: IPlanPrice) => {
  const { item } = props;

  if (item.discounted_price) {
    return <div className={styles.planPrice}>
      <s>{setPlanPriceDisplay(item)}</s>
      <div className={styles.planPrice__basePrice}>{setPriceCurrency(item.currency)} {item.discounted_price} / {item.price_timeunit}</div>
    </div>
  }

  return <div className={styles.planPrice__basePrice}>{setPlanPriceDisplay(item)}</div>;
}

export default PlanPrice;