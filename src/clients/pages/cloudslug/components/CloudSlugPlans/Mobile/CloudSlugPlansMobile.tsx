import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import Link from 'next/link';
import { setPlanPriceDisplay } from '../../../modules/setPlanPriceDisplay';

import styles from './CloudSlugPlansMobile.module.scss';

interface ICloudSlugPlans {
  plans: [{
    name: string,
    plan_url: string,
    price: number,
    price_unit: string,
    price_timeunit: string,
    price_desc: string,
  }]
}

const CloudSlugPlansMobile = (props: ICloudSlugPlans) => {
  const { plans } = props;

  return (
    <div className={styles.cloudslug__plansmobile}>
      {plans.map((plan) =>
        <div key={plan.name} className={styles.cloudslug__plansmobile__card}>
          <div className={styles.cloudslug__plansmobile__card__head}>
            <div className={styles.cloudslug__plansmobile__card__head__texts}>
              <div className={styles.cloudslug__plansmobile__card__head__title}>{plan.name}</div>
              <div className={styles.cloudslug__plansmobile__card__head__price}><FaMoneyCheckAlt /> {setPlanPriceDisplay(plan)}</div>
            </div>

            <Link href={plan.plan_url}>
              <a title={plan.name} className={styles.cloudslug__plansmobile__card__head__link}>Purchase</a>
            </Link>
          </div>
        </div>)}
    </div>
  );
}

export default CloudSlugPlansMobile;
