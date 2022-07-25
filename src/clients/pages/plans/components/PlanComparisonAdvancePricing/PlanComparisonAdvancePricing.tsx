import React, { useReducer, useEffect } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { planComparisonAdvancePricingReducer } from '../../modules/planComparisonAdvancePricingReducer';
import styles from './PlanComparisonAdvancePricing.module.scss';
interface IPlanComparisonAdvancePricing {
  plan: any
}


const PlanComparisonAdvancePricing = (props: IPlanComparisonAdvancePricing) => {
  const { plan } = props;

  const pricingStore = {
    member: 1,
    totalPrice: 0,
  }

  const [state, dispatch] = useReducer(planComparisonAdvancePricingReducer, pricingStore);
  const { member, totalPrice } = state;

  useEffect(() => {
    if (plan.price) {
      dispatch({ type: 'SET_TOTAL_PRICE', payload: { totalPrice: plan.price } })
    }
  }, [])



  return (
    <div className={styles.planComparisonAdvancePricing}>
      <div>-</div>
      <div className={styles.planComparisonAdvancePricing__unit}>
        <div className={styles.planComparisonAdvancePricing__unit__title}>Total {plan.price_unit} :</div>
        <div className={styles.planComparisonAdvancePricing__unit__toggle}>
          <span><FaMinusCircle /></span>
          <span>{member}</span>
          <span><FaPlusCircle /></span>
        </div>
      </div>
      <div className={styles.planComparisonAdvancePricing__unit}>
        <div className={styles.planComparisonAdvancePricing__unit__title}>Total Price :</div>
        <div>
          {plan.currency} {totalPrice}
        </div>
      </div>
    </div>
  );
}

export default PlanComparisonAdvancePricing;