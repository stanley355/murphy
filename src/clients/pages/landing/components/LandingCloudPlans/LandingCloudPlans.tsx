import React from 'react';
import Link from 'next/link';
import { FaBuffer } from 'react-icons/fa';

import { setPlanPriceDisplay } from '../../../cloudslug/modules/setPlanPriceDisplay';
import { setPlanHostURL } from '../../../cloudslug/modules/setPlanHostURL';
import styles from './LandingCloudPlans.module.scss';

const LandingCloudPlans = (props: any) => {
  const { planList } = props;
  const filteredPlan = planList && planList.filter((plan: any, i: number) => i < 8);

  return (
    <div className={styles.landing__cloudplans}>
      <div className="container">
        <div className={styles.landing__cloudplans__title}>
          Check various hosting plans for your web:
        </div>
        <div className={styles.landing__cloudplans__cardList}>
          {filteredPlan.length > 0 &&
            filteredPlan.map((plan: any) => (
              <div className={styles.landing__cloudplans__card} key={plan.name}>
                <div className={styles.landing__cloudplans__card__head}>
                  <div>
                    <Link href={setPlanHostURL(plan.name)}>
                      <a title={plan.name}>{plan.name}</a>
                    </Link>
                    <div>Price: {setPlanPriceDisplay(plan)} </div>
                  </div>
                  <Link href={setPlanHostURL(plan.name)}>
                    <a className={styles.landing__cloudplans__card__cta} title={plan.name}>
                      <FaBuffer /> Specs
                    </a>
                  </Link>
                </div>
                <div>{plan.description}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LandingCloudPlans;
