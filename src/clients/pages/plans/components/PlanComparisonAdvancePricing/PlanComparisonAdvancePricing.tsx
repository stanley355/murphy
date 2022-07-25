import React, { useReducer, useEffect} from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { advancePricingReducer } from '../../modules/advancePricingReducer';
import { advancePricingStore } from '../../modules/advancePricingStore';
import styles from './PlanComparisonAdvancePricing.module.scss';
interface IAdvancePricing {
  plan: any
}

const PlanComparisonAdvancePricing = (props: IAdvancePricing) => {
  const { plan } = props;

  const [state, dispatch] = useReducer(advancePricingReducer, advancePricingStore);

  useEffect(() => {
    if (plan.price) {
      dispatch({ type: 'SET_TOTAL_PRICE', payload: { basePrice: plan.discounted_price ?? plan.price } })
    }
  }, [state.basePrice])

  return (
    <div className={styles.planComparisonAdvancePricing}>
      {plan.price_unit && <div className={styles.planComparisonAdvancePricing__unit}>
        <div className={styles.planComparisonAdvancePricing__unit__title}>Total {plan.price_unit} :</div>
        <div className={styles.planComparisonAdvancePricing__unit__toggle}>
          <button onClick={() => dispatch({ type: 'DECR_COUNT', payload: { item: 'member' } })}><FaMinusCircle /></button>
          <span>{state.member}</span>
          <button onClick={() => dispatch({ type: 'INCR_COUNT', payload: { item: 'member' } })}><FaPlusCircle /></button>
        </div>
      </div>}
      <div className={styles.planComparisonAdvancePricing__unit}>
        <div className={styles.planComparisonAdvancePricing__unit__title}>Total {plan.price_timeunit} :</div>
        <div className={styles.planComparisonAdvancePricing__unit__toggle}>
          <button onClick={() => dispatch({ type: 'DECR_COUNT', payload: { item: 'month' } })}><FaMinusCircle /></button>
          <span>{state.month}</span>
          <button onClick={() => dispatch({ type: 'INCR_COUNT', payload: { item: 'month' } })}><FaPlusCircle /></button>
        </div>
      </div>
      <div className={styles.planComparisonAdvancePricing__unit}>
        <div className={styles.planComparisonAdvancePricing__unit__title}>Total Price :</div>
        <div className={styles.planComparisonAdvancePricing__unit__price}>
          {plan.currency} {state.totalPrice}
        </div>
      </div>
    </div>
  );
}

export default PlanComparisonAdvancePricing;